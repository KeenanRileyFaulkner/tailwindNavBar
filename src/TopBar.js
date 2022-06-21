import { MdMarkChatUnread, MdPeopleAlt,  } from 'react-icons/md';
import { BsBellSlashFill, BsHash, BsPinAngleFill } from 'react-icons/bs';
import { FaSearch, FaInbox } from 'react-icons/fa';
import { IoMdHelpCircle } from 'react-icons/io';



const TopBar = () => {
    return (
        <div className='top-bar-container'>
            <HashIcon />
            <PageName pageName='Channel1'/>
            <UnreadMessages />
            <Notifications />
            <Pins />
            <Friends />
            <Search />
            <Inbox />
            <Help />
        </div>
    );
};

const HashIcon = () => <BsHash size='24' className='title-hashtag' />;
const PageName = ({pageName}) => <h2 className='title-text'>{pageName}</h2>;
const UnreadMessages = () => <MdMarkChatUnread size='20' className='top-bar-icon' />;
const Notifications = () => <BsBellSlashFill size='20' className='top-bar-icon' />;
const Pins = () => <BsPinAngleFill size='20' className='top-bar-icon' />;
const Friends = () => <MdPeopleAlt size='22' className='top-bar-icon  mr-4' />;
const Inbox = () => <BsBellSlashFill size='20' className='top-bar-icon' />;
const Help = () => <IoMdHelpCircle size='24' className='top-bar-icon' />;

const Search = () => {
    return (
        <div className='search'>
            <input className='search-input' type='text' placeholder='Search...' />
            <FaSearch size='20' className='my-auto hover:cursor-pointer hover:text-gray-200'/>
        </div>
    );
}

export default TopBar;