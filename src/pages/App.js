// import logo from './logo.svg';
import './App.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function App() {


  return (
   <>
    <main className="min-h-screen w-full bg-gray-100 text-gray-700 antialiased" x-data="layout">
    <Navbar/>
    {/* <!-- main content page --> */}
        <div className="w-full p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quam odit officiis
            magni doloribus ipsa dolore, dolores nihil accusantium labore, incidunt autem iure quae vitae voluptate,
            esse asperiores aliquam repellat. Harum aliquid non officiis porro at cumque eaque inventore iure. Modi sunt
            optio mollitia repellat sed ab quibusdam quos harum!
        </div>
    </main>
    <Footer/>
   </>
  );
}

export default App;
