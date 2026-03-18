import { Wrench } from "lucide-react";

export function meta() {
  return [
    { title: "Privacy Policy | Ron's Handyman Services" },
    { name: "description", content: "Privacy policy for Ron's Handyman Services." },
  ];
}

export default function Privacy() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: "hsl(var(--background))" }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <a href="/" className="flex items-center gap-3">
            <Wrench className="size-6" style={{ color: "hsl(var(--primary))" }} />
            <span className="text-lg font-bold tracking-tight">Ron's Handyman Services</span>
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm mb-10" style={{ color: "hsl(var(--muted-foreground))" }}>
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div className="flex flex-col gap-8" style={{ color: "hsl(var(--muted-foreground))" }}>
          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>
              Overview
            </h2>
            <p>
              Ron's Handyman Services ("we," "us," or "our") operates this website as an
              informational resource. We are committed to protecting your privacy. This policy
              explains what information is collected when you visit this site and how it is used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>
              Information We Collect
            </h2>
            <p className="mb-3">
              This website does not have contact forms, user accounts, or newsletter sign-ups.
              We do not knowingly collect any personal information directly from visitors.
            </p>
            <p>
              Our hosting provider may automatically collect standard server log data, including
              your IP address, browser type, referring pages, and the date and time of your visit.
              This data is used solely for security and operational purposes and is not sold or
              shared with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>
              Cookies
            </h2>
            <p>
              This website does not use tracking or advertising cookies. No cookies are set on
              your device for marketing or analytics purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>
              Third-Party Services
            </h2>
            <p>
              This site is hosted on Railway. Please refer to{" "}
              <a
                href="https://railway.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70"
                style={{ color: "hsl(var(--primary))" }}
              >
                Railway's Privacy Policy
              </a>{" "}
              for information on how they handle server-level data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>
              Children's Privacy
            </h2>
            <p>
              This website is not directed at children under the age of 13 and we do not
              knowingly collect information from children.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>
              Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be reflected
              on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "hsl(var(--foreground))" }}>
              Contact
            </h2>
            <p>
              If you have any questions about this privacy policy, you can reach us by phone at{" "}
              <a
                href={`tel:${process.env.PHONE_NUMBER ?? "6146782211"}`}
                className="underline hover:opacity-70"
                style={{ color: "hsl(var(--primary))" }}
              >
                {(process.env.PHONE_NUMBER ?? "6146782211").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-16" style={{ backgroundColor: "hsl(var(--muted))" }}>
        <div
          className="container mx-auto px-4 text-center text-sm"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          &copy; {new Date().getFullYear()} Ron's Handyman Services
        </div>
      </footer>
    </div>
  );
}
