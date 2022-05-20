import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Treatment from './Treatment';

const AvailableAppointments = ({ date }) => {


    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>

        fetch(` https://stormy-sands-48896.herokuapp.com/available?date=${formattedDate}`)
            .then(res => res.json()
            )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    return (

        <div>
            <div>

                {/* ..............date show on UI start..................... */}

                <div className='md:w-72 mx-auto'>
                    <p className='shadow px-5 py-3 text-center rounded-md font-bold text-secondary'>You picked: {format(date, 'PP')}</p>
                </div>

                {/*..............date show on UI end........................ */}



                {/* ..............Services show on UI code start..................... */}

                <div className='grid md:grid-cols-3 gap-4 mt-[30px] md:px-12'>

                    {
                        services?.map(service => <Treatment

                            service={service}
                            key={service._id}
                            setTreatment={setTreatment}

                        ></Treatment>)
                    }

                </div>
                {/* ..............Services show on UI code end..................... */}




                {/* ..............Conditional rendering in Booking Modal and show on UI..................... */}

                <div>
                    {
                        treatment && <BookingModal

                            treatment={treatment}
                            setTreatment={setTreatment}
                            date={date}
                            refetch={refetch}

                        ></BookingModal>
                    }
                </div>



            </div>
        </div>
    );
};

export default AvailableAppointments;