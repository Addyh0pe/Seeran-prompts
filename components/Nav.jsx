'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { useRouter } from "next/navigation";


const Nav = () => {

  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false)
  const router = useRouter();

  useEffect(()=>{
    
    const fetchProviders = async () => {

       const response = await getProviders();
       setProviders(response);

    };

    if ( providers === null ) {
      fetchProviders();
    };

  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">

      <Link href={'/'} className="flex gap-2 flex-center">
        <p className=" font-bold">seeran prompts</p>
      </Link>

      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image 
              src={session?.user.image} 
              width={25} 
              height={25} 
              className="rounded-full" 
              alt="profile picture"
              onClick={() => {
                setToggleDropDown( (prev) => !prev );
              }}
            />

            {/* dropdown menu for mobile devices */}
            {toggleDropDown && (
              <div className="dropdown">
                <Link 
                  href={'/profile'}
                  className="dropdown_link"
                  onClick={ () => {
                    setToggleDropDown(false)
                  }}
                >
                  My Profile
                </Link>
                <Link 
                  href={'/create-prompt'}
                  className="dropdown_link"
                  onClick={ () => {
                    setToggleDropDown(false)
                  }}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false); 
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map( (provider) => (
                <button 
                  type="button" 
                  key={provider.name} 
                  onClick={() => {
                    signIn(provider.id);
                    router.push('/')
                  }} 
                  className="black_btn"
                >
                  sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* desktop navigation */}
      <div className="hidden sm:flex">
        { session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={'/create-prompt'} className="black_btn">
              create post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              sign out
            </button>
            <Link href={'/profile'}>
              <Image 
                src={session?.user.image} 
                width={37} 
                height={37} 
                className="rounded-full" 
                alt="profile picture"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
            Object.values(providers).map( (provider) => (
              <button 
                type="button" 
                key={provider.name} 
                onClick={( ) => {
                  signIn(provider.id);
                }} 
                className="black_btn"
              >
                sign in
              </button>
            ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav;