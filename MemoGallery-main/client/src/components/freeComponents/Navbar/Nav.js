import { Link } from "react-router-dom";

import "./Nav.css";

const Navbar = () => {
  const token = localStorage.token
  return (
    <>
      {token ? (
        <nav className='nav'>
          <ul>
            <Link to='/' className='title'>
              MemoGallery
            </Link>
            <Link to='/homePage'>Your Photos</Link>
            <Link to='/postPhotos'>Post a Photo</Link>
            <Link to='/favourites'>Your favourite Photos</Link>
            <Link to='/logout'>Log out</Link>
          </ul>
        </nav>
      ) : (
          <nav className='nav'>
            <ul>
              <Link to='/' className='title'>
                MemoGallery
              </Link>
              <Link to='/register'>Register</Link>
              <Link to='/login'>Login</Link>
            </ul>
          </nav>
      )}
    </>
  );
};

export default Navbar;
