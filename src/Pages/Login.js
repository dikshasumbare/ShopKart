
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [successMessage, setSuccessMessage] = useState("");

    const onSubmit = (data) => {
        console.log("Registration Data:", data);

        setSuccessMessage(
           ` Registration successful! Welcome, ${data.name}.`
        );

        reset();
    };

    return (
        <div className="register-page">

            <div className="register-box">

                <h2>ShopKart Registration</h2>

                <p className="register-subtitle">
                    Create your ShopKart account
                </p>

                {successMessage && (
                    <div className="success-message">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>

                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                    value: 2,
                                    message: "Name must be at least 2 characters"
                                }
                            })}
                        />

                        <p className="error">
                            {errors.name?.message}
                        </p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email address"
                                }
                            })}
                        />

                        <p className="error">
                            {errors.email?.message}
                        </p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>

                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                        />

                        <p className="error">
                            {errors.password?.message}
                        </p>
                    </div>

                    <button type="submit" className="register-btn">
                        Register
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;