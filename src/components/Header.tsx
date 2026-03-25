import { NavLink } from "react-router-dom"
import { projects } from "@/data/projects"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const projectLinks = projects.filter(p => p.id !== "about")

  return ( 
    <header className="w-full border-b px-4 flex items-center justify-between bg-card shadow-sm sticky top-0 z-50">
      <NavigationMenu className="p-4">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to="/" className={navigationMenuTriggerStyle()}>
                Patrick Coleman
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              {projectLinks.map(project => (
                <NavigationMenuLink asChild key={project.id}>
                  <NavLink to={project.link} className={navigationMenuTriggerStyle()}>
                    {project.title}
                  </NavLink>
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <NavLink to="/about" className={navigationMenuTriggerStyle()}>
                About
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}