import {useState, useEffect} from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [left, setLeft] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, owner, email, left, symptoms].includes('')) {
      setError(true);
      return;
    }
    setError(false);
  };
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-4">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg text-center mb-7">
        Añade Pacientes y { }{" "}
        <span className="text-indigo-700 font-bold">Administralos</span>{" "}
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-20" onSubmit={handleSubmit}>
        {error && <div>
          <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5 text-center rounded-md uppercase">**Todos los campos son obligatorios**</p>
        </div> }
        <div className="mb-5">
          <label htmlFor="name" className="text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="name"
            type="text"
            placeholder="Toti"
            className="w-full rounded-md border-2 placeholder-gray-400 py-1 mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="owner" className="text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input
            id="owner"
            type="text"
            placeholder=" John Doe"
            className="w-full rounded-md border-2 placeholder-gray-400 py-1 mt-2"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="text-gray-700 uppercase font-bold">
            Email Propietario
          </label>
          <input
            id="email"
            type="email"
            placeholder=" correo@gmail.com"
            className="w-full rounded-md border-2 placeholder-gray-400 py-1 mt-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="left" className="text-gray-700 uppercase font-bold">
            Fecha dada de alta
          </label>
          <input
            id="left"
            type="date"
            className="w-full rounded-md border-2 placeholder-gray-400 py-1 mt-2"
            value={left}
            onChange={(e) => setLeft(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 w-full rounded-md"
            name="symptoms"
            id=""
            cols="30"
            rows="10"
            placeholder=" Duerme mucho"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          value="Agregar Paciente"
          className="bg-indigo-600 w-full p-3 rounded-sm uppercase font-bold text-white hover:bg-indigo-700 cursor-pointer mt-2"
        />
      </form>
    </div>
  );
};

export default Form;
