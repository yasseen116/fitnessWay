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
            title: "Software Developer",
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
            title: "Software Developer",
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
            title: "Financial Analyst",
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
        },
        {
            id: 11,
            title: "Senior Backend Engineer",
            company: "Dell Technologies",
            location: "New Cairo, Cairo",
            experience: "5+ Years",
            salary: "Negotiable",
            logoUrl: "../static/images/companies/dell.png",
            type: "Remote",
            description: [
                "Lead the development of microservices for our enterprise storage solutions.",
                "Work closely with global teams to ensure high availability and reliability."
            ],
            responsibilities: [
                "Architect and develop scalable backend services using Java and Spring Boot.",
                "Lead technical discussions and architectural decisions.",
                "Troubleshoot production issues and improve system performance.",
                "Ensure code quality through automated testing and rigorous code reviews."
            ],
            softSkills: [
                "Leadership capabilities",
                "Excellent analytical skills",
                "Ability to work in a fast-paced environment"
            ],
            qualifications: [
                "Deep understanding of Java, Spring Boot, and Microservices.",
                "Experience with distributed systems and NoSQL databases."
            ]
        },
        {
            id: 12,
            title: "Senior Software Developer",
            company: "Vodafone",
            location: "Smart Village, Giza",
            experience: "1-3 Years",
            salary: "15,000 - 25,000 EGP",
            logoUrl: "../static/images/companies/vodafone.png",
            type: "Hybrid",
            description: [
                "Develop and maintain internal tools and customer-facing applications.",
                "Part of an agile team delivering rapid iterations of software."
            ],
            responsibilities: [
                "Write clean, maintainable code in Python and Django.",
                "Integrate third-party APIs and services.",
                "Participate in daily stand-ups and sprint planning.",
                "Debug and fix software defects."
            ],
            softSkills: [
                "Team player",
                "Good time management",
                "Eager to learn new technologies"
            ],
            qualifications: [
                "Proficiency in Python and RESTful APIs.",
                "Basic knowledge of frontend technologies (HTML/CSS/JS)."
            ]
        },
        {
            id: 13,
            title: "Full Stack Developer",
            company: "IBM",
            location: "Giza Systems, Giza",
            experience: "3-5 Years",
            salary: "30,000 - 45,000 EGP",
            logoUrl: "../static/images/companies/ibm.png",
            type: "On-site",
            description: [
                "Build robust web applications using modern JavaScript frameworks.",
                "Contribute to IBM's cloud and cognitive software solutions."
            ],
            responsibilities: [
                "Develop front-end interfaces using React.js.",
                "Build back-end services with Node.js and Express.",
                "Manage deployment pipelines using CI/CD tools.",
                "Ensure cross-browser compatibility and responsiveness."
            ],
            softSkills: [
                "Creative thinking",
                "Effective communication",
                "Attention to detail"
            ],
            qualifications: [
                "Strong experience with the MERN stack (MongoDB, Express, React, Node).",
                "Experience with containerization (Docker, Kubernetes)."
            ]
        },
        {
            id: 14,
            title: "DevOps Engineer",
            company: "Orange Business",
            location: "City Stars, Cairo",
            experience: "2-4 Years",
            salary: "Negotiable",
            logoUrl: "../static/images/companies/orange.png",
            type: "Hybrid",
            description: [
                "Automate and optimize our software delivery processes.",
                "Manage cloud infrastructure and ensure system uptime."
            ],
            responsibilities: [
                "Implement CI/CD pipelines using Jenkins and GitLab.",
                "Monitor system performance using Prometheus and Grafana.",
                "Manage cloud resources on AWS or Azure.",
                "Script automation tasks using Bash or Python."
            ],
            softSkills: [
                "Proactive attitude",
                "Crisis management skills",
                "Collaborative spirit"
            ],
            qualifications: [
                "Solid background in Linux administration.",
                "Experience with Infrastructure as Code (Terraform, Ansible)."
            ]
        },
        {
            id: 15,
            title: "iOS Mobile Developer",
            company: "Instabug",
            location: "Maadi, Cairo",
            experience: "2-5 Years",
            salary: "Competitive (USD)",
            logoUrl: "../static/images/companies/instabug.png",
            type: "Hybrid",
            description: [
                "Help build the SDK installed in billions of devices worldwide.",
                "Work on challenging performance and reliability problems on iOS."
            ],
            responsibilities: [
                "Develop high-performance iOS SDKs using Swift and Objective-C.",
                "Optimize memory usage and battery consumption.",
                "Collaborate with the product team to design new features.",
                "Write unit and UI tests to ensure stability."
            ],
            softSkills: [
                "Passion for mobile technologies",
                "Detail-oriented",
                "Strong English communication"
            ],
            qualifications: [
                "Deep knowledge of iOS internals and Xcode.",
                "Published at least one app on the App Store."
            ]
        },
        {
            id: 16,
            title: "Java Developer",
            company: "Fawry",
            location: "Smart Village, Cairo",
            experience: "1-3 Years",
            salary: "12,000 - 20,000 EGP",
            logoUrl: "../static/images/companies/fawry.png",
            type: "On-site",
            description: [
                "Join Egypt's leading e-payment network.",
                "Develop secure and reliable payment processing systems."
            ],
            responsibilities: [
                "Implement secure backend services using Java EE.",
                "Design database schemas and optimize SQL queries.",
                "Integrate with banking and financial APIs.",
                "Ensure compliance with security standards (PCI-DSS)."
            ],
            softSkills: [
                "Integrity and reliability",
                "Ability to work under pressure",
                "Problem analysis"
            ],
            qualifications: [
                "Solid understanding of OOP and Design Patterns.",
                "Experience with Relational Databases (Oracle, MySQL)."
            ]
        },
        {
            id: 17,
            title: "Senior Accountant",
            company: "CIB",
            location: "New Cairo, Cairo",
            experience: "3-5 Years",
            salary: "18,000 - 25,000 EGP",
            logoUrl: "../static/images/companies/cib.png",
            type: "On-site",
            description: [
                "Handle daily accounting transactions and financial reporting.",
                "Ensure compliance with bank policies and CBE regulations."
            ],
            responsibilities: [
                "Prepare monthly financial statements.",
                "Reconcile bank accounts and general ledger entries.",
                "Assist in internal and external audits.",
                "Monitor cash flow and budget performance."
            ],
            softSkills: [
                "Attention to detail",
                "Analytical thinking",
                "Integrity"
            ],
            qualifications: [
                "Bachelor's degree in Commerce or Accounting.",
                "CMA or CPA certification is a plus."
            ]
        },
        {
            id: 18,
            title: "Site Civil Engineer",
            company: "Orascom",
            location: "New Administrative Capital",
            experience: "2-4 Years",
            salary: "Negotiable",
            logoUrl: "../static/images/companies/orascom.png",
            type: "On-site",
            description: [
                "Supervise construction activities for a mega-project.",
                "Ensure work is performed according to technical specifications."
            ],
            responsibilities: [
                "Manage site labor and subcontractors.",
                "Monitor project progress and report delays.",
                "Ensure safety standards are met on site.",
                "Inspect materials and quality of work."
            ],
            softSkills: [
                "Leadership",
                "Crisis management",
                "Physical stamina"
            ],
            qualifications: [
                "B.Sc. in Civil Engineering.",
                "AutoCAD proficiency."
            ]
        },
        {
            id: 19,
            title: "Marketing Specialist",
            company: "Juhayna",
            location: "6th of October, Giza",
            experience: "1-3 Years",
            salary: "10,000 - 15,000 EGP",
            logoUrl: "../static/images/companies/juhayna.png",
            type: "Hybrid",
            description: [
                "Develop marketing campaigns for our dairy products sector.",
                "Analyze market trends and competitor activities."
            ],
            responsibilities: [
                "Plan and execute digital and offline campaigns.",
                "Manage social media content calendars.",
                "Coordinate with advertising agencies.",
                "Track campaign performance metrics (ROI)."
            ],
            softSkills: [
                "Creativity",
                "Communication skills",
                "Teamwork"
            ],
            qualifications: [
                "Degree in Marketing or Business Administration.",
                "Experience with Digital Marketing tools."
            ]
        },
        {
            id: 20,
            title: "Customer Service Agent (English)",
            company: "Raya Contact Center",
            location: "Maadi, Cairo",
            experience: "0-1 Years",
            salary: "7,000 - 9,000 EGP",
            logoUrl: "../static/images/companies/raya.png",
            type: "On-site",
            description: [
                "Handle incoming calls for international accounts.",
                "Provide excellent support to resolve customer issues."
            ],
            responsibilities: [
                "Answer inquiries regarding billing and technical support.",
                "Document customer interactions in the CRM.",
                "Escalate complex issues to team leaders.",
                "Maintain high customer satisfaction scores (CSAT)."
            ],
            softSkills: [
                "Fluent English",
                "Patience",
                "Active listening"
            ],
            qualifications: [
                "University Graduate (Any field).",
                "Flexibility with rotational shifts."
            ]
        },
        {
            id: 21,
            title: "Medical Representative",
            company: "AstraZeneca Egypt",
            location: "Nasr City, Cairo",
            experience: "1-3 Years",
            salary: "Competitive + Commission",
            logoUrl: "../static/images/companies/astrazeneca.png",
            type: "On-site",
            description: [
                "Promote our pharmaceutical products to healthcare professionals.",
                "Build strong relationships with doctors and pharmacists."
            ],
            responsibilities: [
                "Conduct daily visits to clinics and hospitals.",
                "Present product benefits and clinical data.",
                "Organize medical conferences and group meetings.",
                "Achieve monthly sales targets."
            ],
            softSkills: [
                "Persuasion skills",
                "Presentation skills",
                "Persistence"
            ],
            qualifications: [
                "Bachelor's degree in Pharmacy or Veterinary Medicine.",
                "Valid driver's license."
            ]
        },
        {
            id: 22,
            title: "Sales Executive",
            company: "Mountain View",
            location: "New Cairo, Cairo",
            experience: "2-5 Years",
            salary: "12,000 + High Commission",
            logoUrl: "../static/images/companies/mountainview.webp",
            type: "On-site",
            description: [
                "Sell premium real estate units in our residential compounds.",
                "Guide clients through the property buying process."
            ],
            responsibilities: [
                "Generate leads through cold calling and networking.",
                "Conduct property viewings with potential buyers.",
                "Negotiate contracts and payment terms.",
                "Follow up with clients to close deals."
            ],
            softSkills: [
                "Negotiation",
                "Networking",
                "Confidence"
            ],
            qualifications: [
                "Experience in Real Estate sales is preferred.",
                "Own car is usually required."
            ]
        },
        {
            id: 23,
            title: "HR Specialist",
            company: "Etisalat Egypt",
            location: "New Cairo, Cairo",
            experience: "2-4 Years",
            salary: "14,000 - 18,000 EGP",
            logoUrl: "../static/images/companies/etisalat.png",
            type: "Hybrid",
            description: [
                "Manage recruitment cycles and employee relations.",
                "Support the implementation of HR policies."
            ],
            responsibilities: [
                "Screen CVs and conduct initial interviews.",
                "Manage the onboarding process for new hires.",
                "Handle employee attendance and vacation balances.",
                "Assist in performance appraisal cycles."
            ],
            softSkills: [
                "Empathy",
                "Confidentiality",
                "Organization"
            ],
            qualifications: [
                "HR Diploma or Certificate.",
                "Strong knowledge of Egyptian Labor Law."
            ]
        },
        {
            id: 24,
            title: "Supply Chain Coordinator",
            company: "Unilever",
            location: "6th of October, Giza",
            experience: "1-3 Years",
            salary: "11,000 - 16,000 EGP",
            logoUrl: "../static/images/companies/unilever.png",
            type: "On-site",
            description: [
                "Coordinate the movement of goods from factory to warehouses.",
                "Optimize inventory levels to prevent shortages."
            ],
            responsibilities: [
                "Track shipments and delivery schedules.",
                "Liaise with suppliers and logistics partners.",
                "Prepare inventory reports and forecasts.",
                "Solve logistical bottlenecks."
            ],
            softSkills: [
                "Problem-solving",
                "Data analysis",
                "Time management"
            ],
            qualifications: [
                "Degree in Logistics or Supply Chain.",
                "Proficiency in Excel and SAP."
            ]
        },
        {
            id: 25,
            title: "Financial Analyst",
            company: "EFG Hermes",
            location: "Smart Village, Giza",
            experience: "2-4 Years",
            salary: "Negotiable",
            logoUrl: "../static/images/companies/efg.png",
            type: "Hybrid",
            description: [
                "Analyze financial data to support investment decisions.",
                "Prepare detailed financial models and market research."
            ],
            responsibilities: [
                "Evaluate financial performance of companies.",
                "Forecast future economic trends.",
                "Prepare presentations for investors.",
                "Monitor stock market fluctuations."
            ],
            softSkills: [
                "Critical thinking",
                "Precision",
                "Presentation skills"
            ],
            qualifications: [
                "Degree in Finance or Economics.",
                "CFA Level 1 is highly desirable."
            ]
        },
        {
            id: 26,
            title: "Graphic Designer",
            company: "Tarek Nour Communications",
            location: "Zamalek, Cairo",
            experience: "2-5 Years",
            salary: "10,000 - 18,000 EGP",
            logoUrl: "../static/images/companies/tareknour.png",
            type: "On-site",
            description: [
                "Create visual concepts for advertising campaigns.",
                "Work with the creative team to bring ideas to life."
            ],
            responsibilities: [
                "Design logos, brochures, and social media posts.",
                "Edit photos and create illustrations.",
                "Ensure designs adhere to brand guidelines.",
                "Meet strict deadlines for client projects."
            ],
            softSkills: [
                "Artistic eye",
                "Adaptability",
                "Communication"
            ],
            qualifications: [
                "Portfolio is mandatory.",
                "Mastery of Adobe Photoshop, Illustrator, InDesign."
            ]
        },
        {
            id: 27,
            title: "Quality Control Engineer",
            company: "Elsewedy Electric",
            location: "10th of Ramadan City",
            experience: "3-6 Years",
            salary: "15,000 - 22,000 EGP",
            logoUrl: "../static/images/companies/elsewedy.png",
            type: "On-site",
            description: [
                "Ensure manufactured cables meet international standards.",
                "Implement quality management systems on the factory floor."
            ],
            responsibilities: [
                "Conduct routine inspections of raw materials.",
                "Monitor production processes for defects.",
                "Document quality reports and non-conformance issues.",
                "Lead internal quality audits."
            ],
            softSkills: [
                "Attention to detail",
                "Firmness",
                "Analytical skills"
            ],
            qualifications: [
                "B.Sc. in Electrical or Production Engineering.",
                "Knowledge of ISO 9001 standards."
            ]
        },
        {
            id: 28,
            title: "English Instructor",
            company: "British Council Egypt",
            location: "Agouza, Giza",
            experience: "2+ Years",
            salary: "Hourly / Competitive",
            logoUrl: "../static/images/companies/britishcouncil.png",
            type: "On-site",
            description: [
                "Teach English to adults and young learners.",
                "Deliver high-quality lessons in line with British Council standards."
            ],
            responsibilities: [
                "Plan and deliver interactive lessons.",
                "Assess student progress and provide feedback.",
                "Administer exams and grading.",
                "Participate in professional development workshops."
            ],
            softSkills: [
                "Patience",
                "Cultural awareness",
                "Engagement skills"
            ],
            qualifications: [
                "CELTA or Trinity CertTESOL is required.",
                "Native or near-native English proficiency."
            ]
        },
        {
            id: 29,
            title: "Operations Manager",
            company: "Talabat",
            location: "Maadi, Cairo",
            experience: "5-7 Years",
            salary: "Negotiable",
            logoUrl: "../static/images/companies/talabat.png",
            type: "Hybrid",
            description: [
                "Oversee delivery operations to ensure speed and efficiency.",
                "Manage relationships with logistics partners and riders."
            ],
            responsibilities: [
                "Monitor key performance indicators (KPIs) like delivery time.",
                "Optimize delivery zones and rider allocation.",
                "Handle operational crises and escalations.",
                "Analyze data to improve operational costs."
            ],
            softSkills: [
                "Strategic thinking",
                "Leadership",
                "Decision making"
            ],
            qualifications: [
                "Experience in Logistics or E-commerce.",
                "Strong analytical background."
            ]
        },
        {
            id: 30,
            title: "Pharmacist",
            company: "El Ezaby Pharmacy",
            location: "Heliopolis, Cairo",
            experience: "0-2 Years",
            salary: "6,000 - 9,000 EGP",
            logoUrl: "../static/images/companies/elezaby.png",
            type: "On-site",
            description: [
                "Dispense medication and provide advice to patients.",
                "Ensure accurate inventory and expiry date management."
            ],
            responsibilities: [
                "Review prescriptions for accuracy.",
                "Advise customers on dosage and side effects.",
                "Manage stock levels and order medicines.",
                "Handle POS transactions."
            ],
            softSkills: [
                "Customer service",
                "Attention to detail",
                "Communication"
            ],
            qualifications: [
                "B.Sc. in Pharmacy.",
                "Valid syndicate registration."
            ]
        },
        {
            id: 31,
            title: "Administrative Assistant",
            company: "EgyptAir Hospital",
            location: "Heliopolis, Cairo",
            experience: "1-3 Years",
            salary: "7,000 - 10,000 EGP",
            logoUrl: "../static/images/companies/egyptairhospital.jpg",
            type: "On-site",
            description: [
                "Provide administrative support to hospital management.",
                "Ensure smooth daily operations of the office."
            ],
            responsibilities: [
                "Schedule meetings and manage calendars.",
                "Handle incoming calls and emails.",
                "Prepare reports and meeting minutes.",
                "Maintain filing systems (digital and physical)."
            ],
            softSkills: [
                "Organization",
                "Time management",
                "Multitasking"
            ],
            qualifications: [
                "Bachelor's degree.",
                "Proficiency in Microsoft Office."
            ]
        },
        {
            id: 32,
            title: "Procurement Officer",
            company: "Ghabbour Auto",
            location: "Abu Rawash, Giza",
            experience: "2-4 Years",
            salary: "12,000 - 16,000 EGP",
            logoUrl: "../static/images/companies/ghabbour.png",
            type: "On-site",
            description: [
                "Manage the purchasing process for automotive parts.",
                "Negotiate with local and international suppliers."
            ],
            responsibilities: [
                "Process purchase orders (POs).",
                "Compare supplier quotes and negotiate prices.",
                "Evaluate supplier performance.",
                "Ensure timely delivery of materials."
            ],
            softSkills: [
                "Negotiation",
                "Integrity",
                "Relationship building"
            ],
            qualifications: [
                "Degree in Business or Supply Chain.",
                "Experience in the automotive sector is a plus."
            ]
        },
        {
            id: 33,
            title: "Content Writer (Arabic)",
            company: "Mawdoo3",
            location: "Remote (Egypt)",
            experience: "1-3 Years",
            salary: "Piece-rate / Monthly",
            logoUrl: "../static/images/companies/mawdoo3.png",
            type: "Remote",
            description: [
                "Write high-quality, SEO-friendly Arabic articles.",
                "Research various topics including health, tech, and lifestyle."
            ],
            responsibilities: [
                "Produce original content free of plagiarism.",
                "Optimize articles for search engines (SEO).",
                "Proofread and edit content.",
                "Meet daily/weekly word count targets."
            ],
            softSkills: [
                "Research skills",
                "Creativity",
                "Discipline"
            ],
            qualifications: [
                "Excellent command of Arabic language.",
                "Knowledge of SEO basics."
            ]
        },
        {
            id: 34,
            title: "Architecture Design Engineer",
            company: "Palm Hills Developments",
            location: "Madinaty, Cairo",
            experience: "3-5 Years",
            salary: "15,000 - 20,000 EGP",
            logoUrl: "../static/images/companies/palm.png",
            type: "On-site",
            description: [
                "Design residential and commercial buildings for new cities.",
                "Create detailed architectural drawings and 3D models."
            ],
            responsibilities: [
                "Develop architectural layouts and concepts.",
                "Coordinate with structural and MEP engineers.",
                "Prepare tender documents and specifications.",
                "Ensure designs comply with building codes."
            ],
            softSkills: [
                "Creativity",
                "Attention to detail",
                "Team collaboration"
            ],
            qualifications: [
                "B.Sc. in Architecture.",
                "Proficiency in Revit, AutoCAD, and 3D Max."
            ]
        },
        {
            id: 35,
            title: "Receptionist",
            company: "Marriott Hotels",
            location: "Zamalek, Cairo",
            experience: "0-2 Years",
            salary: "6,000 - 8,000 EGP",
            logoUrl: "../static/images/companies/marriott.png",
            type: "On-site",
            description: [
                "Welcome guests and provide 5-star customer service.",
                "Manage check-in and check-out procedures."
            ],
            responsibilities: [
                "Greet guests warmly upon arrival.",
                "Handle room bookings and special requests.",
                "Process payments and billing.",
                "Answer phone inquiries."
            ],
            softSkills: [
                "Friendly demeanor",
                "Communication",
                "Grooming standards"
            ],
            qualifications: [
                "Degree in Hotel Management or related field.",
                "Good command of English."
            ]
        },
        {
            id: 36,
            title: "Flight Attendant",
            company: "EgyptAir",
            location: "Cairo International Airport",
            experience: "0-2 Years",
            salary: "Negotiable",
            logoUrl: "../static/images/companies/egyptair.png",
            type: "On-site",
            description: [
                "Ensure the safety and comfort of passengers during flights.",
                "Represent Egypt's national carrier with professionalism."
            ],
            responsibilities: [
                "Conduct safety demonstrations before takeoff.",
                "Serve meals and refreshments to passengers.",
                "Assist passengers with special needs.",
                "Handle emergency situations calmly and efficiently."
            ],
            softSkills: [
                "Excellent communication",
                "Cultural awareness",
                "Presentable appearance"
            ],
            qualifications: [
                "High School degree or University graduate.",
                "Fluency in English (additional languages are a plus)."
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
    // Simulate sending data to a server
    submit(jobId, cvType, fileName = null) {
        return new Promise((resolve, reject) => {
            console.log(`[API] Submitting application for Job ${jobId}...`);
            
            // 1. Simulate Network Delay (1.5 seconds)
            setTimeout(() => {
                try {
                    // 2. Get User Data (Simulate Session)
                    const user = JSON.parse(localStorage.getItem('user'));
                    if (!user) throw new Error("User not authenticated");

                    // 3. Save to "Database" (LocalStorage)
                    const applications = JSON.parse(localStorage.getItem('my_applications') || '[]');
                    
                    // Check for duplicates (Optional realism)
                    const alreadyApplied = applications.some(app => app.jobId === jobId && app.userEmail === user.email);
                    if (alreadyApplied) {
                        resolve({ success: false, message: "You have already applied to this job!" });
                        return;
                    }

                    const newApplication = {
                        id: Date.now(), // Random ID
                        jobId: jobId,
                        userEmail: user.email,
                        cvType: cvType, // 'existing' or 'new'
                        cvName: fileName || 'Default_CV.pdf',
                        appliedAt: new Date().toLocaleDateString(),
                        status: 'Pending'
                    };

                    applications.push(newApplication);
                    localStorage.setItem('my_applications', JSON.stringify(applications));

                    console.log("[API] Application Saved:", newApplication);
                    resolve({ success: true, message: "Application submitted successfully!" });

                } catch (error) {
                    reject(error);
                }
            }, 1500); // 1.5s delay
        });
    }
};