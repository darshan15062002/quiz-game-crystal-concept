import React, { useState } from 'react';

import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { addStudentinfo } from '../../api/studentApi';

const Marks = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        subject: "",
        date: "",
        marks: "",
        outOf: "",
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

        setLoading(true);
        await addStudentinfo(id, formData).then((data) => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: data?.message,
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false);
            navigate(`/admin/students/single/${id}`);
        }).catch((err) => {
            setLoading(false);
            // Handle error
        });
    };

    return (
        <div className="container mx-auto py-16">
            <div className="max-w-lg mx-5 sm:mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Exam Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block mb-2">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
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
                        <label htmlFor="marks" className="block mb-2">Marks:</label>
                        <input
                            type="number"
                            id="marks"
                            name="marks"
                            value={formData.marks}
                            onChange={handleChange}
                            min="0"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="outOf" className="block mb-2">Out of:</label>
                        <input
                            type="number"
                            id="outOf"
                            name="outOf"
                            value={formData.outOf}
                            onChange={handleChange}
                            min="0"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            required
                        />
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

export default Marks;
