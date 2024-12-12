import ServiceList from '../components/ServiceList';
import doctorsData from '../data/doctors.json';

const Home = () => {
  return (
    <>
      <div className=' bg-sky-200 w-full px-28 py-16'>
        <h1 className=' text-black mb-10'>Pagina de inicio</h1>
        <p className=' text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt
          temporibus provident nostrum eligendi deserunt illum perspiciatis
          eveniet officia quis sequi, quos aperiam minus ipsam asperiores itaque
          nam minima voluptate animi velit pariatur cum. Impedit, est eveniet
          fugit facilis in nesciunt? Velit voluptate optio, rerum quae ratione
          est. Illum, natus!
        </p>
      </div>
      <div>
        <ServiceList
          services={doctorsData.flatMap((doctor) => doctor.services)}
        />
      </div>
    </>
  );
};

export default Home;
