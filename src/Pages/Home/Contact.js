import React from 'react';
import appointment from '../../assets/images/appointment.png'
const Contact = () => {
    return (
        <div>
            <div className='pt-5 mt-[70px]' style={{ background: `url(${appointment})` }} >
                <div className='my-20'>
                    <p className='text-center text-primary'>Contact Us</p>
                    <p className='text-2xl text-center text-white'>Stay connected with us</p>
                    <div>
                        <div className="card flex-shrink-0 w-full max-w-sm mx-auto ">
                            <div className="card-body">
                                <div className="form-control">

                                    <input type="text" placeholder="Email Address" className="input input-bordered shadow-lg" />
                                </div>
                                <div className="form-control">

                                    <input type="text" placeholder="Subject" className="input input-bordered shadow-lg" />

                                </div>
                                <div className='form-control'>
                                    <textarea className="textarea shadow-lg" placeholder="Your message"></textarea>
                                </div>

                            </div>

                        </div>
                        <div className='text-center pb-5'>
                            <button className="btn btn-primary text-white px-[30px] ">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;