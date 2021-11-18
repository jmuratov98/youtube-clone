import { User } from '@firebase/auth';
import { SvgIconComponent } from '@mui/icons-material';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Button from '@mui/material/Button';

import { login } from '../firestore';

interface SidebarOptionProps {
    Icon: SvgIconComponent | null;
    title?: string;
    children?: string
}

const SidebarOption = ({ Icon, title, children }: SidebarOptionProps) => {
    return (
        <div className="sidebar__option">
            {Icon && <Icon className="sidebar__option-icon" />}
            {title && <span className="sidebar__option-title">{title}</span>}
            {children && <span className="sidebar__option-title">{children}</span>}
        </div>
    );
}

interface SidebarProps {
    isOpen: boolean;
    user: User | null;
}

const Sidebar = ({
    isOpen,
    user
}: SidebarProps) => {

    return (
        <div className={`sidebar ${isOpen ? 'is-open': ''}`}>
            <SidebarOption Icon={HomeOutlinedIcon} title='Home' />
            <SidebarOption Icon={ExploreOutlinedIcon} title='Explore' />
            <SidebarOption Icon={SubscriptionsOutlinedIcon} title='Subscriptions' />

            <hr />

            <SidebarOption Icon={VideoLibraryOutlinedIcon} title='Library' />
            <SidebarOption Icon={RestoreOutlinedIcon} title='History' />
            {
                user && (
                    <>
                        <SidebarOption Icon={PlayArrowOutlinedIcon} title='Your videos' />
                        <SidebarOption Icon={ScheduleOutlinedIcon} title='Watch later' />
                        <SidebarOption Icon={ThumbUpAltOutlinedIcon} title='Liked videos' />
                    </>
                )
            }

            <hr />

            {
                !user && (
                    <>
                        <SidebarOption Icon={null} title='Sign in to like videos, comment, and subscribe' />
                        <Button
                            variant="outlined"
                            onClick={login}
                            startIcon={<AccountCircleOutlinedIcon />}
                            sx={{ margin: '5px 24px' }}
                        >
                            Sign Up
                        </Button>

                        <hr />
                    </>
                )
            }

            {
                user ? (
                    <>
                        <h3 className="sidebar__option-subtitle">
                            Subscriptions
                        </h3>
                        <SidebarOption Icon={HomeOutlinedIcon} title='Channel 1' />
                        <SidebarOption Icon={HomeOutlinedIcon} title='Channel 2' />
                        <SidebarOption Icon={HomeOutlinedIcon} title='Channel 3' />
                        <SidebarOption Icon={HomeOutlinedIcon} title='Channel 4' />
                        <SidebarOption Icon={HomeOutlinedIcon} title='Channel 5' />
                        <SidebarOption Icon={HomeOutlinedIcon} title='Channel 6' />
                    </>
                ) : (
                    <>
                        <h3 className="sidebar__option-subtitle">
                            Best of YouTube
                        </h3>
                        <SidebarOption Icon={HomeOutlinedIcon} title='Music' />
                        <SidebarOption Icon={HomeOutlinedIcon} title='Sports' />
                        <SidebarOption Icon={HomeOutlinedIcon} title='Gaming' />
                        <SidebarOption Icon={HomeOutlinedIcon} title='Movies & Shows' />
                        <SidebarOption Icon={HomeOutlinedIcon} title='News' />
                        <SidebarOption Icon={HomeOutlinedIcon} title='Live' />
                        <SidebarOption Icon={HomeOutlinedIcon} title='Fashion & Beauty' />
                        <SidebarOption Icon={HomeOutlinedIcon} title='Learning' />
                        <SidebarOption Icon={HomeOutlinedIcon} title='Spotlight' />
                        <SidebarOption Icon={HomeOutlinedIcon}>360&#176; Video</SidebarOption>

                        <hr />
                        
                        <SidebarOption Icon={AddCircleOutlineIcon} title='Browse Channels' />
                    </>
                )
            }

            <hr />

            <SidebarOption Icon={YouTubeIcon} title='YouTube Premium ' />
            <SidebarOption Icon={SettingsOutlinedIcon} title='Settings' />
            <SidebarOption Icon={FlagOutlinedIcon} title='Report history' />
            <SidebarOption Icon={HelpOutlineOutlinedIcon} title='Help' />
            <SidebarOption Icon={FeedbackOutlinedIcon} title='Send feedback' />
        </div>
    );
}

export default Sidebar;