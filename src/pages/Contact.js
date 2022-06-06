import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Contact =()=>{

    return(
        <>
            <main className="min-h-screen w-full bg-gray-400 text-gray-700 antialiased" x-data="layout">
                <Navbar/> 
            </main>
            <Footer/>
        </>
    )
}

export default Contact