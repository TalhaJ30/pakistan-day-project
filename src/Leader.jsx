import React, { useState } from 'react'
import Moreleader from './Moreleader';


const Leader = () => {

  const items = [
    {
      image: "Muhammad Ali Jinnah.jpg",
      name: "Muhammad Ali Jinnah",
      title: "Founder of Pakistan and leader of the independence movement.",
    },
    {
      image: "Allama Iqbal.jpg",
      name: "Allama Iqbal",
      title: "Visionary philosopher, poet, and politician whose ideas and leadership paved the way for Pakistan’s 1947 independence.",
    },
    {
      image: "sir.syed ahmed khan.jpg",
      name: "Sir Syed Ahmad Khan",
      title: "Sir Syed Ahmad Khan inspired Muslim education and unity, laying the foundation for Pakistan’s independence movement.",
    },
    {
      image: "Liaquat Ali Khan.jpg",
      name: "Liaquat Ali Khan",
      title: "Liaquat Ali Khan, Pakistan’s first Prime Minister, strengthened governance, unity, and foreign relations after independence in 1947.",
    },
    {
      image: "Choudhry_Rahmat_Ali (1).jpg",
      name: "Choudhry Rahmat Ali",
      title: "Rahmat Ali is credited with coining the name Pakistan and advocating for its creation.",
    },
    {
      image: "fatima-jinnah.jpg",
      name: "Fatima Jinnah",
      title: "She played a significant role in supporting her brother's efforts and later became known as Madar-e-Millat (Mother of the Nation). ",
    },

  ]

  const leadershowbtn = () => {
    console.log('hello i am working')
    if (!leaders) {
       setleaders(true);
       setshowbtn('Show less');
    }
    else{
      setleaders(false);
      setshowbtn('Show more')
    }
  }

  const [leaders , setleaders] = useState(false);
  const [showbtn , setshowbtn] = useState('Show more')
  return (
    <>
      <section id="leaders" className="px-3 md:px-10 py-10 bg-green-100 mt-5.5 rounded-2xl ml-2.5 mr-2.5">
        <div className='mb-12'>
          <h2 className="text-3xl font-medium text-green-900 text-center mb-1.5">National Heroes</h2>
          <p className='text-center' style={{ fontSize: "20px" }}>These are the personalities because of whom Pakistan became independent and that is why Pakistan is an independent country today.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Leader cards */}
          {items.map((item, index) => (
            <div
              key={index}
              className="relative group p-0 bg-gradient-to-tr from-green-200 via-white to-green-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-green-200 hover:border-green-500 overflow-hidden"
              style={{ minHeight: "370px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-green-100 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none z-0" />
              <div className="flex flex-col items-center relative z-10 p-6">
                <div className="h-50 w-45 md:h-auto md:w-auto rounded-2xl overflow-hidden border-3 border-green-400 shadow-lg mb-4 bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="  transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-2xl font-medium mb-2 text-green-800 group-hover:text-green-600 transition-colors">{item.name}</h4>
                <p className="text-gray-700 text-base font-normal group-hover:text-green-800 transition-colors">{item.title}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-80" />
            </div>
          ))}

        </div>
        {leaders &&
          <div className='pt-7'>
            <Moreleader />
          </div>
        }
        <div className='w-full flex justify-center items-center mt-8'>

          <button
            className="relative px-5 py-2 md:px-6 md:py-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:from-green-500 hover:to-green-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 overflow-hidden group" onClick={leadershowbtn}
          >
            <span className="relative z-100 font-normal">{showbtn}</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full pointer-events-none" />
          </button>

        </div>
      </section>
    </>
  )
}

export default Leader
