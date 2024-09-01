import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className='py-4 flex justify-between items-center mx-8'>
     <Link>
     <img src='/logo.png' className='h-20'/>
     </Link> 

     {/* <Button variant='outline'>Login</Button> */}
     <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  )
}

export default Header
