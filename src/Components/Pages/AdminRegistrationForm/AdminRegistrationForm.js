import React, { useEffect, useState } from "react";
import loginImg from "../../../assets/kindpng_2417758.png";
// import footerImg from "../../../assets/footer.png";

import { Link, useNavigate, } from "react-router-dom";
import "./AdminRegistrationForm.css";
import { ImCross } from "react-icons/im";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { collection, deleteDoc, doc, getDocs, onSnapshot, query, setDoc, where } from "firebase/firestore";

const AdminRegistrationForm = () => {
    const navigate = useNavigate();
    const [alertMsg, setAlertMsg] = React.useState("");
    const [open, setOpen] = React.useState(false)
    const [password, setPassword] = React.useState("");
    const [admin, setAdmin] = useState([{ email: 'dckdsjv' }])

    // New Admin registration
    const [apassword, setAPassword] = React.useState("");
    const [email, setEmail] = React.useState("")

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (password === "Admin123") {
            setOpen(true)
        }
    }


    // New Admin registration
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(apassword, email, "darshan");
        try {
            const res = await createUserWithEmailAndPassword(auth, email, apassword);

            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                email,
                isAdmin: true
            });








        } catch (err) {
            console.log(err);
            setAlertMsg("internal server error");

        }


    }

    useEffect(() => {
        const getAdmin = () => {
            const unsubscribe = onSnapshot(
                query(collection(db, "users"), where("isAdmin", "==", true)),
                (snapshot) => {
                    const adminData = snapshot.docs.map((doc) => doc.data());
                    setAdmin(adminData);
                    // Update the state or perform any other necessary operations with adminData
                }
            );

            return () => {
                unsubscribe();
            };
        };

        getAdmin();
    }, []);

    const handleEdit = () => {

    }

    const handleRemove = async (id) => {

        const Doc = await deleteDoc(doc(db, "users", `${id}`)).catch((err) => {
            console.log(err);
        })

    }


    return (
        <div className="flex sm:flex-row flex-col sm:items-center  sm:justify-around justify-center gap-8 items-center h-screen    ">

            <Link to="/" className="cross">
                <ImCross className="absolute top-8 right-8 text-[#09BD81]"></ImCross>
            </Link>

            {open === false && <form onSubmit={() => handleFormSubmit} className="sm:w-[30%] w-[80%]">
                <div className="mb-5">
                    <h1 className="text-2xl lg:text-3xl font-medium text-[#2D80F6]">
                        Welcome To  Admin Registration!
                    </h1>
                    <p className="text-gray-500 font-semibold">
                        Authenticate As Admin
                    </p>
                </div>

                <div className="form-control">
                    <input
                        type="password"
                        placeholder="password"
                        name="Password"
                        className="border-b-2 p-3 outline-none"
                        onChange={handlePasswordChange}
                        value={password}
                    />
                </div>

                <div className="form-control mt-6">
                    <button
                        className="btn btn-success text-white button_t"
                        type="submit"
                        onClick={handleFormSubmit}>
                        Login
                    </button>
                </div>
            </form>}

            {open === true &&
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <h1 className="text-2xl lg:text-3xl font-medium ">
                            Welcome To <Link to='/' className='text-white font-serif  mt-4 sm:text-2xl text-2xl mb-5   font-extrabold' style={{ fontFamily: 'Poppins', color: '#2D80F6' }}>Crystal <span className='text-[#09BD81]'>Concept</span></Link>
                        </h1>
                        <p className="text-gray-500 font-semibold">
                            Create New Admin  account
                        </p>
                    </div>
                    <div className="form-control">
                        <input
                            type="email"
                            placeholder="E-mail"
                            name="Email"
                            className="border-b-2 p-3 outline-none"
                            autoComplete="off"
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
                            onChange={(e) => setAPassword(e.target.value)}
                            value={apassword}
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button
                            className="btn btn-success text-white button_t"
                            type="submit"
                            onClick={handleSubmit}>
                            Admin Registration
                        </button>
                    </div>
                </form>}





            {open === true && admin.length > 0 ? (
                <div className=" flex justify-center items-center  sm:w-[40%] w-[80%] ">
                    <table className=" bg-white h-[50vh] rounded-sm overflow-y-scroll  ">
                        <tr className="flex  ">
                            <th className="w-40">     <h2 className="text-gray-700 pl-4 font-semibold ">Email</h2></th>


                        </tr>
                        <div style={{
                            height: "100%",
                            scrollBehavior: 'smooth',
                            overflowY: 'scroll',



                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },

                        }}>
                            {admin?.map((item, index) => (
                                <tr className="flex gap-2 items-center mt-5 py-5 px-5  w-full  " key={index} style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
                                    <td className="w-40">     <h2 className="text-gray-400 text-sm font-semibold " >{item.email}</h2></td>

                                    <td className="w-20"> <button className="text-black text-sm font-semibold border px-3 py-2 " onClick={() => handleRemove(item.uid)}>Remove</button></td>
                                </tr>
                            ))}
                        </div>

                    </table>
                </div>) : (<div className="text-center lg:text-left hero_img">
                    <img className="w-full" src={loginImg} alt="" />
                </div>)}
        </div >

    );
};

export default AdminRegistrationForm;
