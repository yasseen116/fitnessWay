const { createApp } = Vue;

createApp({
    data() {
        return {
            isLoading: true,
            allJobs: [], // Stores all raw data
            
            // Stores the user's selected filters
            filters: {
                workplace: [],
                city: [],
                category: [],
                company: []
            }
        }
    },

    computed: {
        filteredJobs() {
            // If no filters are selected, show everything
            if (this.filters.workplace.length === 0 && 
                this.filters.city.length === 0 && 
                this.filters.category.length === 0 &&
                this.filters.company.length === 0) {
                return this.allJobs;
            }

            // Filter logic
            return this.allJobs.filter(job => {
                // 1. Check Workplace (if selected)
                // We assume job.location or a new job.type field holds this. 
                // For now, we search the location string for "Remote" or "Hybrid"
                const jobType = job.location.includes('Remote') ? 'Remote' : 
                                job.location.includes('Hybrid') ? 'Hybrid' : 'On-site';
                const matchesWorkplace = this.filters.workplace.length === 0 || this.filters.workplace.includes(jobType);

                // 2. Check City (if selected)
                // We check if the job.location string contains the city name
                const matchesCity = this.filters.city.length === 0 || this.filters.city.some(city => job.location.includes(city));

                // 3. Check Category (if selected)
                // We check if the job title matches the category keyword
                const matchesCategory = this.filters.category.length === 0 || this.filters.category.some(cat => job.title.includes(cat) || job.company.includes(cat));

                // 4. Check Company (if selected)
                const matchesCompany = this.filters.company.length === 0 || this.filters.company.includes(job.company);

                return matchesWorkplace && matchesCity && matchesCategory && matchesCompany;
            });
        }
    },

    async mounted() {
        try {
            // Fetch all jobs from your model
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
        }
    },

    compilerOptions: {
        delimiters: ['[[', ']]']
    }
}).mount('#app');