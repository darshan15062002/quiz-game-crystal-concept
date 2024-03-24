import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';

function JoinAsTutor() {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        subjects: [],
        contactNumber: '',
    });

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const toggleSubject = (subject) => {
        if (formData.subjects.includes(subject)) {
            setFormData(prevData => ({
                ...prevData,
                subjects: prevData.subjects.filter(item => item !== subject)
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                subjects: [...prevData.subjects, subject]
            }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!formData.name || formData.subjects.length === 0 || !formData.contactNumber) {
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

            openModal();
        } catch (error) {
            console.error('Error submitting form:', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex px-4 flex-col items-center justify-center pt-20 bg-eb676a">
            <h2 className="text-5xl font-bold mb-4 text-center text-[#eb676a]">Join as a Tutor</h2>
            <p className="mb-8 text-black text-center">
                Share your details and start tutoring!
            </p>

            <div className="bg-white p-8 rounded-lg mb-10 md:w-1/2 w-full" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>

                <form onSubmit={handleSubmit}>
                    <h3 className="text-xl font-bold mb-4">Tell us about yourself</h3>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-eb676a"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Subjects you can teach
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {['Hindi', 'English', 'Marathi', 'Maths', 'Science', 'Geography', 'History', "All"].map(subject => (
                                <button
                                    key={subject}
                                    type="button"
                                    className={`px-4 py-1 rounded border border-gray-300 focus:outline-none ${formData.subjects.includes(subject) ? 'border-orange-500' : 'bg-white'}`}
                                    onClick={() => toggleSubject(subject)}
                                >
                                    {subject}
                                </button>
                            ))}
                        </div>
                        <p className="text-sm text-gray-500">Select one or more subjects.</p>
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


            </div>
        </div>
    );
}

export default JoinAsTutor;

const SuccessModal = ({ closeModal }) => (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className=" relative bg-white p-8 rounded-lg">
            <Link to="/" className="cross">
                <ImCross className=" absolute right-6 top-4 text-[#eb676a]"></ImCross>
            </Link>
            <h3 className="text-xl text-green-400 font-bold mb-4">Success!</h3>
            <p>Your details have been submitted successfully.</p>
            <button onClick={closeModal} className="mt-4 bg-eb676a text-white px-4 py-2 rounded">Close</button>
        </div>
    </div>
);


