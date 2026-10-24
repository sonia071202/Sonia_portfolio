"use client";

import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/shared/section-heading";

export function CertificationsList() {
  return (
    <section
      id="certifications"
      className="mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-28"
    >
      <SectionHeading
        title="Certifications"
        description="Professional learning and credentials that support my engineering practice."
      />
      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2">
        {certifications.map((certification) => (
          <article
            key={certification.code}
            className="group flex h-full min-w-0 flex-col rounded-2xl border border-border/50 bg-card/40 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex h-full items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
                <Award className="size-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="break-words font-semibold leading-snug transition-colors group-hover:text-primary">
                  {certification.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {certification.issuer} <span aria-hidden="true">·</span> {certification.year}
                </p>
              </div>
              {certification.credentialUrl && (
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  aria-label={`View ${certification.name} credential`}
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
