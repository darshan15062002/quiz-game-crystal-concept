import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [filters, setFilters] = useState({
        subject: "",
        standard: "",
        chapter: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBlogs();
    }, [filters]);

    const fetchBlogs = async () => {
        setLoading(true);
        setError(null);

        const queryParams = new URLSearchParams(
            Object.entries(filters).filter(([_, value]) => value) // Skip empty filters
        ).toString();

        const config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `https://crystal-concept-backend.onrender.com/api/v1/blogs?${queryParams}`,
            headers: {},
        };

        try {
            const response = await axios.request(config);
            setBlogs(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Educational Blogs</h2>

            {/* Filter Section */}
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-700 mb-4">Filters</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {["subject", "standard", "chapter"].map((filter) => (
                        <input
                            key={filter}
                            type="text"
                            name={filter}
                            placeholder={`Filter by ${filter}`}
                            value={filters[filter]}
                            onChange={handleFilterChange}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3"
                        />
                    ))}
                </div>
            </div>

            {/* Content Section */}
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                </div>
            ) : error ? (
                <div className="text-center py-12">
                    <p className="text-red-500 font-medium">{error}</p>
                </div>
            ) : blogs.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500">No blogs found matching your criteria.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <Link
                            key={blog._id}
                            to={`/BlogDetail/${blog._id}`}
                            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1">{blog.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                                        {blog.subject}
                                    </span>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                        {blog.standard}
                                    </span>
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                                        {blog.chapter}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogList;
