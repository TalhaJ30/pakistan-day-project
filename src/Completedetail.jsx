import React from 'react'

const Completedetail = ({ closebtn }) => {
    const items = [
        {
            para: 'Pakistan, officially the Islamic Republic of Pakistan, emerged as an independent nation on 14th August 1947, following the historic partition of British India. This independence was the result of a long political struggle led by visionary leaders such as Quaid-e-Azam Muhammad Ali Jinnah, Allama Muhammad Iqbal, and many others who sought a separate homeland for the Muslims of the Indian subcontinent.',
        },
        {
            para: ' The roots of the movement can be traced back to the early 20th century when Muslims, despite being a significant portion of the population, felt politically marginalized under British colonial rule and the growing influence of the Hindu majority. In 1906, the All-India Muslim League was founded to protect the political rights and identity of Muslims. This laid the foundation for a stronger political voice that would eventually lead to independence.',
        },
        {
            para: 'The turning point came with the Lahore Resolution of 23rd March 1940, where Muslim leaders formally demanded separate states for Muslims in the north-western and eastern zones of India. This resolution solidified the vision of Pakistan, and the slogan "Pakistan ka matlab kya? La ilaha illallah" became a rallying cry for millions.',
        },
        {
            para: 'The 1940s were marked by intense political negotiations between the Muslim League, the Indian National Congress, and the British government. Communal tensions rose sharply, and the demand for Pakistan gained overwhelming public support among Muslims. Quaid-e-Azam’s steadfast leadership and refusal to compromise on Muslim sovereignty played a crucial role in the eventual acceptance of partition.',
        },
        {
            para: 'On 3rd June 1947, the British government announced the plan for the partition of India into two independent dominions — India and Pakistan. The Indian Independence Act was passed on 18th July 1947, legally establishing the creation of Pakistan on 14th August 1947. The new country consisted of West Pakistan (present-day Pakistan) and East Pakistan (now Bangladesh), separated by more than 1,600 kilometers of Indian territory.',
        },
        {
            para: 'Independence came with immense joy but also with great tragedy. The partition triggered one of the largest mass migrations in human history, as millions of Muslims migrated to Pakistan and Hindus and Sikhs moved to India. Communal violence claimed the lives of hundreds of thousands, and millions were displaced. Despite the chaos, the people of Pakistan held firmly to their new identity and dreams of a sovereign nation.',
        },
        {
            para: 'The early years of Pakistan were filled with challenges: rehabilitating refugees, setting up government institutions from scratch, creating a stable economy, and establishing a national identity. Despite these obstacles, Pakistan made significant strides in education, agriculture, culture, and defense in its formative years.',
        },
        {
            para: 'Today, 14th August is celebrated as Independence Day across Pakistan with great enthusiasm. Streets and buildings are adorned with the green and white of the national flag, patriotic songs echo across cities, and citizens honor the sacrifices of those who fought for freedom. The day serves as a reminder of the resilience, unity, and determination that led to the creation of Pakistan and the ongoing journey towards prosperity.',
        },

    ]

    return (
        <>
            <div>
                <div className="relative min-h-screen bg-gradient-to-br from-green-200 via-green-50 to-green-300 flex flex-col items-center justify-center sm:py-10 sm:px-4">
                    <header className="w-full max-w-3xl mx-auto bg-white sm:rounded-3xl shadow-lg p-8 pt-12 relative">
                        <button
                            aria-label="Close"
                            onClick={closebtn}
                            className="fixed top-4 right-4 sm:absolute sm:top-4 sm:right-4 text-green-700 hover:text-green-900 transition-colors "
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "1.5rem",
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className='bg-green-200 ' width="32" height="32" fill="none" viewBox="0 0 24 24" style={{borderRadius : '7px'}} stroke="currentColor">
                                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <h1 className="text-4xl font-medium text-green-800 text-center mb-4">History of Pakistan</h1>
                        <div className="border-b-2 border-green-200 mb-6"></div>
                        <section className="text-lg text-gray-800 leading-relaxed overflow-auto">
                            {items.map((item, index) => <div>
                                <p className="mb-4" key={index}>
                                    {item.para}
                                </p>
                            </div>)}

                        </section>

                    </header>
                </div>
            </div>
        </>
    )
}

export default Completedetail
