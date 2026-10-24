import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/experience";
import { TechIcon } from "@/components/shared/tech-icon";
import { SectionHeading } from "@/components/shared/section-heading";

export function ExperienceList() {
  return (
    <section aria-labelledby="experience-heading" className="mt-0">
      <div id="experience-heading" className="scroll-mt-24">
        <SectionHeading
          title="Experience"
          description="Professional experience across quality engineering, web development, and the MERN stack."
        />
      </div>
      <div className="grid gap-4">
        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="group rounded-2xl border border-border/50 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-primary"><BriefcaseBusiness className="size-4" aria-hidden="true" /><span className="text-xs font-medium uppercase tracking-wider">{item.period}</span></div>
                <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">{item.role}</h3>
                <p className="mt-1 text-muted-foreground">{item.company} · {item.location}</p>
              </div>
              <div className="flex flex-wrap content-start gap-2 sm:max-w-xs sm:justify-end">
                {item.stack.map((skill) => <span key={skill} className="group inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"><TechIcon name={skill} />{skill}</span>)}
              </div>
            </div>
            <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground">
              {item.highlights.map((highlight) => <li key={highlight} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />{highlight}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
