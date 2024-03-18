import Link from 'next/link'
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs'
import { BiMessageDetail } from 'react-icons/bi'

function Footer() {
  return (
    <footer className='mt-16'>
      <div className="container mx-auto px-4">
        <Link href="/" className='font-mono text-tertiary-dark'> BK Zupa</Link>
        <h4 className='font-mono text-[40px] py-6'>Contact</h4>
        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>Address</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">Write to us!</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2">+381 60 123 456</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">+381 60 123 456</p>
            </div>
          </div>
          <div className="flex-1 md:text-center">
            <p className="pb-4">Our story</p>
            <p className="pb-4">Get in touch</p>
            <p className="pb-4">Terms of service</p>
            <p>Customer Assistence</p>
          </div>
          <div className="flex-1 md:text-right">
          <p className="pb-4">Club cafe</p>
            <p className="pb-4">Wellness</p>
            <p className="pb-4">Fitness</p>
            <p className="pb-4">Events</p>
            <p>Gym</p>
          </div>
        </div>
      </div>
      <div className="bg-primary h-10 md:h-[70px] mt-16 w-full bottom-0 left-0" />
     </footer>
  )
}

export default Footer