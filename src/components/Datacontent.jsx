const Datacontent = ({ ip, location, timezone, isp }) => {
    return ( 
        <div className="d-flex display-container position-absolute">
        <div className="d-flex flex-column py-2 px-3 datafield">
          <span className="label">IP Address</span>
          <span className="datatext">{ip}</span>
        </div>
        <div className="bar"></div>
        <div className="d-flex flex-column py-2 px-3">
          <span className="label">Location</span>
          <span className="datatext">
            {location[0]}, {location[1]} {location[2]}
          </span>
        </div>
        <div className="bar"></div>
        <div className="d-flex flex-column py-2 px-3">
          <span className="label">Timezone</span>
          <span className="datatext">{timezone}</span>
        </div>
        <div className="bar"></div>
        <div className="d-flex flex-column py-2 px-3">
          <span className="label">ISP</span>
          <span className="datatext">{isp}</span>
        </div>
      </div>
     );
}
 
export default Datacontent;