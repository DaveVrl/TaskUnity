import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../../redux/actions";


const Login = () => {

    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(userData));
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={userData.username} onChange={handleChange} />
                <input type="password" name="password" value={userData.password} onChange={handleChange} />
                <button type='submit'>Login</button>           
            </form>
        </div>
    );
};

export default Login;