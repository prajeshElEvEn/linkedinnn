import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassowrd] = useState('')

    const dispatch = useDispatch()
    const nav = useNavigate()

    const loginToApp = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                dispatch(login({
                    email: userCredential.user.email,
                    uid: userCredential.user.uid,
                    displayName: userCredential.user.displayName,
                    photoUrl: userCredential.user.photoURL
                }))
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    const register = () => {
        nav('/register')
    }

    return (
        <div className='login'>
            <img src={Logo} alt="" />
            <form>
                <input
                    type="email"
                    placeholder='example@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassowrd(e.target.value)}
                />
                <button
                    type="submit"
                    onClick={loginToApp}
                >
                    Login
                </button>
            </form>
            <div className="form-footer">
                <span>Not a member?</span>{' '}
                <span
                    className='login-register'
                    onClick={register}
                >
                    Register Now
                </span>
            </div>
        </div>
    )
}

export default LoginPage
