import { useState } from "react";
import "./NewStudents.scss";
import { userRegister } from "../../api/authApi";
import Swal from "sweetalert2";





const NewStudents = ({ inputs, title, role }) => {


    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false)
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await userRegister({ ...formData, role: role, password: 'student' });
            if (res?.data?.success) {
                setLoading(false);
                setFormData({});
                document.getElementById("student-form").reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'Successfully registered',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                setLoading(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: res?.response?.data?.message || 'An error occurred during registration. Please try again.',
                });
            }
        } catch (err) {
            setLoading(false);
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: 'An error occurred during registration. Please try again.',
            });
        }
    };

    return (
        <div className="new pt-16">

            <div className="newContainer">

                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    {/* <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div> */}
                    <div className="right">
                        <form id="student-form" className="flex flex-col sm:flex-row " onSubmit={handleSubmit}>
                            {/* <div className="formInput ">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div> */}

                            {inputs?.map((input) => (
                                <div className="formInput w-full md:w-[40%]" key={input.id}>
                                    <label>{input.label}</label>
                                    <input name={input.name} type={input.type} placeholder={input.placeholder} onChange={handleChange} />
                                </div>
                            ))}
                            <button disabled={loading} >{loading ? "Loading..." : "Send"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewStudents;