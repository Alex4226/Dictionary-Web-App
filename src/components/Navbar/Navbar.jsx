import './Navbar.css';
import Book from '../../assets/book.png';
import Down from '../../assets/down-arrow.png';
import Switch from '../../assets/switch.png';
import Moon from '../../assets/moon.png';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img className='book-image' src={Book} alt="" />
            <div className='flex'>
                <div className='flex'>
                    <p className='nav-paragraph'>Serif</p>
                    <img className='down-image' src={Down} alt="" />
                </div>
                <hr />
                <div className='flex'>
                    <img className='switch-image' src={Switch} alt="" />
                    <img className='moon-image' src={Moon} alt="" />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;