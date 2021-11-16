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

interface SidebarOptionProps {
    Icon: SvgIconComponent | null;
    title: string;
}

const SidebarOption = ({ Icon, title}: SidebarOptionProps) => {
    return (
        <div className="sidebar__option">
            {Icon && <Icon className="sidebar__option-icon" />}
            <span className="sidebar__option-title">{title}</span>
        </div>
    );
}

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar = ({
    isOpen
}: SidebarProps) => {

    return (
        <div className={`sidebar ${isOpen ? 'is-open': ''}`}>
            <SidebarOption Icon={HomeOutlinedIcon} title='Home' />
            <SidebarOption Icon={ExploreOutlinedIcon} title='Explore' />
            <SidebarOption Icon={SubscriptionsOutlinedIcon} title='Subscriptions' />

            <hr />

            <SidebarOption Icon={VideoLibraryOutlinedIcon} title='Library' />
            <SidebarOption Icon={RestoreOutlinedIcon} title='History' />
            <SidebarOption Icon={PlayArrowOutlinedIcon} title='Your videos' />
            <SidebarOption Icon={ScheduleOutlinedIcon} title='Watch later' />
            <SidebarOption Icon={ThumbUpAltOutlinedIcon} title='Liked videos' />

            <hr />

            <h3 className="sidebar__option-subtitle">
                Subscriptions
            </h3>
            <SidebarOption Icon={HomeOutlinedIcon} title='Channel 1' />
            <SidebarOption Icon={HomeOutlinedIcon} title='Channel 2' />
            <SidebarOption Icon={HomeOutlinedIcon} title='Channel 3' />
            <SidebarOption Icon={HomeOutlinedIcon} title='Channel 4' />
            <SidebarOption Icon={HomeOutlinedIcon} title='Channel 5' />
            <SidebarOption Icon={HomeOutlinedIcon} title='Channel 6' />

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