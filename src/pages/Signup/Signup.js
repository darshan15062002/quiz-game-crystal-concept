import React, { useState } from "react";
import loginImg from "../../assets/kindpng_814925.png";
import { Link, useNavigate } from "react-router-dom";
import { ImCross, ImEye } from "react-icons/im";
import "./Signup.css";
import { loadUser, userRegister } from "../../api/authApi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [compassword, setComPassword] = useState("");
  const [location, setLocation] = useState("");
  const [passwordvisible, setPasswordVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [std, setStd] = useState("");
  const { setCurrentUser } = useContext(AuthContext);

  // Function to validate inputs
  const validateInputs = () => {
    if (!name.trim()) {
      return "Name is required.";
    }

    if (!/^\d{10}$/.test(phone)) {
      return "Phone number must be a valid 10-digit number.";
    }

    if (!std || !["10", "12", "Graduation"].includes(std)) {
      return "Standard must be '10', '12', or 'Graduation'.";
    }

    if (!location.trim()) {
      return "City is required.";
    }

    if (password.length < 8) {
      return "Password must be at least 8 characters.";
    }

    if (password !== compassword) {
      return "Passwords do not match.";
    }

    if (!checked) {
      return "You must agree to the terms and privacy policy.";
    }

    return null; // All validations passed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateInputs();
    if (validationError) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: validationError,
      });
      return;
    }

    // Proceed with API call
    const res = await userRegister({ name, phone, std, location, password });
    if (res?.data?.success) {
      Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "You have successfully registered.",
      }).then(() => {
        setCurrentUser({ isAuthenticated: false, loading: true });
        loadUser()
          .then((data) => {
            if (data.success) {
              setCurrentUser({
                user: data.user,
                isAuthenticated: true,
                loading: false,
              });
            }
          })
          .catch(() => setCurrentUser({ isAuthenticated: false, loading: false }));
        navigate("/");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text:
          res?.response?.data?.message ||
          "An error occurred during registration. Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-row items-center justify-center pb-32 pl-32 min-h-screen pt-6 signup_login_main">
      <Link to="/" className="cross">
        <ImCross className="absolute top-8 lg:flex right-8 text-orange-600"></ImCross>
      </Link>
      <div className="md:w-1/2 w-full md:px-20 px-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <h1 className="text-2xl lg:text-3xl font-medium">
              Welcome To{" "}
              <Link
                to="/"
                className="font-serif mt-4 sm:text-3xl text-2xl mb-5 font-extrabold"
                style={{ fontFamily: "Poppins", color: "#262D4D" }}
              >
                Crystal <span className="text-[#EB676A]">Concept</span>
              </Link>
            </h1>
            <p className="text-gray-500 font-semibold">Create your account</p>
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
              type="tel"
              maxLength="10"
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
              type="text"
              placeholder="standard (10/12/Graduation)"
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
          <div className="form-control relative">
            <input
              type={`${passwordvisible ? "text" : "password"}`}
              placeholder="password"
              name="Password"
              className="border-b-2 p-3 outline-none"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <ImEye
              onClick={() => setPasswordVisible((prev) => !prev)}
              className="absolute top-5 right-0 text-[#EB676A]"
            />
          </div>
          <div className="form-control">
            <input
              type={`${passwordvisible ? "text" : "password"}`}
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
              onChange={(e) => setChecked(e.target.checked)}
              checked={checked}
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
            className="underline hover:cursor-pointer button_t pl-2"
          >
            Login
          </Link>
        </p>
      </div>
      <div className="md:w-1/2 w-full flex">
        <img className="" src={loginImg} alt="" />
      </div>
    </div>
  );
};

export default Signup;
