import { useState } from 'react';
import './About.css';
import ServiceList from '../components/ServiceList';
import type { doctorInfo } from '../types/data';
import DoctorCard from '../components/DoctorCard';
// import Header from '../components/Header';

const doctor: doctorInfo = {
  name: 'Harry',
  specialty: 'doctor de algo',
  description: 'alkajsdkajsdlkjasldkjalksjdas',
  services: ['mdico', 'dentista', 'payaso'],
  years: 9,
};

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hacerca de nosotros</h1>
      {/* <ServiceList /> */}
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <DoctorCard doctor={doctor} />
    </>
  );
}

export default Home;
