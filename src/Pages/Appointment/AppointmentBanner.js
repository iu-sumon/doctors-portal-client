
import bPhoto from '../../assets/images/chair.png'
import backImage from '../../assets/images/bg.png'
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className='w-full h-full bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${backImage})` }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse ">

                    <img src={bPhoto} className="md:max-w-md rounded-lg shadow-2xl" alt='' />

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