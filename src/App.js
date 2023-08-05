import logo from './logo.svg';
import './App.css';
import Product from './Product.js'
import { Card } from 'react-bootstrap'
import Name from './Name.js'
import Price from './Price'
import Description from './Description'
import Image from './Image'


const firstName = 'Hela'; 

function App() {
  const displayMessage = firstName ? `Hello, ${firstName}!` : 'Hello, there!';
  return (
    <div className="App">
      
    <Card style={{ maxWidth: '300px', margin: '20px auto' }}>
    <Card.Body>
          <Image imageUrl={Product.imageUrl} />
          <Name name={Product.name} />
          <Price price={Product.price} />
          <Description description={Product.description} />
        </Card.Body>
      </Card>

  <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {firstName ? (
          <div>
            <p style={{ fontSize: '20px' }}>Hello, {firstName}!</p>

            {firstName && <img src="your_image_url_here" alt="Your Name" style={{ maxWidth: '200px' }} />}

            </div>
        ) : (
          <p style={{ fontSize: '20px' }}>Hello, there!</p>
        )}
      </div>
    </div>
  );
}

export default App;
