import {NavLink} from "react-router-dom";

function Home() {
    return (
        <div>
            <div><NavLink to='/register'>Зарегистрироваться</NavLink></div>
            <div><NavLink to='/login'>Войти</NavLink></div>
        </div>
    )
}

export default Home;