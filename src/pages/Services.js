import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ServicesContent from '../components/services'

const Services =()=>{

    return(
        <>
            <main className="min-h-[80vh] w-full bg-gray-100 text-gray-700 antialiased" x-data="layout">
                <Navbar/> 
                <ServicesContent/>
            </main>
            <Footer/>
        </>
    )
}

export default Services