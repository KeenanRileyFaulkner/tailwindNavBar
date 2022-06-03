import SideBar from "./SideBar";
import ChannelBar from "./ChannelBar";
import TopBar from "./TopBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
      <TopBar />
    </div>
  )
}

export default App;