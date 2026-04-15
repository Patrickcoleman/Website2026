import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function Rabbit() {
  return <main>
    <h1 className="text-4xl font-bold text-center mt-5">Run, rabbit, run</h1>
    <p className="text-xl md:text-3xl font-bold text-center leading-snug m-10">
      An interactive population dynamic simulator, showcasing how species adapt in response to envrionmental conditions
    </p>
    <video autoPlay loop muted playsInline className="w-full">
      <source src="/videos/rabbits.mp4" type="video/mp4" />
    </video>
    <div className="max-w-7xl mx-auto px-8 py-12">
      <div className="text-xl space-y-4">
        <p>During my time studying biology at university I was fascinated with the trends observed in population dynamics.</p>
        <p>How can creatures acting individually form clear statistical trends on a group level?</p>
        <p>In this rudimentary simulation, I set out to create conditions that would allow for the observable rise and fall of a population of rabbits.</p>
        <p>I also decided to give the rabbits a speed variable, allowing some rabbit to reach food faster than others but at a cost of starving quicker.</p>
        <p>The basic conditions of the simulation are as follows:</p>
      </div>
      <ul className="list-disc list-inside text-m text-muted-foreground space-y-2 mt-5">
        <li>Grass nodes grow at a random position within the bounds of the screen, at a base rate of 10 per second</li>
        <li>Rabbits constantly run towards their nearest grass node, eating it when they contact it.</li>
        <li>Rabbits each have a speed that is set at their birth, manually spawned rabbits have a speed of 1. </li>
        <li>Rabbits get hungry as time goes on, turning red as they require food. Once a rabbit is completely red, it will die and disappear.</li>
        <li>When a rabbit has eaten 5 pieces of grass, it will birth another rabbit. The child rabbit will have a random speed within ± 5% of the parent rabbit.</li>
        <li>A faster rabbit starve at a rate of its speed ^2. This means that a rabbit with a speed of 2 starves at 4 times the rate of a rabbit with a speed of 1, and therefore is only be able to travel half the distance before starvation if unfed.</li>
      </ul>
      <div className="text-xl font-semibold m-7 text-center space-y-3">
        <h2>Before we dive into some details, here it is to have a toy with yourself</h2>
        <h2 className="text-l">I recommend using the button in the lower right to fullscreen the program</h2>
      </div>
      <div className="flex justify-center m-7">
        <NavLink to={"https://patrickcoleman.github.io/Rabbit_Simulator/"} target="_blank" rel="noopener noreferrer" className={"w-1/2"}>
          <motion.div
              initial={{opacity: 0, y:100}}
              whileInView={{opacity: 1, y: 0}}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.1 } }}
              >  
            <Card className="relative w-full pt-0 shadow-md border">
              <img
                src={"/images/rabbits.png"}
                className="relative z-20 aspect-[16/5] w-full object-cover"
                />
              <div className="py-1 text-center">
                <p className="text-sm font-semibold">Rabbit Simulator</p>
              </div>
            </Card>
          </motion.div>
        </NavLink>
      </div>
    <div className="max-w-7xl mx-auto px-8 py-12">
      <p className="text-xl text-center font-bold">
        Analysis
      </p>
    </div>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
        <p>In nature, populations of animals can rise and fall in a cyclical manner over time, due to factors like predation, resource scarcity, or disease.</p>
        <p>In the case of food scarcity, which is what causes the population to fluctuate in this simulation, the population rises initially when food is plentiful. As the population explodes exponentially, it starts to impact the amount of food available, and individuals find it harder to find sustenance. The population then falls dramatically as many individuals starve, and eventually the lower population allows the food to accumulate again, beginning the cycle anew.</p>
        <p>Predators can also exhibit a similar effect on a prey population — as prey numbers rise, so too will the number of predators. The high number of predators will then decimate the prey population, until the predators themselves are unable to reliably find prey. They then die off in turn, and the few surviving prey members begin to repopulate in the low predator environment, and the cycle begins anew.</p>
        <p>Any environmental factor that causes a high population to negatively impact individual survival can trigger this loop — another example being disease.</p>
        <p>In the simulation, this rise and fall can be observed through the first factor: food availability.</p>
        <p>If you allow the grass to grow for a minute before generating the first rabbit, you will observe an explosion in population. When the grass has mostly been eaten, it will plummet again, alternating between rises and falls for a couple of cycles until the population stabilises</p>
        <p>Additionally, rabbits can also evolve to be faster or slower over time — so how does this relate to the population cycle?</p>
        <p>If you've already run the simulation you may have noticed that as the population increases in the inital race, so does the average speed. Rabbits must be as fast as possible for a chance to reach food first in a high-competition environment.</p>
        <p>On the other hand, when the population falls and food is not plentiful, it's beneficial to be slower — allowing a rabbit to outlast the quicker competition.</p>
        <p>Once the population is stable, the average speed continues to lower as more rabbits find this strategy beneficial.</p>
        <p>If you allow the simulation to run for a long time, where do you think the population and average speed numbers will stabilise?</p>
        <p>I encourage you to find out.</p>
      </div>
    </div>
  </main>
}