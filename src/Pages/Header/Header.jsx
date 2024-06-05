import Banner from "../../Component/Banner/Banner";
import bg from "../../assets/Background.png";
import mac from "../../assets/Macbook.png";

const Header = () => {
    return (
        <div className="relative h-screen">
            <img className="w-full h-full object-cover" src={bg} alt="Background" />
            <div className="flex justify-between items-center max-w-7xl mx-auto absolute top-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-bold ml-36">StartUP</h3>
                <ul className="hidden md:flex space-x-4 lg:space-x-8 text-white">
                    <li className="cursor-pointer">How it works</li>
                    <li className="cursor-pointer">Feature</li>
                    <li className="cursor-pointer">Pricing</li>
                    <li className="cursor-pointer">FAQ</li>
                </ul>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-full hidden md:block">Try for FREE</button>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center mt-24 sm:mt-48 md:mt-64 lg:mt- p-4">
                <Banner />
                <img className="mt-10 sm:mt-20 md:mt-30 lg:mt- w-11/12 md:w-auto" src={mac} alt="Macbook" />
            </div>
            
        </div>
    );
};

export default Header;
