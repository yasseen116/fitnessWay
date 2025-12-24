const { createApp } = Vue;

createApp({
    data() {
        return {
            loading: true,
            isSaving: false,

            // User Data
            user: {
                name: '',
                jobTitle: '',
                email: '',
                phone: '',
                location: '',
                about: '',
                photo: null,
                skills: [],
                experience: [],
                education: [],
                cvName: null
            },
            applications: [],

            // Toasts
            showSuccessNotification: false,
            successMessage: '',
            showErrorNotification: false,
            errorMessage: '',

            // Delete Modal State
            showDeleteModal: false,

            // Cropper state
            showCropModal: false,
            tempImageUrl: null,
            cropper: null
        }
    },
    async mounted() {
        await this.loadProfile();
    },
    methods: {
        async loadProfile() {
            try {
                // 1. Get User Data
                const storedUser = JSON.parse(localStorage.getItem('user'));
                if (!storedUser) {
                    window.location.href = 'login.html';
                    return;
                }

                // 2. Hydrate Skills
                let formattedSkills = [];
                if (storedUser.skills && storedUser.skills.length > 0) {
                    formattedSkills = storedUser.skills.map((s, i) => ({ id: Date.now() + i, value: s }));
                } else {
                    formattedSkills = [{ id: Date.now(), value: '' }];
                }

                // 3. Hydrate Experience & Education
                let formattedExp = storedUser.experience || [{ id: Date.now(), role: '', company: '', years: '' }];
                let formattedEdu = storedUser.education || [{ id: Date.now(), degree: '', university: '', year: '' }];

                // 4. Merge Data
                this.user = {
                    ...this.user,
                    ...storedUser,
                    skills: formattedSkills,
                    experience: formattedExp,
                    education: formattedEdu
                };

                // 4.a Hydrate photo from localStorage if available
                if (!this.user.photo) {
                    const storedPhoto = localStorage.getItem('user_photo');
                    if (storedPhoto) {
                        this.user.photo = storedPhoto;
                    }
                }

                // 5. Get Applications
                const rawApps = JSON.parse(localStorage.getItem('my_applications') || '[]');

                const enrichedApps = await Promise.all(rawApps.map(async (app) => {
                    try {
                        const job = await JobModel.getById(app.jobId);
                        return { ...app, jobTitle: job.title };
                    } catch (e) {
                        return { ...app, jobTitle: 'Job ID #' + app.jobId };
                    }
                }));

                this.applications = enrichedApps.reverse();

            } catch (error) {
                console.error(error);
            } finally {
                this.loading = false;
            }
        },

        // --- PHOTO + CROPPER ---
        handlePhotoUpload(event) {
            const file = event.target.files[0];
            if (!file) return;
            // Updated size guard: ~5MB max for localStorage safety
            const maxBytes = 5 * 1024 * 1024;
            if (file.size > maxBytes) {
                // Show error toast instead of alert
                this.errorMessage = 'Selected image is too large. Please choose an image under 5MB.';
                this.showErrorNotification = true;
                setTimeout(() => { this.showErrorNotification = false; }, 3000);
                return;
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                this.tempImageUrl = e.target.result;
                this.showCropModal = true;
                this.$nextTick(() => {
                    const imgEl = this.$refs.cropperImage;
                    if (!imgEl) return;
                    // Destroy previous cropper if exists
                    if (this.cropper) { this.cropper.destroy(); this.cropper = null; }
                    // Initialize Cropper.js with square aspect ratio
                    this.cropper = new Cropper(imgEl, {
                        aspectRatio: 1,
                        viewMode: 1,
                        autoCropArea: 1,
                        dragMode: 'move',
                        background: false,
                        responsive: true,
                        movable: true,
                        zoomable: true,
                        minCropBoxWidth: 100,
                        minCropBoxHeight: 100
                    });
                });
            };
            reader.readAsDataURL(file);
        },
        closeCropper() {
            if (this.cropper) { this.cropper.destroy(); this.cropper = null; }
            this.showCropModal = false;
            this.tempImageUrl = null;
        },
        async confirmCrop() {
            if (!this.cropper) { this.closeCropper(); return; }
            try {
                const canvas = this.cropper.getCroppedCanvas({ width: 512, height: 512, imageSmoothingQuality: 'high' });
                const dataUrl = canvas.toDataURL('image/png');
                this.user.photo = dataUrl;
                try { localStorage.setItem('user_photo', dataUrl); } catch {}
                this.successMessage = 'Profile photo updated.';
                this.showSuccessNotification = true;
                setTimeout(() => { this.showSuccessNotification = false; }, 3000);
            } catch (e) {
                this.errorMessage = 'Could not crop the image. Please try another file.';
                this.showErrorNotification = true;
                setTimeout(() => { this.showErrorNotification = false; }, 3000);
            } finally {
                this.closeCropper();
            }
        },
        removePhoto() {
            this.user.photo = null;
            localStorage.removeItem('user_photo');
            this.successMessage = 'Profile photo removed.';
            this.showSuccessNotification = true;
            setTimeout(() => { this.showSuccessNotification = false; }, 3000);
        },

        // --- SKILLS ---
        addSkill() { this.user.skills.push({ id: Date.now(), value: '' }); },
        removeSkill(index) { this.user.skills.splice(index, 1); },

        // --- EXPERIENCE ---
        addExperience() { this.user.experience.push({ id: Date.now(), role: '', company: '', years: '' }); },
        removeExperience(index) { this.user.experience.splice(index, 1); },

        // --- EDUCATION ---
        addEducation() { this.user.education.push({ id: Date.now(), degree: '', university: '', year: '' }); },
        removeEducation(index) { this.user.education.splice(index, 1); },

        // --- CV ---
        handleFileUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.user.cvName = file.name;

                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        localStorage.setItem('user_cv_file', e.target.result);
                    } catch (err) {
                        console.warn("File too large for LocalStorage preview.");
                    }
                };
                reader.readAsDataURL(file);
            }
        },

        previewCv() {
            if (!this.user.cvName) return;
            const base64File = localStorage.getItem('user_cv_file');

            if (base64File) {
                const win = window.open();
                win.document.write(
                    `<iframe src="${base64File}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`
                );
            } else {
                alert(`Simulating preview for: ${this.user.cvName}`);
                window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '_blank');
            }
        },

        // --- UPDATED: Delete Logic ---
        removeCv() {
            this.showDeleteModal = true;
        },

        confirmDeleteCv() {
            this.user.cvName = null;
            this.showDeleteModal = false;

            // Show Green Toast
            this.successMessage = "Resume removed successfully.";
            this.showSuccessNotification = true;
            setTimeout(() => { this.showSuccessNotification = false; }, 3000);
        },

        closeDeleteModal() {
            this.showDeleteModal = false;
        },

        // --- SAVE ---
        saveProfile() {
            this.isSaving = true;

            const cleanSkills = this.user.skills.map(s => s.value).filter(v => v.trim() !== "");
            const cleanExp = this.user.experience.filter(e => e.role.trim() !== "");
            const cleanEdu = this.user.education.filter(e => e.degree.trim() !== "");

            const userToSave = {
                ...this.user,
                skills: cleanSkills,
                experience: cleanExp,
                education: cleanEdu
            };

            setTimeout(() => {
                localStorage.setItem('user', JSON.stringify(userToSave));
                this.isSaving = false;

                this.successMessage = "Profile saved successfully!";
                this.showSuccessNotification = true;

                setTimeout(() => {
                    this.showSuccessNotification = false;
                }, 3000);
            }, 800);
        },

        getStatusClass(status) {
            if (status === 'Accepted') return 'badge-accepted';
            if (status === 'Rejected') return 'badge-rejected';
            return 'badge-pending';
        }
    },
    compilerOptions: { delimiters: ['[[', ']]'] }
}).mount('#app');