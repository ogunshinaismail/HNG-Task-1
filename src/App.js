import './App.css';
import { Profile } from '../src/assets'

function App() {
  return (
    <div id="container">
      <div id="profile">
        <img src={Profile} alt="dp" id='profile__img' />
        <h3 id='twitter'>Ogunshina Ismail</h3>
        <p id='slack'>Ismail</p>
      </div>

      <div id="links">
        <a href="#">Twitter Link</a>
        <a href="#" id='btn__zuri'>Zuri Team</a>
        <a href="#" id='books'>Zuri Books</a>
        <a href="#" id='book__python'>Python Books</a>
        <a href="#" id='pitch'>Background Check for Coders</a>
        <a href="#" id='book__design'>Design Books</a>
      </div>
    </div>
  );
}

export default App;
