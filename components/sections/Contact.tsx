"use client";
import React, { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import Link from "next/link";
import DecryptedText from "@/components/reactbits/DecryptedText";

export default function Contact({ y2 }: { y2?: any }) {
  const [copied, setCopied] = useState(false);
  const email = "hariharana1309@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="py-32 relative border-t-2 border-border bg-background text-foreground transition-colors duration-300"
      id="contact"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <ScrollAnimation>
          <div className="max-w-4xl mx-auto text-center mb-16">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase border border-border bg-card text-foreground">
                OUTRO // 04
              </span>
              <div className="w-8 h-[2px] bg-border" />
              <DecryptedText
                text="What's Next"
                speed={40}
                className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase"
              />
            </div>

            {/* Display Headline */}
            <h2 className="font-display text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight mb-6 text-foreground uppercase leading-none">
              Let&apos;s Talk.
            </h2>

            {/* Recruiter-First Subtitle */}
            <p className="text-muted-foreground text-lg md:text-xl font-normal max-w-xl mx-auto leading-relaxed">
              Available for full-time engineering roles and technical collaborations. Every inquiry receives a direct, prompt response.
            </p>
          </div>

          {/* High-Trust Contact Container */}
          <div className="max-w-2xl mx-auto border-2 border-border bg-card p-8 md:p-12 shadow-2xl relative transition-colors duration-300">
            {/* Corner Registration Accents in Clean Ink */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-foreground/50" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-foreground/50" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-foreground/50" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-foreground/50" />

            <div className="text-center space-y-8">
              {/* Direct Mail Action Box */}
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground block mb-3">
                  PRIMARY COMMUNICATION CHANNEL
                </span>
                <a
                  href={`mailto:${email}`}
                  className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground hover:text-primary transition-colors tracking-wide underline underline-offset-8 decoration-border hover:decoration-foreground/60"
                >
                  {email}
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href={`mailto:${email}`}
                  className="btn-tactile inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-xs font-bold uppercase tracking-wider cursor-pointer hover:border-foreground"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="btn-tactile inline-flex items-center gap-2 bg-background border-2 border-border text-foreground px-6 py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-card hover:border-foreground/40 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-8 border-t border-border flex flex-wrap items-center justify-center gap-6">
                <Link
                  href="https://github.com/hariharan1309"
                  target="_blank"
                  className="btn-tactile inline-flex items-center gap-2.5 px-4 py-2 bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/50 text-xs font-mono tracking-wider uppercase transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/hari-haran-b59019187/"
                  target="_blank"
                  className="btn-tactile inline-flex items-center gap-2.5 px-4 py-2 bg-background border border-border text-muted-foreground hover:text-foreground hover:border-foreground/50 text-xs font-mono tracking-wider uppercase transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                </Link>
              </div>
            </div>
          </div>

          {/* Volume Colophon / Footer Note */}
          <div className="mt-20 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground/60 space-y-2">
            <div>VOLUME 01 // COMPILED & CRAFTED BY HARIHARAN A.</div>
            <div>NEXT.JS 15 • TYPESCRIPT • TAILWIND CSS 4 • MOTION</div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
