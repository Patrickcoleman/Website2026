import { NavLink } from "react-router-dom"

export default function bloghome() {
  return <main className="w-3/4 mx-auto">
    <h1 className="text-4xl font-bold text-center mt-5">My pilgrimage to Germany</h1>
    <p className="text-xl md:text-3xl font-bold text-center leading-snug m-10">
      In 2025, I spent six and a half months hitchhiking from Australia to Germany.
    </p>
    <img src="/images/map.png" />
    <div className="space-y-4 mb-20">
      <p>
        For a few years, I knew I would be uprooting my life in Sydney and heading back to Germany to live there for the forseeable future.
        Somehow, jumping on a plane and arriving on the other side of the world felt wrong to me, too fast for such a great change, and I wanted to undertake a journey to get there.
        My plan settled on hitchhiking the distance after reading <a href="https://www.jamiemaslin.com/the-long-hitch-home-1" className="underline" target="_blank" rel="noopener noreferrer">Jamie Maslin's "The Long Hitch Home",</a> where he travelled along a similar route in 2014.
      </p>
      <p>
        I cannot adequately express in a summary what this journey meant to me, but the people, landscapes, and scenery will forever be with me.
        Luckily, I diligently blogged my daily travels, and have since migrated all the data from my wordpress website here.
      </p>
      <p>
        You can use the calendar to navigate to a specific date, or start with the first post <NavLink to="/projects/blog/0" className="underline">here.</NavLink>
      </p>
    </div>
  </main>
}