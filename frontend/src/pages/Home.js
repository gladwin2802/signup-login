import { useAuthContext } from "../hooks/useAuthContext"

const Home = () => {

    const { user } = useAuthContext()

    return (
        <div className="home">
            <h2>Welcome !!!</h2>
            <h2><span>{user.email}</span></h2>
        </div>
    )
}

export default Home