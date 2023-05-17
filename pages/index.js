import MainNav from "@/components/MainNav";
import Image from "next/image";
import { BsBookmarkCheck } from 'react-icons/bs';
import { BsClipboardCheck } from 'react-icons/bs';
import { BsTruck } from 'react-icons/bs';
import { BsFillArrowDownRightSquareFill } from 'react-icons/bs';
import { BsFillGeoAltFill, BsWhatsapp } from 'react-icons/bs';
import { CgFacebook, CgInstagram, CgTwitter } from 'react-icons/cg';


import React from 'react'

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

      <div className="p-4 md:grid md:grid-cols-4 sm:grid sm:grid-cols-2 gap-4 mx-10 sm:p-4 mb-32">
        <div className="flex">
          <BsBookmarkCheck className='text-6xl'/>
          <span>
            <h6 className="font-bold">High Quality</h6>
            <small className="text-lg">crafted from top materials</small>
          </span>
        </div>
        <div className="flex">
          <BsClipboardCheck className='text-6xl'/>
          <span>
            <h6 className="font-bold">Warranty Protection</h6>
            <small className="text-lg">Over 2 Years</small>
          </span>
        </div>
        <div className="flex">
          <BsTruck className='text-6xl'/>
          <span>
            <h6 className="font-bold">Free Shipping</h6>
            <small className="text-lg"> Order over $300</small>
          </span>
        </div>
        <div className="flex">
          <BsBookmarkCheck className='text-6xl'/>
          <span>
            <h6 className="font-bold">24 / 7 Support</h6>
            <small className="text-lg">Dedicated Support</small>
          </span>
        </div>
      </div>

      <section>
        <div className="text-center mx-8 mt-5 mb-16">
          <span className="justify-center flex text-3xl font-bold">
            <h1 className="px-3">OUR GOAL</h1>
            <BsFillArrowDownRightSquareFill/>
          </span>
          <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, laboriosam esse! Dolorum porro eum saepe libero odio, tempora ratione labore, et consequuntur expedita ipsa corrupti maxime molestias maiores deserunt quaerat quas. Libero nulla voluptatibus alias? Explicabo quis accusantium dicta facilis voluptatibus perferendis, culpa non praesentium, minus recusandae quae perspiciatis. Cum ullam vel incidunt voluptatum culpa mollitia ratione eveniet, voluptatibus corporis ipsa laudantium officiis magni id quaerat porro, nihil, necessitatibus iste? Atque molestiae vel iure perferendis, blanditiis unde, ab tempore, eligendi at itaque explicabo nam dolores libero ad deleniti. Aut, sint saepe adipisci aliquid officiis accusamus nostrum ipsa alias perferendis, delectus, nihil voluptatum beatae aperiam? Reprehenderit consequatur aspernatur expedita a maxime, unde temporibus est. Temporibus repellendus ea adipisci magni quos et doloremque id rem tenetur numquam ut culpa fugit iure, illo expedita obcaecati eum suscipit facere, officiis hic. Magni culpa nesciunt praesentium dignissimos doloremque? Illo ea earum aliquid quidem iure porro vitae recusandae consequatur molestias eum, alias voluptates,</p>
        </div>
      </section>

      <section>
        <div className="md:mb-52">
          <div className="grid md:mb-28">
            <a className="justify-self-end mt-5 sm:mr-10" href="">
              <button className="px-12 py-5 text-2xl font-bold bg-black text-stone-200 rounded">CHECK STORE &rarr;</button>
            </a>
          </div>
          <Image className={divvv.image} width={1400} height={5000} src="/images/sample 3.jpg" alt=""/>
        </div>
      </section>

      <section>
        <div className="md:grid grid-cols-3">
          <div className="my-3">
            <span className="flex gap-2">
              <h1 className="text-2xl mb-4">Address</h1>
              <BsFillGeoAltFill className="text-3xl"/>
            </span>
            <p>
              1037 Gado Nasko Ave S, #135, Lakeland, <br /> FCT-ABUJA
              33803 1380 W University <br /> Ave Gainesville, ABJ 32603
            </p>
          </div>

          <div className="my-3">
            <h1 className="text-2xl mb-4">Socials &rarr;</h1>
            <span>
              <ul className="flex gap-3 text-4xl text-orange-700">
                <li><CgInstagram/></li>
                <li><CgFacebook/></li>
                <li><CgTwitter/></li>
                <li><BsWhatsapp/></li>
              </ul>
            </span>
          </div>

          <div className="my-3">
            <h1 className="text-2xl mb-4">Sponsored and Powered by &rarr;</h1>
            <span>
              <ul className="flex md:gap-3">
                <Image width={80} height={80} src="/images/adidas.svg" alt=""/>
                
                <Image width={80} height={80} src="/images/nike-logo.svg" alt=""/>
                <Image width={80} height={80} src="/images/puma.svg" alt=""/>
                <Image width={80} height={80} src="/images/reebok.svg" alt=""/>
              </ul>
            </span>
          </div>
        </div>
        <div className="flex justify-end mx-6">
          <small>All Rights Reserved @Onlyshoes 2023</small>
        </div>
      </section>
    </>
  )
}

const divvv = {
  image:'relative',
  moves:'sm:absolute lg:w-2/5 lg:top-60 lg:left-40 bg-white opacity-90 px-16 py-10 mt-2',
  head:'font-bold py-3',
  word:'py-3',
  anchor:'py-2 px-7 mt-0 flex justify-center bg-blue-500 text-lg font-bold text-white'
}