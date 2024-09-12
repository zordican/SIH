const DistrictDropdown = ({ onDistrictChange }) => {
    return (
      <select className="dropdown" onChange={onDistrictChange}>
        <option value="">Choose District</option>
        <option value="delhi">Delhi</option>
        <option value="west-delhi">West Delhi</option>
        <option value="north-delhi">North Delhi</option>
      </select>
    );
  };
  
  export default DistrictDropdown;
  