const { createApp } = Vue;

createApp({
    data() {
        return {
            loading: true,
            job: {
                description: [],
                responsibilities: [],
                softSkills: [],
                qualifications: []
            },
            similarJobs: [],
            error: null,
            isCopied: false,
            isInWishlist: false,
            loginMessage: false,

            showApplyModal: false,
            selectedJobForApp: null,
            newCvName: null,

            showApplyModal: false,
            selectedJobForApp: null,
            newCvName: null,
            
            showLoginNotification: false,

            showApplyModal: false,
            selectedJobForApp: null,
            newCvName: null,
            showLoginNotification: false,
            
            isApplying: false,
            showSuccessNotification: false,
            successMessage: ''
        }
    },
    async mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const jobId = urlParams.get('id') || 1;

        try {
            this.job = await JobModel.getById(jobId);
            
            const keyword = this.job.title.split(' ')[0];
            this.similarJobs = JobModel.getSimilar(jobId, keyword);

            this.checkWishlistStatus(jobId);

        } catch (error) {
            console.error(error);
            alert("Job not found!");
        } finally {
            this.loading = false;
        }
    },

    methods: {
        async copyLink() {
            try {
                const link = window.location.href;
                
                await navigator.clipboard.writeText(link);
                
                this.isCopied = true;
                setTimeout(() => {
                    this.isCopied = false;
                }, 1250);

            } catch (err) {
                console.error('Failed to copy: ', err);
                alert("Could not copy link automatically. Please copy the URL from the address bar.");
            }
        },

        checkWishlistStatus(id) {
            if (!localStorage.getItem('user')) return;
            const wishlist = JSON.parse(localStorage.getItem('my_wishlist') || '[]');
            this.isInWishlist = wishlist.includes(String(id));
        },

        toggleWishlist() {
            const user = localStorage.getItem('user');
            
            if (!user) {
                this.loginMessage = true;
                
                setTimeout(() => {
                    this.loginMessage = false;
                }, 2000);
                
                return;
            }
            
            const jobId = String(this.job.id);
            let wishlist = JSON.parse(localStorage.getItem('my_wishlist') || '[]');

            if (this.isInWishlist) {
                wishlist = wishlist.filter(id => id !== jobId);
                this.isInWishlist = false;
            } else {
                wishlist.push(jobId);
                this.isInWishlist = true;
            }

            localStorage.setItem('my_wishlist', JSON.stringify(wishlist));
        },

        openApplyModal(job) {
            const user = localStorage.getItem('user');
            
            if (!user) {
                this.showLoginNotification = true;

                setTimeout(() => {
                    window.location.href = '/preview/login.html';
                }, 2000);
                
                return;
            }
            
            this.selectedJobForApp = job || this.job; 
            this.showApplyModal = true;
            this.newCvName = null;
        },

        closeModal() {
            this.showApplyModal = false;
            this.selectedJobForApp = null;
        },

        applyWithExisting() {
            alert(`Application sent to ${this.selectedJobForApp.company} using your default CV!`);
            this.closeModal();
        },

        handleCvUpload(event) {
            const file = event.target.files[0];
            if (file) {
                this.newCvName = file.name;
            }
        },

        applyWithNew() {
            if (!this.newCvName) return;
            alert(`Application sent to ${this.selectedJobForApp.company} using ${this.newCvName}!`);
            this.closeModal();
        }
    },

    compilerOptions: {
        delimiters: ['[[', ']]']
    }
}).mount('#app');