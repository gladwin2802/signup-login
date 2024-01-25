import { useState } from "react";
import { useAuthContext } from './useAuthContext'

export const useSignUp = () => {

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState('')
    const { dispatch } = useAuthContext()

    const signup = async (email, password, confirmPassword) => {
        setIsLoading(true)
        setError(null)

        // Check if the passwords match before making the request
        if (password !== confirmPassword) {
            setIsLoading(false);
            setError("Passwords don't match");
            return;
        }

        const response = await fetch('http://localhost:5000/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json()
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {

            // Save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // Update AuthContent
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
        }
    }
    return { signup, isLoading, error }
}