import Navbar from '../components/navbar'
import Blob from '../components/blob'
import styles from '../styles/Contact.module.scss'

import { Formik, Form, Field } from 'formik';
import { RiErrorWarningLine } from 'react-icons/ri'

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Your email is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address.';
    }
    return error;
}
  
function validateMessage(value) {
    let error;
    if (value.length < 10) {
        error = 'Your message is too short.';
    }
    return error;
}

export default function Contact() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <main className="main">
                    <Blob/>
                    <div className={styles.wrapper}>
                        <section className={styles.text}>
                            <h2>Talk to me!</h2>
                            <div className={styles.subText}>
                                <p>Or DM me on Discord! <span>@Aero#9241</span></p>
                                <div className={styles.copyButton}></div>
                            </div>
                        </section>
                        <section className={styles.formContainer}>
                            <Formik
                            initialValues={{
                                email: '',
                                msg: '',
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                alert(JSON.stringify(values, null, 2));
                            }}
                            validateOnChange={false}
                            validateOnBlur={false}
                            >
                            {({ errors, touched, isValidating }) => (
                            <Form>
                                <div className="form-wrapper">
                                    <div className="input-field">
                                        <label htmlFor="email">Email Address</label>
                                        <Field
                                        id="email"
                                        name="email"
                                        placeholder="student@ohsea.gg"
                                        as="input"
                                        validate={validateEmail}
                                        />
                                        {errors.email && touched.email &&
                                        <div className="error"><RiErrorWarningLine className="warning-icon"/> {errors.email}</div>
                                        }
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="msg">Message</label>
                                        <Field
                                        id="msg"
                                        name="msg"
                                        placeholder="Your Message"
                                        as="textarea"
                                        validate={validateMessage}
                                        />
                                        {errors.msg && touched.msg &&
                                        <div className="error"><RiErrorWarningLine className="warning-icon"/> {errors.msg}</div>
                                        }
                                    </div>
                                    <button
                                    type="submit"
                                    className="btn-fill"
                                    >Send</button>
                                </div>
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