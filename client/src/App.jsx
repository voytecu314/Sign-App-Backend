import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from './context/MyContext';
import SignOrLogin from './components/SignOrLogin';
import Upload from './components/Upload';
import GetVids from './components/GetVids';
import ContactForm from './components/ContactForm';
import Auth from './components/Auth';

function App() {

  const {auth, setAuth} = useContext(MyContext);

  const logout = () => {
    localStorage.removeItem('SignAppToken');
    setAuth(false); 
  }

  return (
    <Router>
      <div className="App">
        <h1>Our-App</h1>
        <br /><br /><br />
        <Link to='/'><h5>Back home: <span>&#9166;</span></h5> </Link>
        <Routes>
        <Route path='/' element={<SignOrLogin />} />
        <Route element={<Auth />}>
          <Route path='/videos/upload' element={<Upload />} />     
          <Route path='/videos' element={<GetVids />} />
        </Route>  
        <Route path='/contact' element={<ContactForm />} />
        </Routes>
        <br />
        <Link to='/contact'>Contact us</Link>
        <br />
        {auth ? <button onClick={logout}>Logout</button> : null}
      </div>
    </Router>
  );
}

export default App;
