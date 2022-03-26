import './App.css';
import Faq from './Components/Faq/Faq';
import Products from './Components/Products/Products';

function App() {
  return (
    <div>
      <div className='shop-header'>
          <h2>Book Shop</h2>
          <p>You Can Buy Any Book From Here!</p>
      </div>
      <Products />
      <Faq />
    </div>
  );
}

export default App;
