/**
 * CareerMap Pro - World-Class Student Placement & Career Intelligence Platform
 * Pure Vanilla JavaScript implementation with Chart.js & Canvas Confetti integration
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. Data Models & Curated Curriculum Banks
    // ==========================================================================

    const DEFAULT_TRACKS = {
        'Software Engineer': [
            {
                id: 'se_1',
                title: 'Foundations of Computer Science & DSA',
                status: 'completed',
                desc: 'Core language mastery (C++/Java/Python), algorithmic complexity analysis (Big O), Linear & Non-linear data structures.',
                tags: ['C++', 'Java', 'Python', 'LeetCode 150', 'Big O'],
                topics: ['Arrays, Strings & 2 Pointers', 'Binary Search & Sliding Window', 'Linked Lists, Stacks & Queues', 'Trees, BST & Graph Traversals (BFS/DFS)'],
                resources: ['NeetCode 150 Roadmap', 'MIT 6.006 Algorithms', 'GeeksforGeeks Core DSA']
            },
            {
                id: 'se_2',
                title: 'CS Core Fundamentals & Databases',
                status: 'inprogress',
                desc: 'Deep revision of essential undergraduate engineering principles required for top tech company rounds.',
                tags: ['OS', 'DBMS', 'Computer Networks', 'SQL', 'OOP'],
                topics: ['Operating Systems: Processes, Threads, Deadlocks, Virtual Memory', 'DBMS: ACID properties, Normalization, Indexing (B-Trees)', 'Computer Networks: TCP/IP, OSI model, DNS, HTTP/HTTPS', 'Object Oriented Programming & SOLID principles'],
                resources: ['Gate Smashers OS & CN', 'Designing Data-Intensive Applications (Kleppmann)', 'SQLBolt Interactive Tutorial']
            },
            {
                id: 'se_3',
                title: 'Full-Stack Architecture & Project Development',
                status: 'locked',
                desc: 'Building scalable, production-grade applications with clean REST/GraphQL APIs, secure authentication, and cloud deployment.',
                tags: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'REST APIs'],
                topics: ['Modern React with State Management (Redux/Zustand)', 'Backend APIs with Node/Express/FastAPI', 'Relational & NoSQL Database Schema Design', 'Authentication (JWT, OAuth2.0) and Rate Limiting'],
                resources: ['Full Stack Open (Univ of Helsinki)', 'Frontend Masters Guides', 'Docker Official Docs']
            },
            {
                id: 'se_4',
                title: 'System Design & Distributed Scalability',
                status: 'locked',
                desc: 'Mastering high-level & low-level architecture for large-scale microservices and high-availability systems.',
                tags: ['Microservices', 'Load Balancers', 'Redis Cache', 'Kafka', 'CDN'],
                topics: ['Load Balancing algorithms & Reverse Proxies', 'Caching strategies (Write-through, Cache-aside, Redis)', 'Message Queues (Kafka, RabbitMQ) for asynchronous tasks', 'Database Sharding & Replication'],
                resources: ['Grokking the System Design Interview', 'System Design Primer (GitHub)', 'ByteByteGo Visual Guides']
            },
            {
                id: 'se_5',
                title: 'Placement Blitz: Mock Interviews & Company Prep',
                status: 'locked',
                desc: 'Timed problem-solving, company-specific past year questions, STAR behavioral frameworks, and negotiation.',
                tags: ['STAR Method', 'Mock Rounds', 'ATS Resume', 'FAANG Prep'],
                topics: ['FAANG/Unicorn frequent interview patterns', 'Behavioral STAR storytelling for leadership rounds', 'ATS Resume optimization & LinkedIn outreach', 'Offer evaluation and negotiation strategies'],
                resources: ['Pramp / Interviewing.io Mocks', 'Cracking the Coding Interview', 'Tech Interview Handbook']
            }
        ],
        'AI & ML Engineer': [
            {
                id: 'aiml_1',
                title: 'Mathematical Foundations & Python for Data Science',
                status: 'completed',
                desc: 'Linear algebra, calculus, probability distributions, NumPy, and Pandas data wrangling.',
                tags: ['NumPy', 'Pandas', 'Linear Algebra', 'Calculus', 'SciPy'],
                topics: ['Matrix operations, Eigenvalues, SVD', 'Multivariable Calculus & Gradient Descent', 'Probability, Bayes Theorem, Hypothesis Testing', 'Data preprocessing with Pandas & Matplotlib'],
                resources: ['3Blue1Brown Essence of Linear Algebra', 'Fast.ai Practical Deep Learning', 'StatQuest with Josh Starmer']
            },
            {
                id: 'aiml_2',
                title: 'Classical Machine Learning & Statistical Modeling',
                status: 'inprogress',
                desc: 'Supervised, unsupervised, and ensemble algorithms with scikit-learn.',
                tags: ['Scikit-Learn', 'Regression', 'Random Forests', 'XGBoost', 'Clustering'],
                topics: ['Linear & Logistic Regression, Decision Trees', 'Ensemble Methods (Random Forest, XGBoost, LightGBM)', 'K-Means, PCA, Dimensionality Reduction', 'Model validation, Cross-validation & Hyperparameter tuning'],
                resources: ['Andrew Ng Machine Learning Specialization', 'Hands-On Machine Learning (Aurélien Géron)']
            },
            {
                id: 'aiml_3',
                title: 'Deep Learning & Neural Architectures',
                status: 'locked',
                desc: 'PyTorch mastery, Convolutional Neural Networks (CNNs), and Sequence Models.',
                tags: ['PyTorch', 'CNN', 'RNN/LSTM', 'Backpropagation'],
                topics: ['Building neural nets from scratch in PyTorch', 'Computer Vision with CNNs (ResNet, YOLO)', 'Time series and NLP with LSTMs and Transformers', 'GPU acceleration and CUDA basics'],
                resources: ['DeepLearning.AI Deep Learning Specialization', 'PyTorch Official Tutorials']
            },
            {
                id: 'aiml_4',
                title: 'Generative AI, LLMs & MLOps Deployment',
                status: 'locked',
                desc: 'Transformer architectures, RAG pipelines, fine-tuning, and model production serving.',
                tags: ['Transformers', 'Hugging Face', 'LangChain', 'RAG', 'MLflow'],
                topics: ['Attention mechanisms & Transformer architecture', 'Retrieval-Augmented Generation (RAG) with Vector DBs', 'Fine-tuning LLMs (LoRA, QLoRA)', 'MLOps pipelines with MLflow, FastAPI, and Docker'],
                resources: ['Hugging Face NLP Course', 'LangChain Documentation', 'Chip Huyen Designing Machine Learning Systems']
            }
        ],
        'Data Scientist': [
            {
                id: 'ds_1',
                title: 'Advanced SQL, Analytics & Data Warehousing',
                status: 'completed',
                desc: 'Complex window functions, CTEs, BigQuery, and dimensional schema modeling.',
                tags: ['PostgreSQL', 'BigQuery', 'Window Functions', 'Snowflake'],
                topics: ['Advanced SQL Joins, Aggregations & Window functions', 'Data Warehousing star & snowflake schemas', 'ETL pipelines with Apache Airflow', 'Business metric formulation'],
                resources: ['Mode Analytics SQL School', 'DataCamp Data Engineering Track']
            },
            {
                id: 'ds_2',
                title: 'Exploratory Data Analysis & Business Intelligence',
                status: 'inprogress',
                desc: 'Interactive storytelling with Tableau/Power BI and statistical data synthesis.',
                tags: ['Tableau', 'Power BI', 'Seaborn', 'Storytelling'],
                topics: ['Executive KPI dashboards in Tableau / Power BI', 'Hypothesis testing & A/B testing experiment design', 'Cohort analysis and customer segmentation', 'Data-driven presentation and executive reporting'],
                resources: ['Storytelling with Data (Cole Nussbaumer)', 'Harvard Business Review Analytics Guides']
            },
            {
                id: 'ds_3',
                title: 'Predictive Modeling & Applied Machine Learning',
                status: 'locked',
                desc: 'Deploying predictive intelligence to drive business ROI.',
                tags: ['Classification', 'Churn Prediction', 'Forecasting', 'Scikit-Learn'],
                topics: ['Customer churn & lifetime value prediction', 'Time series forecasting (ARIMA, Prophet)', 'Recommender systems collaborative filtering', 'Model explainability with SHAP & LIME'],
                resources: ['Applied Predictive Modeling (Max Kuhn)', 'Kaggle Learn Competitions']
            }
        ],
        'DevOps & Cloud': [
            {
                id: 'devops_1',
                title: 'Linux Systems, Scripting & Git Mastery',
                status: 'completed',
                desc: 'Bash automation, Linux kernel basics, networking sockets, and advanced Git branching.',
                tags: ['Linux', 'Bash', 'Git', 'Networking', 'SSH'],
                topics: ['Linux file permissions, process management (systemd)', 'Bash automation scripting & cron jobs', 'TCP/UDP, DNS, Firewalls (iptables/ufw)', 'Git cherry-pick, rebase, and submodule management'],
                resources: ['Linux Journey Tutorials', 'OverTheWire Bandit Challenges']
            },
            {
                id: 'devops_2',
                title: 'Containers & Kubernetes Orchestration',
                status: 'inprogress',
                desc: 'Multi-stage Docker builds, Kubernetes pods, deployments, services, and ingress controllers.',
                tags: ['Docker', 'Kubernetes', 'Helm', 'K8s Cluster'],
                topics: ['Docker image optimization and container security', 'Kubernetes Architecture (Control plane, Worker nodes)', 'K8s Deployments, StatefulSets, ConfigMaps, Secrets', 'Helm charts templating & package management'],
                resources: ['Kubectl The Hard Way (Kelsey Hightower)', 'Mumshad Mannambeth CKA Course']
            },
            {
                id: 'devops_3',
                title: 'Infrastructure as Code (Terraform) & CI/CD Pipelines',
                status: 'locked',
                desc: 'Automating AWS/Azure cloud resources with Terraform and building GitHub Actions workflows.',
                tags: ['Terraform', 'AWS', 'GitHub Actions', 'ArgoCD'],
                topics: ['AWS Core Services (EC2, S3, VPC, IAM, RDS, EKS)', 'Terraform state management and modular infrastructure', 'Automated CI/CD testing and deployment with GitHub Actions', 'GitOps deployment with ArgoCD'],
                resources: ['Terraform Up & Running (Yevgeniy Brikman)', 'AWS Certified Solutions Architect Guides']
            }
        ],
        'Product Manager': [
            {
                id: 'pm_1',
                title: 'Product Discovery, User Research & Metrics',
                status: 'completed',
                desc: 'User journey mapping, North Star metrics, wireframing, and JTBD (Jobs To Be Done).',
                tags: ['User Research', 'North Star Metric', 'Figma', 'JTBD'],
                topics: ['Customer discovery interviews & personas', 'Defining North Star metrics and input KPIs', 'Low-fidelity prototyping in Figma', 'Product Opportunity Assessment frameworks'],
                resources: ['Inspired by Marty Cagan', 'Lenny\'s Product Newsletter']
            },
            {
                id: 'pm_2',
                title: 'Product Execution, PRDs & Agile Delivery',
                status: 'inprogress',
                desc: 'Writing bulletproof PRDs, backlog grooming, sprint planning, and engineering stakeholder management.',
                tags: ['PRD', 'Jira', 'Agile', 'Sprint Planning'],
                topics: ['Drafting Product Requirement Documents (PRDs)', 'Sprint ceremonies, backlog grooming, velocity tracking', 'Technical tradeoffs and API understanding for PMs', 'Go-To-Market (GTM) launch checklists'],
                resources: ['Decode and Conquer (Lewis Lin)', 'Reforge Product Leadership Modules']
            }
        ],
        'Cybersecurity': [
            {
                id: 'sec_1',
                title: 'Network Defense, Cryptography & OS Security',
                status: 'completed',
                desc: 'Symmetric/Asymmetric encryption, Wireshark packet capture, SIEM monitoring, and access controls.',
                tags: ['Cryptography', 'Wireshark', 'SIEM', 'Zero Trust'],
                topics: ['AES, RSA, ECC encryption, Public Key Infrastructure (PKI)', 'Network analysis with Wireshark and tcpdump', 'Active Directory, IAM and Zero Trust architecture', 'Log analysis with Splunk / Elastic Security'],
                resources: ['Professor Messer Security+ Series', 'TryHackMe Pre-Security Path']
            },
            {
                id: 'sec_2',
                title: 'Web Application Security & Penetration Testing',
                status: 'inprogress',
                desc: 'OWASP Top 10 vulnerabilities, Burp Suite intercept proxy, SQL injection, XSS, and CSRF.',
                tags: ['OWASP Top 10', 'Burp Suite', 'SQLi', 'XSS', 'Ethical Hacking'],
                topics: ['OWASP Top 10 exploitation and remediation', 'Hands-on proxy testing with Burp Suite', 'Privilege escalation on Linux and Windows', 'Vulnerability scanning with Nmap and Nessus'],
                resources: ['PortSwigger Web Security Academy', 'Hack The Box University Tracks']
            }
        ]
    };

    const INTERVIEW_QUESTIONS = {
        dsa: [
            {
                topic: 'DATA STRUCTURES & ALGORITHMS',
                question: 'How would you detect a cycle in a singly linked list with O(1) extra auxiliary memory?',
                hint: "Think of two pointers moving at different speeds across the linked list (Floyd's Tortoise and Hare algorithm).",
                answer: "Initialize two pointers, `slow` and `fast`, at the head of the list. Move `slow` by 1 step and `fast` by 2 steps in each iteration. If `fast` or `fast.next` reaches null, there is no cycle (return false). If `slow === fast` at any point, a cycle exists (return true). Time Complexity: O(N), Auxiliary Space: O(1)."
            },
            {
                topic: 'DATA STRUCTURES & ALGORITHMS',
                question: 'Explain how you would find the K-th largest element in an unsorted array efficiently without sorting the whole array.',
                hint: "Consider using a Min-Heap of size K or the QuickSelect partitioning algorithm.",
                answer: "1. Min-Heap approach: Maintain a Min-Heap of size K. For each element in the array, add it to heap. If heap size > K, pop the smallest element. The top of the heap will hold the K-th largest element in O(N log K) time and O(K) space.\n2. QuickSelect algorithm: Employs the Hoare/Lomuto partitioning scheme of QuickSort to find the element in average O(N) time with O(1) auxiliary space."
            },
            {
                topic: 'DYNAMIC PROGRAMMING',
                question: 'Given an array of integers representing coin denominations and a total amount, how do you find the minimum number of coins needed to make up that amount?',
                hint: "Define dp[i] as the minimum coins needed for amount i. Formulate the state transition relation.",
                answer: "Use 1D Dynamic Programming. Create array `dp` of size `amount + 1` filled with infinity, with `dp[0] = 0`. Iterate through amounts from 1 to `amount`. For each coin, if `i - coin >= 0`, `dp[i] = min(dp[i], dp[i - coin] + 1)`. If `dp[amount]` is infinity, return -1, otherwise return `dp[amount]`. Time: O(amount * len(coins)), Space: O(amount)."
            }
        ],
        system_design: [
            {
                topic: 'SYSTEM DESIGN',
                question: 'How would you design a scalable URL Shortening service like TinyURL or Bitly capable of handling 100M new URLs per month?',
                hint: "Calculate read/write QPS, choose between Base62 encoding vs MD5 hash with auto-increment ID, and describe caching + database choices.",
                answer: "1. Capacity: 100M writes/month ≈ 40 writes/sec, with 10:1 read ratio ≈ 400 reads/sec.\n2. Key Generation: Use 7-character Base62 string (a-z, A-Z, 0-9) yielding 62^7 = 3.5 trillion unique URLs.\n3. Architecture: Load Balancer -> Web Servers -> Distributed ID Generator (Snowflake/Range allocator) -> NoSQL Key-Value store (DynamoDB/Cassandra) with Redis Cache for top 20% hot links. Use 301/302 HTTP redirects."
            },
            {
                topic: 'SYSTEM DESIGN',
                question: 'Explain the difference between SQL (Relational) and NoSQL databases and when you would select each for a tech platform.',
                hint: "Focus on ACID properties, fixed vs dynamic schemas, vertical vs horizontal scaling, and query complexity.",
                answer: "Choose SQL (PostgreSQL, MySQL) when: Strong ACID guarantees are mandatory (e.g. banking, e-commerce checkouts), data is highly structured with complex relational JOINs, and transactions require strict consistency.\nChoose NoSQL (MongoDB, DynamoDB, Cassandra) when: Storing massive unstructured/semi-structured data, requiring horizontal sharding out of the box, high-velocity writes, or eventual consistency is acceptable (e.g. social feeds, IoT metrics, clickstream analytics)."
            }
        ],
        cs_fundamentals: [
            {
                topic: 'OPERATING SYSTEMS',
                question: 'What is the difference between a Process and a Thread, and what causes a Deadlock?',
                hint: "Think about shared memory space vs isolated memory, and remember the Coffman conditions for deadlocks.",
                answer: "A Process is an executing program instance with its own isolated address space, file descriptors, and memory stack. A Thread is a lightweight execution unit within a process that shares memory and heap with other sibling threads.\nDeadlock occurs when multiple processes are permanently blocked waiting for resources held by each other. Four Coffman conditions must hold: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, 4. Circular Wait."
            },
            {
                topic: 'DATABASE MANAGEMENT SYSTEMS',
                question: 'Explain Database Indexing, how B+ Trees work, and why we avoid indexing every column.',
                hint: "Think about read speed versus write/insert overhead and disk page lookups.",
                answer: "A database index is a data structure (commonly B+ Tree) that speeds up data retrieval without scanning the entire table. In a B+ Tree, keys are kept sorted with high branching factor; internal nodes store routing keys while leaf nodes store pointers to actual records connected by a linked list for fast range queries.\nWe avoid indexing every column because every index incurs storage overhead and slows down INSERT, UPDATE, and DELETE operations, as all index trees must be modified on write."
            }
        ],
        behavioral: [
            {
                topic: 'BEHAVIORAL (STAR METHOD)',
                question: 'Tell me about a time when you faced a major technical disagreement or roadblock in a team project. How did you resolve it?',
                hint: "Structure your story with Situation, Task, Action, and Result (STAR). Emphasize empathy, data-driven decisions, and collaboration.",
                answer: "Situation: During a 4-person capstone project, two teammates disagreed on using SQL vs Firebase.\nTask: As the team lead, I needed to keep the timeline on track while picking the right architecture.\nAction: I facilitated a 30-minute tradeoff matrix review comparing query needs, latency, and team proficiency. We ran a 1-hour prototype spike.\nResult: We agreed objectively on PostgreSQL with Supabase, finished the project 4 days ahead of deadline, and achieved top score in our department."
            },
            {
                topic: 'BEHAVIORAL (STAR METHOD)',
                question: 'Describe a situation where a project failed or missed a critical deadline. What did you learn and how did you adapt?',
                hint: "Focus on accountability, root cause analysis, and long-term preventative habits.",
                answer: "Situation: In a hackathon, our team failed to deploy our backend in time due to last-minute CORS and environment variable bugs.\nTask: Handle the presentation gracefully and ensure the mistake never repeated.\nAction: I took ownership, presented our local architecture with transparency, and subsequently created automated CI/CD deployment templates for all future projects.\nResult: In our next hackathon, automated deployment was configured on hour 1, and our team won 2nd place overall."
            }
        ]
    };

    const ATS_CHECKLIST_ITEMS = [
        { id: 'ats_1', text: 'Single-page ATS clean format (standard fonts, no columns/tables that break parsers)', checked: true, weight: 15 },
        { id: 'ats_2', text: 'Clear section headers: Education, Skills, Projects, Experience, Certifications', checked: true, weight: 15 },
        { id: 'ats_3', text: 'Action-verb-led project bullets using the Google XYZ formula: "Accomplished [X] as measured by [Y], by doing [Z]"', checked: true, weight: 20 },
        { id: 'ats_4', text: 'Live clickable GitHub repo links and hosted web demo URLs for all portfolio projects', checked: true, weight: 15 },
        { id: 'ats_5', text: 'Included relevant technical keywords matching target Job Description (e.g. React, Node.js, Docker, SQL)', checked: false, weight: 15 },
        { id: 'ats_6', text: 'Quantified impact with numbers (e.g. "reduced latency by 35%", "handled 1,000+ test records")', checked: false, weight: 20 }
    ];

    const DEFAULT_PLANNER_DAYS = [
        { day: 'Monday', focus: 'DSA & LeetCode Sprint', time: '2.5 hrs', tasks: ['Sliding Window & 2 Pointers (3 Problems)', 'Review Time Complexity notes'] },
        { day: 'Tuesday', focus: 'CS Core & Databases', time: '2.0 hrs', tasks: ['OS Process Synchronization & Semaphores', 'SQL Window Functions Practice'] },
        { day: 'Wednesday', focus: 'Project & Portfolio Sprint', time: '3.0 hrs', tasks: ['Build backend auth routes with JWT', 'Write unit tests for REST endpoints'] },
        { day: 'Thursday', focus: 'System Design & Architecture', time: '2.0 hrs', tasks: ['Design Rate Limiter (Token Bucket algo)', 'Study Redis caching patterns'] },
        { day: 'Friday', focus: 'Aptitude & Speed Drills', time: '1.5 hrs', tasks: ['Quantitative Time & Work problem sets', 'Data Interpretation sets'] },
        { day: 'Saturday', focus: 'Mock Interview Simulator', time: '2.0 hrs', tasks: ['Run 2 Technical rounds on CareerMap AI', 'Practice 1 STAR behavioral answer'] },
        { day: 'Sunday', focus: 'Weekly Review & Roadmap Sync', time: '1.0 hrs', tasks: ['Audit completed milestones', 'Update ATS Resume & GitHub commits'] }
    ];

    const DEFAULT_TASKS = [
        { id: 't1', text: 'Master at least one Core Language (C++, Java, or Python)', category: 'Core Tech & DSA', priority: 'High', checked: true },
        { id: 't2', text: 'Complete 150+ LeetCode DSA curated placement problems', category: 'Core Tech & DSA', priority: 'High', checked: false },
        { id: 't3', text: 'Master OS, DBMS, Computer Networks & OOP Concepts', category: 'CS Core & System Design', priority: 'High', checked: false },
        { id: 't4', text: 'Design and deploy 2 production-grade Full-Stack/ML projects', category: 'Projects & Profile', priority: 'High', checked: true },
        { id: 't5', text: 'Build a 1-page ATS-optimized Resume with live links', category: 'Projects & Profile', priority: 'Medium', checked: true },
        { id: 't6', text: 'Polish GitHub repositories (Clean READMEs, Architecture diagrams)', category: 'Projects & Profile', priority: 'Medium', checked: false },
        { id: 't7', text: 'Complete 50+ Quantitative Aptitude & Reasoning questions', category: 'Aptitude & Interviews', priority: 'Medium', checked: false },
        { id: 't8', text: 'Complete 5+ Technical & Behavioral Mock Interview rounds', category: 'Aptitude & Interviews', priority: 'High', checked: false },
        { id: 't9', text: 'Review Company-Specific past interview papers (Amazon, TCS, Google)', category: 'Aptitude & Interviews', priority: 'High', checked: false }
    ];

    // ==========================================================================
    // 2. State Management & LocalStorage Engine
    // ==========================================================================

    const getState = () => {
        try {
            return JSON.parse(localStorage.getItem('careerTrackState')) || {};
        } catch (e) {
            return {};
        }
    };

    const saveState = (patch) => {
        const current = getState();
        const updated = { ...current, ...patch };
        localStorage.setItem('careerTrackState', JSON.stringify(updated));
        return updated;
    };

    const initState = () => {
        const state = getState();
        if (!state.tasks || !Array.isArray(state.tasks) || state.tasks.length === 0) {
            state.tasks = DEFAULT_TASKS;
        }
        if (!state.history || !Array.isArray(state.history)) {
            state.history = [
                { date: new Date().toISOString(), action: 'Welcome', text: 'Initialized CareerMap Pro placement cockpit.' }
            ];
        }
        if (!state.streaks) {
            state.streaks = { current: 3, longest: 7, lastActive: new Date().toDateString() };
        }
        if (!state.achievements) {
            state.achievements = ['first_step', 'streak_3'];
        }
        if (!state.atsChecklist) {
            state.atsChecklist = ATS_CHECKLIST_ITEMS;
        }
        if (!state.plannerSchedule) {
            state.plannerSchedule = DEFAULT_PLANNER_DAYS;
        }
        if (!state.activeTrack) {
            state.activeTrack = 'Software Engineer';
        }
        if (!state.profile) {
            state.profile = {
                name: 'Alex Johnson',
                degree: 'B.Tech Computer Science & Engineering',
                gpa: '8.8 / 10.0',
                goalPath: 'Software Engineer',
                goalRole: 'SDE-1 @ Tier-1 Tech Company',
                goalTimeline: '2026-12'
            };
        }

        // Default to white theme
        if (!state.theme || state.theme === 'light') {
            state.theme = 'light';
            document.body.removeAttribute('data-theme');
            const themeBtn = document.getElementById('theme-toggle-btn');
            if (themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        } else if (state.theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            const themeBtn = document.getElementById('theme-toggle-btn');
            if (themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }

        saveState(state);
    };

    // Toast Notification System
    const showToast = (message, icon = 'fa-circle-check', color = 'var(--primary-light)') => {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fa-solid ${icon}" style="color: ${color}; font-size: 1.1rem;"></i><span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    };

    // Activity Logger
    const logActivity = (action, text) => {
        const state = getState();
        const date = new Date().toISOString();
        if (!state.history) state.history = [];
        state.history.unshift({ date, action, text });
        if (state.history.length > 60) state.history.pop();

        // Streak check
        const todayStr = new Date().toDateString();
        if (!state.streaks) state.streaks = { current: 1, longest: 1, lastActive: todayStr };
        if (state.streaks.lastActive !== todayStr) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (state.streaks.lastActive === yesterday.toDateString()) {
                state.streaks.current += 1;
            } else {
                state.streaks.current = 1;
            }
            state.streaks.lastActive = todayStr;
            if (state.streaks.current > state.streaks.longest) {
                state.streaks.longest = state.streaks.current;
            }
        }

        saveState(state);
        checkBadges();
        updateUI();
    };

    // Trigger celebration confetti
    const triggerConfetti = () => {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 75,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    };

    // ==========================================================================
    // 3. Navigation & Tab Switcher
    // ==========================================================================

    const navItems = document.querySelectorAll('.nav-links li');
    const viewSections = document.querySelectorAll('.view-section');
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');

    const subtitles = {
        dashboard: 'Track your placement journey, competency matrix, and interview readiness.',
        roadmap: 'Interactive step-by-step master curriculum tailored to your target job role.',
        readiness: 'Audit and track every critical interview topic across DSA, CS Fundamentals, and Aptitude.',
        interview: 'Practice live AI-curated technical, system design, and behavioral interview questions.',
        planner: 'Structure your focus days to balance DSA, Projects, Mock Interviews, and Core CS.',
        resume: 'Audit your resume against Fortune 500 recruiter ATS screening criteria.',
        profile: 'Manage your academic credentials, target companies, and data backups.',
        analytics: 'Review your preparation consistency, velocity trends, and unlocked trophies.'
    };

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const targetId = item.getAttribute('data-target');
            viewSections.forEach(sec => {
                if (sec.id === targetId) {
                    sec.classList.remove('hidden');
                } else {
                    sec.classList.add('hidden');
                }
            });

            if (pageTitle) {
                pageTitle.textContent = item.querySelector('span').textContent;
            }
            if (pageSubtitle && subtitles[targetId]) {
                pageSubtitle.textContent = subtitles[targetId];
            }

            // Trigger chart resize if navigating to dashboard or analytics
            if (targetId === 'dashboard' || targetId === 'analytics') {
                setTimeout(updateCharts, 50);
            }
        });
    });

    // Theme toggle button
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.body.removeAttribute('data-theme');
                themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
                saveState({ theme: 'light' });
                showToast('Switched to White Theme', 'fa-sun');
            } else {
                document.body.setAttribute('data-theme', 'dark');
                themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
                saveState({ theme: 'dark' });
                showToast('Switched to Dark Theme', 'fa-moon');
            }
            updateCharts();
        });
    }

    // Quick Add Task Button
    const quickAddBtn = document.getElementById('quick-add-task-btn');
    if (quickAddBtn) {
        quickAddBtn.addEventListener('click', () => {
            const readinessNav = document.querySelector('[data-target="readiness"]');
            if (readinessNav) readinessNav.click();
            const input = document.getElementById('custom-goal-input');
            if (input) {
                input.focus();
                input.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // ==========================================================================
    // 4. Pomodoro Focus Timer Cockpit
    // ==========================================================================

    let pomodoroInterval = null;
    let pomodoroSeconds = 25 * 60;
    const timerDisplay = document.getElementById('timer-display');
    const timerStartBtn = document.getElementById('timer-start');
    const timerPauseBtn = document.getElementById('timer-pause');
    const timerResetBtn = document.getElementById('timer-reset');

    const updateTimerDisplay = () => {
        const m = Math.floor(pomodoroSeconds / 60).toString().padStart(2, '0');
        const s = (pomodoroSeconds % 60).toString().padStart(2, '0');
        if (timerDisplay) timerDisplay.textContent = `${m}:${s}`;
    };

    if (timerStartBtn && timerPauseBtn && timerResetBtn) {
        timerStartBtn.addEventListener('click', () => {
            if (!pomodoroInterval) {
                showToast('Pomodoro Sprint Started! Stay focused.', 'fa-stopwatch', 'var(--accent-emerald)');
                pomodoroInterval = setInterval(() => {
                    pomodoroSeconds--;
                    updateTimerDisplay();
                    if (pomodoroSeconds <= 0) {
                        clearInterval(pomodoroInterval);
                        pomodoroInterval = null;
                        pomodoroSeconds = 25 * 60;
                        updateTimerDisplay();
                        logActivity('Focus Session Completed', 'Completed 25-minute uninterrupted study sprint.');
                        triggerConfetti();
                        showToast('Sprint Finished! Take a 5-minute break.', 'fa-award', 'var(--accent-emerald)');
                    }
                }, 1000);
            }
        });

        timerPauseBtn.addEventListener('click', () => {
            if (pomodoroInterval) {
                clearInterval(pomodoroInterval);
                pomodoroInterval = null;
                showToast('Timer Paused', 'fa-pause', 'var(--accent-amber)');
            }
        });

        timerResetBtn.addEventListener('click', () => {
            clearInterval(pomodoroInterval);
            pomodoroInterval = null;
            pomodoroSeconds = 25 * 60;
            updateTimerDisplay();
            showToast('Timer Reset', 'fa-rotate-right');
        });
    }

    // ==========================================================================
    // 5. Dynamic Interactive Roadmap Tree
    // ==========================================================================

    const roadmapContainer = document.getElementById('roadmap-nodes-container');
    const trackSelect = document.getElementById('roadmap-track-select');
    const roadmapTitle = document.getElementById('roadmap-title');

    // Modal elements
    const nodeModal = document.getElementById('node-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-node-title');
    const modalDesc = document.getElementById('modal-node-desc');
    const modalTopics = document.getElementById('modal-node-topics');
    const modalResources = document.getElementById('modal-node-resources');
    const modalAddBtn = document.getElementById('modal-add-tasks-btn');
    let activeModalStage = null;

    const renderRoadmap = (trackName) => {
        if (!roadmapContainer) return;
        const stages = DEFAULT_TRACKS[trackName] || DEFAULT_TRACKS['Software Engineer'];
        roadmapContainer.innerHTML = '';

        if (roadmapTitle) roadmapTitle.textContent = `${trackName} Master Roadmap`;

        stages.forEach((stage, idx) => {
            const card = document.createElement('div');
            card.className = 'roadmap-step-card';
            card.setAttribute('data-id', stage.id);

            let iconClass = 'fa-solid fa-lock';
            let nodeStatusClass = 'node-locked';
            let statusBadge = '<span class="priority-badge priority-low">Upcoming</span>';

            if (stage.status === 'completed') {
                iconClass = 'fa-solid fa-check';
                nodeStatusClass = 'node-completed';
                statusBadge = '<span class="priority-badge priority-low" style="background: rgba(16,185,129,0.2); color:#10b981;">Completed</span>';
            } else if (stage.status === 'inprogress') {
                iconClass = 'fa-solid fa-bolt';
                nodeStatusClass = 'node-inprogress';
                statusBadge = '<span class="priority-badge priority-high" style="background: rgba(99,102,241,0.25); color:#818cf8;">In Progress</span>';
            }

            card.innerHTML = `
                <div class="step-node-bubble ${nodeStatusClass}">
                    <i class="${iconClass}"></i>
                </div>
                <div class="step-card-content">
                    <div class="step-header">
                        <h4>Phase ${idx + 1}: ${stage.title}</h4>
                        ${statusBadge}
                    </div>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">${stage.desc}</p>
                    <div class="step-tags">
                        ${stage.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                openNodeModal(stage);
            });

            roadmapContainer.appendChild(card);
        });
    };

    const openNodeModal = (stage) => {
        activeModalStage = stage;
        if (!nodeModal) return;
        if (modalTitle) modalTitle.textContent = stage.title;
        if (modalDesc) modalDesc.textContent = stage.desc;

        if (modalTopics) {
            modalTopics.innerHTML = stage.topics.map(t => `<li style="margin-bottom: 4px;">${t}</li>`).join('');
        }
        if (modalResources) {
            modalResources.innerHTML = stage.resources.map(r => `<li style="margin-bottom: 4px;"><i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.75rem; margin-right:6px;"></i>${r}</li>`).join('');
        }

        nodeModal.classList.add('active');
    };

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            if (nodeModal) nodeModal.classList.remove('active');
        });
    }

    if (nodeModal) {
        nodeModal.addEventListener('click', (e) => {
            if (e.target === nodeModal) nodeModal.classList.remove('active');
        });
    }

    if (modalAddBtn) {
        modalAddBtn.addEventListener('click', () => {
            if (!activeModalStage) return;
            const state = getState();
            const existingTexts = new Set(state.tasks.map(t => t.text.toLowerCase()));
            let addedCount = 0;

            activeModalStage.topics.forEach((topic) => {
                if (!existingTexts.has(topic.toLowerCase())) {
                    state.tasks.push({
                        id: 't_' + Date.now() + Math.random().toString(36).substr(2, 4),
                        text: topic,
                        category: 'Core Tech & DSA',
                        priority: 'High',
                        checked: false
                    });
                    addedCount++;
                }
            });

            saveState(state);
            nodeModal.classList.remove('active');
            logActivity('Roadmap Synced', `Added ${addedCount} curriculum topics from ${activeModalStage.title} to Checklist.`);
            showToast(`Added ${addedCount} topics to your placement checklist!`, 'fa-circle-plus');
            triggerConfetti();
            renderTasks();
            updateUI();
        });
    }

    if (trackSelect) {
        trackSelect.addEventListener('change', (e) => {
            const selectedTrack = e.target.value;
            saveState({ activeTrack: selectedTrack });
            renderRoadmap(selectedTrack);
            showToast(`Loaded ${selectedTrack} Pathway`, 'fa-route');
        });
    }

    // ==========================================================================
    // 6. Placement Readiness Checklist & Tasks Engine
    // ==========================================================================

    const taskGrid = document.getElementById('dynamic-checklist-grid');
    const searchTaskInput = document.getElementById('search-task');
    const filterCatSelect = document.getElementById('filter-category');
    const filterStatusSelect = document.getElementById('filter-status');
    const filterPrioritySelect = document.getElementById('filter-priority');

    const customGoalInput = document.getElementById('custom-goal-input');
    const customGoalCategory = document.getElementById('custom-goal-category');
    const customGoalPriority = document.getElementById('custom-goal-priority');
    const addGoalBtn = document.getElementById('add-goal-btn');

    const renderTasks = () => {
        if (!taskGrid) return;
        const state = getState();
        const tasks = state.tasks || [];

        const query = (searchTaskInput ? searchTaskInput.value : '').toLowerCase().trim();
        const catFilter = filterCatSelect ? filterCatSelect.value : 'All';
        const statusFilter = filterStatusSelect ? filterStatusSelect.value : 'All';
        const priorityFilter = filterPrioritySelect ? filterPrioritySelect.value : 'All';

        const filtered = tasks.filter(t => {
            const matchesQuery = t.text.toLowerCase().includes(query);
            const matchesCat = (catFilter === 'All') || (t.category === catFilter);
            const matchesStatus = (statusFilter === 'All') ||
                (statusFilter === 'Completed' && t.checked) ||
                (statusFilter === 'Pending' && !t.checked);
            const matchesPriority = (priorityFilter === 'All') || (t.priority === priorityFilter);
            return matchesQuery && matchesCat && matchesStatus && matchesPriority;
        });

        taskGrid.innerHTML = '';

        if (filtered.length === 0) {
            taskGrid.innerHTML = `
                <div class="glass" style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
                    <i class="fa-solid fa-list-check" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--text-subtle);"></i>
                    <h3>No matching preparation tasks found</h3>
                    <p style="font-size: 0.9rem; margin-top: 4px;">Adjust your filters or add a new topic to your roadmap checklist above.</p>
                </div>
            `;
            return;
        }

        // Group by category
        const categories = [...new Set(filtered.map(t => t.category))];

        categories.forEach(cat => {
            const groupWrap = document.createElement('div');
            groupWrap.className = 'glass';
            groupWrap.style.marginBottom = '20px';

            const catTasks = filtered.filter(t => t.category === cat);
            const compCount = catTasks.filter(t => t.checked).length;
            const pct = Math.round((compCount / catTasks.length) * 100);

            groupWrap.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid var(--glass-border); padding-bottom: 12px;">
                    <div>
                        <h3 style="font-size: 1.1rem; font-weight: 700;">${cat}</h3>
                        <span style="font-size: 0.8rem; color: var(--text-muted);">${compCount} of ${catTasks.length} topics mastered</span>
                    </div>
                    <span class="priority-badge ${pct === 100 ? 'priority-low' : 'priority-medium'}">${pct}% Complete</span>
                </div>
                <div class="task-list-items"></div>
            `;

            const listContainer = groupWrap.querySelector('.task-list-items');

            catTasks.forEach(task => {
                const item = document.createElement('div');
                item.className = `task-item ${task.checked ? 'task-completed' : ''}`;
                
                let pClass = 'priority-low';
                if (task.priority === 'High') pClass = 'priority-high';
                if (task.priority === 'Medium') pClass = 'priority-medium';

                item.innerHTML = `
                    <input type="checkbox" class="task-checkbox" ${task.checked ? 'checked' : ''} data-id="${task.id}">
                    <span class="task-text">${task.text}</span>
                    <span class="priority-badge ${pClass}">${task.priority}</span>
                    <button class="task-delete-btn" data-id="${task.id}" title="Delete Task"><i class="fa-regular fa-trash-can"></i></button>
                `;

                // Toggle Checkbox
                const checkbox = item.querySelector('.task-checkbox');
                checkbox.addEventListener('change', (e) => {
                    const isChecked = e.target.checked;
                    toggleTask(task.id, isChecked);
                });

                // Delete Button
                const delBtn = item.querySelector('.task-delete-btn');
                delBtn.addEventListener('click', () => {
                    deleteTask(task.id, task.text);
                });

                listContainer.appendChild(item);
            });

            taskGrid.appendChild(groupWrap);
        });
    };

    const toggleTask = (taskId, checked) => {
        const state = getState();
        const target = state.tasks.find(t => t.id === taskId);
        if (target) {
            target.checked = checked;
            saveState(state);
            if (checked) {
                logActivity('Completed Task', target.text);
                showToast(`Mastered: "${target.text.substring(0, 32)}..."`, 'fa-circle-check', 'var(--accent-emerald)');
                triggerConfetti();
            } else {
                logActivity('Reopened Task', target.text);
            }
            renderTasks();
            updateUI();
        }
    };

    const deleteTask = (taskId, text) => {
        const state = getState();
        state.tasks = state.tasks.filter(t => t.id !== taskId);
        saveState(state);
        logActivity('Removed Task', text);
        showToast('Topic removed from checklist', 'fa-trash-can', 'var(--accent-rose)');
        renderTasks();
        updateUI();
    };

    // Filter Listeners
    if (searchTaskInput) searchTaskInput.addEventListener('input', renderTasks);
    if (filterCatSelect) filterCatSelect.addEventListener('change', renderTasks);
    if (filterStatusSelect) filterStatusSelect.addEventListener('change', renderTasks);
    if (filterPrioritySelect) filterPrioritySelect.addEventListener('change', renderTasks);

    // Add Goal Listener
    if (addGoalBtn && customGoalInput) {
        addGoalBtn.addEventListener('click', () => {
            const text = customGoalInput.value.trim();
            if (!text) {
                showToast('Please enter a valid preparation topic', 'fa-triangle-exclamation', 'var(--accent-amber)');
                return;
            }

            const state = getState();
            const newTask = {
                id: 't_' + Date.now(),
                text: text,
                category: customGoalCategory ? customGoalCategory.value : 'Core Tech & DSA',
                priority: customGoalPriority ? customGoalPriority.value : 'High',
                checked: false
            };

            state.tasks.unshift(newTask);
            saveState(state);
            customGoalInput.value = '';
            logActivity('Created Topic', text);
            showToast('New topic added to checklist!', 'fa-plus', 'var(--accent-emerald)');
            renderTasks();
            updateUI();
        });
    }

    // ==========================================================================
    // 7. Mock Interview Simulator Engine
    // ==========================================================================

    let activeInterviewCat = 'dsa';
    let activeQuestion = INTERVIEW_QUESTIONS.dsa[0];
    let interviewTimerInterval = null;
    let interviewSeconds = 0;
    let userRating = 0;

    const interviewCatCards = document.querySelectorAll('.interview-category-card');
    const newQuestionBtn = document.getElementById('new-question-btn');
    const interviewTopicTag = document.getElementById('interview-topic-tag');
    const interviewQuestionText = document.getElementById('interview-question-text');
    const interviewTimerBadge = document.getElementById('interview-timer');
    const hintBtn = document.getElementById('interview-hint-btn');
    const hintBox = document.getElementById('interview-hint-box');
    const revealBtn = document.getElementById('interview-reveal-btn');
    const answerBox = document.getElementById('interview-answer-box');
    const studentNotes = document.getElementById('interview-student-notes');
    const ratingStars = document.querySelectorAll('#interview-rating-stars i');
    const logInterviewBtn = document.getElementById('log-interview-btn');

    const startInterviewTimer = () => {
        clearInterval(interviewTimerInterval);
        interviewSeconds = 0;
        if (interviewTimerBadge) interviewTimerBadge.innerHTML = '<i class="fa-regular fa-clock"></i> 00:00';
        interviewTimerInterval = setInterval(() => {
            interviewSeconds++;
            const m = Math.floor(interviewSeconds / 60).toString().padStart(2, '0');
            const s = (interviewSeconds % 60).toString().padStart(2, '0');
            if (interviewTimerBadge) interviewTimerBadge.innerHTML = `<i class="fa-regular fa-clock"></i> ${m}:${s}`;
        }, 1000);
    };

    const loadInterviewQuestion = () => {
        const pool = INTERVIEW_QUESTIONS[activeInterviewCat] || INTERVIEW_QUESTIONS.dsa;
        const randomQ = pool[Math.floor(Math.random() * pool.length)];
        activeQuestion = randomQ;

        if (interviewTopicTag) interviewTopicTag.textContent = randomQ.topic;
        if (interviewQuestionText) interviewQuestionText.textContent = randomQ.question;

        if (hintBox) {
            hintBox.innerHTML = `<strong>💡 Hint:</strong> ${randomQ.hint}`;
            hintBox.classList.add('hidden');
        }
        if (answerBox) {
            answerBox.innerHTML = `<strong>🎯 Model Solution:</strong><br>${randomQ.answer.replace(/\n/g, '<br>')}`;
            answerBox.classList.add('hidden');
        }
        if (studentNotes) studentNotes.value = '';

        // Reset star ratings
        userRating = 0;
        ratingStars.forEach(star => {
            star.classList.remove('fa-solid');
            star.classList.add('fa-regular');
        });

        startInterviewTimer();
    };

    interviewCatCards.forEach(card => {
        card.addEventListener('click', () => {
            interviewCatCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            activeInterviewCat = card.getAttribute('data-cat');
            loadInterviewQuestion();
            showToast(`Switched to ${activeInterviewCat.toUpperCase()} questions`, 'fa-brain');
        });
    });

    if (newQuestionBtn) {
        newQuestionBtn.addEventListener('click', () => {
            loadInterviewQuestion();
            showToast('New question loaded', 'fa-shuffle');
        });
    }

    if (hintBtn && hintBox) {
        hintBtn.addEventListener('click', () => {
            hintBox.classList.toggle('hidden');
        });
    }

    if (revealBtn && answerBox) {
        revealBtn.addEventListener('click', () => {
            answerBox.classList.toggle('hidden');
        });
    }

    ratingStars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-rating'), 10);
            userRating = rating;
            ratingStars.forEach((s, idx) => {
                if (idx < rating) {
                    s.classList.remove('fa-regular');
                    s.classList.add('fa-solid');
                } else {
                    s.classList.remove('fa-solid');
                    s.classList.add('fa-regular');
                }
            });
        });
    });

    if (logInterviewBtn) {
        logInterviewBtn.addEventListener('click', () => {
            clearInterval(interviewTimerInterval);
            const notes = studentNotes ? studentNotes.value.trim() : '';
            logActivity('Mock Interview Completed', `Practiced "${activeQuestion.topic}": ${activeQuestion.question.substring(0, 40)}... (Rating: ${userRating}/5 Stars, Time: ${Math.floor(interviewSeconds/60)}m ${interviewSeconds%60}s)`);
            triggerConfetti();
            showToast('Interview practice session logged!', 'fa-trophy', 'var(--accent-emerald)');
            setTimeout(loadInterviewQuestion, 1200);
        });
    }

    // ==========================================================================
    // 8. Weekly Study Planner Schedule Engine
    // ==========================================================================

    const plannerContainer = document.getElementById('planner-matrix-container');
    const addScheduleBtn = document.getElementById('add-schedule-block-btn');

    const renderPlanner = () => {
        if (!plannerContainer) return;
        const state = getState();
        const schedule = state.plannerSchedule || DEFAULT_PLANNER_DAYS;
        plannerContainer.innerHTML = '';

        schedule.forEach((item, idx) => {
            const col = document.createElement('div');
            col.className = 'day-column';
            col.innerHTML = `
                <div class="day-header">
                    <span class="day-title">${item.day}</span>
                    <span class="tech-tag" style="color: var(--accent-cyan);">${item.time}</span>
                </div>
                <div style="font-size: 0.85rem; font-weight: 600; color: var(--primary-light);">${item.focus}</div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    ${item.tasks.map(t => `<div class="study-slot"><i class="fa-solid fa-angle-right" style="margin-right: 6px; color: var(--primary);"></i>${t}</div>`).join('')}
                </div>
            `;
            plannerContainer.appendChild(col);
        });
    };

    if (addScheduleBtn) {
        addScheduleBtn.addEventListener('click', () => {
            const day = prompt('Enter Day of the week (e.g. Monday, Thursday):', 'Saturday');
            if (!day) return;
            const focus = prompt('Enter Focus Area (e.g. Graph Algorithms Practice):', 'Graphs & Trees Sprint');
            if (!focus) return;
            const task1 = prompt('Enter key task:', 'Solve 3 Hard LeetCode problems');
            if (!task1) return;

            const state = getState();
            if (!state.plannerSchedule) state.plannerSchedule = DEFAULT_PLANNER_DAYS;
            state.plannerSchedule.push({
                day: day,
                focus: focus,
                time: '2.0 hrs',
                tasks: [task1]
            });
            saveState(state);
            renderPlanner();
            showToast('Study slot added to weekly schedule', 'fa-calendar-plus');
        });
    }

    // ==========================================================================
    // 9. ATS Resume Quality Auditor Engine
    // ==========================================================================

    const atsContainer = document.getElementById('ats-checklist-container');
    const atsScoreDisplay = document.getElementById('ats-score-display');
    const atsAssessmentText = document.getElementById('ats-assessment-text');

    const renderATSChecklist = () => {
        if (!atsContainer) return;
        const state = getState();
        const items = state.atsChecklist || ATS_CHECKLIST_ITEMS;
        atsContainer.innerHTML = '';

        let earnedScore = 0;
        let totalPossible = 0;

        items.forEach(item => {
            totalPossible += item.weight;
            if (item.checked) earnedScore += item.weight;

            const checkCard = document.createElement('div');
            checkCard.className = 'ats-check-item';
            checkCard.innerHTML = `
                <input type="checkbox" class="task-checkbox" ${item.checked ? 'checked' : ''} data-id="${item.id}" style="margin-top: 2px;">
                <div style="flex: 1;">
                    <div style="font-size: 0.92rem; font-weight: 600; ${item.checked ? 'color: var(--text-main);' : 'color: var(--text-muted);'}">${item.text}</div>
                    <span style="font-size: 0.75rem; color: var(--accent-cyan); font-family: var(--font-mono);">+${item.weight}% ATS Score</span>
                </div>
            `;

            const cb = checkCard.querySelector('input');
            cb.addEventListener('change', (e) => {
                item.checked = e.target.checked;
                saveState(state);
                logActivity(item.checked ? 'Optimized Resume Criteria' : 'Unchecked Resume Criteria', item.text);
                renderATSChecklist();
                if (item.checked) showToast('ATS criteria verified!', 'fa-file-circle-check', 'var(--accent-emerald)');
            });

            atsContainer.appendChild(checkCard);
        });

        const finalScore = Math.round((earnedScore / totalPossible) * 100);
        if (atsScoreDisplay) atsScoreDisplay.textContent = `${finalScore}%`;

        if (atsAssessmentText) {
            if (finalScore >= 90) {
                atsAssessmentText.textContent = "Outstanding! Your resume structure is in the top 5% Tier. High likelihood of clearing automated ATS filters for FAANG/Unicorn recruiters.";
            } else if (finalScore >= 70) {
                atsAssessmentText.textContent = "Strong standard resume. Address the unchecked action verbs and quantifiable metrics above to maximize your interview callback rate.";
            } else {
                atsAssessmentText.textContent = "Resume requires attention. Format single column, include metrics, and incorporate target job role keywords.";
            }
        }
    };

    // ==========================================================================
    // 10. Chart.js Analytics Visualization (Radar, Doughnut & Velocity)
    // ==========================================================================

    let radarChartInstance = null;
    let doughnutChartInstance = null;
    let velocityChartInstance = null;

    const initCharts = () => {
        const state = getState();
        const tasks = state.tasks || [];
        const isLight = document.body.getAttribute('data-theme') === 'light';

        const textColor = isLight ? '#475569' : '#94a3b8';
        const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';

        // 1. Radar Chart (Competency Matrix)
        const radarCanvas = document.getElementById('competencyRadarChart');
        if (radarCanvas) {
            const ctx = radarCanvas.getContext('2d');
            if (radarChartInstance) radarChartInstance.destroy();

            // Calculate competency percentages across categories
            const calcCatPct = (cat) => {
                const subset = tasks.filter(t => t.category.includes(cat) || cat.includes(t.category));
                if (subset.length === 0) return 60;
                return Math.round((subset.filter(t => t.checked).length / subset.length) * 100);
            };

            const dsaScore = Math.max(calcCatPct('DSA'), 40);
            const csCoreScore = Math.max(calcCatPct('CS Core'), 35);
            const projScore = Math.max(calcCatPct('Projects'), 50);
            const aptScore = Math.max(calcCatPct('Aptitude'), 30);
            const intScore = Math.max(calcCatPct('Interviews'), 45);

            radarChartInstance = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['DSA & Algorithms', 'CS Fundamentals', 'Projects & Profile', 'Aptitude & Logic', 'System Design', 'Behavioral STAR'],
                    datasets: [{
                        label: 'Candidate Readiness Level',
                        data: [dsaScore, csCoreScore, projScore, aptScore, 55, intScore],
                        backgroundColor: 'rgba(79, 70, 229, 0.18)',
                        borderColor: '#4f46e5',
                        borderWidth: 2,
                        pointBackgroundColor: '#0ea5e9',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: '#4f46e5'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            angleLines: { color: gridColor },
                            grid: { color: gridColor },
                            pointLabels: {
                                color: textColor,
                                font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' }
                            },
                            ticks: { display: false, min: 0, max: 100 }
                        }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        }

        // 2. Doughnut Chart (Category Completion Split)
        const doughnutCanvas = document.getElementById('categoryDoughnutChart');
        if (doughnutCanvas) {
            const ctx = doughnutCanvas.getContext('2d');
            if (doughnutChartInstance) doughnutChartInstance.destroy();

            const categories = ['Core Tech & DSA', 'CS Core & System Design', 'Projects & Profile', 'Aptitude & Interviews'];
            const completedCounts = categories.map(cat => tasks.filter(t => t.category === cat && t.checked).length);
            const totalTasks = tasks.length || 1;

            doughnutChartInstance = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: categories,
                    datasets: [{
                        data: completedCounts.map(c => Math.max(c, 1)),
                        backgroundColor: ['#4f46e5', '#0ea5e9', '#10b981', '#f59e0b'],
                        borderWidth: 0,
                        hoverOffset: 6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: textColor,
                                font: { family: 'Plus Jakarta Sans', size: 11, weight: '500' },
                                boxWidth: 10,
                                padding: 12
                            }
                        }
                    },
                    cutout: '74%'
                }
            });
        }

        // 3. Velocity Line Chart (14-Day Velocity)
        const velocityCanvas = document.getElementById('velocityTrendChart');
        if (velocityCanvas) {
            const ctx = velocityCanvas.getContext('2d');
            if (velocityChartInstance) velocityChartInstance.destroy();

            const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13', 'Today'];
            const dummyVelocity = [2, 3, 1, 4, 3, 5, 2, 6, 4, 5, 7, 6, 8, Math.max(state.history ? state.history.length % 10 : 4, 3)];

            velocityChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: days,
                    datasets: [{
                        label: 'Study Hours & Tasks Completed',
                        data: dummyVelocity,
                        borderColor: '#0ea5e9',
                        backgroundColor: 'rgba(14, 165, 233, 0.08)',
                        borderWidth: 2.5,
                        fill: true,
                        tension: 0.35,
                        pointBackgroundColor: '#4f46e5',
                        pointBorderColor: '#fff',
                        pointRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: { grid: { color: gridColor }, ticks: { color: textColor } },
                        y: { grid: { color: gridColor }, ticks: { color: textColor, stepSize: 2 } }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        }
    };

    const updateCharts = () => {
        initCharts();
    };

    // ==========================================================================
    // 11. Dashboard Metrics, Badges & AI Recommendation Engine
    // ==========================================================================

    const checkBadges = () => {
        const state = getState();
        const tasks = state.tasks || [];
        const completed = tasks.filter(t => t.checked).length;
        const total = tasks.length || 1;
        const pct = Math.round((completed / total) * 100);

        if (!state.achievements) state.achievements = [];

        const addBadge = (id) => {
            if (!state.achievements.includes(id)) {
                state.achievements.push(id);
                showToast(`🏆 New Trophy Unlocked!`, 'fa-trophy', 'var(--accent-amber)');
                triggerConfetti();
            }
        };

        if (completed >= 1) addBadge('first_step');
        if (state.streaks && state.streaks.current >= 3) addBadge('streak_3');
        if (state.streaks && state.streaks.current >= 7) addBadge('streak_7');
        if (pct >= 50) addBadge('halfway_there');
        if (pct === 100) addBadge('interview_ready');

        saveState(state);
    };

    const updateUI = () => {
        const state = getState();
        const tasks = state.tasks || [];
        const total = tasks.length;
        const completed = tasks.filter(t => t.checked).length;
        const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

        // Update Gauges & Badges
        const scoreVal = document.getElementById('dashboard-progress-value');
        if (scoreVal) scoreVal.textContent = `${pct}%`;

        const topbarLabel = document.getElementById('topbar-readiness-label');
        if (topbarLabel) topbarLabel.textContent = `Readiness: ${pct}%`;

        const checklistPct = document.getElementById('checklist-progress-text');
        if (checklistPct) checklistPct.textContent = `${pct}% Completed`;

        const gaugeCircle = document.getElementById('gauge-circle-progress');
        if (gaugeCircle) {
            // Circumference is 2 * pi * 58 ≈ 364.4
            const offset = 364 - (pct / 100) * 364;
            gaugeCircle.style.strokeDashoffset = offset;
        }

        const readinessBadge = document.getElementById('readiness-badge');
        if (readinessBadge) {
            readinessBadge.className = 'readiness-badge-pill';
            if (pct < 35) {
                readinessBadge.textContent = 'Novice';
                readinessBadge.classList.add('badge-novice');
            } else if (pct < 70) {
                readinessBadge.textContent = 'Intermediate';
                readinessBadge.classList.add('badge-intermediate');
            } else if (pct < 95) {
                readinessBadge.textContent = 'Advanced';
                readinessBadge.classList.add('badge-advanced');
            } else {
                readinessBadge.textContent = 'Interview Ready (FAANG)';
                readinessBadge.classList.add('badge-ready');
            }
        }

        // Stats Counters
        const statsTasks = document.getElementById('stats-tasks-count');
        if (statsTasks) statsTasks.innerHTML = `${completed}<span style="font-size: 1.2rem; color: var(--text-muted);">/${total}</span>`;

        const statsStreak = document.getElementById('stats-streak-count');
        if (statsStreak) statsStreak.innerHTML = `${state.streaks ? state.streaks.current : 0} <span style="font-size: 1.2rem; color: var(--text-muted);">Days</span>`;

        const analyticsStreak = document.getElementById('analytics-current-streak');
        if (analyticsStreak) analyticsStreak.innerHTML = `${state.streaks ? state.streaks.current : 0} <span style="font-size: 1.1rem; color: var(--text-muted);">Days Current</span>`;

        const analyticsLongest = document.getElementById('analytics-longest-streak');
        if (analyticsLongest) analyticsLongest.textContent = `${state.streaks ? state.streaks.longest : 0} days`;

        // AI Recommendations
        const recText = document.getElementById('personalized-recommendation');
        if (recText) {
            if (total === 0) {
                recText.textContent = "Add topics to your placement checklist to generate real-time AI study advice.";
            } else if (pct === 100) {
                recText.innerHTML = "<strong>Phenomenal Job!</strong> You have cleared 100% of core checklist milestones. Dedicate your final sprint to live mock interview rounds and company-specific past questions.";
            } else {
                const categories = [...new Set(tasks.map(t => t.category))];
                let lowestCat = '';
                let lowestPct = 101;

                categories.forEach(cat => {
                    const cTasks = tasks.filter(t => t.category === cat);
                    const cPct = (cTasks.filter(t => t.checked).length / cTasks.length) * 100;
                    if (cPct < lowestPct) {
                        lowestPct = cPct;
                        lowestCat = cat;
                    }
                });

                if (lowestPct === 0) {
                    recText.innerHTML = `You have not yet started <strong>${lowestCat}</strong>. Dedicate your next study session exclusively to this area to prevent placement blind spots.`;
                } else {
                    recText.innerHTML = `Your weakest competency is currently <strong>${lowestCat}</strong> (${Math.round(lowestPct)}% mastered). Prioritize high-weight tasks in this section to accelerate readiness.`;
                }
            }
        }

        // Skill Gaps List
        const gapList = document.getElementById('skill-gap-list');
        if (gapList) {
            gapList.innerHTML = '';
            const pendingHigh = tasks.filter(t => !t.checked && t.priority === 'High').slice(0, 4);
            if (pendingHigh.length === 0) {
                gapList.innerHTML = '<li style="color: var(--accent-emerald); font-size: 0.9rem;"><i class="fa-solid fa-circle-check" style="margin-right: 8px;"></i>No critical high-priority skill gaps identified!</li>';
            } else {
                pendingHigh.forEach(t => {
                    const li = document.createElement('li');
                    li.style.fontSize = '0.88rem';
                    li.style.display = 'flex';
                    li.style.justifyContent = 'space-between';
                    li.style.alignItems = 'center';
                    li.innerHTML = `
                        <span><i class="fa-solid fa-triangle-exclamation" style="color: var(--accent-amber); margin-right: 8px;"></i>${t.text}</span>
                        <span class="tech-tag" style="color: var(--accent-rose); border-color: rgba(244,63,94,0.3);">${t.category.split('&')[0]}</span>
                    `;
                    gapList.appendChild(li);
                });
            }
        }

        // Activity Timelines
        const renderHistory = (elementId, limit = 0) => {
            const ul = document.getElementById(elementId);
            if (!ul) return;
            ul.innerHTML = '';
            let hist = state.history || [];
            if (limit > 0) hist = hist.slice(0, limit);

            if (hist.length === 0) {
                ul.innerHTML = '<li style="color: var(--text-muted); font-size: 0.88rem;">No recent activities logged.</li>';
                return;
            }

            hist.forEach(h => {
                const li = document.createElement('li');
                const d = new Date(h.date);
                let color = 'var(--primary-light)';
                if (h.action.includes('Completed') || h.action.includes('Mastered')) color = 'var(--accent-emerald)';
                if (h.action.includes('Removed') || h.action.includes('Unchecked')) color = 'var(--accent-rose)';
                if (h.action.includes('Mock Interview')) color = 'var(--accent-amber)';

                li.innerHTML = `
                    <div style="display: flex; gap: 12px; align-items: flex-start;">
                        <span style="width: 10px; height: 10px; border-radius: 50%; background: ${color}; margin-top: 6px; flex-shrink: 0; box-shadow: 0 0 8px ${color};"></span>
                        <div>
                            <div style="font-size: 0.9rem; font-weight: 600;">${h.action}: <span style="font-weight: 400; color: var(--text-muted);">${h.text}</span></div>
                            <span style="font-size: 0.75rem; color: var(--text-subtle);">${d.toLocaleDateString()} at ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                    </div>
                `;
                ul.appendChild(li);
            });
        };

        renderHistory('dashboard-history-timeline', 4);
        renderHistory('full-history-timeline', 0);

        // Achievements / Badges List
        const achList = document.getElementById('achievements-list');
        if (achList) {
            achList.innerHTML = '';
            const allBadges = {
                'first_step': { icon: 'fa-shoe-prints', title: 'First Step', desc: 'Completed first placement topic' },
                'streak_3': { icon: 'fa-fire', title: '3-Day Streak', desc: 'Consistent 3-day daily preparation' },
                'streak_7': { icon: 'fa-fire-flame-curved', title: '7-Day Master Streak', desc: 'Consistent full-week streak' },
                'halfway_there': { icon: 'fa-compass', title: 'Halfway Milestone', desc: 'Reached 50% placement readiness' },
                'interview_ready': { icon: 'fa-trophy', title: 'FAANG Ready', desc: 'Completed 100% preparation checklist' }
            };

            const unlocked = state.achievements || [];
            Object.keys(allBadges).forEach(id => {
                const b = allBadges[id];
                const isUnlocked = unlocked.includes(id);
                const li = document.createElement('li');
                li.style.background = isUnlocked ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)';
                li.style.border = isUnlocked ? '1px solid var(--accent-amber)' : '1px solid var(--glass-border)';
                li.style.opacity = isUnlocked ? '1' : '0.45';
                li.style.padding = '10px 14px';
                li.style.borderRadius = '12px';
                li.style.display = 'flex';
                li.style.alignItems = 'center';
                li.style.gap = '10px';

                li.innerHTML = `
                    <i class="fa-solid ${b.icon}" style="color: ${isUnlocked ? 'var(--accent-amber)' : 'var(--text-subtle)'}; font-size: 1.2rem;"></i>
                    <div>
                        <div style="font-size: 0.85rem; font-weight: 700;">${b.title}</div>
                        <div style="font-size: 0.72rem; color: var(--text-muted);">${b.desc}</div>
                    </div>
                `;
                achList.appendChild(li);
            });
        }

        updateCharts();
    };

    // ==========================================================================
    // 12. Profile, Export, Import & Demo Reset Engine
    // ==========================================================================

    const saveProfileBtn = document.getElementById('save-profile-btn');
    const exportDataBtn = document.getElementById('export-data-btn');
    const importDataBtn = document.getElementById('import-data-btn');
    const importDataFile = document.getElementById('import-data-file');
    const resetSampleBtn = document.getElementById('reset-sample-btn');

    const loadProfile = () => {
        const state = getState();
        const profile = state.profile || {};

        if (profile.name && document.getElementById('prof-name')) document.getElementById('prof-name').value = profile.name;
        if (profile.degree && document.getElementById('prof-degree')) document.getElementById('prof-degree').value = profile.degree;
        if (profile.gpa && document.getElementById('prof-gpa')) document.getElementById('prof-gpa').value = profile.gpa;
        if (profile.goalPath && document.getElementById('goal-path')) document.getElementById('goal-path').value = profile.goalPath;
        if (profile.goalRole && document.getElementById('goal-role')) document.getElementById('goal-role').value = profile.goalRole;
        if (profile.goalTimeline && document.getElementById('goal-timeline')) document.getElementById('goal-timeline').value = profile.goalTimeline;

        const displayName = profile.name || 'Alex Johnson';
        const displayRole = profile.goalPath || 'Software Engineer';

        const sidebarName = document.getElementById('sidebar-name');
        if (sidebarName) sidebarName.textContent = displayName;
        const sidebarRole = document.getElementById('sidebar-role');
        if (sidebarRole) sidebarRole.textContent = displayRole;

        const avatar = document.getElementById('sidebar-avatar');
        if (avatar && displayName) {
            const initials = displayName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
            avatar.textContent = initials;
        }

        if (trackSelect && profile.goalPath) {
            trackSelect.value = profile.goalPath;
            renderRoadmap(profile.goalPath);
        }
    };

    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const profile = {
                name: document.getElementById('prof-name').value,
                degree: document.getElementById('prof-degree').value,
                gpa: document.getElementById('prof-gpa').value,
                goalPath: document.getElementById('goal-path').value,
                goalRole: document.getElementById('goal-role').value,
                goalTimeline: document.getElementById('goal-timeline').value
            };

            saveState({ profile, activeTrack: profile.goalPath });
            loadProfile();
            logActivity('Updated Profile', `Saved career target for ${profile.goalPath}.`);
            showToast('Profile & Goals saved successfully!', 'fa-floppy-disk', 'var(--accent-emerald)');
        });
    }

    if (exportDataBtn) {
        exportDataBtn.addEventListener('click', () => {
            const state = getState();
            const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
            const dlAnchor = document.createElement('a');
            dlAnchor.setAttribute("href", jsonStr);
            dlAnchor.setAttribute("download", `careermap_pro_backup_${new Date().toISOString().slice(0, 10)}.json`);
            document.body.appendChild(dlAnchor);
            dlAnchor.click();
            dlAnchor.remove();
            showToast('Data exported successfully!', 'fa-download');
        });
    }

    if (importDataBtn && importDataFile) {
        importDataBtn.addEventListener('click', () => {
            importDataFile.click();
        });

        importDataFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const imported = JSON.parse(event.target.result);
                    if (imported && typeof imported === 'object') {
                        localStorage.setItem('careerTrackState', JSON.stringify(imported));
                        showToast('Data restored! Reloading platform...', 'fa-upload');
                        setTimeout(() => window.location.reload(), 1000);
                    }
                } catch (err) {
                    showToast('Invalid JSON file format', 'fa-triangle-exclamation', 'var(--accent-rose)');
                }
            };
            reader.readAsText(file);
        });
    }

    if (resetSampleBtn) {
        resetSampleBtn.addEventListener('click', () => {
            if (confirm('Reset your profile, roadmap, and tasks to the default demonstration dataset?')) {
                localStorage.removeItem('careerTrackState');
                initState();
                showToast('Reset to demo dataset', 'fa-rotate-left');
                setTimeout(() => window.location.reload(), 600);
            }
        });
    }

    // ==========================================================================
    // 13. System Boot
    // ==========================================================================

    initState();
    loadProfile();
    renderRoadmap(getState().activeTrack || 'Software Engineer');
    renderTasks();
    renderPlanner();
    renderATSChecklist();
    loadInterviewQuestion();
    updateUI();
    showToast('CareerMap Pro Ready', 'fa-bolt');
});
