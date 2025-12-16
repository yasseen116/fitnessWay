const JobModel = {
    // 1. The "Database" - Holds all job data in one place
    _data: [
        {
            id: 1,
            title: "Software Engineer",
            company: "Microsoft",
            location: "Smart Village, Cairo",
            experience: "2-4 Years",
            salary: "Negotiable",
            logoUrl: "../static/images/companies/microsoft.png",
            type: "Hybrid",
            description: [
                "Join our cloud infrastructure team to build scalable services on Azure.",
                "Work with a global team of engineers to solve complex distributed system problems."
            ],
            responsibilities: [
                "Design and implement high-performance APIs.",
                "Optimize database queries and system architecture.",
                "Collaborate with product managers to define feature specifications.",
                "Mentor junior developers and conduct code reviews."
            ],
            softSkills: [
                "Problem-solving mindset",
                "Adaptability to change",
                "Strong communication skills in English"
            ],
            qualifications: [
                "Experience with C# or Java.",
                "Knowledge of Azure or AWS cloud services."
            ]
        },
        {
            id: 2,
            title: "Software Engineer (Backend)",
            company: "IBM",
            location: "Giza",
            experience: "3-5 Years",
            salary: "Negotiable",
            logoUrl: "../static/images/companies/ibm.png",
            type: "Remote",
            description: [
                "We are looking for a backend specialist to support our AI and Data analytics platforms.",
                "You will focus on server-side logic and integration of front-end elements."
            ],
            responsibilities: [
                "Build reusable code and libraries for future use.",
                "Integrate user-facing elements developed by front-end developers.",
                "Implement security and data protection.",
                "Design and implement data storage solutions."
            ],
            softSkills: [
                "Analytical thinking",
                "Team collaboration",
                "Time management"
            ],
            qualifications: [
                "Proficiency in Python and Django.",
                "Experience with Docker and Kubernetes."
            ]
        },
        {
            id: 3,
            title: "Software Engineer (Frontend)",
            company: "Vodafone",
            location: "Smart Village, Cairo",
            experience: "1-3 Years",
            salary: "15K - 25K EGP",
            logoUrl: "../static/images/companies/vodafone.png",
            type: "On-site",
            description: [
                "Develop user-facing features for the MyVodafone App and website.",
                "Ensure the technical feasibility of UI/UX designs."
            ],
            responsibilities: [
                "Develop new user-facing features using React.js.",
                "Build reusable components and front-end libraries.",
                "Translate designs and wireframes into high-quality code.",
                "Optimize components for maximum performance."
            ],
            softSkills: [
                "Creativity",
                "Attention to detail",
                "User-centric mindset"
            ],
            qualifications: [
                "Strong understanding of JavaScript, HTML5, and CSS3.",
                "Experience with Redux or Vue.js is a plus."
            ]
        },
        {
            id: 4,
            title: "Financial Analyst",
            company: "CIB",
            location: "New Cairo",
            experience: "2-5 Years",
            salary: "Negotiable",
            logoUrl: "../static/images/companies/cib.png",
            type: "On-site",
            description: [
                "Analyze financial data and provide forecasting support to senior management.",
                "Help drive financial planning and business intelligence initiatives."
            ],
            responsibilities: [
                "Prepare monthly financial reports and variance analysis.",
                "Monitor financial performance against budget.",
                "Conduct market trend analysis.",
                "Assist in the preparation of annual budgets."
            ],
            softSkills: [
                "Critical thinking",
                "Attention to detail",
                "High integrity"
            ],
            qualifications: [
                "Bachelor's degree in Finance or Economics.",
                "Advanced Excel skills."
            ]
        },
        {
            id: 5,
            title: "Financial Analyst (Risk)",
            company: "National Bank of Egypt",
            location: "Downtown Cairo",
            experience: "3-6 Years",
            salary: "Negotiable",
            logoUrl: "../static/images/companies/nbe.png",
            type: "On-site",
            description: [
                "Assess and mitigate financial risks associated with bank investments and loans.",
                "Ensure compliance with Central Bank of Egypt regulations."
            ],
            responsibilities: [
                "Evaluate creditworthiness of corporate clients.",
                "Analyze market risk and operational risk factors.",
                "Prepare risk assessment reports for the board.",
                "Develop risk management strategies."
            ],
            softSkills: [
                "Decision making",
                "Analytical skills",
                "Communication"
            ],
            qualifications: [
                "CFA or FRM certification is highly desirable.",
                "Experience in the banking sector."
            ]
        },
        {
            id: 6,
            title: "Sales Specialist",
            company: "ValU",
            location: "Nasr City",
            experience: "0-2 Years",
            salary: "6K - 10K + Commission",
            logoUrl: "../static/images/companies/valu.webp",
            type: "On-site",
            description: [
                "Drive sales for our Buy Now Pay Later (BNPL) solutions at partner merchant stores.",
                "Help customers activate their accounts and understand their installment plans."
            ],
            responsibilities: [
                "Promote ValU services to potential customers.",
                "Assist customers with the app registration process.",
                "Meet daily and monthly sales targets.",
                "Resolve customer inquiries regarding payment plans."
            ],
            softSkills: [
                "Persuasion",
                "Active listening",
                "Resilience"
            ],
            qualifications: [
                "Bachelor's degree in any field.",
                "Previous experience in retail sales."
            ]
        },
        {
            id: 7,
            title: "Sales Representative",
            company: "Breadfast",
            location: "Maadi",
            experience: "1-3 Years",
            salary: "8K - 12K EGP",
            logoUrl: "../static/images/companies/breadfast.png",
            type: "On-site",
            description: [
                "Expand our B2B client base by introducing Breadfast supplies to offices and cafes.",
                "Maintain strong relationships with existing corporate clients."
            ],
            responsibilities: [
                "Identify and reach out to new business leads.",
                "Present product catalogs and negotiate contracts.",
                "Follow up on orders and delivery schedules.",
                "Provide feedback from clients to the product team."
            ],
            softSkills: [
                "Negotiation skills",
                "Relationship building",
                "Self-motivation"
            ],
            qualifications: [
                "Experience in FMCG sales.",
                "Valid driver's license."
            ]
        },
        {
            id: 8,
            title: "Electrical Engineer",
            company: "Elsewedy Electric",
            location: "10th of Ramadan City",
            experience: "2-4 Years",
            salary: "Negotiable",
            logoUrl: "../static/images/companies/elsewedy.png",
            type: "On-site",
            description: [
                "Design and oversee the manufacturing of electrical cables and transformers.",
                "Ensure all products meet international safety and quality standards."
            ],
            responsibilities: [
                "Design electrical systems and components.",
                "Supervise production lines and troubleshoot issues.",
                "Conduct quality assurance tests.",
                "Prepare technical documentation and reports."
            ],
            softSkills: [
                "Leadership",
                "Problem-solving",
                "Teamwork"
            ],
            qualifications: [
                "B.Sc. in Electrical Engineering.",
                "Knowledge of AutoCAD and PLC."
            ]
        },
        {
            id: 9,
            title: "Site Engineer",
            company: "Palm Hills Developments",
            location: "Sheikh Zayed",
            experience: "3-5 Years",
            salary: "Negotiable",
            logoUrl: "../static/images/companies/palm.png",
            type: "On-site",
            description: [
                "Manage construction sites for high-end residential compounds.",
                "Coordinate between contractors, architects, and workers to ensure timely delivery."
            ],
            responsibilities: [
                "Supervise daily construction activities.",
                "Ensure compliance with safety regulations.",
                "Monitor material usage and inventory.",
                "Resolve on-site technical issues."
            ],
            softSkills: [
                "Leadership",
                "Time management",
                "Conflict resolution"
            ],
            qualifications: [
                "Civil Engineering degree.",
                "Previous experience in residential projects."
            ]
        },
        {
            id: 10,
            title: "Quality Control Specialist",
            company: "Edita",
            location: "6th of October",
            experience: "1-3 Years",
            salary: "7K - 10K EGP",
            logoUrl: "../static/images/companies/edita.png",
            type: "On-site",
            description: [
                "Monitor the production process of our baked goods to ensure consistent quality.",
                "Conduct hygiene and food safety audits."
            ],
            responsibilities: [
                "Perform routine quality checks on raw materials.",
                "Inspect finished products for packaging and taste defects.",
                "Document quality reports and non-compliance issues.",
                "Ensure adherence to ISO and food safety standards."
            ],
            softSkills: [
                "Attention to detail",
                "Firmness",
                "Observation skills"
            ],
            qualifications: [
                "Degree in Food Science or Chemistry.",
                "Knowledge of HACCP standards."
            ]
        }
    ],

    // 2. Service Method: Get All Jobs (Simulates an API call)
    // Used by: Homepage, Browse Page
    getAll() {
        return new Promise(resolve => {
            // Simulate a small network delay for realism
            setTimeout(() => {
                resolve(this._data);
            }, 300);
        });
    },

    // 3. Service Method: Get One Job by ID (Includes "Heavy" details)
    // Used by: Job Details Page
    getById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const job = this._data.find(j => j.id == id);
                if (job) {
                    resolve(job);
                } else {
                    reject("Job not found");
                }
            }, 300);
        });
    },
    
    // 4. Helper: Get Similar Jobs based on title/category
    // Used by: Job Details Sidebar
    getSimilar(currentJobId, keyword) {
        if (!keyword) return [];
        const lowerKeyword = keyword.toLowerCase();
        
        return this._data
            .filter(job => 
                job.id != currentJobId && 
                (job.title.toLowerCase().includes(lowerKeyword) || 
                 job.company.toLowerCase().includes(lowerKeyword))
            )
            .slice(0, 5); // Return max 5 similar jobs
    }
};

const CompanyModel = {
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
            { name: "Edita", logo: "../static/images/companies/edita.png" }
        ];
    }
};