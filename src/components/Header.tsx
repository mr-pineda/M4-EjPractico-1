import hospLogo from '../assets/Hlogo.svg';
import { SCREENS } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  const sectionList = [
    { name: SCREENS.HOME, url: '/' },
    { name: SCREENS.ABOUT, url: '/about' },
    { name: SCREENS.CONTACT, url: '/contact' },
  ];

  return (
    <header className='flex flex-row justify-between h-15 bg-sky-950 p-2'>
      <div className='flex flex-row items-center'>
        <img src={hospLogo} className='h-14 mr-3' alt='Logo Hospital' />
        <span className='align-middle text-3xl'>Nombre Hospital</span>
      </div>

      <ul className='flex flex-row items-center'>
        {sectionList.map(({ name, url }, idx) => (
          <li>
            <Link key={idx} to={url}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
