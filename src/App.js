import Datacontent from "./components/Datacontent";
import ArrowIcon from "./images/icon-arrow.svg";
import { useState, useEffect } from "react";
import Sawo from "sawo";

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});
  const sawo_key = process.env.REACT_APP_SAWO_KEY;
  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: sawo_key,
      onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        setUserLoggedIn(true);
        setPayload(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return (
    <div className="App">
       {!isUserLoggedIn ? (
          <div className="formContainer" id="sawo-container"></div>
        ) : (
      <div>
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
        ip={sawo_key}
        location={["temp","temp","temp"]}
        timezone={"temp"}
        isp={"temp"}
      />
    </div>
    )};
  </div>  
  );
}

export default App;
