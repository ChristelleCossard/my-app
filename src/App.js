import logo from './logo.svg';
import './App.css';
import Meal from './Meal.js';
import Bonjour from './Bonjour';
import Counter from './Counter';
import Chronometre from './Chronometre';
import FormInput from './Components/FormInput';
import Card from './Card';
import Image from './woman.jpg';
//import Image from './man.jpg';
import Modal from './Modal';
import ContactForm from './ContactForm';
import Shop from './Shop';
import Chat from './Chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Bonjour />
     <p></p>
     <Modal title="deuxième titre modal">
      <p>Contenu de la seconde modale!</p>
    </Modal>
      <p></p>
      <FormInput 
        label="prénom"
       // value="Jean"
        placeholder="Votre prénom"
      />
      <p></p>
      <Counter />
     <Chronometre />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Bonjour les devs!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p></p>
     
      </header>
      <p></p>
      <Modal title="Ce site web utilise des 🍪">
      <p>En poursuivant votre navigation, <strong>vous acceptez les cookies.</strong></p>
      <p>Pour en savoir plus, 📝 <u>écrivez-nous!</u></p>
    </Modal>
     <p></p>
      <Card 
         picture={Image}
         name="Haad"
         age="31"
         city="Annaheim"
         online={true}
      />
     <Meal />
     <p></p>
     <ContactForm />
     <p></p>
     <Shop />
     <p></p>
     <p></p>
     <p></p>
     <Chat />
    </div>
  );
}

export default App;
