import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom';

const HostProductInformationPage = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [activeTab, setActiveTab] = useState('details');

    useEffect(() => {
        axios.get(`http://localhost:13000/api/host/vans/${id}`)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    return (
        <div className="flex flex-col justify-between mt-64 mb-[2.61rem] p-4">
            <div className="flex flex-row mb-10">
                <span>←&nbsp;&nbsp;&nbsp;</span>
                <Link to='/Host/Vans' className="text-gray-900 underline mb-4 lg:mb-0">Back to all Vans</Link>
            </div>

            <div className="bg-white w-[99.1%] p-4 mb-4">
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <div className="p-5">
                            <img className="w-72" src={data.imageUrl} alt={data.name} />
                        </div>
                        <div className="flex flex-col">
                            <button className={`w-[7rem] h-[3rem] rounded-md mt-10 mb-5 ${data.type === 'Simple' ? 'bg-orange-500' : data.type === 'Luxury' ? 'bg-black' : data.type === 'Rugged' ? 'bg-green-500' : ''}`}>
                                <span className="text-white text-base font-semibold font-['Inter']">{data.type}</span>
                            </button>
                            <span className="text-gray-900 text-3xl font-bold">{data.name}</span>
                            <div className="flex flex-row">
                                <span className="font-bold text-xl text-[#161616] leading-[2.76rem">${data.price}</span>
                                <span className="font-medium text-base text-[#161616] mt-[0.1rem]">/day</span>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className='mt-2 h-10 flex items-center'>
                    <div className="p-5">
                        <ul className='flex flex-row items-center gap-12 text-lg'>
                            <li className=''>
                                <NavLink
                                    to=""
                                    className={activeTab === 'details' ? 'hover:focus:outline-none focus:underline font-bold' : ''}
                                    onClick={() => setActiveTab('details')}>Details
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to=""
                                    className={activeTab === 'pricing' ? 'hover:focus:outline-none focus:underline font-bold' : ''}
                                    onClick={() => setActiveTab('pricing')}>Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to=""
                                    className={activeTab === 'photos' ? 'hover:focus:outline-none focus:underline font-bold' : ''}
                                    onClick={() => setActiveTab('photos')}>Photos
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

                {activeTab === 'details' && (
                    <div className="p-5">
                        <p className='mb-5 text-xl font-bold'>Name:
                            <span className='font-medium text-base'> {data.name}</span>
                        </p>
                        <p className='mb-5 text-xl font-bold'>Category:
                            <span className='font-medium text-base'> {data.type}</span>
                        </p>
                        <p className='mb-5 text-xl font-bold'>Description:
                            <span className='font-medium text-base'> {data.description}</span>
                        </p>
                        <p className='font-bold text-xl'>Visibility:
                            <span className='font-medium text-base'> Public</span>
                        </p>
                    </div>
                )}

                {activeTab === 'pricing' && (
                    <div className="flex flex-row p-5">
                        <span className="font-medium text-2xl text-[#161616] leading-[2.76rem">${data.price}</span>
                        <span className="font-medium text-base text-[#4D4D4D] mt-[0.3rem]">/day</span>
                    </div>
                )}

                {activeTab === 'photos' && (
                    <div className="p-5">
                        <img className="w-72" src={data.imageUrl} alt={data.name} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default HostProductInformationPage;