import { useEffect, useState } from 'react';
import DoctorCard from '../components/DoctorCard';
import doctorsData from '../data/doctors.json';
import { doctorInfo } from '../types/data';

const About = () => {
  const [data, setData] = useState<doctorInfo[]>([]);
  useEffect(() => {
    // Simular carga inicial de datos
    setData(doctorsData);
  }, []);

  return (
    <>
      <div className=' bg-sky-200 w-full px-28 py-16'>
        <h1 className=' text-black mb-10'>Agentda tu hora</h1>
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
        <div className='grid grid-cols-4 gap-4'>
          {data.map((doctor, idx) => (
            <DoctorCard key={idx} doctor={doctor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
