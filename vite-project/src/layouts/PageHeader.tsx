import { Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/Logo.png";
import { Button } from "../components/Button";
import { useState } from "react";

export default function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

  

  return (
    <div className="flex gap-10 lg:gap-20 justicy-between pg-2 mb-6 mx-4">
      {/* Left Nav */}
      <div className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button variant="ghost" size="icon" className="">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </div>

      {/* //Center Nav */}
      <form className="md:flex hidden gap-4 flex-grow justify-center">
        <div className="flex flex-grow max-w-[600px]">
          <input type="search" placeholder="Search"
          className="rounded-l-full border border-secondary-border shadow-inn shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border borded border-1-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      {/* Right Nav */}
      <div className={`flex flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
      <Button onClick={() => setShowFullWidthSearch(!showFullWidthSearch)} size="icon" variant="ghost" className="md:hidden">
          <Search/>
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic/>
        </Button>
        <Button size="icon" variant="ghost">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}
