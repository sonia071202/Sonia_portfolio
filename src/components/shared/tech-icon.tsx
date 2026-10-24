"use client";

import type { IconType } from "react-icons";
import {
  SiSharp,
  SiJavascript,
  SiTypescript,
  SiRust,
  SiSolidity,
  SiPython,
  SiDotnet,
  SiSpringboot,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiTerraform,
  SiPulumi,
  SiGooglecloud,
  SiJenkins,
  SiArgo,
  SiSonar,
  SiDatabricks,
  SiRedis,
  SiApachecassandra,
  SiPostgresql,
  SiSolana,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiFlutter,
  SiTailwindcss,
  SiApachekafka,
  SiRabbitmq,
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaAws, FaMicrosoft } from "react-icons/fa6";
import { DiJava, DiDatabase } from "react-icons/di";
import {
  TbSql,
  TbBrain,
  TbRobot,
  TbLink,
  TbShieldLock,
  TbApi,
  TbCurrencyEthereum,
  TbCube,
  TbSettings,
  TbServer,
  TbCode,
} from "react-icons/tb";

const iconMap: Record<string, IconType> = {
  // Languages
  "C#": SiSharp,
  Java: DiJava,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Rust: SiRust,
  Solidity: SiSolidity,
  Python: SiPython,
  SQL: TbSql,

  // Backend & Frameworks
  ".NET 8": SiDotnet,
  "Spring Boot": SiSpringboot,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "Express.js": SiExpress,
  HTML: SiHtml5,
  CSS: SiCss,
  EJS: TbCode,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: SiGit,
  GitHub: SiGithub,
  "GraphQL (HotChocolate)": SiGraphql,
  MediatR: TbSettings,
  DDD: TbCube,
  Microservices: TbServer,

  // Cloud & Infrastructure
  Azure: FaMicrosoft,
  AWS: FaAws,
  GCP: SiGooglecloud,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  Helm: SiHelm,
  EKS: FaAws,
  Bicep: FaMicrosoft,
  Terraform: SiTerraform,
  Pulumi: SiPulumi,

  // DevOps & Tooling
  "Azure DevOps": FaMicrosoft,
  Jenkins: SiJenkins,
  ArgoCD: SiArgo,
  Spinnaker: TbSettings,
  "CI/CD": TbSettings,
  SonarQube: SiSonar,
  Veracode: TbShieldLock,
  Checkmarx: TbShieldLock,
  Trivy: TbShieldLock,

  // Data & AI
  Databricks: SiDatabricks,
  "Unity Catalog": DiDatabase,
  "RAG Pipelines": TbBrain,
  "Microsoft AI Services": TbRobot,
  "Agentic AI": TbRobot,
  LangChain: TbBrain,
  "Hugging Face Embeddings": TbBrain,
  FAISS: TbBrain,
  "Google Gemini API": TbBrain,
  CosmosDB: DiDatabase,
  DynamoDB: DiDatabase,
  Redis: SiRedis,
  Cassandra: SiApachecassandra,
  PostgreSQL: SiPostgresql,

  // Web3 & Blockchain
  "Rust (Anchor)": SiRust,
  Solana: SiSolana,
  EVM: TbCurrencyEthereum,
  "Web3.js": TbCurrencyEthereum,
  HardHat: TbCurrencyEthereum,
  Truffle: TbCurrencyEthereum,
  "Smart Contracts": TbLink,
  DLT: TbLink,
  Tokenization: TbLink,

  // Frontend & Mobile
  React: SiReact,
  "Next.js": SiNextdotjs,
  Angular: SiAngular,
  Flutter: SiFlutter,
  "Tailwind CSS": SiTailwindcss,

  // Messaging & Integration
  Kafka: SiApachekafka,
  RabbitMQ: SiRabbitmq,
  "Azure Service Bus": FaMicrosoft,
  "Pub/Sub": SiGooglecloud,
  SQS: FaAws,
  gRPC: TbApi,
  Dapr: TbCode,
  APIM: TbApi,
};

const iconColors: Record<string, string> = {
  "Python": "#3776ab",
  "JavaScript": "#f7df1e",
  "Java": "#ed8b00",
  "TypeScript": "#3178c6",
  "React": "#61dafb",
  "Next.js": "#ffffff",
  "Node.js": "#5fa04e",
  "Express": "#ffffff",
  "MongoDB": "#47a248",
  "MySQL": "#4479a1",
  "FAISS": "#ff6f61",
  "LangChain": "#1c8c6c",
  "Gemini": "#8ab4f8",
  "Git": "#f05032",
  "GitHub": "#ffffff",
  "Express.js": "#ffffff",
  "EJS": "#b4ca65",
  "HTML": "#e34f26",
  "CSS": "#1572b6",
};

export function TechIcon({ name }: { name: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return (
    <Icon
      aria-hidden="true"
      className="size-4 shrink-0 transition-transform duration-300 group-hover:scale-110"
      style={{ color: iconColors[name] ?? "var(--primary)" }}
    />
  );
}
