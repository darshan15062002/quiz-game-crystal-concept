import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Edit } from "lucide-react";

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBlogDetail();
    }, []);

    const fetchBlogDetail = async () => {
        setLoading(true);
        setError(null);

        const config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `https://crystal-concept-backend.onrender.com/api/v1/blog/${id}`,
            headers: {},
        };

        try {
            const response = await axios.request(config);
            setBlog(response.data);
        } catch (err) {
            setError(err.message || "Something went wrong while fetching the blog details.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mt-10 mx-auto p-4 sm:p-6 lg:p-8 py-12">
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-600"></div>
                </div>
            ) : error ? (
                <div className="text-center py-12">
                    <p className="text-red-500 font-medium">{error}</p>
                    <Link to="/" className="text-indigo-600 hover:underline">
                        Go back to blogs
                    </Link>
                </div>
            ) : (
                <article className="bg-white shadow-lg  rounded-lg overflow-hidden relative">
                    <header className="bg-indigo-700 text-white p-8">
                        <Link to={`/admin/createblog/${id}`} className="absolute top-6 right-6">
                            <Edit size={24} className="text-white " />
                        </Link>

                        <h1 className="text-4xl font-bold">{blog.title}</h1>
                        <p className="text-sm mt-2">{new Date(blog.createdAt).toLocaleDateString()}</p>
                    </header>

                    <div className="p-8 space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Description</h2>
                            <p className="text-gray-600 leading-relaxed">{blog.description}</p>
                        </section>

                        <section className="border-t border-gray-200 pt-4">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Details</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                                    Subject: {blog.subject}
                                </span>
                                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm">
                                    Standard: {blog.standard}
                                </span>
                                <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                                    Chapter: {blog.chapter}
                                </span>
                            </div>
                        </section>

                        {blog.notes.textualContent && (
                            <section className="border-t border-gray-200 pt-4">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Textual Notes</h2>
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                    {blog.notes.textualContent}
                                </p>
                            </section>
                        )}

                        {blog.youtubeVideoLink && blog.youtubeVideoLink.length > 0 && (
                            <section className="border-t border-gray-200 pt-4">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">YouTube Videos</h2>
                                <div className="space-y-4">
                                    {blog.youtubeVideoLink.map((link, index) => {
                                        const videoId = link.split("v=")[1]?.split("&")[0];
                                        return (
                                            <iframe
                                                key={index}
                                                width="100%"
                                                height="315"
                                                src={`https://www.youtube.com/embed/${videoId}`}
                                                title={`YouTube video ${index + 1}`}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        );
                                    })}
                                </div>
                            </section>
                        )}

                        {blog.notes?.images?.length > 0 && (
                            <section className="border-t border-gray-200 pt-4">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Images</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {blog.notes.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Blog image ${index + 1}`}
                                            className="w-full h-auto rounded-lg shadow-md"
                                        />
                                    ))}
                                </div>
                            </section>
                        )}

                        {blog.notes?.pdfs?.length > 0 && (
                            <section className="border-t border-gray-200 pt-4">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">PDF Files</h2>
                                <div className="space-y-4">
                                    {blog.notes.pdfs.map((pdf, index) => (
                                        <iframe
                                            key={index}
                                            src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${pdf}`}
                                            width="100%"
                                            height="500"
                                            frameBorder="0"
                                            title={`PDF ${index + 1}`}
                                        ></iframe>
                                    ))}
                                </div>
                            </section>
                        )}


                    </div>

                    <footer className="bg-gray-50 p-6 text-center">
                        <Link to="/" className="text-indigo-600 hover:underline font-medium">
                            Back to Blogs
                        </Link>
                    </footer>
                </article>
            )}
        </div>
    );
};

export default BlogDetail;