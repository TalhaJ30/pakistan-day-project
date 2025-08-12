import React from 'react'

const Moreleader = () => {

    const items = [
        {
            image: "A_k_fazlul_hoque.jpg",
            name: "A. K. Fazlul Huq",
            title: "He moved the Lahore Resolution in 1940, which formally demanded the creation of a separate Muslim state. ",
        },
        {
            image: "Abdul_Rab_Nishtar.jpg",
            name: "Sardar Abdur Rab Nishtar",
            title: "A prominent leader from the North-West Frontier Province, Nishtar was another key figure in the Pakistan Movement. ",
        },
        {
            image: "Jogendra_Nath_Mandal.jpg",
            name: "Jogendra Nath Mandal",
            title: "A prominent Scheduled Caste leader, Mandal joined the Muslim League and played a role in the Pakistan movement. ",
        },
        {
            image: "maulana-zafar-ali-khan-the-history-maker-1353957831-2806.jpg",
            name: "Zafar Ali Khan",
            title: "A prominent poet and journalist, Zafar Ali Khan was a key figure in the Punjab. ",
        },
        {
            image: "images.jpeg",
            name: "Abdullah Haroon",
            title: "A leading politician from Sindh, Haroon was a strong advocate for Pakistan. ",
        },
        {
            image: "images (1).jpeg",
            name: "Khwaja Nazimuddin",
            title: "A prominent leader from Bengal, Nazimuddin later served as the second Prime Minister of Pakistan. ",
        },

    ]

    return (
        <>
            
               
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
            
        </>
    )
}

export default Moreleader
