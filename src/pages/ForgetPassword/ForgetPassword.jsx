import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { sendForgotPasswordOTP, resetPassword, sendOTP } from "../../api/authApi";
import loginImg from "../../assets/kindpng_814925.png";
const ForgetPassword = () => {
    const navigate = useNavigate();

    const [section, setSection] = useState("emailMobileForm");
    const [emailOrMobile, setEmailOrMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmitEmailMobileForm = async (e) => {
        e.preventDefault();
        try {
            const response = await sendOTP(emailOrMobile);
            if (response.success) {
                setSection("otpVerificationForm");
                alert("OTP sent successfully. Check your email or mobile for the OTP.");
            } else {
                alert(response.message || "Failed to send OTP. Please try again.");
            }
        } catch (error) {
            console.error("Error sending OTP:", error);
            alert("Failed to send OTP. Please try again.");
        }
    };

    const handleSubmitOTPVerificationForm = async (e) => {

        e.preventDefault();
        if (newPassword !== confirmPassword) alert("both password must be same")
        try {
            const response = await resetPassword(otp, newPassword);
            if (response.success) {
                alert("Password reset successful. You can now login with your new password.");
                navigate("/login");
            } else {
                alert(response.message || "Failed to reset password. Please try again.");
            }
        } catch (error) {
            console.error("Error resetting password:", error);
            alert("Failed to reset password. Please try again.");
        }
    };

    return (
        <div className="flex px-20 flex-row items-center justify-center pb-32 pl-32 min-h-screen  pt-16 signup_login_main">
            <div>
                <Link to="/" className="cross">
                    <ImCross className="absolute top-8 right-8 text-[#EB676A]"></ImCross>
                </Link>
                {section === "emailMobileForm" && (
                    <form onSubmit={handleSubmitEmailMobileForm}>
                        <div className="mb-5">
                            <h1 className="text-2xl lg:text-3xl font-medium ">
                                Reset Your Password
                            </h1>
                            <p className="text-gray-500 font-semibold">
                                Enter your email or mobile number to receive a password reset OTP.
                            </p>
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Email OR Mobile Number"
                                className="border-b-2 p-3 outline-none"
                                autoComplete="on"
                                onChange={(e) => setEmailOrMobile(e.target.value)}
                                value={emailOrMobile}
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button
                                className="btn bg-[#EB676A] text-white button_t"
                                type="submit"
                            >
                                Send OTP
                            </button>
                        </div>
                    </form>
                )}

                {section === "otpVerificationForm" && (
                    <form onSubmit={handleSubmitOTPVerificationForm}>
                        <div className="mb-5">
                            <h1 className="text-2xl lg:text-3xl font-medium ">
                                Verify OTP & Reset Password
                            </h1>
                            <p className="text-gray-500 font-semibold">
                                Enter the OTP sent to your email or mobile to reset your password.
                            </p>
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                className="border-b-2 p-3 outline-none"
                                onChange={(e) => setOtp(e.target.value)}
                                value={otp}
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="password"
                                placeholder="New Password"
                                className="border-b-2 p-3 outline-none"
                                onChange={(e) => setNewPassword(e.target.value)}
                                value={newPassword}
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="border-b-2 p-3 outline-none"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button
                                className="btn bg-[#EB676A] text-white button_t"
                                type="submit"
                            >
                                Reset Password
                            </button>
                        </div>
                    </form>
                )}

                <p className="text-sm text-gray-500 my-2 text-center">
                    Remember your password?{" "}
                    <Link to="/login" className="underline hover:cursor-pointer button_t pl-2">
                        Login
                    </Link>
                </p>
            </div>
            <div className="text-center lg:text-left hero_img">
                <img className="w-full" src={loginImg} alt="" />
            </div>
        </div>
    );
};

export default ForgetPassword;
