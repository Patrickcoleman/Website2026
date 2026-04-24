import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { BlogSideBar } from "@/components/BlogSideBar"

export default function BlogLayout() {
  return (
    <SidebarProvider>
      <BlogSideBar />
      <main>
            <div className="sticky top-[75px] z-10">
            <SidebarTrigger />
            </div>
        <Outlet /> {}
      </main>
    </SidebarProvider>
  )
}