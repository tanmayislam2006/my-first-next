// src/app/ServicesPage.jsx
import React from 'react';
import getFetchData from '../Lib/getFetch';
import Image from 'next/image'; // Assuming you are using Next.js for Image optimization
import Link from 'next/link';

const ServicesPage = async () => {
    // Fetch all services data from the API
    const services = await getFetchData('https://skillora-server.vercel.app/allServices');

    return (
        <div className="container mx-auto p-6">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-center my-8">Our Services</h1>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Check if services is an array before mapping */}
                {services && Array.isArray(services) && services.map((service) => (
                    // Service Card
                    <div
                        key={service._id} // Using _id as the unique key
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                        {/* Service Image */}
                        <div className="relative h-48 w-full">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="rounded-t-lg object-cover w-full h-full"
                            />  
                        </div>

                        {/* Card Body */}
                        <div className="p-4">
                            {/* Service Name */}
                            <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                                {service.name}
                            </h2>

                            {/* Service Description */}
                            <p className="text-gray-600 text-sm h-12 overflow-hidden mb-3">
                                {service.description}
                            </p>

                            {/* Price */}
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-lg font-bold text-blue-600">
                                    ${service.price}
                                </span>
                                <span className="text-sm text-gray-500">
                                    {service.area}
                                </span>
                            </div>

                            {/* Provider Information */}
                            <div className="flex items-center mt-4">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                                    <img
                                        src={service.provider.image}
                                        alt={service.provider.name}
                                        className="rounded-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">
                                        {service.provider.name}
                                    </p>
                                </div>
                            </div>
                                {/* added link for service details */}
                                <Link href={`/services/${service._id}`}>
                                    <span className="block text-center text-blue-500 hover:underline">
                                        View Details
                                    </span>
                                </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;