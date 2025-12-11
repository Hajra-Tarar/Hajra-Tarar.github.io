import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Reflection() {
  return (
    <section className="py-32 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl w-full relative z-10"
      >
        <div className="relative rounded-[2.5rem] p-8 md:p-20 text-center space-y-12 overflow-hidden border border-white/10 bg-card/40 backdrop-blur-xl shadow-2xl">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.div 
              initial={{ rotate: -10, scale: 0.8 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="p-4 rounded-full bg-primary/10 border border-primary/20 text-primary mb-2"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>

            <h2 className="font-display text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 pb-2">
              Final Reflection
            </h2>
          </div>
          
          <div className="space-y-8 text-xl md:text-2xl text-muted-foreground leading-relaxed relative z-10 font-light max-w-3xl mx-auto">
            <p>
              Looking back, while I still remain cautious about our growing dependence on AI, I also recognize its immense potential for creative collaboration. Yet, this partnership is not one-sided. To create our best work and feel genuinely fulfilled, I remind myself to treat AI not as a replacement, but as a co-creator. Human imagination paired with machine capability can expand the boundaries of what we can create and even imagine.
            </p>
            <div className="pl-6 border-l-4 border-primary/50">
              <p>
                So, in creative collaboration with AI, we must balance curiosity with criticality. We should embrace its versatility and capabilities, but not let it overshadow our own judgment or awareness. At the same time, we need to be conscious of the environmental and social costs of these technologies, and of the ways overdependence can subtly endanger our autonomy, with the hope that, in using AI, we preserve both our control and our responsibility.
              </p>
            </div>
          </div>

          <div className="pt-16 relative z-10 flex items-center justify-center gap-4 opacity-80">
             <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
             <div className="w-1.5 h-1.5 rotate-45 bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
             <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
