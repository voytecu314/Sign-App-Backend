import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignOrLogin from './components/SignOrLogin';
import Upload from './components/Upload';
import GetVids from './components/GetVids';
import ContactForm from './components/ContactForm';

function App() {


  return (
    <Router>
      <div className="App">
        <h1>Sign-Language-Learning-App</h1>
        <Routes>
        <Route path='/' element={<SignOrLogin />} />
        <Route path='/videos/upload' element={<Upload />} />     
        <Route path='/videos' element={<GetVids />} />
        <Route path='/contact' element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
