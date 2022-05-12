import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Treatment from './Treatment';

const AvailableAppointments = ({date}) => {

    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null);


    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)

            })

    })



    return (

        <div>
            <div>

                <div className='md:w-72 mx-auto'>
                    <p className='shadow px-5 py-3 text-center rounded-md font-bold text-secondary'>You picked: {format(date, 'PP')}</p>
                </div>


                <div className='grid md:grid-cols-3 gap-4 mt-[30px] md:px-12'>

                    {
                        services.map(service => <Treatment
                            service={service}
                            key={service._id}
                            setTreatment={setTreatment}
                        ></Treatment>)
                    }

                </div>

                {
                    treatment && <BookingModal

                        treatment={treatment}
                        setTreatment={setTreatment}
                        date={date}

                    ></BookingModal>
                }



            </div>
        </div>
    );
};

export default AvailableAppointments;