import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import picture from '../../assets/Picture.png'
import picture1 from '../../assets/quote.png'

const AboutFive = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="flex flex-col items-center justify-center bg-blue-600 min-h-screen py-8 relative px-6 mt-10">
            <div className="w-full max-w-xl -mt-44 lg:-mt-64 ">
                <Slider {...settings}>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img className='ml-32 lg:ml-60' src={picture1} alt="" />
                        <p className="text-center">
                            “Lean startup metrics venture innovator assets angel investor learning curve incubator branding advisor termsheet. IPad ecosystem conversion android advisor.”
                        </p>
                        <div className="text-center mt-4">
                            <img
                                src={picture}
                                className=" rounded-full mx-auto"
                            />
                            <p className="font-semibold mt-2">Silvia Natalia</p>
                            <p className="text-gray-500">Owner Tanahcon</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img className='ml-32 lg:ml-60' src={picture1} alt="" />
                        <p className="text-center">
                            “Lean startup metrics venture innovator assets angel investor learning curve incubator branding advisor termsheet. IPad ecosystem conversion android advisor.”
                        </p>
                        <div className="text-center mt-4">
                            <img
                                src={picture}
                                className=" rounded-full mx-auto"
                            />
                            <p className="font-semibold mt-2">Silvia Natalia</p>
                            <p className="text-gray-500">Owner Tanahcon</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img className='ml-32 lg:ml-60' src={picture1} alt="" />
                        <p className="text-center">
                            “Lean startup metrics venture innovator assets angel investor learning curve incubator branding advisor termsheet. IPad ecosystem conversion android advisor.”
                        </p>
                        <div className="text-center mt-4">
                            <img
                                src={picture}
                                className=" rounded-full mx-auto"
                            />
                            <p className="font-semibold mt-2">Silvia Natalia</p>
                            <p className="text-gray-500">Owner Tanahcon</p>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md  w-full max-w-md absolute mt-[700px]">
                <h2 className="text-center text-xl font-semibold mb-4">Get started to new way of customer relation</h2>
                <form className="space-y-4 p">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        placeholder="E-mail address"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <textarea
                        placeholder="Your message here.."
                        className="w-full p-2 border border-gray-300 rounded h-32"
                    />

                    <div className='text-center'>
                        <button className='bg-blue-700 text-white rounded-full px-4 py-2'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AboutFive;
