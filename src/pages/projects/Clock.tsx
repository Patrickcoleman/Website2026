import { useEffect, useState } from "react"

const COLS = 5
const ROWS = 23

type ClickableSquare = {
  row: number
  col: number
  text: string
}

const CLICKABLE_SQUARES: ClickableSquare[] = [
  { row: 2, col: 0, text: "After 30 seconds, this square will be filled for the first time. I hope you are still on this page to see it happen! Click some of next squares to see how long it will take for them." },
  { row: 3, col: 1, text: "I wouldn't try to hold your breath for the 6 minutes it will take to see this one change." },
  { row: 4, col: 4, text: "In 1.5 hours, your body will have passively burnt approximately 110 calories(Assuming you are sitting at your computer). " },
  { row: 6, col: 1, text: "Around 80g of cells in your body will have been replaced in 22 hours." },
  { row: 7, col: 3, text: "3,917,559 babies will have been born globally in the 11 days it takes to fill this square." },
  { row: 8, col: 1, text: "If you left now and walked at ~5km/h, you could walk the entiretly of France's land border in this 32 days." },
  { row: 10, col: 2, text: "If you planted a mango tree seed now, you would get ripe reddish fruit from the fully mature tree before this square ripened in just under 5 years." },
  { row: 12, col: 3, text: "You not be alive to see this square turn red in 116 years. ;(" },
  { row: 13, col: 2, text: "In 1047 years, a snail that left now could have made it to the moon!" },
  { row: 14, col: 2, text: "A Carbon-14 isotope will have lived out its 5700 year half life." },
  { row: 17, col: 1, text: "The Australian Tectonic Plate will have drifted almost 30km in the intervening 453 thousand years." },
  { row: 20, col: 0, text: "Uranus' moon Desdemona will most likely have collided with another of it's inner moons, either Cressida or Juliet, in the next 98.1 million years."},
  { row: 21, col: 0, text: "A Uranium-235 isotope will have lived out most of its 783 million year half life." },
  { row: 22, col: 1, text: "In 7 billion years the sun will have decayed into a red dwarf, signalling the final phase for our solar system, and I don't think our clock will be needed longer than that." },
]

const CLICKABLE_MAP = new Map(
  CLICKABLE_SQUARES.map(s => [`${s.row}-${s.col}`, s.text])
)
const ROW_TEXT_MAP = new Map(
  CLICKABLE_SQUARES.map(s => [s.row, s.text])
)

export default function Clock() {
  const [ticks, setTicks] = useState(0)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => setTicks(prev => prev + 1), 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])

  const CELL = isMobile ? 24 : 60
  const GAP = isMobile ? 4 : 8

  const rows = Array.from({ length: ROWS }).map((_, row) => {
    let minusvalue = 0
    for (let i = 0; i <= row; i++) minusvalue += Math.pow(COLS, i)
    const ticktime = Math.pow(COLS, row)
    let lit = 0
    if (ticks > 0) {
      let rem = ticks - minusvalue
      if (rem >= 0) {
        rem = Math.floor(rem / ticktime)
        lit = (rem + 1) % COLS
        if (lit === 0) lit = COLS
      }
    }
    const secsUntilFull = (COLS - lit) * ticktime
    return { lit, secsUntilFull }
  })

  return (
    <>
    <style>{`
      @keyframes pulse-red {
        0%, 100% { background-color: white; }
        50% { background-color: #fecaca; }
      }
    `}</style>
    <div className="p-4 m-2 space-y-4">
      <h1 className="text-3xl font-bold text-center">Clock</h1>
      <div className="text-muted-foreground text-sm text-center space-y-2">
        <p >
          Each second, a red square will appear in the first row. When a row is full, it will convert to a single square in the next row.
        </p>
        <p >
          This means that this is a base 5 clock, and each row will take 5 times longer to fill than the previous one. The first row will take 5 seconds to fill, the second row 25 seconds, and so on...
        </p>  
        <p >
          Click on the highlighted squares to see what will have happened by the time they are filled.
        </p>  
      </div>
    </div>
    <div className="grid grid-cols-5 gap-2 md:gap-6 p-4 md:p-8">

      {/* Top: Title and Subtitle */}

      {/* Left: clock */}
      <div className="col-span-2 flex items-center justify-center">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${COLS}, ${CELL}px)`,
            gap: `${GAP}px`,
            width: "fit-content",
          }}
        >
          {rows.map(({ lit }, row) =>
            Array.from({ length: COLS }).map((_, col) => {
              const cellKey = `${row}-${col}`
              const isClickable = CLICKABLE_MAP.has(cellKey)
              const isHovered = hoveredKey === cellKey
              const isClicked = isClickable && revealed.has(row)

              const shouldFlash = isClickable && !isClicked && !isHovered && col >= lit

              let border = "1.5px solid #e2e8f0"
              let bgColor: string | undefined = col < lit ? "#ef4444" : "white"
              if (isClickable) {
                if (isClicked) border = "3px solid #ef4444"
                else if (isHovered) border = "2.5px solid #ef4444"
                else border = "1.5px solid #ef4444"
                if (isHovered && !isClicked && col >= lit) bgColor = "#fee2e2"
                if (shouldFlash) bgColor = undefined
              }

              return (
                <div
                  key={cellKey}
                  onClick={isClickable ? () => setRevealed(prev => new Set(prev).add(row)) : undefined}
                  onMouseEnter={isClickable ? () => setHoveredKey(cellKey) : undefined}
                  onMouseLeave={isClickable ? () => setHoveredKey(null) : undefined}
                  style={{
                    width: `${CELL}px`,
                    height: `${CELL}px`,
                    borderRadius: isMobile ? "4px" : "6px",
                    backgroundColor: bgColor,
                    border,
                    animation: shouldFlash ? "pulse-red 2s ease-in-out infinite" : undefined,
                    transition: shouldFlash ? undefined : "background-color 0.15s ease, border 0.15s ease",
                    cursor: isClickable ? "pointer" : "default",
                  }}
                />
              )
            })
          )}
        </div>
      </div>

      {/* Right: Info*/}
      <div className="col-span-3 flex items-center justify-start">
        <div style={{ display: "flex", flexDirection: "column", gap: `${GAP}px` }}>
          {rows.map((_, row) => (
            <div
              key={row}
              style={{ minHeight: `${CELL}px`, display: "flex", alignItems: "center" }}
              className="text-xs md:text-sm text-muted-foreground pl-2 md:pl-4"
            >
              {revealed.has(row) ? ROW_TEXT_MAP.get(row) : null}
            </div>
          ))}
        </div>
      </div>

    </div>
    </>
  )
}
