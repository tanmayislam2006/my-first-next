import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <h1 className='text-2xl'>My Website</h1>
            <ul className='flex justify-center gap-3'>
                <Link href="/">
                    <li className='mx-4'>Home</li>
                </Link>
                <Link href="/about">
                    <li className='mx-4'>About</li>
                </Link>
                <Link href="/contact">
                    <li className='mx-4'>Contact</li>
                </Link>
                <Link href="/all-doctors">
                    <li className='mx-4'>All Doctors</li>
                </Link>
            </ul>
        </div>
    );
};

export default Navbar;