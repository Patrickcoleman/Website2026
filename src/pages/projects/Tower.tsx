import { useEffect, useState } from "react"

export default function Tower() {
  const [scale, setScale] = useState(1/3)
  
  useEffect(() => {
    const calculateScale = () => {
    const viewportHeight = window.innerHeight
    const viewportWidth = window.innerWidth
    const scaleByHeight = viewportHeight / 1920
    const scaleByWidth = viewportWidth / 1080
    setScale(Math.min(scaleByHeight, scaleByWidth) * 0.9)
  }
    calculateScale()
    window.addEventListener("resize", calculateScale)
    return () => window.removeEventListener("resize", calculateScale)
  }, [])

  return <main style={{backgroundColor: "#bcff9c"}}>
    <h1 className="text-4xl font-bold text-center pt-8">The Tower</h1>
    <p className="text-xl md:text-3xl font-bold text-center leading-snug m-10">
      Can you defend your tower against the tides of incoming foes?
    </p>
    <div className="max-w-7xl mx-auto px-8 py-5">
      <div className="text-xl space-y-4 text-center mb-5">
        <p>I like videogames, and wanted to try my hand at building one.</p>
        <p>My game is called "The Tower", and is a lite roguelike proof-of-concept for an idea that I dreamt up.</p>
        <p>I built it using C#/Unity, the engine I am familiar with.</p>
        <p>The game is turn based, and to fire you must select a weapon from the bottom, and then click on a square to fire at it.</p>
        <p>If you deselect your weapon, you can click on the enemies to see their stats. Enjoy!</p>
        <p>Although originally written as a mobile game, this browser version will not work on mobile devices.</p>
      </div>
      <div className="flex justify-center">
        <div style={{
          width: `${1080 * scale}px`,
          height: `${1920 * scale}px`,
          overflow: "hidden",
          flexShrink: 0
        }}>
          <iframe
            src="https://patrickcoleman.github.io/TheTowerGame/"
            title="The Tower"
            allowFullScreen={true}
            style={{
              width: "1080px",
              height: "1920px",
              border: "none",
              transformOrigin: "0 0",
              transform: `scale(${scale})`
            }}
            id="tower-iframe"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-12">
        <p className="text-xl text-center font-bold">
          Notes
        </p>
      </div>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
          <p>I really enjoyed creating this game, and I learned a lot about game design during the process.</p>
          <p>In one direction, I was able to implement some pretty sleek bits of code like the pathfinding algorithm, that uses a recursion to find the shortest path from the enemies to the tower.</p>
          <p>In another, it turns out that balancing a game is very difficult! It was a very fine line between the game being far too easy, and far too difficult.</p>
          <p>This is the difficulty equation I eventually settled on.</p>
          <p className="font-mono font-bold text-foreground">
            <span className="text-green-500 mr-2">&gt;</span>
            <span className="text-blue-400">double</span>{" "}
            <span className="text-red-300">levelDifficulty</span>{" "}
            <span className="text-foreground">= m_Constant + m_Multiplier * roundNumber + Math.</span>
            <span className="text-purple-400">Pow</span>
            <span className="text-foreground">(m_Exponent, roundNumber);</span>
          </p>
          <p>I actually wrote this game while travelling on a boat from Australia to Indonesia in my downtime, and had to stop writing at points due to the screen making me feel seasick.</p>
          <p>There's a lot to fix up, of course, but I'm happy to leave this project where it is for now.</p>
          <p>If I were to come back to it one day, these would be the fixes/features that I would like to implement:</p>
          <ul className="list-disc list-inside text-m space-y-2">
            <li>Add in a leaderboard, where users can save their scores. Postgres + API required.</li>
            <li>Allow mobile users on this page to enter their email and receive a download like to a trial release</li>
            <li>Cap the weapon damage at 3, as currently no enemies have more than 3 health</li>
            <li>Ensure that enemies have an available space to move to before spawning in. Sometimes there are bottlenecks outside the screen bounds</li>
            <li>Fix and re-implement the grape shot weapon, that broke when I refactored all the async functions to IEnumerables so they worked on WebGL</li>
            <li>Show enemy health bars above them at all times</li>
            <li>Show the damage that enemies do to the tower, the same as the weapons show to enemies</li>
            <li>Improve and modernise the UI, remove the text overflow on some upgrades</li>
            <li>Add animations and improve graphics for certain weapons</li>
            <li>Add more enemy and weapon types!</li>
          </ul>
          <p>Maybe some day I will come back to this list and polish it off, but for now here it shall remain.</p>
        </div>
    </div>
  </main>
}