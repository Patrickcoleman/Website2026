import { Separator } from "@/components/ui/separator"
import { NavLink } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function VirtualLaboratories() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Virtual Laboratories</h1>
      <Separator className="mb-8" />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:mb-15 gap-6">
          <div>
            <p className="text-3xl font-bold leading-snug">
              How can remote students achieve the same learning outcomes as those participating in in-person laboratory classes? 
            </p>
            <h2 className="text-xl font-semibold mb-2 mt-6">The Problem</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An ever increasing amount of university students are learning online, and during COVID the number temporarily skyrocketed. For biochemistry students, the skills learned in the laboratory are essential, both the practical skills and application of theory. How can these be taught for remote students?
            </p>
            <h2 className="text-xl font-semibold mb-2 mt-6">My Solution</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In 2021 I built multiple online, interactive, data generating virtual laboratories using C# in the Unity environment. These laboratories allowed students to play, experiment, and receive results ready for analysis, the same as in a real laboratory. 
            </p>
          </div>
          <img
            src="/images/Western_Blot.png"
            alt="Patrick Coleman"
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-6">
          <div className="md:w-1/2 flex flex-col gap-3">
            <NavLink to={"https://patrickcoleman.github.io/BCMB3X03/"} className="w-full">
              <motion.div
                  initial={{opacity: 0, x: -100}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.1 } }}
                >  
                <Card className="relative w-full pt-0 shadow-md border">
                  <img
                    src={"/images/ladder.png"}
                    className="relative z-20 aspect-[16/2] w-full object-cover"
                    />
                  <div className="py-1 text-center border-t">
                    <p className="text-sm font-semibold">Western Blot</p>
                  </div>
                </Card>
              </motion.div>
            </NavLink>
            <NavLink to={"https://patrickcoleman.github.io/Dot-Blot/"} className="w-full">
              <motion.div
                  initial={{opacity: 0, x: -100}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.1 } }}
                >  
                <Card className="relative w-full pt-0 shadow-md border">
                  <img
                    src={"/images/dotblotsmall.png"}
                    className="relative z-20 aspect-[16/2] w-full object-cover"
                    />
                  <div className="py-1 text-center border-t">
                    <p className="text-sm font-semibold">Dot Blot</p>
                  </div>
                </Card>
              </motion.div>
            </NavLink>
            <NavLink to={"https://patrickcoleman.github.io/WesternBlot/"} className="w-full">
              <motion.div
                  initial={{opacity: 0, x: -100}}
                  whileInView={{opacity: 1, x: 0}}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.1 } }}
                >  
                <Card className="relative w-full pt-0 shadow-md border">
                  <img
                    src={"/images/westernblotsmall.png"}
                    className="relative z-20 aspect-[16/2] w-full object-cover"
                    />
                  <div className="py-1 text-center border-t">
                    <p className="text-sm font-semibold">Western Blot 2</p>
                  </div>
                </Card>
              </motion.div>
            </NavLink>
          </div>
          <div className="md:w-1/2 flex flex-col gap-3 justify-around">
            <div>
              <h2 className="text-xl font-semibold mb-2 mt-6 text-center">Outcomes</h2>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Rolled out to over 250 students as graded work</li>
                <li>Used in courses in both Australia and New Zealand</li>
                <li>Received overwhelmingly positive feedback from both students and instructors</li>
              </ul>
            </div>
            <blockquote className="text-sm text-muted-foreground italic text-center border-l-4 border-primary pl-4 py-4">
              <p>"[the labs] allowed students to organise/optimise their experimental design, to run through the experimental protocol multiple times, to explore the consequences of varying each experimental step in a risk-free and rapid manner, and to generate their own data for analysis."</p>
              <p className="mt-4">- feedback from teaching staff</p>
            </blockquote>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-semibold mt-15 mb-5 text-center">Further Reading</h2>
            <p className="text-sm text-muted-foreground leading-relaxed text-center mb-15">
              If you'd like to know more about the intracicies of the project, I have just the resource for you!
              <br /> Below you'll find my thesis, where the goals, methods, and outcomes are explained in far greater detail. 
            </p>
          </div>
          <div className="flex justify-center">
            <a href="/files/PatrickColeman - Thesis.pdf" target="_blank" rel="noopener noreferrer" className="md:w-2/3">
              <motion.div
                  initial={{opacity: 0, y: 100}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.1 } }}
                  >  
                <Card className="relative w-full pt-0 shadow-md border">
                  <img
                    src={"/images/thesis.png"}
                    className="relative z-20 aspect-[16/6] w-full object-cover"
                    />
                </Card>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}