
const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-4">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg text-center mb-7">
        Añade Pacientes y { }{" "}
        <span className="text-indigo-700 font-bold">Administralos</span>{" "}
      </p>
      <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-20">
        <div className="mb-5">
          <label htmlFor="name" className="text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="name"
            type="text"
            placeholder="Toti"
            className="w-full rounded-md border-2 placeholder-gray-400 py-1 mt-2"
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
