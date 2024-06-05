import { FaCheckCircle } from 'react-icons/fa';
import { RxCrossCircled } from 'react-icons/rx';

const AboutFour = () => {
    return (
        <div className="p-4 max-w-7xl mx-auto lg:my-24">
            <p className="text-center text-lg font-semibold">Pricing Plan</p>
            <h3 className="text-center text-2xl font-bold mb-6">Your need is our Priority</h3>

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="p-2"></th>
                            <th scope="col" className="p-2 border text-center">
                                <p className="text-xs md:text-sm font-semibold">STARTER PLAN</p>
                                <span className="text-lg md:text-2xl font-bold text-blue-600">$19</span>
                                <p className="text-xs md:text-sm">Billed Monthly</p>
                            </th>
                            <th scope="col" className="p-2 border text-center">
                                <p className="text-xs md:text-sm font-semibold">BUSINESS PLAN</p>
                                <span className="text-lg md:text-2xl font-bold text-blue-600">$49</span>
                                <p className="text-xs md:text-sm">Billed Monthly</p>
                            </th>
                            <th scope="col" className="p-2 border text-center">
                                <p className="text-xs md:text-sm font-semibold">CORPORATE PLAN</p>
                                <span className="text-lg md:text-2xl font-bold text-blue-600">$99</span>
                                <p className="text-xs md:text-sm">Billed Monthly</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="px-2 py-1 border text-center">Storage access</th>
                            <td className="px-2 py-1 border text-center"><FaCheckCircle /></td>
                            <td className="px-2 py-1 border text-center"><FaCheckCircle /></td>
                            <td className="px-2 py-1 border text-center"><FaCheckCircle /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-2 py-1 border text-center">Cloud synching</th>
                            <td className="px-2 py-1 border text-center"><FaCheckCircle /></td>
                            <td className="px-2 py-1 border text-center"><FaCheckCircle /></td>
                            <td className="px-2 py-1 border text-center"><FaCheckCircle /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-2 py-1 border text-center">100TB Data</th>
                            <td className="px-2 py-1 border text-center"><RxCrossCircled /></td>
                            <td className="px-2 py-1 border text-center"><FaCheckCircle /></td>
                            <td className="px-2 py-1 border text-center"><FaCheckCircle /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-2 py-1 border text-center">Free Installing</th>
                            <td className="px-2 py-1 border text-center"><RxCrossCircled /></td>
                            <td className="px-2 py-1 border text-center"><FaCheckCircle /></td>
                            <td className="px-2 py-1 border text-center"><FaCheckCircle /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-2 py-1 border text-center">24 Hours Support</th>
                            <td className="px-2 py-1 border text-center"><RxCrossCircled /></td>
                            <td className="px-2 py-1 border text-center"><RxCrossCircled /></td>
                            <td className="px-2 py-1 border text-center"><FaCheckCircle /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-2 py-1 border text-center">Automated Processing</th>
                            <td className="px-2 py-1 border text-center"><RxCrossCircled /></td>
                            <td className="px-2 py-1 border text-center"><RxCrossCircled /></td>
                            <td className="px-2 py-1 border text-center"><FaCheckCircle /></td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-2 py-1 border text-center"></th>
                            <td className="px-2 py-1 border text-center">
                                <button className="block bg-white text-blue-600 rounded-full border px-2 py-1 md:px-4 md:py-2 mx-auto">Choose Plan</button>
                                <span className="text-xs block mt-2">*Try 30 days for free</span>
                            </td>
                            <td className="px-2 py-1 border text-center">
                                <button className="block bg-white text-blue-600 rounded-full border px-2 py-1 md:px-4 md:py-2 mx-auto">Choose Plan</button>
                                <span className="text-xs block mt-2">*Try 30 days for free</span>
                            </td>
                            <td className="px-2 py-1 border text-center">
                                <button className="block bg-white text-blue-600 rounded-full border px-2 py-1 md:px-4 md:py-2 mx-auto">Choose Plan</button>
                                <span className="text-xs block mt-2">*Try 30 days for free</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AboutFour;
