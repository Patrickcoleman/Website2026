export interface Project {
  id: string
  title: string
  description: string
  image: string
  badge: string
  buttonText: string
  link: string
}

export const projects: Project[] = [
  {
    id: "about",
    title: "Hi, I'm Patrick",
    description: "I like writing code.",
    image: "/images/mecrop.png",
    badge: "About",
    buttonText: "Read More",
    link: "/about",
  },
  {
    id: "virtuallabs",
    title: "Virtual Laboratories",
    description: "Data generating virtual laboratories for remote STEM education.",
    image: "/images/dotblot.png",
    badge: "C#, Unity",
    buttonText: "View Project",
    link: "/projects/virtuallaboratories",
  },
  {
    id: "rabbits",
    title: "Rabbit Simulator",
    description: "A simulation showcasing how species evolve to cope with a changing environment.",
    image: "/images/rabbits.png",
    badge: "C#, Unity",
    buttonText: "View Project",
    link: "/projects/rabbits",
  },
  {
    id: "tower",
    title: "The Tower",
    description: "A small roguelike game.",
    image: "/images/tower.png",
    badge: "C#, Unity",
    buttonText: "View Project",
    link: "/projects/tower",
  },
  {
    id: "blog",
    title: "Travel Blog",
    description: "Blog posts from a 6 month hitchhiking trip I undertook from Australia to Germany",
    image: "/images/map.png",
    badge: "New",
    buttonText: "Read Blogs",
    link: "/projects/blog/home",
  },
  {
    id: "fish",
    title: "Fish",
    description: "A project about fish.",
    image: "/images/fish.png",
    badge: "WIP",
    buttonText: "View Project",
    link: "/projects/fish",
  },
]