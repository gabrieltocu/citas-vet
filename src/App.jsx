import Header from "./components/Header";
import Form from "./components/Form";
import PatientsList from "./components/PatientsList";
import {useState} from 'react'

function App() {
  const [patients, setPatients] = useState('')
  return (
    <div className="container mt-14 mx-auto">
      <Header 
      />
      <div className="mt-12 md:flex">
        <Form setPatients={setPatients} />
        <PatientsList />
      </div>
    </div>
  );
}

export default App;
