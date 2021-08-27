import Datacontent from "./components/Datacontent.jsx";
import Mapcontent from "./components/Mapcontent.jsx";
import ArrowIcon from "./images/icon-arrow.svg";
import { useState, useEffect } from "react";
import Sawo from "sawo";

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false); //sawo login state
  const [payload, setPayload] = useState({}); // payload
  const [inputIp, setIp] = useState(""); //Search input for ip
  const [isError, setError] = useState(false); //error boolean
  const [data, setData] = useState({
    ip: "",
    city: "",
    region: "",
    lat: 0.0,
    lng: 0.0,
    postalCode: "",
    timezone: "",
    isp: "",
  }); //dynamic geodata
  
  //Effect hook
  useEffect(() => {
    requestGeoData();
    const sawo_key = process.env.REACT_APP_SAWO_KEY; //SAWO API KEY
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


  //Funtion to request API endpoint , "" (empty) IpAddress returns data for current Ip where request is made from.
  const requestGeoData = async(inputIp="")=>{
    const ipify_key = process.env.REACT_APP_IPIFY_KEY;
    await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${ipify_key}&ipAddress=${inputIp}&domain=${inputIp}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData({
          ip: data.ip,
          city: data.location.city,
          region: data.location.region,
          lat: parseFloat(data.location.lat),
          lng: parseFloat(data.location.lng),
          postalCode: data.location.postalCode,
          timezone: data.location.timezone,
          isp: data.isp,
        });
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };
  //State change for Ip when input value is changed
  const handleChange = (e) => {
    setIp(e.target.value);
    setError(false);
  };
  //Submit function for IP
  const handleSubmit = (e) => {
    e.preventDefault();
    //Regular expressions for validation
    const ipAddressRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    const domainRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

    if (ipAddressRegex.test(inputIp) || domainRegex.test(inputIp)) {
      requestGeoData(inputIp);
    } else {
      setError(true);
    }
  };
  

  return (
    <div className="App">
       {!isUserLoggedIn ? (
         <div>
          
          <div className="containerStyle">
          <div className="formContainer" id="sawo-container"></div>
          </div>
          </div>
        ) : (
      <div>
      <div className="d-flex flex-column align-items-center main-container">
        <div className="text-white pt-4 pb-3 heading">IP Address Tracker</div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              className="input-box"
              onChange = {handleChange}
            />

            <button type="submit" className="submit-btn">
              <img src={ArrowIcon} alt="submit" />
            </button>
          </form>
        </div>
        </div>
       <Datacontent
        ip={data.ip}
        location={[data.city,data.region,data.postalCode]}
        timezone={"UTC"+data.timezone}
        isp={data.isp}
      />
       <Mapcontent
        center={(data.lat && data.lng)?[data.lat,data.lng]:[20.5937, 78.9629]}
      />
    </div>
    )}
  </div>
  );
}

export default App;
