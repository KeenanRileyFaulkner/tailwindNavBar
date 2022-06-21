import {AiOutlineClose} from "react-icons/ai";
import {BsHash} from "react-icons/bs";

const ChannelBar = () => {
    return (
        <div className="channel-bar">
            <ChannelButton channelName="Channel1"/>
            <ChannelButton channelName="Channel2"/>
            <ChannelButton channelName="Channel3"/>
            <ChannelButton channelName="Channel4"/>
        </div>
    );
};

const ChannelButton = ({channelName='Channel'}) => {
    return (
        <div className="channel-button group">
            <span class='text-gray-500'>
                <BsHash size="28" />
            </span>

            <h2 className="text-sm text-white self-center ml-1 transition-all duration-200 font-bold">
                {channelName}
            </h2>

            {/* <AiOutlineClose size="20" class="
                close-icon group-hover:scale-100"
            /> */}
            <span class="close-icon group-hover:scale-100 hover:bg-gray-600">
                <AiOutlineClose size="20" />
            </span>
        </div>
    );
};

export default ChannelBar;