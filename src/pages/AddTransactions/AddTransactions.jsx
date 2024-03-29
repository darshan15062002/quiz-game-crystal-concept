import { useState } from "react";
import "./AddTransactions.scss";
import { addStudentinfo } from "../../api/studentApi";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AddTransactions = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        date: "",
        amount: "",
        paymentMethod: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData, "FS");
        setLoading(true)
        await addStudentinfo(id, formData).then((data) => {
            console.log(data);

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: data?.message,
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false)
            navigate(`/admin/students/single/${id}`)
        }).catch((err) => {
            setLoading(false)
        })

    };

    return (
        <div className="container mx-auto py-16">
            <div className="max-w-lg mx-5 sm:mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Transaction Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="date" className="block mb-2">Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />


                    </div>
                    <div className="mb-4">
                        <label htmlFor="amount" className="block mb-2">Amount:</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            min="0"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="paymentMethod" className="block mb-2">Payment Method:</label>
                        <select
                            id="paymentMethod"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        >
                            <option value="">Select Payment Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                            <option value="UPI">UPI</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-2 px-4 rounded-md focus:outline-none"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTransactions;
