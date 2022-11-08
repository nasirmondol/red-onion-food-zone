import React from 'react';
import logo from '../../../images/HeaderLogo/logo.png';

const Footer = () => {
    return (
        <div className='bg-dark mt-4'>
            <div className='d-flex'>
                <div className='w-50 m-5 d-flex justify-content-start'>
                    <img className='' height={80} width={200} src={logo} alt="" />
                </div>
                <div className='m-4 text-start w-25 text-light'>
                    <p className='mb-1 p-0'><small >About online food</small></p>
                    <p className='mb-1 p-0'><small >Read our blog</small></p>
                    <p className='mb-1 p-0'><small>Sign up to deliver</small></p>
                    <p className='mb-1 p-0'><small className='m-0'>Add your restaurant</small></p>
                </div>
                <div className='m-4 text-start w-25 text-light'>
                    <p className='mb-1 p-0'><small>Git Helps</small></p>
                    <p className='mb-1 p-0'><small>See all FAQs</small></p>
                    <p className='mb-1 p-0'><small>View all cities</small></p>
                    <p className='mb-1 p-0'><small>Restaurant near me</small></p>
                </div>

            </div>
            <div className='d-flex'>
                <div className='text-light w-50 d-flex justify-content-start ms-5'>
                    <p><small><small>Copyright &copy; {new Date().getFullYear()}</small></small></p>
                </div>

                <div className='d-flex'>
                    <div>
                        <p className='mb-1 p-0 text-light ms-5'><small><small>Privacy policy</small></small></p>
                    </div>
                    <div>
                        <p className='mb-1 p-0 text-light ms-5'><small><small>Terms & condition</small></small></p>
                    </div>
                    <div>
                        <p className='mb-1 p-0 text-light ms-5'><small><small>Pricing</small></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;