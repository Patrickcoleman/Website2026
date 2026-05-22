import { useState } from "react"

export default function vlogs() {
  const blogs = [
    { number: "1", x: 80, y: 72, video: "https://data.patrick-coleman.com/Photos-3-001/1.mp4" },
    { number: "2", x: 79, y: 77, video: "https://data.patrick-coleman.com/Photos-3-001/2.mp4" },
    { number: "3", x: 76, y: 78, video: "https://data.patrick-coleman.com/Photos-3-001/3.mp4" },
    { number: "4", x: 73, y: 81, video: "https://data.patrick-coleman.com/Photos-3-001/4.mp4" },
    { number: "5", x: 71.2, y: 78, video: "https://data.patrick-coleman.com/Photos-3-001/5.mp4" },
    { number: "6", x: 69.5, y: 78, video: "https://data.patrick-coleman.com/Photos-3-001/6.mp4" },
    { number: "7", x: 68, y: 80, video: "https://data.patrick-coleman.com/Photos-3-001/7.mp4" },
    { number: "8", x: 66.5, y: 79.5, video: "https://data.patrick-coleman.com/Photos-3-001/8.mp4" },
    { number: "9", x: 63, y: 78, video: "https://data.patrick-coleman.com/Photos-3-001/9.mp4" },
    { number: "10", x: 59, y: 70, video: "https://data.patrick-coleman.com/Photos-3-001/10.mp4" },
    { number: "11", x: 55, y: 65, video: "https://data.patrick-coleman.com/Photos-3-001/11.mp4" },
    { number: "12", x: 46, y: 61, video: "https://data.patrick-coleman.com/Photos-3-001/12.mp4" },
    { number: "13", x: 43, y: 61.5, video: "https://data.patrick-coleman.com/Photos-3-001/13.mp4" },
    { number: "14", x: 29.5, y: 67, video: "https://data.patrick-coleman.com/Photos-3-001/14.mp4" },
    { number: "15", x: 27, y: 67, video: "https://data.patrick-coleman.com/Photos-3-001/15.mp4" },
    { number: "16", x: 25, y: 68.5, video: "https://data.patrick-coleman.com/Photos-3-001/16.mp4" },
    { number: "17", x: 20.5, y: 70, video: "https://data.patrick-coleman.com/Photos-3-001/17.mp4" },
    { number: "18", x: 18, y: 68, video: "https://data.patrick-coleman.com/Photos-3-001/18.mp4" },
    { number: "19", x: 19, y: 62, video: "https://data.patrick-coleman.com/Photos-3-001/19.mp4" },
  ]
  const [active, setActive] = useState<typeof blogs[0] | null>(null)

  return (
    <main className="p-4 space-y-10 m-10 text-center">
      <h1 className="text-4xl font-bold">Hitchhiking trip - Sydney to Perth</h1>
      <p className="text-xl md:text-3xl font-bold leading-snug">
        In February of 2025, I spent 19 days hitchhiking the 5000 kilometres from Sydney to Perth.
      </p>
      <p>
        My primary reason for this trip was as a warm up for my upcoming hitchhiking trip to Germany, to prove to myself that I was ready for the much longer extended period on the road.
      <br />
        I'd also never been to Western Australia before, and it was high on my destination list. At a 5 hour flight away from Sydney, it's far easier to get to New Zealand than it is to the western coast from my hometown.
      <br />
        With three weeks of leave locked in I hit the road on a Monday morning, with 21 days to make it to Perth and fly home before being due in at work. I ended up making it in 19 days, and snagged a flight home on the Sunday night before work.
      <br />
        I didn't write blogs for this trip, but instead posted private updates from my camps to my friends and family, telling some of the best stories from each day.
      </p>
      <p className="text-red-500">
        Language Warning: There is some minor swearing in these videos, as the original target audience was private.
      </p>
      <div className="relative">
        <img src="/images/australia_map.png" className="w-full" />
        {blogs.map(blog => (
          <div
            key={blog.number}
            style={{ 
              left: `${blog.x}%`, 
              top: `${blog.y}%`,
              transform: "translate(-50%, -50%)"
            }}
            className="absolute w-2 h-2 md:w-8 md:h-8 bg-red-500 rounded-full flex items-center justify-center font-bold text-xs md:text-xl"
            onMouseEnter={() => setActive(blog)}
          >
            {blog.number}
          </div>
        ))}
        {active && (
          <div
            style={{ 
              left: `${active.x}%`, 
              top: `${active.y}%`,
              transform: "translate(-50%, -90%)"
            }}
            className="absolute z-10 w-48 shadow-lg"
            onMouseLeave={() => setActive(null)}
          >
            <video src={active.video} autoPlay controls loop disablePictureInPicture className="w-full" />
          </div>
        )}
      </div>
    </main>
  )
}