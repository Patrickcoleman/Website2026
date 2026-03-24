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
    image: "/mecrop.png",
    badge: "About",
    buttonText: "Read More",
    link: "/about",
  },
  {
    id: "virtuallabs",
    title: "Virtual Laboratories",
    description: "Data generating virtual laboratories for remote STEM education.",
    image: "/dotblot.png",
    badge: "C#, Unity",
    buttonText: "View Project",
    link: "/projects/virtuallaboratories",
  },
  {
    id: "rabbits",
    title: "Rabbit Simulator",
    description: "A simulation showcasing how species evolve to cope with a changing environment.",
    image: "/rabbits.png",
    badge: "C#, Unity",
    buttonText: "View Project",
    link: "/projects/rabbits",
  },
  {
    id: "dog",
    title: "Dog",
    description: "A project about dogs.",
    image: "/dog.png",
    badge: "Featured",
    buttonText: "View Project",
    link: "/projects/dog",
  },
  {
    id: "cat",
    title: "Cat",
    description: "A project about cats.",
    image: "/cat.png",
    badge: "New",
    buttonText: "View Project",
    link: "/projects/cat",
  },
  {
    id: "fish",
    title: "Fish",
    description: "A project about fish.",
    image: "/fish.png",
    badge: "WIP",
    buttonText: "View Project",
    link: "/projects/fish",
  },
  {
    id: "dog",
    title: "Dog",
    description: "A project about dogs.",
    image: "/dog.png",
    badge: "Featured",
    buttonText: "View Project",
    link: "/projects/dog",
  },
  {
    id: "cat",
    title: "Cat",
    description: "A project about cats.",
    image: "/cat.png",
    badge: "New",
    buttonText: "View Project",
    link: "/projects/cat",
  },
  {
    id: "fish",
    title: "Fish",
    description: "A project about fish.",
    image: "/fish.png",
    badge: "WIP",
    buttonText: "View Project",
    link: "/projects/fish",
  },
]