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
    id: "dog",
    title: "Dog",
    description: "A project about dogs.",
    image: "/images/dog.png",
    badge: "Featured",
    buttonText: "View Project",
    link: "/projects/dog",
  },
  {
    id: "cat",
    title: "Cat",
    description: "A project about cats.",
    image: "/images/cat.png",
    badge: "New",
    buttonText: "View Project",
    link: "/projects/cat",
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