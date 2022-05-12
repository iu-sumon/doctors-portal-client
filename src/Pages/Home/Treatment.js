import React from 'react';
import treatment from '../../assets/images/treatment.png'
const Treatment = () => {
    return (
        <div>
            <div class="hero min-h-screen mb-[80px]">
                <div class="hero-content flex-col md:flex-row lg:flex-column-reverse">
                    <div className='flex-1 '>
                        <img src={treatment} class="md:max-w-md mx-auto rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='flex-1'>
                        <h1 class="md:text-5xl text-2xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;