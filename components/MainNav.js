import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiFillTags } from 'react-icons/ai';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose,AiOutlineArrowRight } from 'react-icons/ai';
import {BsFillCartFill} from 'react-icons/bs';
import { useRouter } from 'next/router';
import { useSession,signOut } from 'next-auth/react';

export default function MainNav() {
    const [showMobileNav,setShowMobileNav] = useState(false);
    // const [showSignOut, setShowSignOut] = useState(true);

    const router = useRouter();
    // const currentPage = router.pathname;


    const handleFirebaseSignout = () => {
        
    }

    return (
      <>
        <Head>
          <title>Get Your Affordable Shoes</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/sample 2.jpg" />
        </Head>
        <nav className={navbarStyles.navBar} id='mainNav'>
          <ul className={navbarStyles.navSection}>
            <li>
              <AiFillTags className='text-gray-200 text-3xl'/>
            </li>
            <li>
              <Link href='/' className={navbarStyles.brandName}>ONLYSHOES</Link>
            </li>
          </ul>

            <ul className={navbarStyles.navSection}>
              <li className={navbarStyles.responsiveMenuItems}>
              <Link href='#' className={navbarStyles.navText}>HOME</Link>
              </li>
              <li className={navbarStyles.responsiveMenuItems}>
                <Link href='#' className={navbarStyles.navText}>CONTACT</Link>
              </li>
              <li className={navbarStyles.responsiveMenuItems}>
                <Link href='#' className={navbarStyles.navText}>ABOUT US</Link>
              </li>
              <li className={navbarStyles.responsiveMenuItems}>
                <Link href='#' className={navbarStyles.navText}>SIGN OUT</Link>
              </li>

              <li className='relative'>
                <a href="">
                  <span className={navbarStyles.cartNumber}>10</span>
                  <BsFillCartFill className='text-white text-3xl'/>
                </a>
              </li>
              <li>
              <HiOutlineMenu 
              className={navbarStyles.menu}
              onClick={() => setShowMobileNav(true)}/>
              </li>
            </ul>
        </nav>

          <nav className={navbarStyles.mobileNav} 
            style={{display:showMobileNav ? 'block' : 'none'}}>
            <AiOutlineClose 
            className={navbarStyles.mobileMenuClose}
            onClick={() => setShowMobileNav(false)}
            />

            <div className={navbarStyles.halfScreenMenuBlock}>
              <ul className={navbarStyles.mobileMenuItems}>
              <li className={navbarStyles.mobileMenuItem}>
                  <Link href='#' className={navbarStyles.mobileMenuText}>Home</Link>
              </li>
              <hr className='my-4' />
              <li className={navbarStyles.mobileMenuItem}>
                  <Link href='#' className={navbarStyles.mobileMenuText}>NIKE</Link>
              </li>
              <li className={navbarStyles.mobileMenuItem}>
                  <Link href='#' className={navbarStyles.mobileMenuText}>PUMA</Link>
              </li>
              <li className={navbarStyles.mobileMenuItem}>
                  <Link href='#' className={navbarStyles.mobileMenuText}>ADDIDAS</Link>
              </li>
              <li className={navbarStyles.mobileMenuItem}>
                  <Link href='#' className={navbarStyles.mobileMenuText}>REEBOKS</Link>
                  <hr className='my-4 font'/>
              </li>
              <li className={navbarStyles.mobileMenuItem}>
                  <Link href='#' className={navbarStyles.mobileMenuText}>Contact us</Link>
              </li>
              </ul>
                
                !session (
                  <div className={navbarStyles.mobileBottomItems}>
                    <Link href='/signin' className={navbarStyles.signinBtn}>
                      <span className={navbarStyles.btnItems}>Sign in</span>
                      <AiOutlineArrowRight className={navbarStyles.btnItems}/></Link>
                    <Link href='/signup' className={navbarStyles.createAcctBtn}>
                      <span className={navbarStyles.btnItems}>Create account</span>
                      <AiOutlineArrowRight />
                    </Link>
                  </div>
                ): (
                      <div className={navbarStyles.mobileBottomItems}>
                        <button 
                          className={navbarStyles.authBtn} 
                          onClick={() => {
                              setShowMobileNav(false);
                              handleFirebaseSignout();
                          }}>
                            <span className={navbarStyles.btnItems} >Sign out</span>
                            <AiOutlineArrowRight className={navbarStyles.btnItems}/>
                        </button>
                      </div>
                    )
              
            </div>
          </nav>
      </>
    )
}


const navbarStyles = {
    navBar:'h-[60px] bg-orange-950 flex flex-row justify-between items-center px-3 shadow-md',
    navSection:'flex flex-row space-x-3',
    brandName:'font-sans text-2xl text-gray-200 font-bold',
    navText:'text-gray-200 font-bold hover:text-purple-600',
    responsiveMenuItems:'hidden sm:block',
    menu:'block md:hidden w-[38px] h-[38px] text-gray-500',
    mobileNav:'h-screen w-full bg-gray-200 absolute top-0 left-0 z-10',
    halfScreenMenuBlock:'h-screen min-w-[300px] max-w-[420px] flex flex-col justify-between bg-black absolute right-0 top-0',
    mobileMenuClose:'text-gray-600 w-[38px] h-[38px] absolute top-2 right-2 z-10',
    mobileMenuItems:'flex flex-col gap-3 pt-[60px] pr-4 text-sm font-semibold',
    mobileMenuItem:'text-end',
    mobileMenuText:'text-[20px] font-reading text-gray-400',
    mobileBottomItems:'px-3',
    signinBtn:'block w-full h-[58px] flex flex-row justify-between items-center px-3 bg-white text-black font-semibold rounded-md',
    btnItems:'text-xl',
    createAcctBtn:'block w-full h-[58px] flex flex-row justify-between items-center px-3 my-3 text-white font-semibold bg-orange-800 rounded-md',
    cartNumber:'text-xs font-bold px-1 bg-yellow-300 text-black rounded-full absolute -right-2'
  }