const { createApp } = Vue;

createApp({
    data() {
        return {
            isLoading: true,
            allJobs: [],

            // 1. ADDED: Search Query State
            searchQuery: '',

            filters: {
                type: [],
                city: [],
                category: [],
                company: []
            },

            // Modal & Notification States
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
            // Start with all jobs
            let result = this.allJobs;

            // 1. SEARCH FILTER (New Logic)
            if (this.searchQuery) {
                const q = this.searchQuery.toLowerCase();
                result = result.filter(job =>
                    job.title.toLowerCase().includes(q) ||
                    job.company.toLowerCase().includes(q)
                );
            }

            // 2. CHECKBOX FILTERS
            // If no checkboxes are selected, return the result (which might already be filtered by search)
            if (this.filters.type.length === 0 &&
                this.filters.city.length === 0 &&
                this.filters.category.length === 0 &&
                this.filters.company.length === 0) {
                return result;
            }

            // Apply Checkbox Logic
            return result.filter(job => {
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
            // 1. Fetch Data
            this.allJobs = await JobModel.getAll();

            // 2. CAPTURE URL SEARCH PARAMETER
            const urlParams = new URLSearchParams(window.location.search);
            const searchParam = urlParams.get('search');

            if (searchParam) {
                this.searchQuery = searchParam;
            }

        } catch (error) {
            console.error("Error loading jobs:", error);
        } finally {
            this.isLoading = false;
        }
    },

    methods: {
        goToDetails(jobId) {
            window.location.href = `job-details.html?id=${jobId}`;
        },

        // --- SHARED MODAL LOGIC ---
        openApplyModal(job) {
            const user = localStorage.getItem('user');

            if (!user) {
                this.showLoginNotification = true;
                setTimeout(() => { window.location.href = 'login.html'; }, 2000);
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

        handleCvUpload(event) {
            const file = event.target.files[0];
            if (file) this.newCvName = file.name;
        },

        async applyWithExisting() {
            this.isApplying = true;
            try {
                const response = await ApplicationModel.submit(this.selectedJobForApp.id, 'existing');
                this.handleApplicationResult(response);
            } catch (error) {
                alert("An error occurred.");
            } finally {
                this.isApplying = false;
            }
        },

        async applyWithNew() {
            if (!this.newCvName) return;
            this.isApplying = true;
            try {
                const response = await ApplicationModel.submit(this.selectedJobForApp.id, 'new', this.newCvName);
                this.handleApplicationResult(response);
            } catch (error) {
                alert("An error occurred.");
            } finally {
                this.isApplying = false;
            }
        },

        handleApplicationResult(response) {
            if (response.success) {
                this.closeModal();
                this.successMessage = response.message;
                this.showSuccessNotification = true;
                setTimeout(() => { this.showSuccessNotification = false; }, 3000);
            } else {
                alert(response.message);
            }
        },
    },

    compilerOptions: {
        delimiters: ['[[', ']]']
    }
}).mount('#app');