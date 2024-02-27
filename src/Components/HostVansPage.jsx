import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const HostVansPage = () => {
    const [products, setProducts] = useState([]);

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

    return (
        <div className='mt-60 p-4'>
            <h1 className='font-bold text-4xl'>Your listed vans</h1>

            <div className="flex flex-col justify-between mt-20 mb-[2.61rem]">
                {products.map((product) => (
                    <Link to={`/api/Host/Vans/${product.id}`} key={product.id}>
                        <div key={product.id} className="bg-white w-[99.5%] p-4 mb-10">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="p-5">
                                        <img className="w-72" src={product.imageUrl} alt={product.name} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-900 text-xl font-bold">{product.name}</span>
                                        <span className="text-gray-700 text-base font-medium">${product.price}/day</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HostVansPage