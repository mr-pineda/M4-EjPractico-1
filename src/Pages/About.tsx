// import './About.css';
import type { doctorInfo } from '../types/data';
import DoctorCard from '../components/DoctorCard';

const doctor: doctorInfo = {
  name: 'Harry',
  specialty: 'doctor de algo',
  description: 'alkajsdkajsdlkjasldkjalksjdas',
  services: ['mdico', 'dentista', 'payaso'],
  years: 9,
};

function Home() {
  return (
    <>
      <div className=' bg-sky-200 w-full px-28 py-16'>
        <h1 className=' text-black mb-10'>Acerca de nosotros</h1>
        <p className=' text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt
          temporibus provident nostrum eligendi deserunt illum perspiciatis
          eveniet officia quis sequi, quos aperiam minus ipsam asperiores itaque
          nam minima voluptate animi velit pariatur cum. Impedit, est eveniet
          fugit facilis in nesciunt? Velit voluptate optio, rerum quae ratione
          est. Illum, natus!
        </p>
      </div>
      <div className=' bg-white w-full px-28 py-16'>
        <h1 className=' text-black mb-10'>Conoce a nuestro equipo</h1>
        <p className=' text-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt
          temporibus provident nostrum eligendi deserunt illum perspiciatis
          eveniet officia quis sequi, quos aperiam minus ipsam asperiores itaque
          nam minima voluptate animi velit pariatur cum. Impedit, est eveniet
          fugit facilis in nesciunt? Velit voluptate optio, rerum quae ratione
          est. Illum, natus!
        </p>
      </div>

      <DoctorCard doctor={doctor} />
    </>
  );
}

export default Home;
