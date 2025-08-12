import React, { useState } from 'react'

const History = ({completedetailshowbtn}) => {

    const [showpara, setshowpara] = useState(false);
    const [showbuttonpara, setshowbuttonpara] = useState('Show more');
    const [showmoredetail , setshowmoredetail] = useState(false)
    const showbtn = () => {
        console.log('showbutton clicked');
        if (!showpara) {
            setshowpara(true);
            setshowmoredetail(true)
            setshowbuttonpara('show less')

        }
        else {
            
            setshowpara(false);
            setshowbuttonpara('show more')
            setshowmoredetail(false)
        }
    }

    return (
        <>
            <div>
                <section className="px-6 md:px-20 py-10 bg-green-100 rounded-3xl ml-2 mr-2">
                    <h3 className="text-3xl font-medium text-green-900 text-center mb-4">History of 14th August</h3>
                    <p className="max-w-4xl mx-auto text-lg leading-relaxed">
                        On 14th August 1947, Pakistan emerged as an independent nation after the partition of British India, led by Quaid-e-Azam Muhammad Ali Jinnah. Founded as a homeland for Muslims,
                        {showpara && (
                            <span className="transition-opacity duration-500 ease-in-out opacity-100">
                                {" "}
                                it consisted of West Pakistan (now Pakistan) and East Pakistan (now Bangladesh). The day marks freedom, unity, and the struggle for a separate identity.
                            </span>
                        )}

                        <button
                            className="ml-2 border-2 border-green-600 rounded-lg px-2 text-green-700 font-medium bg-white hover:bg-green-600 hover:text-white hover:scale-105  transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                            onClick={showbtn} style={{ fontSize: "15px" }}
                        >
                            {showbuttonpara}
                        </button>
                    </p>
                    {showmoredetail &&
                        <div className='grid justify-center items-center mt-8'>
                            <h2 className='text-xl font-medium text-green-900' style={{ fontSize: "21px" }}>If you want to get complete detail click on this button</h2>
                            <div className='w-full flex justify-center items-center mt-3'>
                                <button
                                    className="ml-2 border-2  border-green-600 rounded-lg px-2 text-green-700 font-medium bg-white hover:bg-green-600 hover:text-white hover:scale-105  transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                                    style={{ fontSize: "17px" }} onClick={completedetailshowbtn}
                                >
                                    Complete detail
                                </button>
                            </div>

                        </div>
                    }

                </section>
            </div>
        </>
    )
}

export default History
