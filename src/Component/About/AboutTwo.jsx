import pic2 from '../../assets/background (1).png';
import logo1 from '../../assets/logo (1).png';
import logo2 from '../../assets/logo (2).png';
import logo3 from '../../assets/logo (3).png';
import logo4 from '../../assets/logo (4).png';
import logo5 from '../../assets/Group 16.png';
import logo6 from '../../assets/logo_1.png';

const AboutTwo = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:mb-24'>
            <div className="flex flex-wrap md:flex-nowrap">
                <div className='w-full md:w-1/2 lg:w-2/3 md:pl-8'>
                    <p className='text-sm md:text-base lg:text-lg'>Clients</p>
                    <h3 className='text-xl md:text-2xl lg:text-3xl font-bold mt-2 md:mt-4'>Trusted by major <br /> companies</h3>
                    <p className='text-sm md:text-base lg:text-lg mt-2 md:mt-4'>
                        Responsive web design supply chain crowdfunding <br /> 
                        agile development analytics technology ownership <br /> 
                        startup. Network effects social proof user experience <br /> 
                        prototype buzz product management deployment <br /> 
                        metrics sales infographic equity holy grail <br /> 
                        crowdfunding release.
                    </p>
                    <button className='bg-blue-600 text-white rounded-full px-4 py-2 mt-4 md:mt-6'>Learn More</button>
                </div>
                <div className="relative w-full md:w-1/2 lg:w-1/3 mt-6 md:mt-0">
                    <img className='w-full' src={pic2} alt="Background" />
                    <div className='absolute inset-0 flex flex-col items-center justify-center space-y-5 md:space-y-7'>
                        <div className="flex gap-5 mt-6 md:mt-0">
                            <div>
                                <img src={logo6} alt="Logo 6" />
                            </div>
                            <div className='bg-white p-2'>
                                <img src={logo1} alt="Logo 1" />
                            </div>
                        </div>
                        <div className="flex gap-5 my-7 ml-8 md:ml-16">
                            <div className='bg-white p-2'>
                                <img src={logo2} alt="Logo 2" />
                            </div>
                            <div className='bg-white p-2'>
                                <img src={logo5} alt="Logo 5" />
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className='bg-white p-2'>
                                <img src={logo3} alt="Logo 3" />
                            </div>
                            <div className='bg-white p-2'>
                                <img src={logo4} alt="Logo 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTwo;
