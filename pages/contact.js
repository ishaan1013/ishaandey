import { useRef } from "react"
import Head from "next/head"
import Favicon from "../public/favicon.ico"

import Navbar from "../components/navbar"
import Circle from "../components/circle"
import styles from "../styles/Contact.module.scss"

import emailjs from "@emailjs/browser"
import { Formik, Form, Field } from "formik"
import { RiErrorWarningLine } from "react-icons/ri"
import { FaRegCopy } from "react-icons/fa"

function validateEmail(value) {
    let error
    if (!value) {
        error = "Your email is required."
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Invalid email address."
    }
    return error
}
  
function validateMessage(value) {
    let error
    if (value.length < 10) {
        error = "Your message is too short."
    }
    return error
}

export default function Contact() {
    const form = useRef()

    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Ishaan's contact page." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <div className="container">
                <main className="main">
                    <Circle contact/>
                    <div className={styles.wrapper}>
                        <section className={styles.text}>
                            <h1>Talk to me!</h1>
                            <div className={styles.subText}>
                                <p>Or DM me on Discord:<br className={styles.break}/> <span>@Aero#9241</span></p>
                                <div className={styles.copyButton}>
                                    <FaRegCopy/>
                                </div>
                            </div>
                        </section>
                        <section className={styles.formContainer}>
                            <Formik
                            initialValues={{
                                email: "",
                                msg: "",
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500))
                                // alert(JSON.stringify(values, null, 2))
                                emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, values, process.env.NEXT_PUBLIC_PUBLIC_KEY)
                                    .then(function(response) {
                                    // console.log("SUCCESS!"+JSON.stringify(values))
                                    }, function(error) {
                                    // console.log("FAILED...", error)
                                    })
                                // console.log(process.env.SERVICE_ID)
                                // console.log(process.env.TEMPLATE_ID)
                            }}
                            validateOnChange={false}
                            validateOnBlur={false}
                            >
                            {({ errors, touched, isValidating }) => (
                            <Form>
                                <div className={styles.inputField}>
                                    {/* <label htmlFor="email">Email Address</label> */}
                                    <label htmlFor="email">{process.env.NEXT_PUBLIC_SERVICE_ID}</label>
                                    <Field
                                    id="email"
                                    name="email"
                                    placeholder="you@email.com"
                                    as="input"
                                    validate={validateEmail}
                                    />
                                    {errors.email && touched.email &&
                                    <div className={styles.error}><RiErrorWarningLine className="warning-icon"/> {errors.email}</div>
                                    }
                                </div>
                                <div className={styles.inputField}>
                                    <label htmlFor="msg">Message</label>
                                    <Field
                                    id="msg"
                                    name="msg"
                                    placeholder="Your Message"
                                    as="textarea"
                                    validate={validateMessage}
                                    />
                                    {errors.msg && touched.msg &&
                                    <div className={styles.error}><RiErrorWarningLine/> {errors.msg}</div>
                                    }
                                </div>

                                <button
                                    type="submit"
                                    className="btn-fill"
                                >Send</button>
                            </Form>
                            )}
                            </Formik>
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}