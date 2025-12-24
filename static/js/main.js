const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            jobs: [],         
            searchTerm: '',   
            isLoading: true,  
            error: null,
            
            companies: [],
            isTeleporting: false,

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
        };
    },
    
    async mounted() {
        await this.loadJobs();
        
        this.companies = CompanyModel.getTopCompanies();

        const originals = CompanyModel.getTopCompanies();

        this.companies = [...originals, ...originals];

        const container = document.querySelector('.companies-grid');
        if (container) {
            container.addEventListener('scroll', this.handleInfiniteScroll);
        }
    },

    computed: {
        filteredJobs() {
            if (!this.searchTerm) return this.jobs;
            const term = this.searchTerm.toLowerCase();
            return this.jobs.filter(job => 
                job.title.toLowerCase().includes(term) ||
                job.company.toLowerCase().includes(term) ||
                job.location.toLowerCase().includes(term)
            );
        }
    },

    methods: {
        async loadJobs() {
            try {
                this.isLoading = true;
                this.jobs = await JobModel.getAll();
            } catch (err) {
                console.error("Failed to load jobs:", err);
                this.error = "Could not load jobs.";
            } finally {
                this.isLoading = false;
            }
        },

        handleInfiniteScroll(e) {
            const container = e.target;
            if (this.isTeleporting) return;

            const oneSetWidth = container.scrollWidth / 2;

            if (container.scrollLeft >= oneSetWidth) {
                this.isTeleporting = true;
                container.scrollLeft -= oneSetWidth;
                this.isTeleporting = false;
            } 
            else if (container.scrollLeft <= 0) {
                this.isTeleporting = true;
                container.scrollLeft += oneSetWidth;
                this.isTeleporting = false;
            }
        },

        scrollCompanies(direction) {
            const container = document.querySelector('.companies-grid');
            const scrollAmount = 165;

            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        },

        showJobDetails(job) {
            window.location.href = `job-details.html?id=${job.id}`;
        },

        openApplyModal(job) {
            const user = localStorage.getItem('user');
            
            if (!user) {
                this.showLoginNotification = true;

                setTimeout(() => {
                    window.location.href = 'login.html';
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
});

app.mount('#app');