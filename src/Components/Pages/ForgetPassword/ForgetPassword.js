import React from "react";
import { Link } from "react-router-dom";
import "./ForgetPassword.css";
import { ImCross } from "react-icons/im";

export default function ForgetPassword() {
	const isEmail = (email) =>
		/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
	const [email, setEmail] = React.useState("");
	function handleChange(e) {
		const { value } = e.target;
		setEmail(value);
	}
	function handleClick() {
		if (!isEmail(email)) {
			alert("Invalid Email Format!");
			return;
		}
		console.log("API call can be made from here for further Process!");
	}
	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<div className="forget_page min-h-screen flex justify-center  items-center">
			<Link to="/" className="cross">
				<ImCross className="absolute top-8 right-8 text-orange-600"></ImCross>
			</Link>
			<div className="forget_pg_main">
				<h1 className="text-3xl font-semibold mb-3 uppercase">
					Forgot Password
				</h1>
				<p>
					Forgotten your password? Enter your e-mail address below, and we'll
					send you an e-mail allowing you to reset it.
				</p>
				<div className="forget_form">
					<form onSubmit={handleSubmit}>
						<div className="form-control">
							<input
								type="email"
								placeholder="E-mail"
								name="Email"
								className="border-b-2 p-3 outline-none"
								autoComplete="off"
								onChange={handleChange}
								value={email}
							/>
						</div>
						<div className="form-control mt-6">
							<button
								className="btn btn-warning text-white button_t"
								type="submit"
								onClick={handleClick}>
								Reset Password
							</button>
						</div>
					</form>
					<div className="form-control mt-6">
						<Link
							to="/login"
							className="btn btn-warning text-white login_back_link">
							Back to Login Page
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
