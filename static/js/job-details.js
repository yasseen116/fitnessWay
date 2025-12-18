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
            loginMessage: false
        }
    },
    async mounted() {
        // 1. Get the Job ID from the URL (e.g., job-details.html?id=1)
        const urlParams = new URLSearchParams(window.location.search);
        const jobId = urlParams.get('id') || 1; // Default to ID 1 for testing

        try {
            // 2. Ask the Model for data
            this.job = await JobModel.getById(jobId);
            
            // 3. Ask Model for similar jobs based on title (e.g., "Engineer")
            // Simple logic: take the first word of the title
            const keyword = this.job.title.split(' ')[0];
            this.similarJobs = JobModel.getSimilar(jobId, keyword);

            // Check if this ID is in the wishlist immediately
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
                // 1. Get the current browser URL
                const link = window.location.href;
                
                // 2. Write it to the clipboard
                await navigator.clipboard.writeText(link);
                
                // 3. Show "Copied" state for 1.25 seconds
                this.isCopied = true;
                setTimeout(() => {
                    this.isCopied = false;
                }, 1250);

            } catch (err) {
                console.error('Failed to copy: ', err);
                alert("Could not copy link automatically. Please copy the URL from the address bar.");
            }
        },

        // NEW: Check if ID exists in LocalStorage
        checkWishlistStatus(id) {
            if (!localStorage.getItem('user')) return;
            const wishlist = JSON.parse(localStorage.getItem('my_wishlist') || '[]');
            // Convert to String to ensure strict comparison works
            this.isInWishlist = wishlist.includes(String(id));
        },

        // NEW: Add or Remove from LocalStorage
        toggleWishlist() {
            const user = localStorage.getItem('user');
            
            if (!user) {
                // User is Guest -> Show Notice
                this.loginMessage = true;
                
                // Hide notice after 2 seconds
                setTimeout(() => {
                    this.loginMessage = false;
                }, 2000);
                
                return;
            }
            
            const jobId = String(this.job.id);
            let wishlist = JSON.parse(localStorage.getItem('my_wishlist') || '[]');

            if (this.isInWishlist) {
                // REMOVE: Filter out the current ID
                wishlist = wishlist.filter(id => id !== jobId);
                this.isInWishlist = false;
            } else {
                // ADD: Push the current ID
                wishlist.push(jobId);
                this.isInWishlist = true;
            }

            // Save updated array back to storage
            localStorage.setItem('my_wishlist', JSON.stringify(wishlist));
        }
    },

    compilerOptions: {
        delimiters: ['[[', ']]']
    }
}).mount('#app');