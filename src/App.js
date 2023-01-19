import Header from './Header'
import Hero from './Hero'
import Offer from './Offer'
import Comments from './Reviews'
import './input.css';
import Home from './ShoppingComponents/Home'
import Footer from './Footer';

function App() {
  return (

    <main className="mx-auto relative">
      
      <Header/>
      <Hero/>
      <Home/>
      <Offer/>
      <Comments/>
      <Footer/>
    </main>
  );
}

export default App;
