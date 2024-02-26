import star from '../assets/Star 3.png'

const HostReviewsPage = () => {
    return (
        <div className='mt-60 p-4'>
            <div className="flex">
                <h1 className='font-bold text-4xl'>Your reviews</h1>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="mt-4">
                    <span className='text-gray-700 font-medium text-base'>last</span>
                    &nbsp;
                    <span className='text-gray-700 font-bold text-base underline'>30 days</span>
                </div>
            </div>

            <div className="pt-10">
                <div className="flex">
                    <h1 className='font-bold text-4xl'>5.0</h1>
                    &nbsp;&nbsp;&nbsp;
                    <div className="flex items-center">
                        <img src={star} alt="" />
                        &nbsp;
                        <span className='font-medium text-base'>overall rating</span>
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <div className="flex justify-between mt-10">
                    <p className='font-medium text-base'>5 stars</p>
                    <p className='border h-2 w-[60%] sm:w-[85%] bg-[#FF8C38] mt-2'></p>
                    <p className='font-medium text-base text-[#4D4D4D] mr-4'>100%</p>
                </div>

                <div className="flex justify-between mt-10">
                    <p className='font-medium text-base'>4 stars</p>
                    <p className='border h-2 w-[60%] sm:w-[85%] bg-[#B9B9B9] mt-2'></p>
                    <p className='font-medium text-base text-[#4D4D4D] mr-4'>0%</p>
                </div>

                <div className="flex justify-between mt-10">
                    <p className='font-medium text-base'>3 stars</p>
                    <p className='border h-2 w-[60%] sm:w-[85%] bg-[#B9B9B9] mt-2'></p>
                    <p className='font-medium text-base text-[#4D4D4D] mr-4'>0%</p>
                </div>

                <div className="flex justify-between mt-10">
                    <p className='font-medium text-base'>2 stars</p>
                    <p className='border h-2 w-[60%] sm:w-[85%] bg-[#B9B9B9] mt-2'></p>
                    <p className='font-medium text-base text-[#4D4D4D] mr-4'>0%</p>
                </div>

                <div className="flex justify-between mt-10">
                    <p className='font-medium text-base'>1 star</p>
                    <p className='border h-2 w-[60%] sm:w-[85%] bg-[#B9B9B9] mt-2'></p>
                    <p className='font-medium text-base text-[#4D4D4D] mr-4'>0%</p>
                </div>
            </div>

            <div className='mt-10'>
                <h2 className='font-bold text-lg'>Reviews (2)</h2>

                <div className="mt-10 flex gap-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>

                <div className='mt-3'>
                    <span className='font-semibold text-base'>Elliot </span>
                    <span className='font-semibold text-base text-[#8C8C8C]'>December 1, 2022</span>
                    <p className='mt-3 font-medium text-base'>The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
                </div>

                <p className='border w-[99.1%] bg-[#C7C7C7] mt-10'></p>

                <div className="mt-10 flex gap-1">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>

                <div className='mt-3'>
                    <span className='font-semibold text-base'>Sandy </span>
                    <span className='font-semibold text-base text-[#8C8C8C]'>November 23, 2022</span>
                    <p className='mt-3 font-medium text-base'>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
                </div>

                <p className='border w-[99.1%] bg-[#C7C7C7] mt-10 mb-20'></p>
            </div>
        </div>
    )
}

export default HostReviewsPage