const { createApp } = Vue;

createApp({
    data() {
        return {
            isLoading: true,
            savedJobs: [],

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
        await this.loadWishlist();
    },

    methods: {
        async loadWishlist() {
            try {
                const wishlistIds = JSON.parse(localStorage.getItem('my_wishlist')) || [];

                if (wishlistIds.length === 0) {
                    this.savedJobs = [];
                    this.isLoading = false;
                    return;
                }

                const allJobs = await JobModel.getAll();

                this.savedJobs = allJobs.filter(job => wishlistIds.includes(String(job.id)));

            } catch (error) {
                console.error("Error loading wishlist:", error);
            } finally {
                this.isLoading = false;
            }
        },

        removeFromWishlist(jobId) {
            const idToRemove = String(jobId);
            
            let list = JSON.parse(localStorage.getItem('my_wishlist')) || [];
            list = list.filter(id => id !== idToRemove);
            localStorage.setItem('my_wishlist', JSON.stringify(list));

            this.savedJobs = this.savedJobs.filter(job => String(job.id) !== idToRemove);
        },

        goToDetails(jobId) {
            window.location.href = `/preview/job-details.html?id=${jobId}`;
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
}).mount('#wishlist-app');