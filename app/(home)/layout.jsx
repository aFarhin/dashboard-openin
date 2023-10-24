
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
export default function HomeLayout({children}) {
  return (
    <main className="flex  bg-[#F5F5F5] p-5 md:p-10 h-screen lg:gap-x-[60px] gap-x-8 overflow-scroll [&::-webkit-scrollbar]:hidden ">
        {/* Right */}
        <section className=" w-[340px] sticky top-0 hidden md:block ">
          <Sidebar />
        </section>
        {/* Left */}
        <section className=" w-full h-min ">
          <Navbar />
          {children}
        </section>
      </main>
  )
}
