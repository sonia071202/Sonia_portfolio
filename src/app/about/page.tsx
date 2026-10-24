import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/shared/page-header";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";
import { CertificationsList } from "@/components/about/certifications-list";
import { ExperienceList } from "@/components/work/internship-list";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Sonia Gupta, a software developer and MCA graduate.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" description="Software Developer focused on practical systems, AI applications, and continuous learning." />
      <SectionContainer className="py-14">
        <div className="grid gap-10 lg:grid-cols-[120px_1fr] lg:items-start lg:gap-12">
          <ScrollReveal>
            <Image src="/images/sonia-gupta.jpg" alt="Sonia Gupta" width={112} height={112} className="h-28 w-28 rounded-2xl object-cover ring-1 ring-border/60" />
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <div className="max-w-3xl space-y-5 text-muted-foreground leading-relaxed text-[15px]">
              <p>I&apos;m Sonia Gupta, a software developer and MCA graduate from Amity University Jharkhand, graduating in 2026.</p>
              <p>I&apos;m passionate about software development, backend engineering, AI-powered applications, and problem-solving. I enjoy turning ideas into useful products and strengthening my engineering fundamentals through hands-on projects.</p>
              <p>My recent work includes an intelligent enterprise knowledge assistant using retrieval-augmented generation and CampScout, a full-stack campground discovery platform.</p>
            </div>
          </ScrollReveal>
        </div>
      </SectionContainer>
      <SectionContainer className="py-14">
        <SectionHeading title="How I Think About Engineering" />
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Keep It Practical", "I prefer simple, maintainable solutions that solve the real problem without unnecessary complexity."],
            ["Build for People", "Good software connects technical decisions to clear user value, accessibility, and trust."],
            ["Learn by Building", "Hands-on projects help me turn new ideas into reliable engineering habits."],
            ["Improve Continuously", "I document lessons, review tradeoffs, and keep refining both code and process."],
          ].map(([title, description], index) => (
            <ScrollReveal key={title} delay={index * 0.04}>
              <article className="rounded-2xl border border-border/50 bg-card/40 p-6 transition-colors duration-200 hover:border-primary/50">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer className="py-14">
        <div id="skills" className="scroll-mt-24">
          <SectionHeading title="Skills" description="Technologies and concepts I use to build practical software." />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((category, i) => (
            <ScrollReveal key={category.category} delay={i * 0.05}>
              <div className="bento-card rounded-xl p-6 h-full">
                <h3 className="font-semibold text-sm">{category.category}</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.skills.map((skill) => <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionContainer>
      <SectionContainer className="py-14">
        <ExperienceList />
      </SectionContainer>
      <SectionContainer className="py-14">
        <CertificationsList />
      </SectionContainer>
      <SectionContainer className="py-14">
        <SectionHeading title="Education" />
        <ScrollReveal><div className="bento-card rounded-xl p-6 max-w-xl"><h3 className="font-medium">Master of Computer Applications (MCA)</h3><p className="text-sm text-muted-foreground mt-2">Amity University Jharkhand · Expected 2026</p></div></ScrollReveal>
      </SectionContainer>
    </>
  );
}
