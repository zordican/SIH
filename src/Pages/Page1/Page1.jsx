import { useState } from "react";
import CalendarComponent from "../../Components/CalendarComponent";
import DistrictDropdown from "../../Components/DistrictDropdown";
import MapComponent from "../../Components/MapComponent";
import "./Page1.css";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const [selectedDistrict, setSelectedDistrict] = useState({
    name: '',
    coordinates: [28.6139, 77.2090], // Default to Delhi
  });

  const handleDistrictChange = (event) => {
    const districtValue = event.target.value;
    
    let districtData = {
      name: "Delhi",
      coordinates: [28.6139, 77.2090], // Default Delhi coordinates
    };

    if (districtValue === "west-delhi") {
      districtData = { name: "West Delhi", coordinates: [28.6758, 77.1111] };
    } else if (districtValue === "north-delhi") {
      districtData = { name: "North Delhi", coordinates: [28.7510, 77.1177] };
    }

    setSelectedDistrict(districtData);
  };

  const navigate = useNavigate();  // Get the navigate function from useNavigate

  const handleNavigate = () => {
    navigate("/input");  // Navigate to the "/select" route
  };

  return (
    <div className="app-container">
      <div className="header">
        <DistrictDropdown onDistrictChange={handleDistrictChange} />
      </div>
      <div className="content">
        <MapComponent selectedDistrict={selectedDistrict} />
        <CalendarComponent />
      </div>
      <button className="go-button" onClick={handleNavigate}>GO</button>
    </div>
  );
};

export default Page1;
