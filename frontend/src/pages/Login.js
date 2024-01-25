import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        login(email, password)
        console.log(email, password)
    }

    return (
        <form className='login' onSubmit={handleSubmit}>
            <center>
                <h2>Log In</h2>
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
            <center>
                <button disabled={isLoading}>Login</button>
                {error && <div className="error">{error}</div>}
            </center>
        </form>
    )
}

export default Login