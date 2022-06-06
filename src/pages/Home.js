// import logo from './logo.svg';
import './Home.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HomeContent from '../components/home';

function Home() {


  return (
   <>
    <main className="min-h-[80vh] w-full bg-blueGray-50 text-gray-800 antialiased" x-data="layout">
      <Navbar/>
      <HomeContent/>
    </main>
    <Footer/>
   </>
  );
}

export default Home;
