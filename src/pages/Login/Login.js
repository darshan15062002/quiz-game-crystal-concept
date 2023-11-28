import React, { useState } from "react";
import loginImg from "../../assets/kindpng_814925.png";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { ImCross } from "react-icons/im";

import { loadUser, userLogin } from "../../api/authApi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { setCurrentUser } = useContext(AuthContext)
	const handleSubmit = async (e) => {
		e.preventDefault();
		userLogin({ email, password }).then((res) => {
			if (res.success) {
				alert('login successful')
				loadUser().then((data) => {
					if (data.success) {
						setCurrentUser({ user: data.user, isAuthenticated: true })
					}
					else {
						setCurrentUser({ isAuthenticated: false })
					}

				}).catch((error) => console.log(error))
				navigate("/")
			} else {
				alert("Wrong username or password")
			}
		})
	}

	return (
		<div className="flex flex-row items-center justify-center pb-32 pl-32 min-h-screen  pt-16 signup_login_main">
			<div>
				<Link to="/" className="cross">
					<ImCross className="absolute top-8 right-8 text-[#2D80F6]"></ImCross>
				</Link>
				{/* <div className="alert_box">{alertMsg}</div> */}
				<form onSubmit={handleSubmit}>
					<div className="mb-5">
						<h1 className="text-2xl lg:text-3xl font-medium ">
							Welcome To <Link to='/' className='text-white font-serif  mt-4 sm:text-2xl text-2xl mb-5   font-extrabold' style={{ fontFamily: 'Poppins', color: '#2D80F6' }}>Crystal <span className='text-[#09BD81]'>Concept</span></Link>
						</h1>
						<p className="text-gray-500 font-semibold">
							Login With Credential
						</p>
					</div>
					<div className="form-control">
						<input
							type="text"
							placeholder="Username OR mobile no."
							className="border-b-2 p-3 outline-none"
							autoComplete="on"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className="form-control">
						<input
							type="password"
							placeholder="password"
							name="Password"
							className="border-b-2 p-3 outline-none"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-center mt-4">
							<input
								type="checkbox"
								className="checkbox checkbox-primary p-3"
							/>
							<span className="pl-2 text-sm text-gray-500">Remember me?</span>
						</div>
						<Link
							to="/forgetpassword"
							className="pl-2 text-sm text-gray-500 mt-3 underline">
							Forgot Password?
						</Link>
					</div>
					<div className="form-control mt-6">
						<button
							className="btn btn-success text-white button_t"
							type="submit"
						>
							Login
						</button>

					</div>
				</form>

				<p className="text-sm text-gray-500 my-2 text-center">
					Don't have an account?
					<Link
						to="/Signup"
						className="underline hover:cursor-pointer button_t pl-2">
						Signup
					</Link>
				</p>
			</div>
			<div className="text-center lg:text-left hero_img">
				<img className="w-full" src={loginImg} alt="" />
			</div>
		</div>

	);
};

export default Login;
