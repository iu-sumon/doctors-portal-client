import { format } from 'date-fns';
import React from 'react';
const BookingModal = ({ treatment, date, setTreatment }) => {

    const { _id, name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)
    }





    return (
        <div>


            <input type="checkbox" id="booking-modal" class="modal-toggle" />

            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-center text-secondary">{name}</h3>


                    <form onSubmit={handleBooking} className='grid grid-cols-1 justify-items-center my-3'>

                        <input type="text" disabled value={format(date, 'PP')} placeholder="Type here" class="input input-bordered w-full max-w-xs mb-2 shadow" />
                        <select name='slot' class="select select-bordered w-full max-w-xs mb-2">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>

                        <input type="text" name='name' placeholder="Full Name" class="input input-bordered w-full max-w-xs mb-2 shadow" />
                        <input type="number" name='number' placeholder="Phone Number" class="input input-bordered w-full max-w-xs mb-2 shadow" />
                        <input type="text" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs mb-2 shadow" />
                        <input type="submit" placeholder="Type here" class="btn btn-secondary w-full max-w-xs mt-5 shadow" />

                    </form>


                </div>
            </div>
        </div >
    );
};

export default BookingModal;