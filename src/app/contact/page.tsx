"use client";

import { personal, socials } from "@/lib/data";
import ScrollReveal from "@/components/scroll-reveal";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="w-full">
      <section className="min-h-screen py-20 lg:py-32 px-6 sm:px-8 lg:px-12 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <ScrollReveal>
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-serif mb-4 lg:mb-8 w-full text-center">
              Let&apos;s{" "}
              <span className="text-[var(--muted)] italic">talk.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-[var(--muted)] text-sm sm:text-base lg:text-xl text-center max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light">
              Whether you have a question, a project idea, or just want to say
              hi, my inbox is always open!
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 min-w-0">
                  <Mail className="w-5 h-5 text-[var(--muted)] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm hover:text-[var(--muted)] transition-colors border-b border-[var(--foreground)] hover:border-[var(--muted)] break-all"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 min-w-0">
                  <Phone className="w-5 h-5 text-[var(--muted)] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <p className="text-sm">{personal.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 min-w-0">
                  <MapPin className="w-5 h-5 text-[var(--muted)] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">
                      Location
                    </p>
                    <p className="text-sm">{personal.location}</p>
                  </div>
                </div>

                <div className="border-t border-[var(--border-color)] pt-6 mt-8">
                  <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-4">
                    Socials
                  </p>
                  <div className="flex flex-wrap gap-6">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target={
                          social.url.startsWith("mailto")
                            ? undefined
                            : "_blank"
                        }
                        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (
                    form.elements.namedItem("name") as HTMLInputElement
                  ).value;
                  const email = (
                    form.elements.namedItem("email") as HTMLInputElement
                  ).value;
                  const message = (
                    form.elements.namedItem("message") as HTMLTextAreaElement
                  ).value;

                  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
                  const body = encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\n${message}`
                  );
                  window.open(
                    `mailto:${personal.email}?subject=${subject}&body=${body}`,
                    "_blank"
                  );
                }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[var(--muted)] uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border border-[var(--border-color)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--muted)] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 border border-[var(--border-color)] text-sm uppercase tracking-widest hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
