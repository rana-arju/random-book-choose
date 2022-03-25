import './App.css';
import Products from './Components/Products/Products';

function App() {
  return (
    <div>
      <div className='shop-header'>
          <h2>Book Shop</h2>
          <p>You Can Buy Any Book From Here!</p>
      </div>
      <Products />
    </div>
  );
}

export default App;
