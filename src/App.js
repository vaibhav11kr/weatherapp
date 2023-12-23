import "./App.css";
import Search from "./components/Search";
import Main from "./components/Main";
import Hourlyforecast from "./components/Hourlyforecast";
import AirConditions from "./components/AirConditions";
import Time from "./components/Time";
import Weeklyforecast from "./components/Weeklyforecast";
function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#0B131E]">
      <div className="flex flex-col items-center">
        <Search/>
        <Time />
      </div>
      <div className="flex flex-col">
        <div className= "w-full flex flex-col items-center">
          <Main />
          <Hourlyforecast />
          <AirConditions />
        </div>
        <div className=" w-full flex flex-col justify-center items-center">
          <Weeklyforecast />
        </div>
      </div>
    </div>
  );
}

export default App;
