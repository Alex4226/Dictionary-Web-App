import './Navbar.css';
import Book from '../../assets/book.png';
import Moon from '../../assets/moon.png';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { useState } from 'react';

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
            <img className='book-image' src={Book} alt="" />
            <div className='flex'>
                <div className='flex'>
                    <form onChange={handleSelect}>
                        <select name="font" id="font">
                            <option value="Serif">Serif</option>
                            <option value="Arial">Arial</option>
                            <option value="Times">Times new Roman</option>
                            <option value="Roboto">Roboto</option>
                        </select>
                    </form>
                </div>
                <hr />
                <div className='flex'>
                    <button className='change-theme-button' onClick={handleChangeTheme}>
                        {props.isDarkTheme === true ? (<ToggleOnIcon />) : (<ToggleOffIcon />)}
                    </button>
                    <img className='moon-image' src={Moon} alt="" />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;