import { useState,useEffect,useContext } from "react";
import { AppContext } from "@/settings/context/appContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from 'yup';
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import { auth } from "@/settings/firebase/firebase.setup";
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/; //regular expression

//create a validation schema (validation rules)
const fieldsSchema = yup.object().shape({
    email:yup.string().email('enter a valid email').required('Required'),
    password:yup.string().min(5).matches(passwordRules,{message:'Please create a stronger password'}).required('Required'),
    passwordConfirmation:yup.string().oneOf([yup.ref('password'),null],'password must match')
});

export default function Signup () {
    // const [screenHeight,setScreenHeight] = useState(0);
    // const { uid,setUid,email,setEmail } = useContext(AppContext);

    const router = useRouter();

    // useEffect(() => {
    //     setScreenHeight(window.innerHeight - 60);
    // },[]);

    const { values,handleBlur,handleChange,errors,handleSubmit,touched } = useFormik({
        validationSchema:fieldsSchema,
        initialValues:{
            email:'',
            password:'',
            passwordConfirmation:''
        },
        onSubmit:(values) => {
            createUserWithEmailAndPassword(auth,values.email,values.password)
            .then(() => {
                console.log('Account signup was successfull');
                
                onAuthStateChanged(auth,(user) => {
                    setUid(user.uid);
                    setEmail(user.email);
                });

                router.push('/signin')
            })
            .catch(error => console.log(error))
        } 
    });

    return (
        <>
            <div className="bg-gradient-to-r from-gray-300 to-orange-200">
                <Head>
                    <title>Create Account | OnlyShoes</title>
                    <meta name="description" content="Create an account on Real Fast and start applying for jobs" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/realfast_logo.png" />
                </Head>
                <MainNav/>
                <main className={styles.container} >
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>CREATE YOUR ONLYSHOES ACCOUNT</h2>

                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <div className={styles.inputBlockMain}>
                                <label className={styles.label}>Email address</label>
                                <input 
                                id="email"
                                type="email" 
                                placeholder="valid email address"
                                className={styles.inputField}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                                {
                                    errors.email && touched.email 
                                    ? <p className={styles.formError} style={{color:'red'}}>{errors.email}</p>
                                    : null
                                }
                            </div>

                            <div className={styles.inputBlockRow}>
                                <div className={styles.inputBlock}>
                                    <label className={styles.label}>Create password</label>
                                    <input 
                                    id="password"
                                    type="password" 
                                    className={styles.inputField}
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}/>
                                    {
                                        errors.password && touched.password 
                                        ? <p className={styles.formError} style={{color:'red'}}>{errors.password}</p>
                                        : null
                                    }
                                </div>
                                <div className={styles.inputBlock}>
                                    <label className={styles.label}>Confirm password</label>
                                    <input 
                                    id="passwordConfirmation"
                                    type="password" 
                                    className={styles.inputField}
                                    value={values.passwordConfirmation}
                                    onChange={handleChange}
                                    onBlur={handleBlur}/>
                                </div>
                            </div>

                            <button type="submit" className={styles.submitBtn}>Create Account</button>
                        </form>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}

const styles = {
    container:'w-full flex flex-col justify-center items-center px-16 lg:mt-32 lg:mb-60 mt-12 mb-40',
    wrapper:'w-full md:w-[720px] flex flex-col gap-16',
    title:'font-heading text-xl font-bold text-gray-900 text-center',
    inputBlockRow:'w-full flex flex-col md:flex-row md:gap-3 md:mb-4',
    inputBlock:'w-full mb-4',
    inputBlockMain:'w-full mb-4',
    label:'text-gray-700 mb-2',
    inputField:'w-full block border border-gray-500 py-3 px-4 rounded',
    submitBtn:'w-full bg-orange-800 font-bold py-5 px-4 rounded text-lg text-white',
    formError:'text-xs'
}