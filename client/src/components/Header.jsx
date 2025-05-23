import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {

  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-puple-500 to-pink-500 rounded-md text-white hover:bg-violet-600'>Nilantha&apos;s</span>Blog
      </Link>
      <form action="">
        <TextInput
         type='text'
         placeholder='Search..'
         rightIcon={AiOutlineSearch} 
         className="hidden lg:inline"
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color="gray" pill><AiOutlineSearch/></Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon/>
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign-In
          </Button>
        </Link>
        <Navbar.Toggle/>
      </div>
          <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as={'div'}>
              <Link to='/'>
                Home
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/about"} as={'div'}>
              <Link to='/about'>
                About
             </Link>
             </Navbar.Link>
             <Navbar.Link active={path === "/projects"} as={'div'}>
              <Link to='/projects'>
                Projects
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
    </Navbar>
  )
}
