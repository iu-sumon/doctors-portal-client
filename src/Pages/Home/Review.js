import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-2xl">
                <div className="card-body">

                    <p>{review.comment}</p>
                </div>
                <div className='flex items-center gap-3 p-8'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <p>{review.name}</p>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;