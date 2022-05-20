import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const BookingModal = ({ treatment, date, setTreatment,refetch }) => {

    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleBooking = (event) => {

        event.preventDefault()
        const slot = event.target.slot.value;
        const booking =
        {
            treatmentId: _id,
            treatmentName: name,
            date: formattedDate,
            slot,
            patientEmail: user.email,
            patientName: user.displayName,
            phoneNumber: event.target.number.value


        }

        

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then((response) => response.json())
            .then((data) => {

                //skip duplicate treatment for one user code start

                if (data.success) {
                    toast(`Appointment is set, ${formattedDate} at ${slot}`)
                }

                else {
                    toast.error(`Already have an appointment on, ${data.booking?.date} at ${data.booking.slot}`)
                }
                
                //skip duplicate treatment for one user code end
                refetch()
                setTreatment(null) //to close the modal
            });


    }

    return (
        <section>


            <input type="checkbox" id="booking-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">


                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-secondary">{name}</h3>

                    {/*............................ Modal form start...............................*/}

                    <form onSubmit={handleBooking} className='grid grid-cols-1 justify-items-center my-3'>

                        <input type="text" disabled value={format(date, 'PP')} placeholder="Type here" className="input input-bordered w-full max-w-xs mb-2 shadow" />

                        <select name='slot' className="select select-bordered w-full max-w-xs mb-2">

                            {
                                slots.map((slot, index) => <option

                                    key={index}

                                    value={slot}

                                >{slot}</option>)
                            }

                        </select>

                        <input type="name" disabled value={user?.displayName} name='name' className="input input-bordered w-full max-w-xs mb-2 shadow" />


                        <input type="text" disabled value={user?.email} name='email' className="input input-bordered w-full max-w-xs mb-2 shadow" />

                        <input type="number" placeholder="Phone Number" name='number' className="input input-bordered w-full max-w-xs mb-2 shadow" />

                        <input type="submit" className="btn btn-secondary w-full max-w-xs mt-5 shadow" />

                    </form>

                    {/*............................ Modal form End...............................*/}

                </div>


            </div>


        </section>
    );
};

export default BookingModal;