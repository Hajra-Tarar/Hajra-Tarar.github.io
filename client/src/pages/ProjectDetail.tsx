import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Play, Music } from "lucide-react";
import heroImg from "@assets/Screenshot_2025-12-05_at_4.07.37_PM_1765233668106.png";
import { useEffect, useState, useRef } from "react";

// Screenshots
import screenTitle from "@assets/Screenshot_2025-12-05_at_4.07.37_PM_1765233668106.png";
import screenStory from "@assets/Screenshot_2025-12-08_at_4.53.10_PM_1765234051717.png";
import screenWhoAmI from "@assets/Screenshot_2025-12-08_at_4.53.47_PM_1765231773180.png";
import screenSpell from "@assets/Screenshot_2025-12-08_at_4.54.19_PM_1765231773180.png";
import screenEnd from "@assets/Screenshot_2025-12-08_at_5.09.03_PM_1765231773180.png";

// Icons
import bearIcon from "@assets/Brown_bear_storybook_icon_acfbdbcd_1765231345049.png";
import frogIcon from "@assets/Soft_Pooh-style_Freddy_icon_16df95b9_1765231471230.png";
import owlIcon from "@assets/Oliver_owl_icon_portrait_b14b8dc1_1765231496958.png";
import squirrelIcon from "@assets/Soft_Pooh-style_Samy_icon_de50acc6_1765231604299.png";
import lionIcon from "@assets/Soft_Pooh-style_Leo_icon_483cc43c_1765231614183.png";

// Sounds
import bearSound from "@assets/Grizzly_Bear_Roar_1_-_QuickSounds.com_1765231906489.mp3";
import frogSound from "@assets/Wetland_Pac_Chorus_Frog_Isolated_-_QuickSounds.com_1765231936440.mp3";
import owlSound from "@assets/Owl_Coo_-_QuickSounds.com_1760914904905_1765231864193.mp3";
import squirrelSound from "@assets/Squirrel_Monkey_-_QuickSounds.com_1765231966804.mp3";
import lionSound from "@assets/Lion_Roar-SoundBible.com-718441804_1765231890794.mp3";
import finalSong from "@assets/Benny's_Forest_Adventure_1765231997172.mp3";

