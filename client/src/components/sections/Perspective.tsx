import { motion } from "framer-motion";

export default function Perspective() {
  return (
    <section className="py-24 md:py-32 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4 border-l-4 border-primary pl-6 md:pl-8">
            <span className="text-sm font-mono text-primary uppercase tracking-widest font-bold">
              Perspective
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              A Mixed Perspective on AI
            </h2>
          </div>

          {/* Article Content */}
          <div className="prose-content">
            <p>
              It’s been a few years since generative AI, especially ChatGPT, became a real part of everyday life. I still remember being in my sophomore year in CS and watching the shift unfold in real time. Suddenly everyone around me was debugging their code with AI, getting explanations for errors, or asking it to generate whole functions. I saw all of that, and yet I didn’t truly understand its scope. I didn’t predict how quickly it would outpace us and redefine our learning, our skills, and even our expectations.
            </p>

            <p>
              Now, after completing six different projects (seven, if I include this one), I can say that even my highest expectations have been exceeded. The more I see what AI can achieve with so little input from us, the more impressed and the more uneasy I feel.
            </p>

            <p>
              On one hand, I see the immense potential. I cannot deny that AI is incredibly helpful as a creative partner. It takes tasks I once thought were complex and turns them into simple prompts. It saves time, energy, and it feels “free.” Just type words on a screen and watch the work unfold. And I won’t deny that this has expanded opportunities for people who previously didn't have access to certain skills. Anyone can build a website. Anyone can code. That’s something worth acknowledging.
            </p>

            <p>
              But when I take a step back and think beyond the convenience, I can’t ignore the environmental impact of AI. My mind keeps going back to a YouTube video I saw of a family living near a data center and what they were experiencing because of it. Those costs that are purposely hidden from our sights stay with me. They remind me that the “magic” comes from somewhere and that someone, somewhere, is paying that price.
            </p>

            <p>
              But I still worry that there needs to be some form of control over how we use AI. When I look back just a few years, what truly unsettles me is not only the pace at which new AI technologies are being pushed out by these companies, but also how quickly we, the ordinary users, are becoming dependent on them. We talk about AI as a creative partner, but that dependency has already gone far beyond creativity. Some people use it as their academic partner, their search-engine partner and, most concerning of all, their emotional partner. And I can’t help but wonder where that leads us.
            </p>

            <p>
              For the big companies, this loss of control on our end aligns perfectly with their incentives. But for us, the future feels even more unclear. Many of us have already begun to accept GPT responses as factual without knowing the sources, without understanding the inputs for such outputs, and without questioning what might be missing.
            </p>

            <motion.blockquote 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-serif italic text-xl md:text-2xl leading-relaxed text-foreground border-l-4 border-primary pl-8 py-6 my-12 bg-primary/10 rounded-r-2xl shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
                </svg>
              </div>
              "So I’m left asking myself: What lies ahead? Are we really the ones in control of this technology anymore, or is it slowly beginning to control us?"
            </motion.blockquote>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
