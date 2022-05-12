import React from 'react';
import Service from './Service';
import service1 from '../../assets/images/fluoride.png'
import service2 from '../../assets/images/cavity.png'
import service3 from '../../assets/images/whitening.png'
const Services = () => {
    const services=[
        {
            _id:1,
            name:'Fluoride Treatment',
            img:service1,
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum reprehenderit praesentium neque minima officia saepe aut culpa aperiam suscipit et.'
        },
        {
            _id:2,
            name:'Cavity Filling',
            img:service2,
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum reprehenderit praesentium neque minima officia saepe aut culpa aperiam suscipit et.'
        },
        {
            _id:3,
            name:'Teeth Whitening',
            img:service3,
            description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum reprehenderit praesentium neque minima officia saepe aut culpa aperiam suscipit et.'
        }
    ]
    return (
        <div className='my-5 md:px-12 px-3 py-5'>
            <h1 className='text-primary text-bold text-center'>OUR SERVICES</h1>
            <p className='text-center text-xl'>Services We Provide</p>
            <div>
                <div className='grid md:grid-cols-3 gap-4'>
                     {
                         services.map(service=><Service 
                         service={service}
                         key={service._id}
                         ></Service>)
                     }
                </div>
            </div>
        </div>
    );
};

export default Services;