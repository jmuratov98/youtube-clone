import { Button } from '@mui/material';
import { User } from '@firebase/auth';

import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'

import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { login, logout } from '../firestore';

import useInput from '../hooks/useInput';

import logo from '../logo.png';

interface NavbarProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    user: User | null;
}

const Navbar = ({
    setOpen,
    user
}: NavbarProps) => {
    const { input: search, onChange } = useInput('');

    console.log(user?.photoURL);

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
                <MenuIcons user={user} />
            </div>
        </header>
    );
}

interface MenuIcons {
    user: User | null;
}

const MenuIcons = ({ user }: MenuIcons) => {
    return user ? (
        <>
            <IconButton>
                <VideoCallOutlinedIcon />
            </IconButton>
            <IconButton>
                <AppsOutlinedIcon />
            </IconButton>
            <IconButton>
                <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton>
                <Avatar
                    sx={{ width: '32px', height: '32px', }}
                    alt="Avatar"
                    src={user?.photoURL ? user?.photoURL : ''}
                    onClick={logout}
                />
            </IconButton></>
    ) : (
        <>
            <IconButton>
                <AppsOutlinedIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>

            <Button
                variant="outlined"
                onClick={login}
                startIcon={<AccountCircleOutlinedIcon />}
            >
                Sign Up
            </Button>
        </>
    )
}

export default Navbar;