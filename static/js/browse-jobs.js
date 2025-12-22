const { createApp } = Vue;

createApp({
    data() {
        return {
            isLoading: true,
            allJobs: [],
            
            filters: {
                type: [],
                city: [],
                category: [],
                company: []
            },

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

    computed: {
        filteredJobs() {
            if (this.filters.type.length === 0 && 
                this.filters.city.length === 0 && 
                this.filters.category.length === 0 &&
                this.filters.company.length === 0) {
                return this.allJobs;
            }

            return this.allJobs.filter(job => {
                const jobType = job.type.includes('Remote') ? 'Remote' : 
                                job.type.includes('Hybrid') ? 'Hybrid' : 'On-site';
                const matchesWorkplace = this.filters.type.length === 0 || this.filters.type.includes(jobType);

                const matchesCity = this.filters.city.length === 0 || this.filters.city.some(city => job.location.includes(city));

                const matchesCategory = this.filters.category.length === 0 || this.filters.category.some(cat => job.title.includes(cat) || job.company.includes(cat));

                const matchesCompany = this.filters.company.length === 0 || this.filters.company.includes(job.company);

                return matchesWorkplace && matchesCity && matchesCategory && matchesCompany;
            });
        }
    },

    async mounted() {
        try {
            this.allJobs = await JobModel.getAll();
        } catch (error) {
            console.error("Error loading jobs:", error);
        } finally {
            this.isLoading = false;
        }
    },

    methods: {
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
        },

        async applyWithExisting() {
            // 1. Start Loading
            this.isApplying = true;

            try {
                // 2. Call the Simulated API
                const response = await ApplicationModel.submit(
                    this.selectedJobForApp.id, 
                    'existing'
                );

                // 3. Handle Result
                this.handleApplicationResult(response);

            } catch (error) {
                console.error(error);
                alert("An error occurred. Please try again.");
            } finally {
                // 4. Stop Loading
                this.isApplying = false;
            }
        },

        // OPTION B: Apply with New CV
        async applyWithNew() {
            if (!this.newCvName) return;

            // 1. Start Loading
            this.isApplying = true;

            try {
                // 2. Call the Simulated API
                const response = await ApplicationModel.submit(
                    this.selectedJobForApp.id, 
                    'new',
                    this.newCvName
                );

                // 3. Handle Result
                this.handleApplicationResult(response);

            } catch (error) {
                console.error(error);
                alert("An error occurred.");
            } finally {
                this.isApplying = false;
            }
        },

        // HELPER: Handles success/failure UI logic
        handleApplicationResult(response) {
            if (response.success) {
                // Close Modal Immediately
                this.closeModal();

                // Show Green Success Toast
                this.successMessage = response.message;
                this.showSuccessNotification = true;

                // Hide Toast after 3 seconds
                setTimeout(() => {
                    this.showSuccessNotification = false;
                }, 3000);
            } else {
                // Show error (e.g., if already applied)
                alert(response.message);
            }
        },
    },

    compilerOptions: {
        delimiters: ['[[', ']]']
    }
}).mount('#app');