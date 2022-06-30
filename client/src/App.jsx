import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignOrLogin from './components/SignOrLogin';
import Upload from './components/Upload';
import GetVids from './components/GetVids';
import ContactForm from './components/ContactForm';
import NotAuthorized from './components/NotAuthorized';
import Auth from './components/Auth';

function App() {

  return (
    <Router>
      <div className="App">
        <h1>Our-App</h1>
        <Routes>
        <Route path='/' element={<SignOrLogin />} />
        <Route element={<Auth />}>
          <Route path='/videos/upload' element={<Upload />} />     
          <Route path='/videos' element={<GetVids />} />
          <Route path='/videos/upload/contact' element={<ContactForm />} />
        </Route>
        <Route path='/no-auth' element={<NotAuthorized />} />
        </Routes>
        <br /><br /><br />
        <Link to='/'><h5>Back home: <span>&#9166;</span></h5> </Link>
        
      </div>
    </Router>
  );
}

export default App;
