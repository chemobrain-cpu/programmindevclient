import React, { useState } from "react";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function WebcamImage() {
  const [img, setImg] = useState(null);
  

  

  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    alert(dataUri)
    setImg(dataUri);
  }

  return (
    <div className="Container">
      {img === null ? (
        <>
          <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    /></>
      ) : (
        <>
          <img src={img} alt="screenshot"  crossOrigin=""/>
          <button onClick={() => setImg(null)}>Retake</button>
        </>
      )}
    </div>
  );
}

function Cameras() {
  return (
    <div className="App">
      <WebcamImage />
    </div>
  );
}

export default Cameras;