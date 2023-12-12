import Patient from "./Patient";

const PatientsList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl text-center mb-7">
        Edita {""}
        <span className="text-indigo-700 font-bold">Pacientes y Citas</span>
      </p>
      <Patient />
      <Patient />

      <Patient />
      <Patient />
      <Patient />
    </div>
  );
};

export default PatientsList;
