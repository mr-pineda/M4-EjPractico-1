const ServiceList = ({ services }: { services: string[] }) => {
  return (
    <ul>
      {services.map((service, idx) => {
        return <p key={idx}>{service}</p>;
      })}
    </ul>
  );
};

export default ServiceList;
