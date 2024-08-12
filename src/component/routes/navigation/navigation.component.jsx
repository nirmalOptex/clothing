import { Fragment } from 'react';
import { Outlet,Link } from 'react-router-dom';
import './navigation.styles.css'
import { ReactComponent as Crwnlogo } from '../../../assets/007 crown.svg' 
const Navigation =() =>{
    return(
      < Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
            <Crwnlogo className='logo' /> </Link>
           <div className='links-container'>
            <Link className='nav-link' to='/shop'>
            Shop
            </Link>

            <Link className='nav-link' to='/auth'>
            Sign In
            </Link>
           </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;