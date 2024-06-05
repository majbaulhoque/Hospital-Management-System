import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {
    const [data, setData] = useState([]);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center mt-72 mb-24">
                <p className="text-blue-600">Solutions</p>
                <h3 className="text-3xl">Modernize your workflow and <br /> maximize result</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data.map(service => <Service service={service} key={data.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;