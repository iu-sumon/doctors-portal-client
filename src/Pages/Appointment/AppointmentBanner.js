 
import bPhoto from '../../assets/images/chair.png'
import backImage from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
 const AppointmentBanner = ({date,setDate}) => {
   
    return (
        <div className='w-full h-full bg-no-repeat bg-cover ' style={{backgroundImage: `url(${backImage})`}}>
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse ">

                <img src={bPhoto} class="md:max-w-md rounded-lg shadow-2xl" alt='' />

                <div className='md:mr-20'>
                    
                   <DayPicker
                     mode="single"
                     date={date}
                     onSelect={setDate}
                   ></DayPicker>
                  
                </div>
            </div>
        </div>
    </div>
    );
};

export default AppointmentBanner;