import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const ProductInformationPage = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://vanlife-backend-1.onrender.com')
            .then((response) => {
                console.log(response.data[id]);
                setData(response.data[id])
            })
            .catch((error) => {
                console.error(eorror);
            })
    }, [id])

    return (
        <div className="mx-4 mt-12 lg:mx-[1.68rem] lg:mt-[9.47rem]">
            <div className="flex flex-row mt-24">
                <span>←&nbsp;&nbsp;&nbsp;</span>
                <Link to='/Vans' className="text-[#858585] underline mb-4 lg:mb-0">Back to all Vans</Link>
            </div>
            <img className="rounded w-auto h-auto mt-5" src={data.imageUrl} alt={data.name} />
            <button className={`w-[7rem] h-[3rem] rounded-md mt-10 ${data.type === 'Simple' ? 'bg-orange-500' : data.type === 'Luxury' ? 'bg-black' : data.type === 'Rugged' ? 'bg-green-500' : ''}`}>
                <span className="text-white text-base font-semibold font-['Inter']">{data.type}</span>
            </button>
            <h1 className="mt-5 font-['Inter'] font-bold text-5xl">{data.name}</h1>
            <div className="mt-5 flex flex-row">
                <span className="font-bold text-[2rem] text-[#161616] leading-[2.76rem">${data.price}</span>
                <span className="font-medium text-[2rem] text-[#161616] leading-[2.76rem">/day</span>
            </div>
            <p className="mt-5 lg:w-[60%] font-medium text-xl text-[#161616]">{data.description}</p>
            <Link to='/signIn'>
                <button type="submit" className="mt-5 bg-orange-500 text-[1.125rem] leading-8 font-['Inter'] font-bold text-white w-full lg:w-[90%] xl:w-[60%] h-[3.11rem] px-4 py-2 rounded-md mb-24">
                    <span>Rent this Van</span>
                </button>
            </Link>
        </div>
    )
}

export default ProductInformationPage;
