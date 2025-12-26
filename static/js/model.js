const API_BASE_URL = "http://127.0.0.1:8000/api";

const JobModel = {
    // 1. Fetch All Jobs
    // Controller: main.js (loadJobs), browse-jobs.js
    async getAll() {
        try {
            const response = await fetch(`${API_BASE_URL}/jobs`);
            if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
            return await response.json();
        } catch (error) {
            console.error("JobModel Error (getAll):", error);
            throw error;
        }
    },

    // 2. Fetch Single Job by ID
    // Controller: job-details.js
    async getById(id) {
        try {
            const response = await fetch(`${API_BASE_URL}/jobs/${id}`);
            if (!response.ok) throw new Error("Job not found");
            return await response.json();
        } catch (error) {
            console.error(`JobModel Error (getById ${id}):`, error);
            throw error;
        }
    },

    // 3. Get Similar Jobs
    // Controller: job-details.js
    async getSimilar(id) {
        try {
            const response = await fetch(`${API_BASE_URL}/jobs/${id}/similar`);
            if (!response.ok) throw new Error("Failed to load similar jobs");
            return await response.json();
        } catch (error) {
            console.warn("JobModel Warning (getSimilar):", error);
            return []; // Return empty array so UI doesn't crash
        }
    }
};

const CompanyModel = {
    // Static Data - No API Integration
    getTopCompanies() {
        return [
            { name: "LC Waikiki", logo: "../static/images/companies/lcwaikiki.png" },
            { name: "Elsewedy Electric", logo: "../static/images/companies/elsewedy.png" },
            { name: "Breadfast", logo: "../static/images/companies/breadfast.png" },
            { name: "IBM", logo: "../static/images/companies/ibm.png" },
            { name: "Microsoft", logo: "../static/images/companies/microsoft.png" },
            { name: "Etoile", logo: "../static/images/companies/etoile.webp" },
            { name: "Google", logo: "../static/images/companies/google.png" },
            { name: "ValU", logo: "../static/images/companies/valu.webp" },
            { name: "Juhayna", logo: "../static/images/companies/juhayna.png" },
            { name: "CIB", logo: "../static/images/companies/cib.png" },
            { name: "Orascom", logo: "../static/images/companies/orascom.png" },
            { name: "Fawry", logo: "../static/images/companies/fawry.png" },
            { name: "Palm Hills", logo: "../static/images/companies/palm.png" },
            { name: "Vodafone", logo: "../static/images/companies/vodafone.png" },
            { name: "NBE", logo: "../static/images/companies/nbe.png" },
            { name: "Edita", logo: "../static/images/companies/edita.png" },
            { name: "Etisalat", logo: "../static/images/companies/etisalat.png" },
            { name: "Raya", logo: "../static/images/companies/raya.png" },
            { name: "AstraZeneca", logo: "../static/images/companies/astrazeneca.png" },
            { name: "Mountain View", logo: "../static/images/companies/mountainview.webp" },
            { name: "Tarek Nour", logo: "../static/images/companies/tareknour.png" },
            { name: "British Council", logo: "../static/images/companies/britishcouncil.png" }
        ];
    }
};

const ApplicationModel = {
    // Mock simulation until backend API is ready
    submit(jobId, cvType, fileName = null) {
        return new Promise((resolve, reject) => {
            console.log(`[Model] Submitting application for Job ${jobId}...`);

            setTimeout(() => {
                try {
                    const user = JSON.parse(localStorage.getItem('user'));
                    if (!user) throw new Error("User not authenticated");

                    const applications = JSON.parse(localStorage.getItem('my_applications') || '[]');

                    const alreadyApplied = applications.some(app => app.jobId === jobId && app.userEmail === user.email);
                    if (alreadyApplied) {
                        resolve({ success: false, message: "You have already applied to this job!" });
                        return;
                    }

                    const newApplication = {
                        id: Date.now(),
                        jobId: jobId,
                        userEmail: user.email,
                        cvType: cvType,
                        cvName: fileName || 'Default_CV.pdf',
                        appliedAt: new Date().toLocaleDateString(),
                        status: 'Pending'
                    };

                    applications.push(newApplication);
                    localStorage.setItem('my_applications', JSON.stringify(applications));

                    console.log("[Model] Application Saved:", newApplication);
                    resolve({ success: true, message: "Application submitted successfully!" });

                } catch (error) {
                    reject(error);
                }
            }, 1000);
        });
    }
};