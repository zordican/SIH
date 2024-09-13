const DistrictDropdown = ({ onDistrictChange }) => {
    return (
      <select className="dropdown" onChange={onDistrictChange}>
        <option value="">Choose Area</option>
        <option value="delhi">Delhi</option>
        <option value="west-delhi">West Delhi</option>
        <option value="north-delhi">North Delhi</option>
      </select>
      // <div>
      //   <h1>
      //     DELHI REGION
      //   </h1>
      // </div>
    );
  };
  
  export default DistrictDropdown;
  