const { createApp } = Vue;

createApp({
    data() {
        return {
            job: {
                title: "Software Engineer",
                company: "Fawry",
                location: "Smart Village",
                experience: "0 - 5 Years",
                salary: "Negotiable",
                logoColor: "#ffd700",
                description: [
                    "We are seeking a highly experienced Senior Software Testing Engineer to lead end-to-end testing activities across web, mobile, backend services, and integrated systems.",
                    "The ideal candidate has strong analytical skills, deep knowledge of testing methodologies, and the ability to ensure product quality within fast-paced Agile environments."
                ],
                responsibilities: [
                    "Test Planning & Strategy",
                    "Test Case Design & Execution",
                    "Automation Testing",
                    "API & Backend Testing",
                    "Performance & Security Testing",
                    "Collaboration & Leadership",
                    "Reporting & Documentation"
                ],
                softSkills: [
                    "Strong ownership and accountability",
                    "Leadership & mentoring abilities",
                    "Attention to detail",
                    "Problem-solving mindset",
                    "Ability to work in a fast-paced, collaborative environment",
                    "Excellent documentation and communication skills"
                ],
                qualifications: [
                    "Experience with microservices and distributed systems.",
                    "Automation experience using Python, Java, or JavaScript."
                ]
            },

            // Mock Data for Sidebar
            similarJobs: [
                { id: 1, title: "Software Engineer", company: "Bank Misr", location: "Maadi", experience: "0 - 5 Years", logoColor: "#eab308" },
                { id: 2, title: "Software Engineer", company: "Town Team", location: "Alexandria", experience: "0 - 2 Years", logoColor: "#000000" },
                { id: 3, title: "Software Engineer", company: "Monginis", location: "Zagazig", experience: "5 - 10 Years", logoColor: "#ec4899" },
                { id: 4, title: "Backend Developer", company: "LC Waikiki", location: "Remote", experience: "0 - 5 Years", logoColor: "#3b82f6" },
                { id: 5, title: "Frontend Developer", company: "Bank Misr", location: "Helwan", experience: "0 - 5 Years", logoColor: "#eab308" },
                { id: 6, title: "Requirement Engineer", company: "Microsoft", location: "Cairo", experience: "5 - 10 Years", logoColor: "#f97316" }
            ]
        }
    },
    compilerOptions: {
        delimiters: ['[[', ']]']
    }
}).mount('#app');