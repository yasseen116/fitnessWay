const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            jobs: [],         
            searchTerm: '',   
            isLoading: true,  
            error: null,
            
            companies: [],
            isTeleporting: false
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
                this.jobs = await JobModel.fetchAll();
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

            // We calculate the width of ONE full set of companies
            // (Total width / 2 because we duplicated it once)
            const oneSetWidth = container.scrollWidth / 2;

            // CHECK 1: Have we scrolled past the end of the first set?
            if (container.scrollLeft >= oneSetWidth) {
                // TELEPORT BACK TO START (Invisible Jump)
                this.isTeleporting = true;
                container.scrollLeft -= oneSetWidth;
                this.isTeleporting = false;
            } 
            // CHECK 2: Have we scrolled past the start (going backwards)?
            else if (container.scrollLeft <= 0) {
                // TELEPORT TO THE MIDDLE (Invisible Jump)
                this.isTeleporting = true;
                container.scrollLeft += oneSetWidth;
                this.isTeleporting = false;
            }
        },

        scrollCompanies(direction) {
            const container = document.querySelector('.companies-grid');
            const scrollAmount = 390; 

            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        },

        applyForJob(job) {
            alert(`Application started for ${job.title}`);
        }
    },

    compilerOptions: {
        delimiters: ['[[', ']]'] 
    }
});

app.mount('#app');