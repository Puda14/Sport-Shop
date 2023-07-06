import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { loginUser, registerUser } from "../../features/authSlice";
import { StyledForm } from "./StyledForm";
import { useNavigate } from "react-router";
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    console.log(auth);

    useEffect(()=>{
        if(auth._id){
            navigate("/Cart");
        }
    }, [auth._id, navigate]);

    const [user, setUser] = useState({
        email:"",
        password:"",
    });

    // console.log("user: ", user);
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(loginUser(user));
    }
    return (
    <>
        <StyledForm onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input 
                type="email" 
                placeholder="email" 
                onChange={ (e) => setUser({...user, email:e.target.value})}
            />
            <input 
                type="password" 
                placeholder="password" 
                onChange={ (e) => setUser({...user, password:e.target.value})}
            />
            <button>{auth.loginStatus === "pending" ? "submitting" : "Login" }</button>
            
            {auth.loginStatus === "rejected" ? ( 
                <p>{auth.loginError}</p>
            ) : null }
        </StyledForm>
    </>
    );
};

export default Login;