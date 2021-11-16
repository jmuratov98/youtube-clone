import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'

import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import useInput from '../hooks/useInput';

import logo from '../logo.png';

interface NavbarProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({
    setOpen
}: NavbarProps) => {
    const { input: search, onChange } = useInput('');

    return (
        <header className="navbar">
            <div className="navbar__brand">
                <IconButton onClick={() => setOpen(prev => !prev)}>
                    <MenuIcon />
                </IconButton>

                <a href="/">
                    <img src={logo} alt="YouTube Logo" className="navbar__logo" />
                </a>
            </div>

            <form className="navbar__search-bar">
                <input
                    className="navbar__search-input"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={onChange}
                />

                <button type="submit" className="navbar__search-btn">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </button>
            </form>

            <div className="navbar__menu-icons">
                <a href="#">
                    <IconButton>
                        <VideoCallOutlinedIcon />
                    </IconButton>
                </a>
                <a href="#">
                    <IconButton>
                        <AppsOutlinedIcon />
                    </IconButton>
                </a>
                <a href="#">
                    <IconButton>
                        <NotificationsNoneOutlinedIcon />
                    </IconButton>
                </a>
                <IconButton>
                    <Avatar sx={{ width: '32px', height: '32px', }} />
                </IconButton>
            </div>
        </header>
    );
}

export default Navbar;