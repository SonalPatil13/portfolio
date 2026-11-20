// Portfolio Data — Sonal Patil (Gire)
export const personalInfo = {
  name: "Sonal Patil",
  title: "AI Engineer",
  tagline: "Building intelligent systems for real-world problems.",
  subTagline: "Specializing in GenAI · Agentic AI · RAG Systems · Document Intelligence",
  location: "Ahmedabad, Gujarat, India",
  email: "sonalpdg1306@gmail.com",
  phone: "+91-9898292269",
  linkedin: "https://www.linkedin.com/in/sonalpatil-genaiengineer/",
  github: "https://github.com/SonalPatil13",
  about: `I'm an AI Engineer who builds practical, production-oriented AI systems — not just prototypes. 
  My work spans RAG pipelines, agentic AI, conversational systems and intelligent document automation that 
  enterprise teams actually use day to day.
  
  What drives me isn't the hype around AI — it's the engineering craft: understanding how systems fail in 
  production, designing retrieval pipelines that actually surface the right information, and building agents 
  that make decisions you can trust. I care deeply about AI safety and responsible deployment, and I think 
  the most important skill in this field is knowing when to keep the AI in the loop and when to hand control 
  back to humans.
  
  I believe the best AI systems are ones that solve real business problems elegantly — not ones that use the 
  most cutting-edge model, but ones that are designed with the right architecture for the right problem.`,
};

export const experience = [
  {
    company: "Adrta Technologies Pvt. Ltd",
    role: "AI Engineer",
    duration: "June 2025 – Present",
    location: "Ahmedabad, India",
    description: [
      "Independently designed and deployed end-to-end AI systems — RAG pipelines, LLM-powered chatbots, and document intelligence tools — from requirement understanding to working production solution.",
      "Improved output accuracy and response speed by tuning retrieval quality, refining prompts, and implementing caching to reduce redundant LLM calls.",
      "Automated manual, document-heavy workflows using Python and LLM-based pipelines; collaborated with the team on system design and edge-case handling.",
      "Engineered backend APIs using FastAPI and Django to support AI features and data workflows.",
    ],
    tags: ["LangChain", "LangGraph", "RAG", "FastAPI", "ChromaDB", "Python"],
  },
];

export const skills = {
  "AI & LLM": [
    { name: "LangChain", category: "Framework" },
    { name: "LangGraph", category: "Agentic AI" },
    { name: "RAG Systems", category: "Architecture" },
    { name: "Prompt Engineering", category: "LLM" },
    { name: "RAGAS Evaluation", category: "Evaluation" },
    { name: "Agentic AI Design", category: "Orchestration" },
  ],
  "Languages & Backend": [
    { name: "Python", category: "Language" },
    { name: "FastAPI", category: "Backend / API" },
    { name: "Django", category: "Backend" },
    { name: "SQL", category: "Database Querying" },
  ],
  "Databases & Vector Stores": [
    { name: "ChromaDB", category: "Vector DB" },
    { name: "PostgreSQL", category: "Relational DB" },
    { name: "SQL Server", category: "Enterprise DB" },
  ],
  "DevOps & Tools": [
    { name: "Docker", category: "Containerization" },
    { name: "Git / GitHub", category: "Version Control" },
    { name: "HuggingFace", category: "Models & Hub" },
  ],
};

