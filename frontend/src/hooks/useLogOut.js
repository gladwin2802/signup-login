import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const logout = () => {
        // Remove user from Local storage
        localStorage.removeItem('user')

        // Dispatch Logout action
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}