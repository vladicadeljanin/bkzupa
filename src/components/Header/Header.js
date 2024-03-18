import Link from "next/link"
import { FaSearch, FaUserCircle } from "react-icons/fa"
import { MdDarkMode } from "react-icons/md"

function Header() {
  return (
    <header className="py-10 px-4 w-full mx-0 text-xl flex flex-wrap md:flex-nowrap items-center justify-between bg-primary">
      <div className="flex items-center w-full md:w-1/8">
        <Link href="/" className="font-mono text-white">
          BK Zupa
        </Link>
        <ul className="flex items-center ml-5">
          <li className="flex items-center">
            <Link href="/auth">
              <FaUserCircle className="cursor-pointer" />
            </Link>
          </li>
          <li className="ml-2">
            <MdDarkMode className="cursor-pointer" />
          </li>
        </ul>
      </div>

      <ul className='font-mono block items-center justify-between w-full md:flex mt-4 lg:w-7/8'>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href='/'>Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href='/trails'>Trails</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href='/schedule'>Schedule</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href='/faq'>FAQ</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href='/misc'>Miscellaneous</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href='/registration'>Registration</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link href='/search'><FaSearch /></Link>
        </li>
      </ul>
    </header>
  )
}

export default Header