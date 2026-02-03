import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Shield, Lock, Eye, Database, Mail, Globe } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | AniPix",
  description: "Learn about how AniPix collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: `We collect information you provide directly to us, such as when you create an account, upload content, or contact us for support. This may include your name, email address, and any other information you choose to provide.

We automatically collect certain information when you use our platform, including your IP address, browser type, operating system, device information, and browsing activity on our site.`,
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: `We use the information we collect to provide, maintain, and improve our services, including to personalize your experience and recommend content that may interest you.

We may also use your information to communicate with you about products, services, and events offered by us and others, and provide news and information we think will be of interest to you.`,
    },
    {
      icon: Globe,
      title: "Information Sharing",
      content: `We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy. We may share information with trusted third parties who assist us in operating our website, conducting our business, or servicing you.

We may also release information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.`,
    },
    {
      icon: Lock,
      title: "Data Security",
      content: `We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.

All sensitive information you supply is encrypted via Secure Socket Layer (SSL) technology. We implement a variety of security measures when a user enters, submits, or accesses their information.`,
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: `You have the right to access, update, or delete your personal information at any time. You can do this by logging into your account settings or by contacting us directly.

You may also opt out of receiving promotional communications from us by following the instructions in those messages. If you opt out, we may still send you non-promotional communications, such as those about your account or our ongoing business relations.`,
    },
    {
      icon: Mail,
      title: "Contact Us",
      content: `If you have any questions about this Privacy Policy, please contact us at privacy@anipix.com. We are committed to resolving any concerns you may have about our privacy practices.

This policy may be updated from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.`,
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
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information when you use AniPix.
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
                  <div
                    key={index}
                    className="relative pl-12 lg:pl-16"
                  >
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

        {/* Additional Information */}
        <section className="py-12 bg-card/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-border bg-card p-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our platform 
                and hold certain information. Cookies are files with a small amount of data which 
                may include an anonymous unique identifier.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You can instruct your browser to refuse all cookies or to indicate when a cookie 
                is being sent. However, if you do not accept cookies, you may not be able to use 
                some portions of our platform.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
