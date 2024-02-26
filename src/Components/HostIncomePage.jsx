import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';

const HostIncomePage = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Ju', 'Au', 'Se', 'Oc', 'No', 'De'],
                datasets: [{
                    label: 'Income',
                    data: [4, 1.5, 3, 2.7, 1.7, 0.5],
                    backgroundColor: ['#FFEAD0', '#FFEAD0', '#FFEAD0', '#FFEAD0', '#FF8C38', '#FF8C38'],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 5,
                        ticks: {
                            stepSize: 1,
                            callback: value => `$${value}k`,
                            font: {
                                weight: 'bold',
                                size: '20px',
                            }
                        },
                    },
                    x: {
                        ticks: {
                            font: {
                                weight: 'bold',
                                size: '25px',
                            }
                        }
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                xAxis: {
                    grid: {
                        display: true,
                        borderDash: [5, 5],
                    }
                }
            }
        });

        return () => chart.destroy();
    }, []);

    return (
        <div className='mt-60 p-4'>
            <h1 className='font-bold text-4xl'>Income</h1>

            <div className="mt-10">
                <span className='text-gray-700 font-medium text-base mt-24'>last</span>
                &nbsp;
                <span className='text-gray-700 font-bold text-base underline mt-24'>30 days</span>
            </div>

            <h1 className='pt-10 font-extrabold text-5xl mb-10'>$2,260</h1>

            <div>
                <canvas ref={chartRef} />
            </div>

            <div className='mt-10'>
                <div className="flex justify-between">
                    <h1 className='font-bold text-2xl'>Your transactions (3)</h1>
                    <div className="mr-4">
                        <span className='text-gray-700 font-medium text-base'>last</span>
                        &nbsp;
                        <span className='text-gray-700 font-bold text-base underline'>30 days</span>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <div className='bg-white h-28 w-[99.1%] flex justify-between p-10'>
                    <p className='font-bold text-3xl'>$720</p>
                    <p className='font-medium text-xl text-[#4D4D4D]'>1/12/22</p>
                </div>
            </div>

            <div className="mt-10">
                <div className='bg-white h-28 w-[99.1%] flex justify-between p-10'>
                    <p className='font-bold text-3xl'>$560</p>
                    <p className='font-medium text-xl text-[#4D4D4D]'>10/11/22</p>
                </div>
            </div>

            <div className="mt-10 mb-10">
                <div className='bg-white h-28 w-[99.1%] flex justify-between p-10'>
                    <p className='font-bold text-3xl'>$980</p>
                    <p className='font-medium text-xl text-[#4D4D4D]'>23/11/22</p>
                </div>
            </div>
        </div >
    )
}

export default HostIncomePage