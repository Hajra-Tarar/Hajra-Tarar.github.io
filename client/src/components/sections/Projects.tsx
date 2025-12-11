import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import project1Img from "@assets/Screenshot_2025-12-05_at_4.07.37_PM_1765233668106.png";
import project2Img from "@assets/Screenshot_2025-12-08_at_1.30.03_PM_1765233668106.png";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Benny's Forest Adventure",
    category: "Interactive Storytelling",
    image: project1Img,
    description: "An interactive reading game where young readers learn how to spell through a forest adventure.",
    align: "left",
    link: "/project/bennys-adventure"
  },
  {
    id: 2,
    title: "Colours of Self",
    category: "Magic",
    image: project2Img,
    description: "An interactive platform where you can visualize your inner world, seeing your memories and emotions expressed through colors.",
    align: "right",
    link: "/project/colours-of-self"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">Selected Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of experiments and polished interfaces that blend creativity with code.
          </p>
        </div>

        {/* Zigzag Line (Visual only) */}
        <div className="absolute left-1/2 top-32 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block -translate-x-1/2" />

        <div className="space-y-32 relative">
          {projects.map((project, index) => (
            <ProjectNode key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectNode({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0;
  const [isHovered, setIsHovered] = useState(false);

  const Content = () => (
    <>
      {/* Text Side */}
      <div className={`flex-1 text-center ${isEven ? "md:text-right" : "md:text-left"}`}>
        <span className="text-sm font-mono text-primary mb-3 block uppercase tracking-widest font-bold">{project.category}</span>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display text-foreground">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-8 text-lg font-light">{project.description}</p>
        <div className={`inline-flex items-center gap-2 text-sm font-bold tracking-wide transition-all duration-300 ${project.link ? "text-white hover:text-primary hover:translate-x-1" : "text-muted-foreground cursor-not-allowed"}`}>
          {project.link ? "VIEW PROJECT" : "COMING SOON"} <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Center Node (Desktop only) */}
      <div className="hidden md:flex flex-col items-center justify-center relative z-10">
        <div className={`w-4 h-4 rounded-full bg-background border-2 border-primary transition-all duration-500 ${isHovered ? "scale-150 shadow-[0_0_20px_hsl(var(--primary))]" : "shadow-[0_0_10px_hsl(var(--primary)/0.5)]"}`} />
      </div>

      {/* Image Side */}
      <div className="flex-1 w-full">
        <motion.div
          className="relative group cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-card/50 backdrop-blur-sm shadow-2xl"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <div className="aspect-video relative overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold px-8 py-4 border border-white/20 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors">
                {project.link ? "Explore Project" : "Coming Soon"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {project.link ? (
        <Link href={project.link} className="contents">
          <Content />
        </Link>
      ) : (
        <Content />
      )}
    </motion.div>
  );
}
