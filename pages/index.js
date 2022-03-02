import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

import styles from '../styles/main.module.scss'

export default function RegistrationForm(props) {
    //     const [firstName, setFirstName] = useState('')
    //     const [lastName, setLastName] = useState('')
    //     const [phoneNumber, setPhoneNumber] = useState('')
    //     const [email, setEmail] = useState('')
    //     const [city, setCity] = useState('')
    //
    //     const [isFirstTime, setIsFirstTime] = useState('true')
    //     const [other, setOther] = useState('')

    const {data} = props
    const router = useRouter()

    useEffect(() => {
        if (!data || String(data).length <= 0) router.replace(`/main.html`)
    }, [props])

    // const registerEntry = () => {
    // register a new entry to the firebase database
    // }

    return null

    return (
        <div className={styles.mainContainer}>
            <header>
                <p>Registration Form</p>
            </header>

            <main>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        registerEntry()
                    }}>
                    <div className={styles.combineInputs}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="firstname">First name</label>
                            <input
                                id="firstname"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                placeholder={'First Name'}
                            />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="lastname">Last name</label>
                            <input
                                id="lastname"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                placeholder={'Last Name'}
                            />
                        </div>
                    </div>

                    <div className={styles.combineInputs}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="phone">Your Phone number</label>
                            <input
                                id="phone"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                                placeholder={'Enter phone number'}
                            />
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Enter your email ID:</label>
                            <input
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder={'Enter email ID'}
                            />
                        </div>
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="city">Which city do you live in?</label>
                        <input
                            id="city"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            placeholder={'Enter your city name'}
                        />
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="time">
                            First time attending AI Summit?
                        </label>
                        <select
                            id="time"
                            value={isFirstTime}
                            onChange={e => setIsFirstTime(e.target.value)}>
                            <option value={'true'}>Yes</option>
                            <option value={'false'}>No</option>
                        </select>
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="other">Anything else? (Optional)</label>
                        <input
                            id="other"
                            value={other}
                            onChange={e => setOther(e.target.value)}
                            placeholder={'Anything you want to say to us?'}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </main>
        </div>
    )
}

RegistrationForm.getInitialProps = ctx => {
    return {
        data: ctx.query.data,
        fallback: false,
    }
}
