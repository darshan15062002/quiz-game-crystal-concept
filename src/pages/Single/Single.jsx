
import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { getStudentProfile, updateProfileByAdmin } from "../../api/authApi";
import List from "../../Components/Pages/List/List";
import { fetchTransactions } from "../../api/studentApi";
import "./Single.scss"
import Swal from "sweetalert2";



const Single = () => {
    const { id } = useParams()
    const [student, setStudent] = useState({})
    const [transactions, setTransactions] = useState([])
    const [edit, setEdit] = useState(false)
    const [formModified, setFormModified] = useState(false);
    const [formValues, setFormValues] = useState({
        name: student.name,
        phone: student.phone,
        location: student.location,
        std: student.std,
    });

    console.log(student);







    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func(...args), delay);
        };
    };

    const handleFieldChange = (fieldName, value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [fieldName]: value,
        }));

        // Set the form modification state after a delay (e.g., 300 milliseconds)
        debounce(() => {
            setFormModified(true);
        }, 300)();
    };


    const handleUpdate = (e) => {
        e.preventDefault();
        updateProfileByAdmin(formValues.name, formValues.phone, formValues.std, formValues.location, id)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Profile Updated!',
                    text: res.message,
                });
                setFormModified(false);
                setEdit(false);
            })
            .catch((err) => {
                console.error(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Update Failed',
                    text: 'An error occurred while updating the profile. Please try again later.',
                });
            });
    };

    const handleCancel = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Reset the form values and modification state
        setFormValues({
            name: student?.name,
            phone: student?.phone,
            location: student?.location || "",
            std: student?.std || "",
        });
        setFormModified(false);
        setEdit(false)
    };









    useEffect(() => {

        getStudentProfile(id).then((data) => {
            // console.log(data.user, "Student Profile");
            setStudent(data.user)
            setFormValues({
                name: data.user?.name,
                phone: data.user?.phone,
                location: data.user?.location || "",
                std: data.user?.std || "",
            })

        })

        fetchTransactions(id)
            .then((data) => {
                setTransactions(data?.studentInfo?.feesPaid);
            })
            .catch((error) => {
                console.error("Error fetching transactions:", error);
            });
    }, [])
    return (



        <div className=" bg-gray-100 p-4  w-screen sm:w-full">


            <div className="flex flex-col mt-16 gap-4 p-4">
                <div className="flex-1 bg-white p-4 shadow-md relative">
                    <div className="absolute top-0 right-0 p-2">
                        {!edit && <button onClick={() => setEdit(true)} className="text-blue-500 bg-blue-100 px-2 py-1 text-sm rounded-tr-md cursor-pointer">
                            Edit
                        </button>}
                    </div>

                    {edit ?
                        (<form className='flex flex-col md:flex lg:flex-row items-start justify-center border-2 p-6'>

                            <div>
                                <input type="text" placeholder='Name'
                                    onChange={(e) => handleFieldChange('name', e.target.value)}
                                    value={formValues?.name}
                                    className='w-full p-3 input input-bordered shadow-md mb-2 text-black ' />

                                <input
                                    type="tel" maxlength="10" required

                                    placeholder="Phone No"
                                    name="phone"
                                    className='w-full p-3 input input-bordered shadow-md mb-2 text-black'
                                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                                    value={formValues.phone}
                                    autoComplete="off"
                                />

                                <input
                                    type="Number"
                                    placeholder="standard"
                                    maxlength="2"
                                    name="standard"
                                    className="w-full p-3 input input-bordered shadow-md mb-2 text-black"
                                    onChange={(e) => handleFieldChange('std', e.target.value)}
                                    value={formValues.std}
                                />


                                <input
                                    type="text"
                                    placeholder="city"
                                    name="location"
                                    className="w-full p-3 input input-bordered shadow-md mb-2 text-black"
                                    onChange={(e) => handleFieldChange('location', e.target.value)}
                                    value={formValues.location}
                                />







                            </div>

                            {formModified && (
                                <div className="flex justify-center items-center w-full mt-2 gap-4">
                                    <button onClick={handleCancel} className="border-1 border-black  text-black font-bold py-2 px-4 border  rounded">
                                        Cancel
                                    </button><button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                        Update
                                    </button>
                                </div>
                            )}

                        </form>)
                        :
                        <div className="flex pl-5 gap-4 items-center">


                            <div className="flex flex-col">
                                <h1 className="text-xl font-bold">{student.name}</h1>
                                <div className="flex flex-col mt-2">

                                    <div className="flex items-center">
                                        <span className="font-bold text-gray-500">Phone:</span>
                                        <span className="ml-2">{student.phone}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-bold text-gray-500">Address:</span>
                                        <span className="ml-2">
                                            {student.location}
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-bold text-gray-500">Standard:</span>
                                        <span className="ml-2">{student.std}</span>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>

            </div>

            <div className="bg-white p-4 shadow-md m-4">
                <div className="datatableTitle">
                    <Link to={`/admin/students/transaction/${id}`} className="link">
                        Add New
                    </Link>
                </div>
                <h1 className="text-xl font-bold mb-4">Last Transactions</h1>

                <List transactions={transactions?.slice().reverse()} id={id} />
            </div>
        </div>

    );
};

export default Single;
