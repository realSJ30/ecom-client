import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Github } from "lucide-react";
import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import NewsletterForm from "@/components/newsletter-form";

const sections: { title: string; links: { label: string; href: string }[] }[] =
  [
    {
      title: "Shop",
      links: [
        { label: "Latest", href: "/" },
        { label: "Backpacks", href: "/" },
        { label: "Accessories", href: "/" },
        { label: "Collections", href: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Journal", href: "#" },
        { label: "Sustainability", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Shipping", href: "#" },
        { label: "Returns", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ];

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border bg-[hsl(240_20%_4%)]">
      <Container>
        <div className="grid gap-10 py-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              KULTUR builds refined everyday carry — packs, cases, and
              accessories engineered for how modern life actually moves.
            </p>

            <NewsletterForm />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                  {section.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} KULTUR Labs, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Link
              href="#"
              aria-label="Instagram"
              className="transition hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="transition hover:text-foreground"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              aria-label="GitHub"
              className="transition hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
