import React, { useState } from "react";
import loginImg from "../../assets/kindpng_2417758.png";
// import footerImg from "../../../assets/footer.png";
import { Link, useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import "./Signup.css";

import { loadUser, userRegister } from "../../api/authApi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Signup = () => {

	const navigate = useNavigate();


	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [password, setPassword] = useState("")
	const [compassword, setComPassword] = useState("")
	const [location, setLocation] = useState("")
	const [checked, setChecked] = useState(false)
	const [std, setStd] = useState()

	const { setCurrentUser } = useContext(AuthContext)
	const handleSubmit = async (e) => {

		e.preventDefault()

		if (password !== compassword) { alert("Both password must be same") }
		else if (checked === false) { alert("please check terms and privacy policy") }
		else {

			const res = await userRegister({ name, phone, std, location, password })
			if (res?.data?.success) {
				alert('Successfully registered')
				loadUser().then((data) => {
					if (data.success) {
						setCurrentUser({ user: data.user, isAuthenticated: true })
					}
					else {
						setCurrentUser({ isAuthenticated: false })
					}

				})
				navigate("/")
			} else {
				console.log(res);
				alert(res?.response?.data?.message)
			}

		}

	}

	return (
		<div className="flex flex-row items-center justify-center pb-32 pl-32 min-h-screen  pt-16 signup_login_main">
			{/* <div className="alert_box">{alertMsg}</div> */}
			<Link to="/" className="cross">
				<ImCross className="absolute top-8 lg:flex right-8 text-orange-600"></ImCross>
			</Link>
			<div className="sm:w-1/2 w-full px-10">
				<form onSubmit={handleSubmit}>
					<div className="mb-5">
						<h1 className="text-2xl lg:text-3xl font-medium ">
							Welcome To <Link to='/' className='text-white font-serif  mt-4 sm:text-2xl text-2xl mb-5   font-extrabold' style={{ fontFamily: 'Poppins', color: '#2D80F6' }}>Crystal <span className='text-[#09BD81]'>Concept</span></Link>
						</h1>
						<p className="text-gray-500 font-semibold">
							Create your account
						</p>
					</div>
					<div className="form-control">
						<input
							type="text"
							placeholder="User Name"
							className="border-b-2 p-3 outline-none"
							name="Username"
							onChange={(e) => setName(e.target.value)}
							value={name}
							autoComplete="off"
						/>
					</div>
					<div className="form-control">

						<input
							type="tel" maxlength="10" required

							placeholder="Phone No"
							name="phone"
							className="border-b-2 p-3 outline-none"
							onChange={(e) => setPhone(e.target.value)}
							value={phone}
							autoComplete="off"
						/>
					</div>

					<div className="form-control">
						<input
							type="Number"
							placeholder="standard"
							maxlength="2"
							name="standard"
							className="border-b-2 p-3 outline-none"
							onChange={(e) => setStd(e.target.value)}
							value={std}
						/>
					</div>
					<div className="form-control">
						<input
							type="text"
							placeholder="city"
							name="location"
							className="border-b-2 p-3 outline-none"
							onChange={(e) => setLocation(e.target.value)}
							value={location}
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
					<div className="form-control">
						<input
							type="password"
							placeholder="Confirm password"
							name="Com_Password"
							className="border-b-2 p-3 outline-none"
							onChange={(e) => setComPassword(e.target.value)}
							value={compassword}
						/>
					</div>
					<div className="flex items-center mt-4">
						<input
							type="checkbox"
							className="checkbox checkbox-primary p-3"
							name="checked"
							onChange={(e) => setChecked(e.target.value)}
							value={checked}
						/>
						<span className="pl-2 text-sm text-gray-500">
							I agree to the terms and privacy policy
						</span>
					</div>
					<div className="form-control mt-6">
						<button
							className="button_t btn btn-success text-white text-center"
							type="submit"
						>
							Register
						</button>
					</div>
				</form>
				<p className="text-sm text-gray-500 my-2 text-center">
					Already have an account?
					<Link
						to="/login"
						className="underline hover:cursor-pointer button_t pl-2">
						Login
					</Link>
				</p>
			</div>
			<div className="w-full flex justify-center items-center">
				<img className="w-[75%]" src={loginImg} alt="" />
			</div>
		</div>
		/* <img
				src={footerImg}
				alt=""
				className="absolute bottom-0 hidden lg:flex"
			/> */
	);
};

export default Signup;
