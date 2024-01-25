import { useState } from 'react'
import { useSignUp } from '../hooks/useSignUp'

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { signup, error, isLoading } = useSignUp()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password, confirmPassword)
    }

    return (
        <form className='signup' onSubmit={handleSubmit}>
            <center>
                <h2>Sign Up</h2>
            </center>
            <label>Email:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <label>Confirm Password:</label>
            <input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
            />
            <center>
                <button disabled={isLoading}>Sign Up</button>
            </center>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup