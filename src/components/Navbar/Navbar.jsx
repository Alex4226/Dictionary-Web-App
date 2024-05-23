import './Navbar.css';
// import Book from '../../assets/book.png';
import BookIcon from '@mui/icons-material/Book';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Navbar = (props) => {
    
    const handleSelect = (e) => {
        e.preventDefault();

        const selectValue = e.target.value;

        console.log(selectValue);

        props.setCurrentFont(selectValue);
    }

    const handleChangeTheme = () => props.isDarkTheme === true ? props.setDarkTheme(false) : props.setDarkTheme(true);

    return (
        <nav className='navbar'>
            {/* <img className='book-image' src={Book} alt="" /> */}
            <BookIcon className='book-image' />
            <div className='flex'>
                <div className='flex'>
                        <select onChange={handleSelect} name="font" id="font">
                            <option value="serif">Serif</option>
                            <option value="arial">Arial</option>
                            <option value="times">Times new Roman</option>
                            <option value="roboto">Roboto</option>
                        </select>
                </div>
                <hr />
                <div className='flex'>
                    <button className='change-theme-button' onClick={handleChangeTheme}>
                        {props.isDarkTheme === true ? 
                        (<ToggleOnIcon className={props.isDarkTheme === true ? "toggled-icon" : null}/>) 
                        : (<ToggleOffIcon className={props.isDarkTheme === true ? "toggled-icon" : null}/>)}
                    </button>
                    <DarkModeOutlinedIcon className='moon-image'/>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;