import Datacontent from "./components/Datacontent";
import ArrowIcon from "./images/icon-arrow.svg";

function App() {
  return (
    <div className="App">
      
      <div className="d-flex flex-column align-items-center main-container">
        <div className="text-white pt-4 pb-3">IP Address Tracker</div>
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              className="input-box"
            />
            <button type="submit" className="submit-btn">
              <img src={ArrowIcon} alt="submit" />
            </button>
          </form>
        </div>
        </div>
       <Datacontent
        ip={"temp"}
        location={["temp","temp","temp"]}
        timezone={"temp"}
        isp={"temp"}
      />
    </div>
  );
}

export default App;
