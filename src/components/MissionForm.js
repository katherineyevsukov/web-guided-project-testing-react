import React from "react";

const MissionForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    console.log("props for MissionForm: ", props);
    props.getData();
  };

  return (
    <>
      {props.isFetchingData ? (
        <div>we are fetching data</div>
      ) : (
        <button onClick={handleGetData}>Get Data</button>
      )}
    </>
  );
};

export default MissionForm;