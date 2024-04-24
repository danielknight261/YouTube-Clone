import { Home } from "lucide-react"
import { ElementType } from "react"

export  function Sidebar() {
  return (
  <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
   <SidebarItem  Icon={Home} title="Home" url="/" />
  </aside>
)
}

type SidebarItemProps = { 
Icon: ElementType
title: string
url: string
}
 
function SidebarItem({ Icon, title, url}:
SidebarItemProps) {
  return (
  <a href={url} className="">
    <Icon className="w-6 h-6" />
    <div className="text-sm"> {title}</div>
    </a>
  )
  }