import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import heroImg from "@assets/Screenshot_2025-12-08_at_1.30.03_PM_1765233668106.png";
import moodBoardImg from "@assets/Screenshot_2025-12-08_at_4.04.11_PM_1765228273549.png";
import mainPaletteImg from "@assets/Screenshot_2025-12-08_at_4.04.22_PM_1765228273549.png";
import analogousPaletteImg from "@assets/Screenshot_2025-12-08_at_4.04.27_PM_1765228273549.png";
import complementaryPaletteImg from "@assets/Screenshot_2025-12-08_at_4.04.33_PM_1765228273549.png";
import memoryBoardImg from "@assets/Screenshot_2025-12-08_at_4.07.40_PM_1765228273549.png";
import emotionCircleImg from "@assets/Screenshot_2025-12-08_at_4.08.27_PM_1765228273549.png";
import { useEffect } from "react";

export default function ProjectColoursOfSelf() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white pb-32">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-white/5">
        <Link href="/#projects" className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>
        <span className="font-mono text-xs text-primary uppercase tracking-widest font-bold">Project</span>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full mt-20 md:mt-0">
        <div className="absolute inset-0">
          <img 
            src={heroImg} 
            alt="Colours of Self" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/20 text-sm font-mono mb-6 backdrop-blur-md font-bold">
              Magic
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Colours of Self
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed drop-shadow-lg font-light">
              An introspective journey through colour, symbol, and emotion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 mt-24 space-y-32">
        
        {/* Section: What I Did */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1fr_2fr] gap-12"
        >
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-bold text-white">What I Did</h2>
            <div className="h-1 w-12 bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))]" />
          </div>
          <div className="prose-content">
            <p>
              For the second project, I picked my last project to see how far I’ve come at the end of this journey. This week’s theme was “magic,” and it took me the longest time to think of something that truly felt magical to me. I kept coming back to the idea of turning something internal into something visual. That led me to Colours of Self, a platform where you can visualize your memories and emotions as colours.
            </p>
            <p>
              I believe we subconsciously associate colours with who we are — through our emotions, experiences, and memories. Each colour makes us feel a certain way, so I wanted to create a sense of magic through them. At the same time, I was curious to see how AI would interpret these subtleties and whether the colours it chose would match the ones I intuitively feel within.
            </p>
            <p>
              Seeing the outcomes for the colour palettes and boards that AI would create for my self characteristics and memories, I became curious about testing how well it sees emotions in real time. This led me to the final feature, called emotion circle, for seeing how well it can read and translate my present emotions into colours.
            </p>
          </div>
        </motion.section>

        {/* Gallery Grid - Visualizing the Concept */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Large Display */}
          <div className="group relative rounded-xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-primary/20 transition-all mb-8">
            <img src={heroImg} alt="App Interface" className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-lg font-medium text-white text-center">App Interface</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 group relative">
               <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-card/60 backdrop-blur-sm transition-transform hover:scale-[1.01] duration-500">
                <img src={moodBoardImg} alt="Personality Mood Board" className="w-full h-auto" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-medium text-white text-center">Personality Mood Board</p>
                </div>
              </div>
            </div>
             <div className="space-y-4 group relative">
               <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-card/60 backdrop-blur-sm transition-transform hover:scale-[1.01] duration-500">
                <img src={memoryBoardImg} alt="Memory Mood Board" className="w-full h-auto" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-medium text-white text-center">Visualizing Memories</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="group relative rounded-lg overflow-hidden border border-white/10 shadow-lg hover:shadow-primary/20 transition-all">
                <img src={mainPaletteImg} alt="Main Palette" className="w-full h-auto" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs font-medium text-white text-center">Main Palette</p>
                </div>
             </div>
             <div className="group relative rounded-lg overflow-hidden border border-white/10 shadow-lg hover:shadow-primary/20 transition-all">
                <img src={analogousPaletteImg} alt="Analogous Palette" className="w-full h-auto" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs font-medium text-white text-center">Analogous Harmonies</p>
                </div>
             </div>
             <div className="group relative rounded-lg overflow-hidden border border-white/10 shadow-lg hover:shadow-primary/20 transition-all">
                <img src={complementaryPaletteImg} alt="Complementary Palette" className="w-full h-auto" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs font-medium text-white text-center">Complementary Contrasts</p>
                </div>
             </div>
          </div>
        </motion.div>

         {/* Emotion Circle Highlight */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-white/5 bg-black/20 shadow-2xl group"
        >
          <img src={emotionCircleImg} alt="Emotion Mood Circle" className="w-full h-auto opacity-90 transition-transform duration-700 group-hover:scale-105" />
           <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
             <p className="text-white text-center font-medium text-lg drop-shadow-md group-hover:text-primary transition-colors">Real-time Emotion Circle</p>
           </div>
        </motion.div>


        {/* Section: What I Learned */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1fr_2fr] gap-12"
        >
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-bold text-white">What I Learned</h2>
            <div className="h-1 w-12 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
          </div>
          <div className="prose-content">
            <p>
              This project, which started as a challenge to test AI, ended up becoming a reflection on myself. At first, I wanted to expose the limitations of AI in understanding emotional nuances. The Emotion Circle did reveal some of these limits. While the AI could easily identify broad feelings like happiness or sadness, it missed more complex or subtle emotions, such as fear. That was interesting, but it wasn’t the part that stayed with me the most.
            </p>
            <p>
              What I learned most about was my own expectations. In the process of trying to visualize my internal feelings, I found myself secretly wanting the AI to give me the colours I hoped to see. As if it might somehow read my thoughts, or understand me on a deeper level. And when I looked at the colours it generated for my emotions or personality, I started to interpret them as if the AI had real judgement or emotional awareness. It took me a while to realise that I was trying to find meaning in its outputs... meaning that wasn’t really there. I began to treat it as something intentional, something that knew me.
            </p>
            
            <blockquote className="font-serif italic text-xl leading-relaxed text-white/90 border-l-4 border-primary pl-6 py-4 my-8 bg-primary/10 rounded-r-lg relative">
              <span className="absolute -left-3 -top-3 text-4xl text-primary opacity-50">“</span>
              Yet, as Eliza illustrated, it was surprisingly easy to trick people into feeling that a computer did know them – and into seeing that computer as human. Even in his original 1966 article, Weizenbaum had worried about the consequences of this phenomenon, warning that it might lead people to regard computers as possessing powers of “judgment” that are “deserving of credibility”. “A certain danger lurks there,” he wrote.
              <span className="block mt-2 text-sm font-sans font-bold text-primary not-italic uppercase tracking-widest">— Tarnoff, B. (2023)</span>
            </blockquote>

            <p>
              This made me think of the concern raised by Tarnoff of our tendency to expect understanding (even companionship) from technology. What began as a reflection on AI turned into a reflection on my own self-awareness. This tendency to project humanity onto machines shows how much we want to be understood, even by systems that cannot actually feel anything. Maybe Minsky was right when he said our self-awareness itself might be an illusion. Maybe what we really want is to feel in control, to be able to see inside our own minds, and AI becomes a false mirror we hope will show us something true. At the same time, it made me wonder whether AI, in a sense, reflects what we project onto it.
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
