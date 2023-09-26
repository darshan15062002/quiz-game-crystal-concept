import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi"

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-[#2D80F6] text-white rounded font-bold">
            <div className='flex flex-col gap-5'>
                <div className="flex flex-col lg:flex-row gap-5">
                    <Link to='/competition' className="link link-hover">Blog</Link>
                    <Link to='/profile' className="link link-hover">About us</Link>
                    <Link to='/collaboration' className="link link-hover">Contact</Link>
                    <Link to='/problems' className="link link-hover">Privacy Policy</Link>
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <Link to='/discussion' className="link link-hover">Community</Link>
                    <Link to='/ide' className="link link-hover">Faq</Link>
                    <Link className="link link-hover">Terms</Link>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div>
                    <p className='mb-5 text-2xl uppercase'>Contact with us</p>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='hover:text-[#09BD81] '>
                            <FaFacebook></FaFacebook>
                        </a>
                        <a href="tel:555-666-7777" target="_blank" rel="noopener noreferrer" className='hover:text-[#09BD81]'>
                            <FaWhatsapp></FaWhatsapp>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='hover:text-[#09BD81] '>
                            <FaTwitter></FaTwitter>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className='hover:text-[#09BD81] '>
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='hover:text-[#09BD81] '>
                            <FaInstagram></FaInstagram>
                        </a>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal border-l-4"></div>
                <div className='flex items-center justify-center'>
                    <HiOutlineMail></HiOutlineMail>
                    <a href="mailto:kunal.q.sharma@quencil.in"><p className='pl-2'>kunal.q.sharma@quencil.in</p></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;