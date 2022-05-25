import React from 'react';

const Treatment = ({ service, setTreatment }) => {
    const { name, slots,price } = service;
    return (
        <div>
            <div className="card shadow border-2">

                <div className="card-body">

                    <h2 className="text-center text-xl font-semibold text-secondary">{name}</h2>

                    <p className='text-center uppercase text-sm'>
                        {
                            slots.length > 0
                                ?
                                <span>{slots[0]}</span>
                                :
                                <span className='text-red-500'>Try another day</span>
                        }
                    </p>

                    <p className='text-center uppercase text-sm'>

                        {slots.length}  {slots.length > 1 ? 'spaces' : 'space'}

                        available</p>
                    <p className='text-center font-bold text-sm'>Price: {price}</p>

                    <div className="card-actions justify-center mt-5">

                        <label 
                            htmlFor="booking-modal"
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            className="btn btn-secondary text-white uppercase"

                        >

                            Book Appointment</label>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;