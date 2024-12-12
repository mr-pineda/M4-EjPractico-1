import type { doctorInfo } from '../types/data';

const DoctorCard = ({ doctor }: { doctor: doctorInfo }) => {
  let services = '';
  doctor.services.forEach((service, idx) => {
    services += idx !== 0 ? ', ' + service : service;
  });
  return (
    <div className='flex flex-col items-center bg-slate-400 rounded-xl p-5'>
      <h1 className='text-4xl text-center mb-4'>{doctor.name}</h1>
      <h2 className='text-3xl italic mb-2'>{doctor.specialty}</h2>
      <p className='italic text-justify mb-3'>{doctor.description}</p>
      <p className=' w-full'>
        <span className=' font-bold'>Servicios: </span> {services}
      </p>
    </div>
  );
};

export default DoctorCard;
