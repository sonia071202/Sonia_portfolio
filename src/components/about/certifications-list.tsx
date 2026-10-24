"use client";

import { Award, Download } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/shared/section-heading";

export function CertificationsList() {
  return (
    <section id="certifications" className="scroll-mt-24">
      <SectionHeading title="Certifications" description="Professional learning and credentials that support Sonia's engineering practice." />
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((certification) => (
          <article key={certification.code} className="group rounded-2xl border border-border/50 bg-card/40 p-6 transition-colors duration-150 hover:border-primary/50">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-primary/10 p-2 text-primary"><Award className="size-5" aria-hidden="true" /></div>
                <div>
                  <h3 className="font-semibold transition-colors group-hover:text-primary">{certification.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{certification.issuer} · {certification.year}</p>
                </div>
              </div>
              {certification.credentialUrl && <a href={certification.credentialUrl} download className="shrink-0 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary" aria-label={`Download ${certification.name}`}><Download className="size-4" /></a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
