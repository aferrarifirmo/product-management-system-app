import logo from '../assets/cf-logo-h.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <main className='navbar w-screen h-20 flex place-content-between items-center shadow sticky top-0 bg-white'>
      <Link to='/' aria-label='Logo'><img aria-label='Logo' className='h-9 ml-10' alt='logo' src={logo} /></Link>
      <Link to='/new' aria-label='New farm' className='btn-primary mr-10'>New farm</Link>
    </main>
  );
};

export default Navbar;