"use client";

import {
  personal,
  skills,
  experience,
  education,
  activities,
  interests,
} from "@/lib/data";
import ScrollReveal from "@/components/scroll-reveal";
import { FileText, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="min-h-[80svh] flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <ScrollReveal className="lg:col-span-4">
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                <div className="aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out border border-[var(--border-color)]">
                  <img
                    src="/profile.png"
                    alt="Prince Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--border-color)]/30 -z-10" />
              </div>
            </ScrollReveal>

            <div className="lg:col-span-8">
              <ScrollReveal>
                <p className="text-[var(--muted)] text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 font-medium">
                  About Me
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium leading-[1.1] mb-6">
                  Prince{" "}
                  <span className="text-[var(--muted)] italic">Kumar</span>
                </h1>
                <p className="text-lg sm:text-xl text-[var(--muted)] font-light mb-2">
                  {personal.role}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)] mb-8">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {personal.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    {personal.email}
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="space-y-4 text-[var(--muted)] font-light leading-relaxed text-sm sm:text-base max-w-2xl mb-8">
                  <p>
                    I&apos;m a full-stack developer who builds things that work
                    fast, look clean, and solve real problems. I specialize in
                    full-stack engineering, web security, and data analysis
                    &mdash; turning complex problems into simple, elegant
                    solutions.
                  </p>
                  <p>
                    I study psychology alongside computer science because I
                    believe the best software is built by people who understand
                    how humans think. Every interface I design starts with one
                    question:{" "}
                    <span className="text-[var(--foreground)] italic">
                      &quot;How does this make the user feel?&quot;
                    </span>
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] text-sm hover:opacity-90 transition-opacity"
                  >
                    <FileText className="w-4 h-4" />
                    View Resume
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border-color)] text-sm hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Me
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4">
              Technical{" "}
              <span className="text-[var(--muted)] italic">Skills</span>
            </h2>
            <p className="text-[var(--muted)] text-sm mb-12 lg:mb-16 max-w-md">
              Technologies and tools I work with daily.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {(
              [
                ["Languages", skills.languages],
                ["Frameworks", skills.frameworks],
                ["Backend", skills.backend],
                ["DevOps", skills.devops],
                ["Specializations", skills.specializations],
                ["Design", skills.design],
              ] as const
            ).map(([label, items], i) => (
              <ScrollReveal key={label} delay={i * 0.06}>
                <div>
                  <span className="block text-[var(--foreground)] font-medium text-xs lg:text-sm mb-3 pb-2 border-b border-[var(--border-color)]">
                    {label}
                  </span>
                  <ul className="text-[var(--muted)] text-xs lg:text-sm space-y-1.5">
                    {items.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 border-t border-[var(--border-color)]/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4">
              Work{" "}
              <span className="text-[var(--muted)] italic">Experience</span>
            </h2>
            <p className="text-[var(--muted)] text-sm mb-12 lg:mb-16 max-w-md">
              Where I&apos;ve applied my skills in production.
            </p>
          </ScrollReveal>

          <div className="space-y-0">
            {experience.map((exp, i) => (
              <ScrollReveal key={exp.company} delay={i * 0.1}>
                <div className="group py-8 border-b border-[var(--border-color)] hover:border-[var(--muted)]/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="text-[var(--muted)] text-sm">
                        {exp.company} &middot; {exp.location}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs text-[var(--muted)] border border-[var(--border-color)] px-2 py-1">
                        {exp.type}
                      </span>
                      <p className="text-xs text-[var(--muted)] mt-1">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-[var(--muted)] text-sm leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-[var(--muted)] mt-2.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 border-t border-[var(--border-color)]/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4">
             {" "}
              <span className="text-[var(--muted)] italic">Education</span>
            </h2>
            <p className="text-[var(--muted)] text-sm mb-12 lg:mb-16 max-w-md">
              My academic background.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <ScrollReveal key={edu.institution} delay={i * 0.1}>
                <div className="border border-[var(--border-color)] p-6 h-full hover:border-[var(--muted)]/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-[var(--muted)] text-xs uppercase tracking-widest">
                      {edu.period}
                    </span>
                    {edu.grade && (
                      <span className="text-xs border border-[var(--border-color)] px-2 py-0.5 text-[var(--foreground)]">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-lg mb-1">{edu.degree}</h3>
                  <p className="text-[var(--muted)] text-sm">{edu.institution}</p>
                  {edu.details && (
                    <p className="text-[var(--muted)] text-xs mt-2">
                      {edu.details}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 border-t border-[var(--border-color)]/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4">
              Activities &{" "}
              <span className="text-[var(--muted)] italic">Leadership</span>
            </h2>
            <p className="text-[var(--muted)] text-sm mb-12 lg:mb-16 max-w-md">
              Beyond code \u2014 competitions, exhibitions, and community.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, i) => (
              <ScrollReveal key={activity.title} delay={i * 0.1}>
                <div className="border border-[var(--border-color)] p-6 lg:p-8 h-full hover:border-[var(--muted)]/50 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[var(--muted)] text-xs uppercase tracking-widest">
                      {activity.year}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[var(--muted)]" />
                  </div>
                  <h3 className="font-serif text-xl mb-1">{activity.title}</h3>
                  <p className="text-[var(--muted)] text-sm mb-1">
                    {activity.role}
                  </p>
                  <p className="text-[var(--foreground)] text-sm font-medium mb-3">
                    {activity.event}
                  </p>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 lg:py-32 px-6 sm:px-8 lg:px-12 border-t border-[var(--border-color)]/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4">
              What I{" "}
              <span className="text-[var(--muted)] italic">Explore</span>
            </h2>
            <p className="text-[var(--muted)] text-sm mb-12 lg:mb-16 max-w-md">
              Things that keep me curious outside of work.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, i) => (
              <ScrollReveal key={interest.name} delay={i * 0.08}>
                <div className="group py-6 border-b border-[var(--border-color)] hover:border-[var(--muted)]/50 transition-colors">
                  <h3 className="font-serif text-lg mb-2 group-hover:text-[var(--muted)] transition-colors">
                    {interest.name}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
