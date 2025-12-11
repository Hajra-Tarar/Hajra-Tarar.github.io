import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function Citations() {
  const citations = [
    {
      author: "Crawford, K.",
      year: "2021",
      title: "Atlas of AI: Power, politics, and the planetary costs of artificial intelligence",
      source: "Yale University Press"
    },
    {
      author: "Tarnoff, B.",
      year: "2023, July 25",
      title: "Weizenbaum’s nightmares: How the inventor of the first chatbot turned against AI",
      source: "The Guardian"
    },
    {
      author: "Minsky, M.",
      year: "1982",
      title: "Why people think computers can't",
      source: "AI Magazine, 3(4), 3-15"
    }
  ];

  return (
    <section className="py-24 px-4 relative border-t border-white/5 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <BookOpen className="w-5 h-5" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">References</h2>
          </div>

          <div className="grid gap-6">
            {citations.map((citation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group p-6 rounded-xl border border-white/5 bg-card/20 hover:bg-card/40 transition-colors"
              >
                <p className="font-serif text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors">
                  <span className="font-semibold text-white">{citation.author}</span> ({citation.year}).{" "}
                  <span className="italic">{citation.title}</span>. {citation.source}.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
