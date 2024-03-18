import React, { useState } from "react";
import loginImg from "../../assets/kindpng_814925.png";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { ImCross } from "react-icons/im";

import { loadUser, userLogin } from "../../api/authApi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { setCurrentUser } = useContext(AuthContext)
	const handleSubmit = async (e) => {
		e.preventDefault();
		userLogin({ email, password }).then((res) => {
			if (res.success) {
				Swal.fire({
					icon: 'success',
					title: 'Login Successful!',
					text: 'You have successfully logged in.',
				}).then(() => {
					setCurrentUser({ isAuthenticated: false, loading: true });
					loadUser().then((data) => {
						if (data.success) {
							setCurrentUser({ user: data.user, isAuthenticated: true, loading: false });
						}
					}).catch((error) => setCurrentUser({ isAuthenticated: false, loading: false }));
					navigate("/");
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Login Failed',
					text: 'Wrong username or password. Please try again.',
				});
			}
		});
	};

	return (
		<div className="flex flex-row items-center justify-center pb-32 pl-32 min-h-screen  pt-16 signup_login_main">
			<div>
				<Link to="/" className="cross">
					<ImCross className="absolute top-8 right-8 text-[#EB676A]"></ImCross>
				</Link>
				{/* <div className="alert_box">{alertMsg}</div> */}
				<form onSubmit={handleSubmit}>
					<div className="mb-5">
						<h1 className="text-2xl lg:text-3xl font-medium ">
							Welcome To  <Link to='/' className=' font-serif  mt-4 sm:text-3xl text-2xl mb-5   font-extrabold' style={{ fontFamily: 'Poppins', color: '#262D4D' }}>   Crystal <span className='text-[#EB676A]'>Concept</span></Link>
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
							className="btn bg-[#EB676A] text-white button_t"
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