export default function ProjectDetail() {
  const [, setLocation] = useLocation();
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const playAudio = (path: string, id: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // If clicking the same one that's already playing, just stop it (toggle behavior)
    if (playing === id) {
      setPlaying(null);
      return;
    }

    const audio = new Audio(path);
    audioRef.current = audio;
    setPlaying(id);
    audio.play();
    audio.onended = () => setPlaying(null);
  };

  const animals = [
    { id: 'bear', name: 'Benny\'s Friend', icon: bearIcon, sound: bearSound },
    { id: 'frog', name: 'Hoppy', icon: frogIcon, sound: frogSound },
    { id: 'owl', name: 'Oliver', icon: owlIcon, sound: owlSound },
    { id: 'squirrel', name: 'Samy', icon: squirrelIcon, sound: squirrelSound },
    { id: 'lion', name: 'Leo', icon: lionIcon, sound: lionSound },
  ];

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
            alt="Benny's Forest Adventure" 
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
              Interactive Storytelling
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
              Benny's Forest Adventure
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed drop-shadow-lg font-light">
              An interactive storybook experience blending narrative, gameplay, and early learning.
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
              My children’s interactive story, Benny’s Forest Adventure, began as a simple curiosity: What if I tried making a storybook even though I had zero background in children’s media? I’ve always wondered what it would feel like to create something fun, warm, and engaging for kids…something that wasn’t just a story to read, but an experience to participate in.
            </p>
            <p>
              Storytelling has always fascinated me because of how easily it captures attention, and I was curious about how I could make it more interactive. Part of my inspiration came from shows like Dora the Explorer. Her long pauses and questions always felt awkward and funny, but looking back, they were actually way ahead of their time in how they engaged children even without AI. That made me want to experiment with bringing that same spirit of interaction into a digital environment.
            </p>
            <p>
              So I created Benny’s Forest Adventure, a story about a bunny named Benny who is trying to make his way home through the forest. Along the way, he meets animal friends who need his help, and the child can only help them by spelling each animal’s name correctly through a missing letter game. So instead of just reading straight through, the story turned into a small interactive learning journey.
            </p>
            <p>
              To make the experience more immersive, I added simple animal sounds that play after every correct answer, hoping it might help kids associate spelling with sound and imagery. The story ends with Benny reaching his cozy burrow, where all the animals gather to celebrate and sing a joyful song. Therefore, With this project, my creativity really opened up. I was able to combine storytelling, gameplay, and early learning in a way I never imagined I could create on my own from scratch.
            </p>
          </div>
        </motion.section>

        {/* Gallery Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h3 className="font-display text-2xl font-bold text-white text-center mb-8">Platform Pages</h3>
          
          {/* Main Large Display */}
          <div className="group relative rounded-xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-primary/20 transition-all mb-8">
            <img src={screenTitle} alt="Title Screen" className="w-full h-auto" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-lg font-medium text-white text-center">Title Screen</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-primary/20 transition-all">
              <img src={screenStory} alt="Story Intro" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white text-center">Story Introduction</p>
              </div>
            </div>
            <div className="group relative rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-primary/20 transition-all">
              <img src={screenWhoAmI} alt="Interactive Story" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white text-center">Interactive Narrative</p>
              </div>
            </div>
            <div className="group relative rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-primary/20 transition-all">
              <img src={screenSpell} alt="Spelling Game" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white text-center">Spelling Minigame</p>
              </div>
            </div>
            <div className="group relative rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-primary/20 transition-all">
              <img src={screenEnd} alt="The End" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white text-center">Celebration Finale</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Audio Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-black/20 p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="text-center space-y-4 mb-12">
            <h3 className="font-display text-3xl font-bold text-white">Meet the Forest Friends</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Click on each friend to hear their sound! I used these audio cues to help children associate the animals with their distinct calls.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
            {animals.map((animal) => (
              <motion.button
                key={animal.id}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => playAudio(animal.sound, animal.id)}
                className={`flex flex-col items-center gap-3 group relative outline-none`}
              >
                <div className={`
                  w-24 h-24 md:w-32 md:h-32 rounded-full border-4 shadow-xl overflow-hidden bg-white/5 transition-all duration-300
                  ${playing === animal.id ? 'border-primary shadow-[0_0_30px_hsl(var(--primary))] scale-105' : 'border-white/10 group-hover:border-primary/50'}
                `}>
                  <img src={animal.icon} alt={animal.name} className="w-full h-full object-cover" />
                  
                  {/* Playing Overlay */}
                  {playing === animal.id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] rounded-full">
                      <Music className="w-8 h-8 text-white animate-bounce" />
                    </div>
                  )}
                </div>
                <span className={`font-medium transition-colors ${playing === animal.id ? 'text-primary' : 'text-white/80 group-hover:text-white'}`}>
                  {animal.name}
                </span>
              </motion.button>
            ))}
          </div>

          <div className="border-t border-white/10 pt-10 text-center">
            <p className="text-white/80 mb-6 font-medium">Experience the celebration finale song</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => playAudio(finalSong, 'final')}
              className={`
                inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg
                ${playing === 'final' 
                  ? 'bg-primary text-white shadow-[0_0_20px_hsl(var(--primary))]' 
                  : 'bg-white text-black hover:bg-gray-200'}
              `}
            >
              {playing === 'final' ? (
                <>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  Now Playing...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-current" />
                  Play Final Song
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Visual Break / Quote */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-white/10 overflow-hidden text-center shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="font-serif text-2xl md:text-3xl font-medium text-white leading-relaxed italic">
            "AI works best as a creative partner when you avoid treating it as a replacement. It can build you first, second, and many versions but only you can get it to the final one."
          </p>
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
              This project was the perfect starting point for me to understand what AI can make possible. It showed me that AI can help bring an idea to life even when you have no experience in a particular creative medium. It allowed me to move from concept to prototype incredibly quickly, which made the process feel exciting and accessible.
            </p>
            <p>
              But the more I worked, the more I realized that AI can only take a project so far. While it saves time and helps generate early drafts, the quality of the final product still depends on my own creativity, decisions, and willingness to revise. The limitations became very visible when I tried to refine the design, visuals, pacing, or audio. None of those elements became good automatically and I had to provide it with seperate resources and basically shape them intentionally.
            </p>
            <p>
              So the biggest thing I learned is that AI works best as a creative partner when you avoid treating it as a replacement. It can build you first, second, and many versions but only you can get it to the final one. It certainly helps you accelerate the starting point, and in my opinion, that is its greatest strength. But because of that speed, it becomes even more important to add your own judgement and creativity on top of what it gives you.
            </p>
            <p>
              During this project, I kept thinking about Kate Crawford’s argument in The Atlas of AI about the idea that people often believe humanlike intelligence can emerge from nonhuman systems if we simply train them enough. But working on this project made me realise some of the limits of that belief. Yes, AI can create stories and experiences but it never truly understands the intention part right away (not unless you have nailed down the prompt engineering part). That part, I believe, still relied entirely on me.
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
}
