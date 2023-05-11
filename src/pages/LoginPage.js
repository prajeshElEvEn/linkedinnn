import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice'
import { toast } from 'react-toastify'

const LoginPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassowrd] = useState('')
    const [profilePic, setProfilePic] = useState('')

    const dispatch = useDispatch()

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
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                updateProfile(user, {
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userCredential.user.email,
                            uid: userCredential.user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        }))
                    })
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    return (
        <div className='login'>
            <img src={Logo} alt="" />
            <form>
                <input
                    type="text"
                    placeholder='Full name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Profile pic URL (optional)'
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                />
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
                    Sign In
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
