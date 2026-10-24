import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/experience";
import { TechIcon } from "@/components/shared/tech-icon";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionContainer } from "@/components/shared/section-container";

export function ExperienceList() {
  return (
    <SectionContainer>
      <SectionHeading
        title="Experience"
        description="Professional experience across quality engineering, web development, and the MERN stack."
      />
      <div className="grid gap-4">
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="group rounded-2xl border border-border/50 bg-card/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 sm:p-6"
          >
            <div className="flex min-w-0 flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-primary">
                  <BriefcaseBusiness className="size-4 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-medium uppercase tracking-wider">{item.period}</span>
                </div>
                <h3 className="break-words text-lg font-semibold transition-colors group-hover:text-primary sm:text-xl">
                  {item.role}
                </h3>
                <p className="mt-1 break-words text-muted-foreground">
                  {item.company} · {item.location}
                </p>
              </div>
              <div className="flex flex-wrap content-start gap-2 lg:max-w-sm lg:justify-end">
                {item.stack.map((skill) => (
                  <span key={skill} className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground">
                    <TechIcon name={skill} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
