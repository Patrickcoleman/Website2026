import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface BlogEntry {
  title: string
  paragraphs: string[]
  imagenames: string[]
}

export default function Blog() {
  const { id } = useParams()
  const [entry, setEntry] = useState<BlogEntry | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3000/day/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setEntry(data)
      })
  }, [id])

  if (!entry) return <main className="p-8">Loading...</main>

  return (
      <main className="p-8 w-5/6 mx-auto">
        <h1 className="text-2xl font-bold mb-4">{entry.title}</h1>
        {entry.paragraphs.map((p, i) => (
          <div key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: p }} />
        ))}
        {(entry.imagenames ?? []).length > 0 && (
          <Carousel 
            className="w-1/2 mx-auto"
            opts={{
              align: "start",
              loop: false,
            }}
          >
            <CarouselContent>
              {(entry.imagenames ?? []).map((name, i) => (
                <CarouselItem key={i}>
                  <img
                    src={`http://localhost:3000/images/${name}`}
                    className="w-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
        <div className="flex flex-row gap-2 justify-center m-5">
          <button
            className="border rounded px-3 py-1 hover:bg-muted"
            onClick={() => navigate(`/projects/blog/${Number(id) - 1}`)}
          >
            ← Previous
          </button>
          <button
            className="border rounded px-3 py-1 hover:bg-muted"
            onClick={() => navigate(`/projects/blog/${Number(id) + 1}`)}
          >
            Next →
          </button>
        </div>
      </main>
  )
}