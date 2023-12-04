import Header from "./components/Header";
import Form from "./components/Form";
import PatientsList from "./components/PatientsList";

function App() {
  return (
    <div className="container mt-14 mx-auto">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <PatientsList />
      </div>
    </div>
  );
}

export default App;
