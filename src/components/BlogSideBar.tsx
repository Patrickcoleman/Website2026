import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { NavLink, useNavigate } from "react-router-dom"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"


export function BlogSideBar() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const navigate = useNavigate()

  const startDate = new Date(2025, 3, 28)

  function mapDay(id: number): number {
    if (id <= 18) return id
    if (id <= 21) return 19
    if (id <= 73) return id - 2
    if (id <= 79) return 72
    if (id <= 118) return id - 7
    if (id <= 121) return 112
    if (id <= 189) return id - 9
    if (id <= 192) return 181
    if (id <= 194) return id - 11
    if (id <= 196) return 184
    return id - 12
  }

  return (
    <Sidebar>
      <SidebarHeader>
          <NavLink to="/projects/blog/home" className="text-center underline">Blog Home</NavLink>
      </SidebarHeader>
      <SidebarContent>
        <Calendar
            mode="single"
            className="rounded-lg border mx-auto"
            selected={date}
            onSelect={(d) => {
              if (!d) return
              setDate(d)
              const diffMs = d.getTime() - startDate.getTime()
              const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24))
              navigate(`${mapDay(Number(diffDays))}`)
            }}
            defaultMonth={new Date(2025, 3)}
            startMonth={new Date(2025, 3)}
            endMonth={new Date(2025, 10)}
            hidden={{
              before: new Date(2025, 3, 28),
              after: new Date(2025, 10, 11)
            }}      
        />
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}