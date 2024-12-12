import doctorsData from '../data/doctors.json';

const services = doctorsData.flatMap((doctor) => doctor.services);

const ServiceList = () => {
  console.log(services);

  return (
    <ul>
      {services.map((service, idx) => {
        return <p key={idx}>{service}</p>;
      })}
    </ul>
  );
};

export default ServiceList;
