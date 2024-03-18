import React, { useState } from "react";
import loginImg from "../../assets/kindpng_814925.png";
// import footerImg from "../../../assets/footer.png";
import { Link, useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import "./Signup.css";

import { loadUser, userRegister } from "../../api/authApi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
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
		e.preventDefault();

		if (password !== compassword) {
			Swal.fire({
				icon: 'error',
				title: 'Passwords Mismatch',
				text: 'Both passwords must be the same.',
			});
		} else if (!checked) {
			Swal.fire({
				icon: 'warning',
				title: 'Terms and Privacy Policy',
				text: 'Please check the terms and privacy policy.',
			});
		} else {
			const res = await userRegister({ name, phone, std, location, password });
			if (res?.data?.success) {
				Swal.fire({
					icon: 'success',
					title: 'Registration Successful!',
					text: 'You have successfully registered.',
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
					title: 'Registration Failed',
					text: res?.response?.data?.message || 'An error occurred during registration. Please try again.',
				});
			}
		}
	};

	return (
		<div className="flex flex-row items-center justify-center pb-32 pl-32 min-h-screen  pt-16 signup_login_main">

			<Link to="/" className="cross">
				<ImCross className="absolute top-8 lg:flex right-8 text-orange-600"></ImCross>
			</Link>
			<div className="md:w-1/2  w-full px-20">
				<form onSubmit={handleSubmit}>
					<div className="mb-5">
						<h1 className="text-2xl lg:text-3xl font-medium ">
							Welcome To <Link to='/' className=' font-serif  mt-4 sm:text-3xl text-2xl mb-5   font-extrabold' style={{ fontFamily: 'Poppins', color: '#262D4D' }}>   Crystal <span className='text-[#EB676A]'>Concept</span></Link>
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
							className="btn bg-[#EB676A] text-white button_t"
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
			<div className="md:w-1/2 w-full  flex">
				<img className="" src={loginImg} alt="" />
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
