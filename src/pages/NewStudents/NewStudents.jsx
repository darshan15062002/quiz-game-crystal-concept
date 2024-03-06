import "./NewStudents.scss";

import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";



const NewStudents = ({inputs, title }) => {
   

    const [file, setFile] = useState("");

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
                        <form className="flex flex-col sm:flex-row ">
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
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewStudents;