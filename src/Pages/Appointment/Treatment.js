import React from 'react';

const Treatment = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card  shadow ">

                <div class="card-body">

                    <h2 class="text-center text-xl font-semibold text-secondary">{name}</h2>

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

                    <div class="card-actions justify-center mt-5">

                        <label
                            for="booking-modal"
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            class="btn btn-secondary text-white uppercase"

                        >

                            Book Appointment</label>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;