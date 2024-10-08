import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

function MainContainer() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  return (
    <div
      className={`flex flex-col p-2 sm:p-4 lg:p-6 min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-300`}
      style={{ overflow: "hidden" }} // Prevent scrolling on MainContainer
    >
      {/* Button List */}
      <div
        className={`flex overflow-x-auto py-2 space-x-2 sm:space-x-4 rounded-lg shadow-md ${
          isDarkMode ? "bg-black" : "bg-white"
        } transition-colors duration-300 scrollbar-hide`}
      >
        <ButtonList />
      </div>

      {/* Video Container */}
      <div
        className={`flex-1 mt-2 sm:mt-4 rounded-lg shadow-md p-2 sm:p-4 ${
          isDarkMode ? "bg-black" : "bg-white"
        } transition-colors duration-300 flex flex-col items-start`}
      >
        <VideoContainer />
      </div>
    </div>
  );
}

export default MainContainer;
