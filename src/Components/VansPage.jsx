import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const VansPage = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('');
    const [isButtonSelected, setIsButtonSelected] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:13000/api/vans')
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((error) => {
                console.error(error.message);
            })
    }, [])

    const filteredProducts = () => {
        if (filter === "") {
            return products;
        } else {
            return products.filter((product) => product.type === filter);
        }
    };

    const clearFilter = () => {
        setFilter('');
        setIsButtonSelected(false);
    };

    const filterApplication = (filterType) => {
        setFilter(filterType);
        setIsButtonSelected(true);
    };

    return (
        <div className='pt-32 sm:pt-28'>
            <h1 className="mb-7 ml-4 text-neutral-900 text-2xl sm:text-4xl font-bold leading-loose">Explore our van options</h1>
            <div className="w-full flex flex-col sm:flex-row">
                <div className='mt-4 sm:mt-0 ml-4 flex flex-row sm:flex-row gap-6 w-20 sm:w-full'>
                    <button onClick={() => filterApplication('Simple')} className={`w-full sm:w-24 h-9 px-6 py-1.5 rounded justify-center items-center inline-flex text-neutral-600 text-center text-base font-medium font-['Inter'] leading-normal ${isButtonSelected && filter === 'Simple' ? 'bg-orange-500 text-white' : 'bg-orange-100 hover:bg-orange-500 focus:bg-orange-500 hover:text-white'}`}>Simple
                    </button>
                    <button onClick={() => filterApplication('Luxury')} className={`w-full sm:w-24 h-9 px-6 py-1.5 rounded justify-center items-center inline-flex text-neutral-600 text-center text-base font-medium font-['Inter'] leading-normal ${isButtonSelected && filter === 'Luxury' ? 'bg-black text-white' : 'bg-orange-100 hover:bg-black focus:bg-black hover:text-white'}`}>Luxury
                    </button>
                    <button onClick={() => filterApplication('Rugged')} className={`w-full sm:w-24 h-9 px-6 py-1.5 rounded justify-center items-center inline-flex text-neutral-600 text-center text-base font-medium font-['Inter'] leading-normal ${isButtonSelected && filter === 'Rugged' ? 'bg-green-500 text-white' : 'bg-orange-100 hover:bg-green-500 focus:bg-green-500 hover:text-white'}`}>Rugged
                    </button>
                </div>
                <button onClick={clearFilter} className="w-[8.2rem] mt-2 sm:mt-0 text-neutral-600 text-base font-medium font-['Inter'] underline leading-normal">Clear filters</button>
            </div>

            <div className="flex flex-wrap justify-between mt-4 mb-[11.9rem]">
                {filteredProducts().map((product) => (
                    <Link to={`/api/vans/${product.id}`} key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 p-4">
                        <div className="pb-6">
                            <img className="w-full h-auto rounded" src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className="flex justify-between">
                            <span className="text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">{product.name}</span>
                            <div>
                                <span className="text-right text-neutral-900 text-xl font-semibold font-['Inter'] leading-loose">${product.price}</span>
                                <p className="text-right text-neutral-900 text-sm font-medium font-['Inter'] leading-loose">/day</p>
                            </div>
                        </div>
                        <button className={`w-full sm:w-20 h-10 mt-2 rounded ${product.type === 'Simple' ? 'bg-orange-500' : product.type === 'Luxury' ? 'bg-black' : product.type === 'Rugged' ? 'bg-green-500' : ''}`}>
                            <span className="text-center text-white text-base font-semibold font-['Inter']">{product.type}</span>
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default VansPage;
