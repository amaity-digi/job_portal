import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Briefcase, BriefcaseBusiness, HardHat, Heart, PenBox } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if(search.get('sign-in'))
      setShowSignIn(true)
  },[search])

  const handleClick = (e) => {
      if(e.target === e.currentTarget){
        setShowSignIn(false);
        setSearch({})
      }
  }

  return (
    <>
      <nav className="py-4 flex justify-between items-center mx-8">
        <Link>
          <img src="/logo.png" className="h-20" />
        </Link>

        <div className="flex gap-8">
          <SignedOut>
            {/* <SignInButton /> */}
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            <Button variant="destructive" className="rounded-full">
              <PenBox size={20} className="mr-2" />
              Post Job
            </Button>
            <Link to="/post-job"></Link>
            <UserButton
            appearance={{
              elements: {
                avatarBox: 'w-10 h-10'
              }
            }}
            >
              <UserButton.MenuItems>
                <UserButton.Link 
                label="My-Jobs"
                labelIcon={<BriefcaseBusiness size={15} />}
                href="/my-jobs"
                />
              </UserButton.MenuItems>

              <UserButton.MenuItems>
                <UserButton.Link 
                label="Saved-Jobs"
                labelIcon={<Heart size={15} />}
                href="/saved-jobs"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleClick}>
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
