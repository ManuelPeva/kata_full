import './header.scss'

const Header = () => {
  return (
    <nav className='header'>
      <a className='header__logo' href=''>LOGO</a>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <a className='header__item-link' href='#'>Home</a>
        </li>
        <li className='header__list-item'>
          <a className='header__item-link' href='#'>Dashboard</a>
        </li>
        <li className='header__list-item'>
          <a className='header__item-link' href='#'>Secret</a>
        </li>
        <li className='header__list-item'>
          <a className='header__item-link' href='#'>Login</a>
        </li>
        <li className='header__list-item'>
          <a className='header__item-link' href='#'>Signup</a>
        </li>

      </ul>
    </nav>
  )
}

export default Header
