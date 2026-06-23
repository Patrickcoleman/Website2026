export interface Project {
  id: string
  title: string
  description: string
  image: string
  badge: string
  link: string
}

export const projects: Project[] = [
  {
    id: "about",
    title: "Hi, I'm Patrick",
    description: "I like writing code.",
    image: "/images/mecrop.png",
    badge: "About",
    link: "/about",
  },
  {
    id: "virtuallabs",
    title: "Virtual Laboratories",
    description: "Data generating virtual laboratories for remote STEM education.",
    image: "/images/dotblot.png",
    badge: "C#, Unity",
    link: "/projects/virtuallaboratories",
  },
  {
    id: "rabbits",
    title: "Rabbit Simulator",
    description: "A simulation showcasing how species evolve to cope with a changing environment.",
    image: "/images/rabbits.png",
    badge: "C#, Unity",
    link: "/projects/rabbits",
  },
  {
    id: "tower",
    title: "The Tower",
    description: "A small roguelike game.",
    image: "/images/tower.png",
    badge: "C#, Unity",
    link: "/projects/tower",
  },
  {
    id: "blog",
    title: "Hitchhiking: Australia to Germany",
    description: "Blog posts from a 6 month hitchhiking trip I undertook from Australia to Germany.",
    image: "/images/map.png",
    badge: "Travel",
    link: "/projects/blog/home",
  },
  {
    id: "vlog",
    title: "Hitchhiking: Sydney to Perth",
    description: "Vlogs from a 3 week cross country hitchhiking adventure.",
    image: "/images/australia_map.png",
    badge: "Travel",
    link: "/projects/vlogs",
  },
  {
    id: "clock",
    title: "The Block Clock",
    description: "A visualisation of time using CSS animations",
    image: "/images/fish.png",
    badge: "CSS",
    link: "/projects/clock",
  },
]