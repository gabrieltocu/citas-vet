const Patient = () => {
    return (
        <div className="m-4 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-6 text-gray-700 uppercase">
                Nombre Mascota: <span className="font-normal normal-case">Toti</span>
            </p>
            <p className="font-bold mb-6 text-gray-700 uppercase">
                Propietario: <span className="font-normal normal-case">John Doe</span>
            </p>
            <p className="font-bold mb-6 text-gray-700 uppercase">
                Email Propietario:{" "}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>
            <p className="font-bold mb-6 text-gray-700 uppercase">
                Fecha dada de Alta:{" "}
                <span className="font-normal normal-case">10 de Junio 2020</span>
            </p>
            <p className="font-bold mb-6 text-gray-700 uppercase">
                Síntomas:{" "}
                <span className="font-normal normal-case">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat
                    nihil at tempore quos accusantium nobis rem non. Neque doloremque
                    officia eos praesentium, ipsam vero non qui possimus reiciendis
                    ratione.
                </span>
            </p>
        </div>
    );
};

export default Patient;
