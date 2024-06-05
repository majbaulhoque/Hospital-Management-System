import pic1 from '../../assets/PIcture & Number.png';

const AboutOne = () => {
    return (
        <div className='flex flex-col md:flex-row items-center p-4 md:p-8 lg:p-12 lg:mt-24'>
            <div className='w-full md:w-1/2 lg:w-2/3 mb-4 md:mb-0'>
                <img src={pic1} alt="" className='w-full' />
            </div>
            <div className='w-full md:w-1/2 lg:w-2/3 md:pl-8'>
                <p className='text-sm md:text-base lg:text-lg'>Real Results</p>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold mt-2 md:mt-4'>Improves <br />Customer Experience</h3>
                <p className='text-sm md:text-base lg:text-lg mt-2 md:mt-4'>Responsive web design supply chain crowdfunding <br />agile development analytics technology ownership <br /> startup. Network effects social proof user experience <br />prototype buzz product management deployment <br /> metrics sales infographic equity holy grail <br />crowdfunding release.</p>
                <button className='bg-blue-600 text-white rounded-full px-4 py-2 mt-4 md:mt-6'>Learn More</button>
            </div>
        </div>
    );
};

export default AboutOne;
