import Link from "next/link"

function Header() {
  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:2/3">
        <Link href="/" className="font-black text-[#F27405]">
          BK Zupa
        </Link>
        <ul className="flex items-center ml-5">
          
        </ul>
      </div>
      <ul></ul>
    </header>
  )
}

export default Header