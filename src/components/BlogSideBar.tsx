import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { NavLink, useNavigate, useParams  } from "react-router-dom"
import { Calendar } from "@/components/ui/calendar"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"


export function BlogSideBar() {
  const { id } = useParams()
  const startDate = new Date(2025, 3, 28)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [month, setMonth] = useState<Date>(
  id ? dayToDate(postIdToDay(Number(id))) : new Date(2025, 3))
  const navigate = useNavigate()

  useEffect(() => {
  if (id) setMonth(dayToDate(postIdToDay(Number(id))))
  }, [id])
  
  useEffect(() => {
      if (!date) return
      const diffMs = date.getTime() - startDate.getTime()
      const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24))
      navigate(`${DayIdToPostId(Number(diffDays))}`)
    }, [date])

  function dayToDate(days: number): Date {
    const date = new Date(2025, 3, 28)
    date.setDate(date.getDate() + days)
    return date
  }

  //This function mays the actual day number of the trip (eg 5th day), to the ID of the post, as some entried span multiple days
  function DayIdToPostId(id: number): number {
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

  //Yes this is ugly, but writing a function to reverse the selection using the previous function was uglier
  function postIdToDay(postId: number): number {
  if (postId <= 18) return postId
  if (postId == 19) return 19
  if (postId <= 72) return postId + 2
  if (postId == 72) return 73
  if (postId <= 112) return postId + 7
  if (postId == 112) return 113
  if (postId <= 181) return postId + 9
  if (postId == 181) return 182
  if (postId <= 184) return postId + 11
  if (postId == 184) return 185
  return postId + 12
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
            selected={(id ? dayToDate(postIdToDay(Number(id))) : undefined)}
            onSelect={(d) => {
              setDate(d)
            }}
            month={month}
            onMonthChange={setMonth}
            endMonth={new Date(2025, 10)}
            hidden={{
              before: new Date(2025, 3, 28),
              after: new Date(2025, 10, 11)
            }}      
        />
        <Button 
          className="rounded-lg border mx-auto mt-5" 
          variant="outline"
          onClick={() => {
            const start = new Date(2025, 3, 28).getTime()
            const end = new Date(2025, 10, 11).getTime()
            const random = new Date(start + Math.random() * (end - start))
            setDate(random)
          }}
        >
          Random Entry
        </Button>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}