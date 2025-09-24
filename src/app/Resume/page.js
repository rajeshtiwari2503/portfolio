import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Resume = () => {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212] ">
            <Navbar />
            <div className='container mx-auto px-8 py-4 mt-32 mb-10 bg-white '>
                <div  >
                    <div className=' text-blue-500'>RJESH TIWARI</div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Resume