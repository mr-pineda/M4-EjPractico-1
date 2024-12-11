import './Home.css';
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
  return (
    <>
      <h1>INICIO</h1>
      <ServiceList />

      <DoctorCard doctor={doctor} />
    </>
  );
}

export default Home;
