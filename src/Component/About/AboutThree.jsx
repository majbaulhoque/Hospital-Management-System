import { FaCheckCircle } from 'react-icons/fa';
import img from '../../assets/Images.png';

const AboutThree = () => {
    return (
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-wrap md:flex-nowrap items-center gap-7'>
                <div className='w-full md:w-1/2 lg:w-3/4'>
                    <img src={img} alt="Feature Image" className='w-full h-auto' />
                </div>
                <div className='w-full md:w-1/2 lg:w-2/3 mt-6 md:mt-0 md:pl-8'>
                    <p className='text-sm md:text-base lg:text-lg'>Great Features</p>
                    <h3 className='text-xl md:text-2xl lg:text-3xl font-bold mt-2 md:mt-4'>Lots of features to <br /> improve your workflow</h3>
                    <p className='text-sm md:text-base lg:text-lg mt-2 md:mt-4'>Responsive web design supply chain crowdfunding <br /> agile development analytics technology.</p>
                    <div className='mt-4 md:mt-6'>
                        <div className='flex items-center mb-2'>
                            <FaCheckCircle className='text-blue-600 mr-2' />
                            <p className='text-sm md:text-base lg:text-lg'>Twitter stealth churn rate early adopters</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <FaCheckCircle className='text-blue-600 mr-2' />
                            <p className='text-sm md:text-base lg:text-lg'>Responsive web design assets</p>
                        </div>
                        <div className='flex items-center mb-2'>
                            <FaCheckCircle className='text-blue-600 mr-2' />
                            <p className='text-sm md:text-base lg:text-lg'>First mover advantage assets accelerator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutThree;
