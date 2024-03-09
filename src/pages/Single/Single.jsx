
import { useParams } from "react-router-dom";
import Chart from "../../Components/Pages/Chart/Chart";
import { useEffect } from "react";
import { getStudentProfile } from "../../api/authApi";
// import List from "../../components/table/Table";

const Single = () => {
    const { id } = useParams()

    console.log(id);


    useEffect(() => {

        getStudentProfile(id).then((data) => {
            console.log(data, "Student Profile");
        })
    }, [])
    return (



        <div className="flex-grow bg-gray-100 p-4">


            <div className="flex gap-4 p-4">
                <div className="flex-1 bg-white p-4 shadow-md relative">
                    <div className="absolute top-0 right-0 p-2">
                        <button className="text-blue-500 bg-blue-100 px-2 py-1 text-sm rounded-tr-md cursor-pointer">
                            Edit
                        </button>
                    </div>

                    <div className="flex gap-4 items-center">
                        <img
                            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt=""
                            className="w-20 h-20 rounded-full"
                        />

                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold">Jane Doe</h1>
                            <div className="flex flex-col mt-2">
                                <div className="flex items-center">
                                    <span className="font-bold text-gray-500">Email:</span>
                                    <span className="ml-2">janedoe@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-bold text-gray-500">Phone:</span>
                                    <span className="ml-2">+1 2345 67 89</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-bold text-gray-500">Address:</span>
                                    <span className="ml-2">
                                        Elton St. 234 Garden Yd. NewYork
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <span className="font-bold text-gray-500">Country:</span>
                                    <span className="ml-2">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-2">
                    <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
                </div>
            </div>

            <div className="bg-white p-4 shadow-md m-4">
                <h1 className="text-xl font-bold mb-4">Last Transactions</h1>
                {/* <List /> */}
            </div>
        </div>

    );
};

export default Single;
