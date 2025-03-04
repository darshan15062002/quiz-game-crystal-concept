import React from 'react';

const FeaturesSection = ({ featureData }) => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-[#212b60] border-b-4 inline-block pb-2 border-[#EB676A]">
                    Our Key Features
                </h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Explore the core features designed to enhance your experience and empower your journey.
                </p>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 sm:px-28">
                {featureData?.map((data, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105">
                        <img src={data.ideabg} alt={data.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-[#212b60] mb-4">{data.title}</h3>
                            <p className="text-gray-600 text-sm mb-6">{data.description}</p>
                            <a href={data.linkto} className="inline-block px-6 py-2 bg-[#EB676A] text-white font-medium rounded-full hover:bg-[#212b60] transition-colors">
                                {data.buttonText || 'Learn More'}
                            </a>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default FeaturesSection;
