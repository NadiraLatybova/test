import React, {useState} from 'react';
import axios from "axios";
import './Login.scss'
import {useForm} from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
    const [eye, setEye] = useState(false);

    const [pass, setPass] = useState('');
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        mode: "onBlur"
    });

    const loginUser = (e)=>{
        e.preventDefault()
        const user = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        axios.post('  http://localhost:8080/login',user)
            .then((res)=> console.log(res))
    }
    return (
        <div className='login'>
            <div className='container'>
                <form onSubmit={loginUser} >

                    <h1 className='login__title'>Логин</h1>
                    <input {...register('email', {
                        required: { value: true, message: 'Заполните это поле' },
                        minLength: { value: 5, message: 'Минимум 5 символов' },
                        pattern: {
                            value: /^(?=.*[a-zA-Z])(.{4,})@([a-zA-Z]{2,6})\.([a-zA-Z]{2,3})$/,
                            message: 'Заполните верно свою почту'
                        }
                    })} className='login__field' placeholder='Эл.почта' type="email"/>
                    <span className='register__error'>{errors.email && errors.email.message}</span>

                    <div className='register__block'>
                        <input  {...register('password', {
                            required: { value: true, message: 'Заполните это поле' },
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#%^&*]{8,}/g,
                                message: 'Пароль должен содержать как минимум 8 символов, одну заглавную и строчную букву и одну цифру'
                            }
                        })}
                               placeholder='Придумайте пароль' type={eye ? 'text' : 'password'} />
                        <span onClick={() => setEye(!eye)} className='register__eye'>
                            {eye ? <IoMdEye /> : <IoMdEyeOff />}
                        </span>
                    </div>
                    <span className='register__error'>{errors.password && errors.password.message}</span>
                    <button type='submit'>Войти</button>
                </form>
            </div>


        </div>
    );
};

export default Login;