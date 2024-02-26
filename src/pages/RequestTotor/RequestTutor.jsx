import React, { useState } from 'react'
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';



function RequestTutor() {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({

        grade: '',
        tuitionPlace: [],
        contactNumber: '',

    });

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;




        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(item => item !== value)) : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);


        if (!formData.grade || !formData.contactNumber || formData.tuitionPlace.length === 0) {
            // Display an error message or perform any necessary action
            console.error('Please fill in all required fields');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('https://formspree.io/f/mbjndqrz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Handle successful form submission
            openModal();
        } catch (error) {
            console.error('Error submitting form:', error.message);
            // Handle form submission error, e.g., show an error message
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="flex px-4 flex-col items-center justify-center pt-20 bg-eb676a">
            <h2 className="text-5xl font-bold mb-4 text-center text-[#eb676a]">Request a Tutor</h2>
            <p className="mb-8 text-black text-center">
                Submit your learning requirements and find tutors in your locality
            </p>

            <div className="bg-white p-8 rounded-lg mb-10 md:w-1/2 w-full" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>

                <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-bold mb-4">What do you want to learn?</h3>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="grade">
                            Tutor Required For
                        </label>
                        <input
                            type="text"
                            id="grade"
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-eb676a"
                            placeholder="e.g., 12th, 10th, CET, JEE, NEET"
                        />
                        <p className="text-sm text-gray-500">Specify the grade or exam for tutoring.</p>
                    </div>

                    <div className="mb-4 text-gray-500  ">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Tuition Place
                        </label>
                        <div className="flex mb-2 justify-around items-center">
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id="atTutorsPlace"
                                    name="tuitionPlace"
                                    value="atTutorsPlace"
                                    className="mr-2 accent-[#eb676a]"
                                    checked={formData.tuitionPlace.includes('atTutorsPlace')}
                                    onChange={handleChange}
                                />
                                <label htmlFor="atTutorsPlace" className="text-sm">
                                    At tutor's place
                                </label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id="atMyPlace"
                                    name="tuitionPlace"
                                    value="atMyPlace"
                                    className="mr-2 accent-[#eb676a]"
                                    checked={formData.tuitionPlace.includes('atMyPlace')}
                                    onChange={handleChange}
                                />
                                <label htmlFor="atMyPlace" className="text-sm">
                                    At my place
                                </label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id="online"
                                    name="tuitionPlace"
                                    value="online"
                                    className="mr-2 accent-[#eb676a]"
                                    checked={formData.tuitionPlace.includes('online')}
                                    onChange={handleChange}
                                />
                                <label htmlFor="online" className="text-sm">
                                    Online
                                </label>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Select one or more tuition places.</p>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            id="contactNumber"
                            name="contactNumber"
                            pattern="[0-9]{10}"
                            required
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-eb676a"
                            placeholder="Contact Number"
                        />
                        <p className="text-sm text-gray-500">Enter your contact number for communication.</p>
                    </div>

                    <div className="mb-4">
                        <button
                            type="submit"
                            className={`bg-[#eb676a] text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <div className="loader"></div>
                                    <span className="ml-2">Submitting...</span>
                                </div>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </div>

                </form>

                {showModal && <SuccessModal closeModal={closeModal} />}

                <p className="mt-4 text-slate-500 text-center">
                    If you are an existing student <a href="/login" className='underline'>Login Here</a>
                </p>
            </div>
        </div>
    )
}

export default RequestTutor;


const SuccessModal = ({ closeModal }) => (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className=" relative bg-white p-8 rounded-lg">
            <Link to="/" className="cross">
                <ImCross className=" absolute right-6 top-4 text-[#eb676a]"></ImCross>
            </Link>
            <h3 className="text-xl font-bold mb-4">Success!</h3>
            <p>Your request has been submitted successfully.</p>
            <button onClick={closeModal} className="mt-4 bg-eb676a text-white px-4 py-2 rounded">Close</button>
        </div>
    </div>
);