export const projects = [
  {
    id: "agentic-rag",
    title: "Agentic Conversational AI System",
    subtitle: "with RAG & Stateful Memory",
    year: "2026",
    featured: true,
    tags: ["LangChain", "LangGraph", "ChromaDB", "RAGAS", "FastAPI", "HuggingFace"],
    summary: "A production-grade, stateful multi-turn chatbot with context-aware retrieval over large enterprise document sets and direct SQL Server database interaction.",
    problem: "Enterprise teams needed a conversational interface to query large internal document libraries and live database records — without losing context across conversation turns and without flooding the LLM with every historical message.",
    solution: "Architected a stateful conversation graph using LangGraph that manages memory windows, conversation branches and tool routing. Used ChromaDB with cross-encoder reranking to ensure retrieval relevance. Implemented caching at the LLM call level to reduce latency and cost.",
    engineering: [
      "Designed the conversation state machine in LangGraph with explicit routing nodes for RAG, DB query, and direct response paths",
      "Implemented cross-encoder reranking on top of vector search to push truly relevant chunks higher — not just semantically similar ones",
      "Built a caching layer at the embedding and LLM call level to prevent redundant API calls on repeated queries",
      "Integrated RAGAS evaluation to continuously measure faithfulness, answer relevancy and context precision",
    ],
    challenges: "The core challenge was balancing retrieval breadth with precision — too many retrieved chunks degraded answer quality; too few caused hallucinations. Cross-encoder reranking solved this by re-scoring top-k candidates for relevance, not just similarity.",
    architecture: [
      { step: "User Query", detail: "Natural language input via FastAPI endpoint" },
      { step: "LangGraph Router", detail: "Routes to RAG, DB Chat, or Direct Response node" },
      { step: "Retrieval + Reranking", detail: "ChromaDB vector search → cross-encoder reranking" },
      { step: "LLM Generation", detail: "Context-aware response with caching" },
      { step: "RAGAS Evaluation", detail: "Offline evaluation of retrieval + generation quality" },
    ],
  },
  {
    id: "training-recommender",
    title: "Intelligent Training Recommendation Engine",
    year: "2026",
    featured: true,
    tags: ["LangChain", "ChromaDB", "SQL Server", "FastAPI", "Python"],
    summary: "A hybrid AI recommendation system that suggests relevant employee training programs based on department and designation — with intelligent LLM fallback when historical data is sparse.",
    problem: "Organizations had training databases with records for some roles, but many new or uncommon designations had no historical training data. Manual curation was slow and inconsistent.",
    solution: "Built a hybrid system: first queries SQL Server for historical training records matched to department + designation. If records exist, filters and ranks them. If not, falls back to LLM-driven recommendations using embedded training catalog as context.",
    engineering: [
      "Designed the two-tier fallback logic: DB-first priority, LLM-second — ensuring data-driven answers wherever possible",
      "Used ChromaDB to embed the training catalog for semantic similarity search in the LLM fallback path",
      "FastAPI endpoint handles role input, coordinates DB lookup, and routes to appropriate recommendation path",
    ],
    challenges: "Ensuring the LLM fallback didn't hallucinate training programs that don't exist — solved by constraining the LLM to only recommend from the embedded training catalog, never from general knowledge.",
    architecture: [
      { step: "Employee Input", detail: "Department + Designation via API" },
      { step: "DB Lookup", detail: "SQL Server query for historical training records" },
      { step: "Decision Node", detail: "Records found → rank and return; None found → LLM path" },
      { step: "LLM Recommendation", detail: "Semantic search over training catalog + LLM ranking" },
      { step: "Response", detail: "Ranked training recommendations with rationale" },
    ],
  },
  {
    id: "doc-generator",
    title: "Automated Intelligent Document Generator",
    year: "2025–2026",
    featured: true,
    tags: ["LangChain", "Python", "FastAPI", "Prompt Engineering"],
    summary: "A system that generates complete 20–25 page structured enterprise documents with proper formatting from a single input prompt — eliminating hours of manual document drafting.",
    problem: "Teams spent hours creating long-form structured documents (reports, proposals, SOPs) that followed rigid templates. Each document required consistent structure, section logic, and proper formatting.",
    solution: "Designed a content schema system that defines required document sections and sub-sections. The LLM generates structured JSON for each section independently (avoiding context window limits), which then gets mapped into pre-built templates to produce the final formatted file.",
    engineering: [
      "Designed a hierarchical content schema: document type → sections → sub-sections → content requirements",
      "Chunked LLM generation per section to avoid token limits — each section gets its own LLM call with appropriate context",
      "Built a template mapping engine that slots LLM-generated content into placeholders with proper formatting",
      "Handled edge cases: missing sections, overly long generations, formatting inconsistencies",
    ],
    challenges: "Maintaining document coherence across independently generated sections was the hardest problem. Solved by passing document-level context (purpose, audience, tone) to every section generation call.",
    architecture: [
      { step: "Input Prompt", detail: "Document type, topic, audience, requirements" },
      { step: "Schema Engine", detail: "Generates section structure from document type config" },
      { step: "Section Generator", detail: "LLM generates content per section with shared context" },
      { step: "Template Mapper", detail: "Maps structured JSON into formatted document template" },
      { step: "Output", detail: "Complete 20–25 page formatted document" },
    ],
  },
  {
    id: "rfi-assistant",
    title: "RFI Proposal Assistant",
    subtitle: "RAG-Based Q&A over Excel & Documents",
    year: "2025",
    featured: false,
    tags: ["Python", "ChromaDB", "Embedding Models", "Prompt Engineering"],
    summary: "An intelligent Q&A system that automatically parses and populates Excel questionnaires by retrieving relevant answers from a custom enterprise content library.",
    problem: "Sales and presales teams manually answered repetitive RFI/RFP questionnaires by searching through extensive content libraries — a slow, error-prone process.",
    solution: "Built a full RAG pipeline from scratch — without high-level abstractions — to parse Excel questionnaires, retrieve relevant answers from the content library via vector search, and populate responses automatically.",
    engineering: [
      "Implemented document chunking, embedding, and vector search from first principles to understand and control every retrieval decision",
      "Designed prompt templates tuned for concise, questionnaire-appropriate answers",
    ],
    challenges: "Built without high-level RAG abstractions to demonstrate deep architectural understanding — every component (chunking strategy, embedding model, retrieval logic) was implemented and tuned manually.",
    architecture: [
      { step: "Excel Parser", detail: "Extracts questions from RFI questionnaire" },
      { step: "Content Ingestion", detail: "Chunks and embeds content library into ChromaDB" },
      { step: "Per-Question Retrieval", detail: "Vector search for each question independently" },
      { step: "LLM Generation", detail: "Context-aware answer generation per question" },
      { step: "Excel Population", detail: "Writes answers back into the original Excel structure" },
    ],
  },
  {
    id: "exam-generator",
    title: "Document-to-Exam Generator",
    subtitle: "Automated Training Assessment System",
    year: "2025",
    featured: false,
    tags: ["Python", "ChromaDB", "LangChain", "FastAPI"],
    summary: "An end-to-end pipeline that ingests any uploaded document and automatically generates training assessments — including MCQs and open questions — eliminating a fully manual workflow.",
    problem: "Training coordinators manually created exam questions from every training document — a time-consuming process that created bottlenecks in learning program deployment.",
    solution: "Built an automated pipeline that ingests any document, extracts key content, generates diverse question types, handles documents with pre-existing questions, and outputs structured JSON for assessment platforms.",
    engineering: [
      "Designed the base generation structure from scratch, handling both clean documents and those with pre-existing question content",
      "Implemented question deduplication and quality filtering to avoid redundant or trivial questions",
      "Structured output as clean JSON for direct integration with assessment platforms",
    ],
    challenges: "Documents with pre-existing questions required a separate parsing and conversion pipeline — not just generation. Built a detection layer to identify question-bearing sections and convert them into the standard JSON schema.",
    architecture: [
      { step: "Document Ingestion", detail: "Any document format → parsed text" },
      { step: "Content Classifier", detail: "Detects pre-existing questions vs. raw content" },
      { step: "Question Generator", detail: "LLM-driven MCQ and open question generation" },
      { step: "Quality Filter", detail: "Deduplication and relevance scoring" },
      { step: "JSON Output", detail: "Structured assessment schema for downstream systems" },
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering — Information Technology",
    institution: "Government Engineering College, Modasa",
    duration: "Sep 2021 – May 2025",
    score: "8.50 CGPA",
  },
  {
    degree: "HSC (Class XII)",
    institution: "Shree Gurukrupa Vidya Sankul",
    duration: "2020–2021",
    score: "92%",
  },
  {
    degree: "SSC (Class X)",
    institution: "Shree Gurukrupa Vidya Sankul",
    duration: "2018–2019",
    score: "92.16%",
  },
];

export const currentlyExploring = [
  {
    topic: "Multi-Agent Orchestration",
    description: "Designing collaborative agent systems where specialized agents coordinate on complex tasks — exploring LangGraph multi-agent patterns, agent communication protocols, and failure recovery strategies.",
    icon: "🤖",
  },
  {
    topic: "LLM Fine-Tuning",
    description: "Understanding when fine-tuning beats prompt engineering — studying LoRA/QLoRA techniques, dataset curation for domain-specific tasks, and evaluation strategies for fine-tuned models.",
    icon: "🎯",
  },
  {
    topic: "Vector Database Optimization",
    description: "Deep-diving into HNSW indexing, hybrid search (dense + sparse), and advanced reranking strategies to push retrieval quality in production RAG systems.",
    icon: "🗄️",
  },
  {
    topic: "AI Safety & Responsible Deployment",
    description: "Studying guardrails, hallucination detection, output validation patterns, and human-in-the-loop design for enterprise AI — because trustworthy AI is good engineering.",
    icon: "🛡️",
  },
];

export const principles = [
  { title: "Architecture First", body: "Every AI system I build starts with a clear architectural decision — not just picking the most popular framework. The right design often saves more time than clever code." },
  { title: "Evaluate Everything", body: "Gut feel is not a metric. I use RAGAS and structured evaluation to measure retrieval quality, response faithfulness, and system reliability." },
  { title: "Safety by Design", body: "I think about failure modes before I think about features. Good AI systems are built knowing what happens when the model is wrong or the user is adversarial." },
  { title: "Build to Understand", body: "I've built RAG pipelines without high-level abstractions on purpose — because understanding how every component works is the foundation of good engineering decisions." },
];

export const mentorInfo = {
  name: "Khushboo Satasiya ",
  role: "AI Lead & Engineering Manager",
  company: "Adrta Technologies",
  experience: "10+ Years Experience in AI & Software Engineering",
  tenure: "Guided & Mentored for 10+ Years",
  summary: `Khushboo Satasiya has been my engineering manager and primary mentor, leading and supporting me from the very start of my AI engineering journey. His leadership, architectural insights, and continuous guidance have helped me build a deep first-principles understanding of AI systems, enterprise RAG, and production pipelines.`,
  contributions: [
    {
      title: "Foundational Mentorship from Scratch",
      desc: "Nurtured my engineering foundation from zero — transforming theoretical concepts into hands-on architectural capability.",
    },
    {
      title: "Production & Edge-Case Mindset",
      desc: "Taught me to design for production failure modes, latency bottlenecks, caching, and robust error recovery.",
    },
    {
      title: "System Design & Architecture Guidance",
      desc: "Steered technical decisions on stateful graphs, vector retrieval optimization, and hybrid LLM fallback strategies.",
    },
    {
      title: "Empowering Engineering Autonomy",
      desc: "Provided constant encouragement and room for technical experimentation, helping me lead solutions independently.",
    },
  ],
  quote: "Real-world AI isn't just about calling models — it's about robust system design, handling edge cases gracefully, and building architectures you can explain and maintain.",
};
