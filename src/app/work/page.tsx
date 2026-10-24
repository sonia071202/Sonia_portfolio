import type { Metadata } from "next";
import { SectionContainer } from "@/components/shared/section-container";
import { ExperienceList } from "@/components/work/internship-list";

export const metadata: Metadata = {
  title: "Experience",
  description: "Sonia's internship experience across quality engineering, web development, and MERN stack development.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <SectionContainer className="pt-14 pb-24">
        <ExperienceList />
      </SectionContainer>
    </>
  );
}
