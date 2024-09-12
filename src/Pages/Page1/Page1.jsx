import CalendarComponent from "../../Components/CalendarComponent"
import DistrictDropdown from "../../Components/DistrictDropdown"
import MapComponent from "../../Components/MapComponent"
import "./Page1.css"

const Page1 = () => {
  return (
    <div className="app-container">
      <div className="header">
        <DistrictDropdown />
      </div>
      <div className="content">
        <MapComponent />
        <CalendarComponent />
      </div>
      <button className="go-button">GO</button>
    </div>
  )
}

export default Page1
