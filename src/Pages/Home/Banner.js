import React from 'react';
import bPhoto from '../../assets/images/chair.png'
import backImage from '../../assets/images/bg.png'
const Banner = () => {
    return (
        <div className='w-full h-full bg-no-repeat bg-cover ' style={{backgroundImage: `url(${backImage})`}}>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={bPhoto} class="md:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="md:text-5xl text-2xl font-bold">Your New Smile Starts <br /> Here</h1>
                        <p class="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste exercitationem corrupti itaque incidunt id inventore quibusdam, unde accusantium deleniti placeat sint, dolorem impedit voluptatem aut nam, velit debitis porro!</p>
                        <button class="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;