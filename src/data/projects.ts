import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "intelligent-enterprise-knowledge-assistant",
    title: "Intelligent Enterprise Knowledge Assistant",
    tagline: "Context-aware document question answering with RAG",
    description:
      "An AI-powered document question-answering application that retrieves relevant information from PDF documents and generates context-aware responses.",
    problem:
      "Important information is often buried in long PDF documents, making reliable and context-aware answers difficult to find with keyword search alone.",
    role: "Software Developer",
    duration: "2026",
    stack: ["Python", "LangChain", "Hugging Face Embeddings", "FAISS", "Google Gemini API"],
    domain: "AI",
    highlights: [
      "Processes PDF documents and extracts their text",
      "Chunks text and generates embedding representations",
      "Uses semantic retrieval with FAISS vector search",
      "Generates context-aware responses with the Gemini API",
    ],
    architectureNotes:
      "PDF Documents → Text Extraction → Text Chunking → Embeddings → FAISS Retrieval → Relevant Context → Gemini Response",
    repoUrl: "https://github.com/sonia071202/Intelligent_Enterprise_Knowledge_Assistant",
    featured: true,
  },
  {
    slug: "campscout",
    title: "CampScout — Campground Discovery Platform",
    tagline: "Full-stack campground discovery and community platform",
    description:
      "A full-stack campground discovery platform for exploring campground listings and interacting with campground information.",
    problem:
      "Campground explorers need a single place to discover listings, view locations, share reviews, and manage campground information.",
    role: "Software Developer",
    duration: "2026",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Passport.js", "Cloudinary", "MapTiler"],
    domain: "Ecommerce",
    highlights: [
      "Campground listing management",
      "User authentication and validation",
      "Reviews and ratings",
      "Image uploads with Cloudinary",
      "Interactive maps with MapTiler",
    ],
    architectureNotes:
      "User Interface → Express Routes → Authentication and Validation → MongoDB. Cloudinary and MapTiler provide supporting media and mapping integrations.",
    repoUrl: "https://github.com/sonia071202/Yelp_Camp",
    featured: true,
  },
];
