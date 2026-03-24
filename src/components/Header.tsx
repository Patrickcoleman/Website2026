import { NavLink } from "react-router-dom"
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
              <NavigationMenuLink>Virtual Laboratories</NavigationMenuLink>
              <NavigationMenuLink>Rabbits</NavigationMenuLink>
              <NavigationMenuLink>Item 3</NavigationMenuLink>
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