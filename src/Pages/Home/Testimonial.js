import React from 'react';
import quote from '../../assets/icons/quote.svg'

import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews=[
        {
            _id:1,
            name:'Winson Herry',
            location:"Florida",
            img:people1,
            comment:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
            
        },
        {
            _id:2,
            name:'Winfer Herry',
            location:"California",
            img:people2,
            comment:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
            
        },
        {
            _id:3,
            name:'Jenifer Herry',
            location:"Washington ",
            img:people3,
            comment:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
            
        }
    ]
    return (
        <div className=' md:px-12'>
            <div className='flex justify-between items-center'>
                <div>
                   <p className='text-primary'>Testimonial</p>
                    <p className='text-xl'>What Our Patients Says</p>
                </div>
                <div>
                    <img className='w-48' src={quote} alt="" />
                </div>
            </div>
            <div>
                <div  className='grid md:grid-cols-3 gap-4 px-3'>
                    {
                        reviews.map(review=><Review review={review} key={review._id}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;