import axios from 'axios';
import { useEffect, useState } from 'react';
import star from '../assets/Star 3.png'

const HostDashboardPage = () => {
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        axios.get('https://vanlife-backend-1.onrender.com')
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }, [])

    const displayedProducts = showAll ? products : products.slice(0, 3);

    return (
        <div>
            <div className='bg-orange-100 mt-60 p-4'>
                <h1 className='pt-10 mx-auto font-bold text-4xl'>Welcome!</h1>

                <div className="pt-10 flex justify-between">
                    <div className="">
                        <span className='text-gray-700 font-medium text-base'>Income last</span>
                        &nbsp;
                        <span className='text-gray-700 font-bold text-base underline'>30 days</span>
                    </div>
                    <p className='font-medium text-base mr-4'>Details</p>
                </div>
                <h1 className='pt-10 font-extrabold text-5xl mb-10'>$2,260</h1>
            </div>

            <div className="bg-orange-300 h-36 p-4">
                <div className="pt-10 flex justify-between items-center">
                    <div className='flex flex-row'>
                        <span className='font-bold text-2xl'>Review score</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={star} alt="star icon" />
                        &nbsp;&nbsp;
                        <span className='font-bold text-2xl'>5.0</span>
                        <span className='font-bold text-2xl text-gray-700'>/5</span>
                    </div>
                    <p className='font-medium text-base mr-4'>Details</p>
                </div>
            </div>
            <div className="p-4">
                <div className="flex justify-between">
                    <h1 className='font-bold text-2xl'>Your listed vans</h1>
                    <button className='font-medium text-base mr-4' onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'View less' : 'View all'}
                    </button>
                </div>

                <div className="flex flex-col justify-between mt-5 mb-[2.61rem]">
                    {displayedProducts.map((product) => (
                        <div key={product.id} className="bg-white w-[99.1%] p-4 mb-10">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="p-5">
                                        <img className="w-36 sm:w-72" src={product.imageUrl} alt={product.name} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-900 text-xl font-bold">{product.name}</span>
                                        <span className="text-gray-700 text-base font-medium">${product.price}/day</span>
                                    </div>
                                </div>
                                <button className='font-medium text-base'>Edit</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HostDashboardPage