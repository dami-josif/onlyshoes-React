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
                            <li><CgInstagram/></li>
                            <li><CgFacebook/></li>
                            <li><CgTwitter/></li>
                            <li><BsWhatsapp/></li>
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
                <div className="flex justify-end mx-6">
                    <small>All Rights Reserved @Onlyshoes {year}</small>
                </div>
            </section>
        </footer>
    )
}