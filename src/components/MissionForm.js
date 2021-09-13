import React from "react";

const MissionForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    const resp = props.getData();
    console.log(resp);
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