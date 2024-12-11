import type { doctorInfo } from '../types/data';

const DoctorCard = ({ doctor }: { doctor: doctorInfo }) => {
  return (
    <div>
      <h1>{doctor.name}</h1>
      <h2>{doctor.specialty}</h2>
      <p>{doctor.description}</p>
      {doctor.services.map((service) => {
        return <p>{service}</p>;
      })}
    </div>
  );
};

export default DoctorCard;
