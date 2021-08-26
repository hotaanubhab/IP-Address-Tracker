const Datacontent = ({ ip, location, timezone, isp }) => {
    return ( 
        <div className="d-flex display-container position-absolute">
        <div className="d-flex flex-column py-2 px-3">
          <span className="">IP Address</span>
          <span className="">{ip}</span>
        </div>

        <div className="d-flex flex-column py-2 px-3">
          <span className="">Location</span>
          <span className="">
            {location[0]}, {location[1]} {location[2]}
          </span>
        </div>

        <div className="d-flex flex-column py-2 px-3">
          <span className="">Timezone</span>
          <span className="">{timezone}</span>
        </div>

        <div className="d-flex flex-column py-2 px-3">
          <span className="">ISP</span>
          <span className="">{isp}</span>
        </div>
      </div>
     );
}
 
export default Datacontent;