import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogPostForm = () => {
    const { blogId } = useParams();
    const isEditMode = !!blogId;

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        subject: "",
        standard: "",
        chapter: "",
        textualContent: "",
        youtubeVideoLink: [],
        images: [],
        pdfs: [],
    });



    const [imageInput, setImageInput] = useState("");
    const [pdfInput, setPdfInput] = useState("");
    const [youtubeInput, setYoutubeInput] = useState("");
    const [loading, setLoading] = useState(false); // Loading state

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddLink = (type) => {
        if (type === "images" && imageInput.trim()) {
            setFormData((prev) => ({
                ...prev,
                images: [...prev.images, imageInput.trim()],
            }));
            setImageInput("");
        } else if (type === "pdfs" && pdfInput.trim()) {
            setFormData((prev) => ({
                ...prev,
                pdfs: [...prev.pdfs, pdfInput.trim()],
            }));
            setPdfInput("");
        } else if (type === "youtubeVideoLink" && youtubeInput.trim()) {
            setFormData((prev) => ({
                ...prev,
                youtubeVideoLink: [...prev.youtubeVideoLink, youtubeInput.trim()],
            }));
            setYoutubeInput("");
        }
    };

    const handleRemoveLink = (type, index) => {
        setFormData((prev) => ({
            ...prev,
            [type]: prev[type]?.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = isEditMode
                ? `https://crystal-concept-backend.onrender.com/api/v1/admin/blog-post/${blogId}`
                : "https://crystal-concept-backend.onrender.com/api/v1/admin/blog-post/create";

            const method = isEditMode ? "put" : "post";

            const response = await axios({
                method,
                url,
                data: formData,
                headers: { "Content-Type": "application/json" },
            });

            alert(isEditMode ? "Blog post updated successfully!" : "Blog post created successfully!");
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error submitting blog post:", error);
            alert("An error occurred while creating/updating the blog post.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isEditMode && blogId) {
            const fetchBlogData = async () => {
                try {
                    const response = await axios.get(`https://crystal-concept-backend.onrender.com/api/v1/blog/${blogId}`);
                    const data = response.data;
                    setFormData({
                        title: data?.title || "",
                        description: data?.description || "",
                        subject: data?.subject || "",
                        standard: data?.standard || "",
                        chapter: data?.chapter || "",
                        textualContent: data?.notes?.textualContent || "",
                        youtubeVideoLink: data?.youtubeVideoLink || [],
                        images: data?.notes?.images || [],
                        pdfs: data?.notes?.pdfs || [],
                    });
                } catch (error) {
                    console.error("Error fetching blog data:", error);
                    alert("An error occurred while fetching the blog data.");
                }
            };

            fetchBlogData();
        }
    }, [blogId])

    return (
        <div className="sm:w-full mt-10 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
                {isEditMode ? "Edit Blog Post" : "Create Blog Post"}
            </h2>

            {loading && (
                <div className="flex justify-center mb-4">
                    <div className="loader"></div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {[
                    { label: "Title", name: "title", type: "text", value: formData.title },
                    { label: "Description", name: "description", type: "textarea", value: formData.description },
                    { label: "Subject", name: "subject", type: "text", value: formData.subject },
                    { label: "Standard", name: "standard", type: "text", value: formData.standard },
                    { label: "Chapter", name: "chapter", type: "text", value: formData.chapter },
                    { label: "Textual Notes", name: "textualContent", type: "textarea", value: formData.textualContent },
                ].map(({ label, name, type, value }, idx) => (
                    <div key={idx}>
                        <label className="block text-gray-600 font-medium mb-2">{label}</label>
                        {type === "textarea" ? (
                            <textarea
                                name={name}
                                value={value}
                                onChange={handleInputChange}
                                required
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        ) : (
                            <input
                                type={type}
                                name={name}
                                value={value}
                                onChange={handleInputChange}
                                required
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        )}
                    </div>
                ))}

                {[
                    { label: "Youtube Links", type: "youtubeVideoLink", input: youtubeInput, setInput: setYoutubeInput, data: formData.youtubeVideoLink },
                    { label: "Image Links", type: "images", input: imageInput, setInput: setImageInput, data: formData.images },
                    { label: "PDF Links", type: "pdfs", input: pdfInput, setInput: setPdfInput, data: formData.pdfs },
                ].map(({ label, type, input, setInput, data }, idx) => (
                    <div key={idx}>
                        <label className="block text-gray-600 font-medium mb-2">{label}</label>
                        <div className="flex gap-2">
                            <input
                                type="url"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={`Enter ${label.toLowerCase()}`}
                                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button
                                type="button"
                                onClick={() => handleAddLink(type)}
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                            >
                                Add
                            </button>
                        </div>
                        <ul className="mt-2 space-y-1">
                            {data.map((link, index) => (
                                <li key={index} className="flex justify-between items-center">
                                    <span className="text-gray-800">{link}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveLink(type, index)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 rounded-lg ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
                        } text-white font-semibold`}
                >
                    {loading ? "Please Wait..." : isEditMode ? "Update Blog Post" : "Create Blog Post"}
                </button>
            </form>
        </div>
    );
};

// Simple CSS for loader
const LoaderCSS = () => (
    <style>
        {`
        .loader {
            border: 4px solid #f3f3f3;
            border-radius: 50%;
            border-top: 4px solid #3498db;
            width: 24px;
            height: 24px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        `}
    </style>
);

export default () => (
    <>
        <LoaderCSS />
        <BlogPostForm />
    </>
);
