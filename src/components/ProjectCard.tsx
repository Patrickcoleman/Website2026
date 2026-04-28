import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { NavLink } from "react-router-dom"
import type { Project } from "@/data/projects"

export function ProjectCard({title, description, image, badge, link }: Project) {
  return (
    <NavLink to={link} className="w-full">
      <motion.div
        initial={{opacity: 0, y: 60}}
        whileInView={{opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
      >
          <Card className="relative w-full pt-0">
          <img
              src={image}
              alt={title}
              className="relative z-20 aspect-video w-full object-cover dark:brightness-40"
          />
          <CardHeader>
              <CardAction>
              <Badge variant="secondary">{badge}</Badge>
              </CardAction>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
          </CardHeader>
          {/* <CardFooter>
              
              <Button className="w-full">{buttonText}</Button>
              </NavLink>
          </CardFooter> */}
          </Card>
      </motion.div>
    </NavLink>
    )
}