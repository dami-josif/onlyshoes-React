import MainNav from "@/components/MainNav";
import Image from "next/image";
import { BsBookmarkCheck } from 'react-icons/bs';
import { BsClipboardCheck } from 'react-icons/bs';
import { BsTruck } from 'react-icons/bs';
import { BsFillArrowDownRightSquareFill } from 'react-icons/bs';


import React from 'react'
import Footer from "@/components/Footer";

export default function 
() {
  return (
    <>
      <MainNav/>
      <div className="mb-9">
        <Image className={divvv.image} width={1500} height={5000} src="/images/image2.jpg" alt=""/>
        <div className={divvv.moves}>
          <h2 className={divvv.head}>HIGH-QUALITY SNEAKERS JUST FOR YOU</h2>
          <p className={divvv.word}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt consequatur porro corporis deserunt quam, illo mollitia id doloribus beatae qui laudantium vero rem repellendus quae dolor earum quisquam suscipit eligendi voluptas vitae molestias! Ab laudantium praesentium molestiae vero, voluptas eum provident rem, nostrum, dolores totam tempore eligendi sed hic doloremque!</p>
          <a href="#" className={divvv.anchor}>
            <button>SHOP NOW</button>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 md:flex justify-between w-4/5 mx-auto md:w-auto md:px-10 lg:px-36 my-20 md:my-32">
        <div className="flex items-center">
          <BsBookmarkCheck className='lg:text-5xl text-6xl pr-2'/>
          <span>
            <h6 className="font-semibold">High Quality</h6>
            <small className="text-md">crafted from top materials</small>
          </span>
        </div>
        <div className="flex items-center">
          <BsClipboardCheck className='lg:text-5xl text-6xl pr-2'/>
          <span>
            <h6 className="font-semibold">Warranty Protection</h6>
            <small className="text-md">Over 2 Years</small>
          </span>
        </div>
        <div className="flex items-center">
          <BsTruck className='lg:text-5xl text-6xl pr-2'/>
          <span>
            <h6 className="font-semibold">Free Shipping</h6>
            <small className="text-md"> Order over $300</small>
          </span>
        </div>
        <div className="flex items-center">
          <BsBookmarkCheck className='lg:text-5xl text-6xl pr-2'/>
          <span>
            <h6 className="font-semibold">24 / 7 Support</h6>
            <small className="text-md">Dedicated Support</small>
          </span>
        </div>
      </div>

      <section>
        <div className="items-center mx-8 mt-5 mb-16">
          <span className="justify-center flex text-3xl font-bold">
            <h1 className="px-3">OUR GOAL</h1>
            <BsFillArrowDownRightSquareFill/>
          </span>
          <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, laboriosam esse! Dolorum porro eum saepe libero odio, tempora ratione labore, et consequuntur expedita ipsa corrupti maxime molestias maiores deserunt quaerat quas. Libero nulla voluptatibus alias? Explicabo quis accusantium dicta facilis voluptatibus perferendis, culpa non praesentium, minus recusandae quae perspiciatis. Cum ullam vel incidunt voluptatum culpa mollitia ratione eveniet, voluptatibus corporis ipsa laudantium officiis magni id quaerat porro, nihil, necessitatibus iste? Atque molestiae vel iure perferendis, blanditiis unde, ab tempore, eligendi at itaque explicabo nam dolores libero ad deleniti. Aut, sint saepe adipisci aliquid officiis accusamus nostrum ipsa alias perferendis, delectus, nihil voluptatum beatae aperiam? Reprehenderit consequatur aspernatur expedita a maxime, unde temporibus est. Temporibus repellendus ea adipisci magni quos et doloremque id rem tenetur numquam ut culpa fugit iure, illo expedita obcaecati eum suscipit facere, officiis hic. Magni culpa nesciunt praesentium dignissimos doloremque? Illo ea earum aliquid quidem iure porro vitae recusandae consequatur molestias eum, alias voluptates,</p>
        </div>
      </section>

      <section>
        <div className="md:mb-52">
          <div className="grid mb-28">
            <a className="justify-self-end mt-5 sm:mr-10" href="">
              <button className="px-12 py-5 text-2xl font-bold bg-black text-stone-200 rounded">CHECK STORE &rarr;</button>
            </a>
          </div>
          <Image className={divvv.image} width={1400} height={5000} src="/images/removebg.png" alt=""/>
        </div>
      </section>

      <Footer/>
    </>
  )
}

const divvv = {
  image:'relative',
  moves:'sm:absolute top-1/3 left-0 sm:left-10 md:left-32 md:top-20 w-full sm:w-1/2 md:w-3/5 lg:w-4/12 p-4 sm:p-8 bg-background header-text bg-white opacity-90 px-16 py-10 lg:mt-40',
  head:'font-bold py-3',
  word:'py-3',
  anchor:'py-2 px-7 mt-0 flex justify-center bg-blue-500 text-lg font-bold text-white'
}