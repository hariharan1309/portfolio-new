"use client";
import ScrollAnimation from "@/components/ScrollAnimation";
import { skills } from "@/lib/portfolioData";
import { TrueFocus } from "@/components/ui/TrueFocus";
import { GraduationCap, Code2, Database } from "lucide-react";
import DecryptedText from "@/components/reactbits/DecryptedText";

export default function Competencies() {
  return (
    <section className="py-32 relative border-t border-border bg-background" id="competencies">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <ScrollAnimation>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-muted-foreground"></div>
            <DecryptedText 
              text="01 / CAPABILITIES"
              speed={40}
              className="text-muted-foreground font-mono text-sm tracking-widest uppercase"
            />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 text-foreground">Expertise &<br/>Education.</h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border auto-rows-[minmax(250px,auto)]">
          {/* Education Block */}
          <ScrollAnimation direction="up" className="md:col-span-2 group bg-background hover:bg-secondary/30 transition-colors duration-500 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_var(--foreground)_1px,_transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
            <div className="h-full p-8 md:p-10 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-none border border-border bg-secondary/50 text-muted-foreground group-hover:text-foreground transition-colors">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-muted-foreground font-mono text-sm tracking-widest uppercase">Academic</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-foreground/80 group-hover:text-foreground transition-colors mb-2">Bachelor of Engineering - ECE</h3>
                <p className="text-lg text-muted-foreground font-light group-hover:text-foreground/80 transition-colors">KPR Institute of Engineering and Technology</p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-muted-foreground/80 font-mono text-sm">Coimbatore, India</p>
                <div className="inline-block px-4 py-2 border border-border text-muted-foreground font-mono text-xs uppercase tracking-wider group-hover:border-muted-foreground transition-colors w-fit">
                  08/2019 - 04/2023
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Skills Blocks */}
          {skills.map((skillGroup, idx) => (
            <ScrollAnimation key={skillGroup.category} direction="up" delay={0.1 * (idx + 1)} className="group bg-background hover:bg-secondary/30 transition-colors duration-500 relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_var(--foreground)_1px,_transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
              <div className="h-full p-8 md:p-10 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-none border border-border bg-secondary/50 text-muted-foreground group-hover:text-foreground transition-colors">
                    {idx === 0 ? <Code2 className="w-5 h-5" /> : <Database className="w-5 h-5" />}
                  </div>
                  <span className="text-muted-foreground font-mono text-sm tracking-widest uppercase">{skillGroup.category}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {skillGroup.items.map(skill => (
                    <span key={skill} className="px-3 py-1.5 border border-border bg-background text-muted-foreground text-sm font-mono tracking-tight hover:border-muted-foreground hover:text-foreground transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
          
          {/* Extra Block */}
          <ScrollAnimation direction="up" delay={0.3} className="md:col-span-2 group bg-background transition-colors duration-500 relative overflow-hidden">
             <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_var(--foreground)_1px,_transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
             <div className="h-full p-8 md:p-12 flex items-center justify-center min-h-[300px] relative z-10">
               <div className="w-full">
                 <TrueFocus 
                   sentence="Always learning, always building."
                   blurAmount={3}
                   borderColor="var(--primary)"
                 />
               </div>
             </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
