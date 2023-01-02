import {useSelector} from "react-redux";

function Home() {
    const user = useSelector(store => store.userReducer)

    return (
        <div>
            Homepage
            <p>User is logged [{user.isLogged.toString()}]</p>
        </div>
    )
}

export default Home;