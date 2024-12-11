const services = ['Odontología', 'Pediatría', 'Psicología', 'Traumatología'];

const ServiceList = () => {
  return (
    <ul>
      {services.map((service) => {
        return <p>{service}</p>;
      })}
    </ul>
  );
};

export default ServiceList;
