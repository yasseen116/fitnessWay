const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            jobs: [],         // Holds the list of jobs
            searchTerm: '',   // Bound to the search input
            isLoading: true,  // For showing a "Loading..." spinner
            error: null       // For handling API errors later
        };
    },
    
    // "mounted" runs automatically when the page loads
    async mounted() {
        await this.loadJobs();
    },

    computed: {
        // Logic to filter jobs based on search input
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
                // CALLING THE MODEL
                this.jobs = await JobModel.fetchAll();
            } catch (err) {
                console.error("Failed to load jobs:", err);
                this.error = "Could not load jobs. Please try again later.";
            } finally {
                this.isLoading = false;
            }
        },

        applyForJob(job) {
            alert(`Application started for ${job.title} at ${job.company}`);
            // Future logic: Send POST request to API
        }
    },

    // Crucial for Jinja compatibility
    compilerOptions: {
        delimiters: ['[[', ']]'] 
    }
});

app.mount('#app');