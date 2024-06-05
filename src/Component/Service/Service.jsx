import { FaArrowRightLong } from "react-icons/fa6";

const Service = ({ service }) => {
    const { title, img, description } = service || {};
    return (
        <div className="flex justify-center p-4">
            <div className="card w-full sm:w-96 bg-base-100 shadow-xl text-center">
                <figure className="flex justify-center pt-5">
                    <img className="h-[66px]" src={img} alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-lg sm:text-xl">{title}</h2>
                    <p className="text-sm sm:text-base">{description}</p>
                    <div className="flex justify-center mt-4">
                        <FaArrowRightLong className="text-xl sm:text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
