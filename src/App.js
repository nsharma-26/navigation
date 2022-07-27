import logo from "./logo.svg";
import "./App.css";
import BottomNavigation from "./container/bottomNavigation/BottomNavigation";
import ComponetBlock from "./container/componentBlock/ComponentBlock";

function App() {
  return (
    <div className="App">
      <BottomNavigation />
      <ComponetBlock />
    </div>
  );
}

export default App;
