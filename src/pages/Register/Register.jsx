import React, {useState} from 'react'
import axios from "axios"
import './Register.scss'
import {useForm} from "react-hook-form"
import {IoMdEye, IoMdEyeOff} from "react-icons/io"
import Chance from 'chance'

const chance = new Chance();

const Register = () => {

    const [eye, setEye] = useState(false);
    const [pass, setPass] = useState('');

    const generatePass = () => {
        const newPassword = chance.character({pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}) +
            chance.word({length: 6}) +
            chance.integer({min: 0, max: 20}) +
            chance.character({pool: '!@#$%^&*()_+[]{}|;:,.<>?'});
        setPass(newPassword)
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm({
        mode: "onBlur"
    });

    const registerUser = (data) => {
        axios.post('http://localhost:8080/register', data)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const password = watch('password');

    return (
        <section className='register'>
            <div className="container">
                <form className="register__form" onSubmit={handleSubmit(registerUser)}>
                    <h1 className='register__title'>Регистрация</h1>


                    <input {...register('email', {
                        required: {value: true, message: 'Заполните это поле'},
                        minLength: {value: 5, message: 'Минимум 5 символов'},
                        pattern: {
                            value: /^(?=.*[a-zA-Z])(.{4,})@([a-zA-Z]{2,6})\.([a-zA-Z]{2,3})$/,
                            message: 'Заполните верно свою почту'
                        }
                    })}
                           placeholder='Эл.почта' type="email"/>
                    <span className='register__error'>{errors.email && errors.email.message}</span>

                    <input {...register('login', {
                        required: {value: true, message: 'Заполните это поле'},
                        minLength: {value: 4, message: 'Минимум 4 буквы'}
                    })}
                           placeholder='Имя' type="text"/>
                    <span className='register__error'>{errors.login && errors.login.message}</span>

                    <input {...register('age', {
                        required: {value: true, message: 'Заполните это поле'},
                        min: {value: 12, message: 'Возраст должен быть не менее 12 лет'}
                    })}
                           placeholder='Ваш возраст' type="number"/>
                    <span className='register__error'>{errors.age && errors.age.message}</span>

                    <button type="button" className='register__btn' onClick={generatePass}>Сгенерировать пароль</button>

                    <div className='register__block'>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} {...register('password', {
                            required: {value: true, message: 'Заполните это поле'},
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#%^&*]{8,}/g,
                                message: 'Пароль должен содержать как минимум 8 символов, одну заглавную и строчную букву и одну цифру'
                            }
                        })}
                               placeholder='Придумайте пароль' type={eye ? 'text' : 'password'}/>
                        <span onClick={() => setEye(!eye)} className='register__eye'>
                            {eye ? <IoMdEye/> : <IoMdEyeOff/>}
                        </span>
                    </div>

                    <span className='register__error'>{errors.password && errors.password.message}</span>
                    <div className='register__block'>
                        <input {...register('confirmPassword', {
                            required: {value: true, message: 'Заполните это поле'},
                            validate: (value) => value === password || 'Пароли не совпадают'
                        })}
                               placeholder='Повторите пароль' type={eye ? 'text' : 'password'}/>
                        <span onClick={() => setEye(!eye)} className='register__eye'>
                            {eye ? <IoMdEye/> : <IoMdEyeOff/>}
                        </span>
                    </div>

                    <span className='register__error'>{errors.confirmPassword && errors.confirmPassword.message}</span>

                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </section>
    );
};

export default Register;
