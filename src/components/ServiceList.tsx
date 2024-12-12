const ServiceList = ({ services }: { services: string[] }) => {
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
