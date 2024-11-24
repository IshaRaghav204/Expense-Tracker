import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./components/heading";
import OverviewCompo from "./components/overviewCompo";
const App = () => {
  return (
    
      <div className="card" style={{ width: "35rem", margin:"5% 30%" }}>
        <Heading/>
        <OverviewCompo/>
      </div>

  );
};

export default App;
