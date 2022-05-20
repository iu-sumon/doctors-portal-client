import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <div className='w-full h-full bg-no-repeat bg-cover ' style={{ background: `url(${appointment})` }}>
            <div>
                <div className="flex justify-center items-center text-white ">

                    <div className='flex-1 hidden lg:block'>
                        <img src={doctor} className="md:max-w-md mx-auto mt-[-100px]" alt='' />
                    </div>

                    <div className='flex-1 p-5 mt-10'>
                        <p className='text-primary'>Appointment</p>
                        <h1 className="md:text-5xl text-2xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;