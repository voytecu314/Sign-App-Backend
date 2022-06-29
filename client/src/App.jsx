import './App.css';
import Signup from './components/Signup';
import Upload from './components/Upload';
import GetVids from './components/GetVids';
import ContactForm from './components/ContactForm';

function App() {


  return (
    <div className="App">
      
      <Signup />
      <Upload />
      <GetVids />
      <ContactForm/>
    
    </div>
    
  );
}

export default App;
