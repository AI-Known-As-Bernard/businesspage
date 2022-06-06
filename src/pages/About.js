import Navbar from '../components/navbar'
import Home from '../components/home'
import Footer from '../components/footer'

const About =()=>{

    return(
        <>
            <main className="min-h-[80vh] w-full bg-gray-100 text-gray-700 antialiased" x-data="layout">
                <Navbar/> 
                <Home/>
            </main>
            <Footer/>
        </>
    )
}

export default About