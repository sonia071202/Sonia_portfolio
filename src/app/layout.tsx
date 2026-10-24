import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { LazyMotionProvider } from "@/components/motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AiChatWidget } from "@/components/shared/ai-chat-widget";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@sonia071202",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LazyMotionProvider>
            <TooltipProvider>
              <Header />
              <main id="main-content" className="pt-16">{children}</main>
              <Footer />
              <AiChatWidget />
            </TooltipProvider>
          </LazyMotionProvider>
        </ThemeProvider>
        <Analytics />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sonia Gupta",
              jobTitle: "Software Developer",
              url: siteConfig.url,
              email: siteConfig.email,
              sameAs: [
                "https://github.com/sonia071202",
                "https://www.linkedin.com/in/sonia-gupta-a46263278/",
                "https://leetcode.com/u/sweet07/",
                "https://www.geeksforgeeks.org/profile/sg2023sonuyxc?tab=activity",
              ],
              knowsAbout: [
                "Software Development",
                "Backend Engineering",
                "Artificial Intelligence",
                "Retrieval Augmented Generation",
                "Web Development",
                "Problem Solving",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
