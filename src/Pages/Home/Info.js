import React from 'react';
import info1 from '../../assets/icons/clock.svg'
import info2 from '../../assets/icons/marker.svg'
import info3 from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 text-white my-5 md:px-10 px-3'>
                <div style={{ backgroundColor: "#0FCFEC" }} className="md:flex justify-center items-center gap-2 p-10 rounded-2xl ">
                    <div >
                        <img src={info1} alt="" />

                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'>Opening Hours</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, sint.</p>
                    </div>

                </div>
                <div style={{ backgroundColor: "#3A4256" }} className="md:flex justify-center items-center gap-2  p-10 rounded-2xl">
                    <div>
                        <img src={info2} alt="" />
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'>Visit our location</h4>
                        <p>Brooklyn,NY 10036,United States</p>
                    </div>

                </div>
                <div style={{ backgroundColor: "#19D3AE" }} className="md:flex justify-center items-center gap-2  p-10 rounded-2xl">
                    <div>
                        <img src={info3} alt="" />
                    </div>

                    <div>
                        <h4 className='text-xl font-semibold'>Contact us now</h4>
                        <p>+000 123 456 789</p>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Info;