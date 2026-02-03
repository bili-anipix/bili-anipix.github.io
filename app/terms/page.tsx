import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  FileText,
  Users,
  Shield,
  AlertTriangle,
  Scale,
  Mail,
} from "lucide-react";

export const metadata = {
  title: "Terms of Service | AniPix",
  description: "Read the terms and conditions for using the AniPix platform.",
};

export default function TermsPage() {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: `By accessing and using AniPix, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.

These Terms of Service apply to all visitors, users, and others who access or use the platform.`,
    },
    {
      icon: Shield,
      title: "User Accounts",
      content: `When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.

You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.`,
    },
    {
      icon: FileText,
      title: "Content Guidelines",
      content: `Our platform allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material. You are responsible for the content you post.

Content must not be illegal, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual property rights, or otherwise injurious to third parties.`,
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Activities",
      content: `You may not use our platform for any illegal or unauthorized purpose. You must not, in the use of the Service, violate any laws in your jurisdiction.

This includes but is not limited to: harassment, spamming, impersonation, data mining, or attempting to gain unauthorized access to other accounts or systems.`,
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: `The platform and its original content, features, and functionality are and will remain the exclusive property of AniPix and its licensors. The platform is protected by copyright, trademark, and other laws.

Users retain ownership of content they upload but grant AniPix a license to use, modify, and display such content on the platform.`,
    },
    {
      icon: Mail,
      title: "Contact Information",
      content: `If you have any questions about these Terms, please contact us at legal@anipix.com.

We reserve the right to modify or replace these Terms at any time. It is your responsibility to check these Terms periodically for changes.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-card/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              Terms of Service
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using AniPix. By using
              our platform, you agree to these terms and conditions.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Last Updated: January 15, 2024
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <div key={index} className="relative pl-12 lg:pl-16">
                    <div className="absolute left-0 top-0 flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-card/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The platform is provided on an &quot;AS IS&quot; and &quot;AS
                AVAILABLE&quot; basis. AniPix makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties
                including, without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall AniPix or its suppliers be liable for any
                damages arising out of the use or inability to use the platform,
                even if AniPix has been notified of the possibility of such
                damages.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
