import MainNav from "@/components/MainNav";
import Image from "next/image";
import React from 'react'
import Footer from "@/components/Footer";
import Link from "next/link";

export default function 
() {
  return (
    <>
      <section className="background-color: bg-orange-100">
        <MainNav/>
        <div className="mb-44">
          <Image className={divvv.image} width={1500} height={5000} src="/images/image2.jpg" alt=""/>
          <div className={divvv.moves}>
            <h2 className={divvv.head}>HIGH-QUALITY SNEAKERS JUST FOR YOU</h2>
            <p className={divvv.word}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt consequatur porro corporis deserunt quam, illo mollitia id doloribus beatae qui laudantium vero rem repellendus quae dolor earum quisquam suscipit eligendi voluptas vitae molestias! Ab laudantium praesentium molestiae vero, voluptas eum provident rem, nostrum, dolores totam tempore eligendi sed hic doloremque!</p>
            <a href="#" className={divvv.anchor}>
              <button>SHOP NOW</button>
            </a>
          </div>
          <div className="lg:block flex gap-3 absolute lg:top-80 lg:right-60 top-40 right-10">
            <a href="/signin" className="bg-lime-950 opacity-75 text-white font-mono lg:font-bold lg:px-14 lg:py-4 px-5 py-5 rounded">SIGN IN</a>
            <p className="text-center font-semibold my-5">OR</p>
            <a href="/signup" className="bg-red-950 opacity-75 text-white font-mono lg:font-bold lg:px-14  lg:py-4 px-5 py-5  rounded">SIGN UP</a>
          </div>
          <p className={divvv.brand}>Please Sign Up or Sign In to check out &rarr; STORE</p>
        </div>

        <Footer/>
      </section>
    </>
  )
}

const divvv = {
  
  image:'relative',
  moves:'sm:absolute top-1/3 left-0 sm:left-10 md:left-32 md:top-20 w-full sm:w-1/2 md:w-3/5 lg:w-4/12 p-4 sm:p-8 bg-background header-text bg-white opacity-90 px-16 py-10 lg:mt-40',
  head:'font-bold py-3',
  word:'py-3',
  brand:'font-brand text-4xl font-extrabold mt-44 text-center',
  anchor:'py-2 px-7 mt-0 flex justify-center bg-blue-500 text-lg font-bold text-white'
}