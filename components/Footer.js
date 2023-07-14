import Image from "next/image";
import { BsFillGeoAltFill,BsWhatsapp } from "react-icons/bs";
import { CgInstagram,CgFacebook,CgTwitter } from "react-icons/cg";




export default function Footer () {
    const year = new Date().getFullYear();

    return (
        <footer>
            <section>
                <div className="md:grid grid-cols-3 mt-5">
                    <div className="my-3 mb-7">
                        <span className="flex gap-2">
                        <h1 className="text-2xl mb-4">Address</h1>
                        <BsFillGeoAltFill className="text-3xl"/>
                        </span>
                        <p>
                        1037 Gado Nasko Ave S, #135, Lakeland, <br /> FCT-ABUJA
                        33803 1380 W University <br /> Ave Gainesville, ABJ 32603
                        </p>
                    </div>

                    <div className="my-3 mb-7">
                        <h1 className="text-2xl mb-4">Socials &rarr;</h1>
                        <span>
                        <ul className="flex gap-3 text-4xl text-orange-700">
                            <a target="_blank" href="https://api.whatsapp.com/send?text=I would like to enquire more on your Shoe Products&phone=+2348147778188">
                                <li><BsWhatsapp/></li>
                            </a>
                            <a href="#">
                                <li><CgInstagram/></li>
                            </a>
                            <a href="#">
                                <li><CgFacebook/></li>
                            </a>
                            <a href="#">
                                <li><CgTwitter/></li>
                            </a>
                            
                        </ul>
                        </span>
                    </div>

                    <div className="my-3 mb-7">
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
                <div className="flex justify-end lg:mx-6">
                    <small>All Rights Reserved @Onlyshoes {year} with ❤ from Dami</small>
                </div>
            </section>
        </footer>
    )
}