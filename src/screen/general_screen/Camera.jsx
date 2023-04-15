import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import  './camera.css'
import { learningSectionData } from './../../data';

function WebcamImage() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 350,
    height: 350,
    facingMode: { exact: "environment" }
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    alert(imageSrc)
    setImg(imageSrc);
  }, [webcamRef]);

  return (
    <div className="Container">
      {img === null ? (
        <>
          <Webcam
            audio={false}
            mirrored={true}
            height={300}
            width={300}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <button onClick={capture}>Capture photo</button>
        </>
      ) : (
        <>
          <img src={img.data} alt="screenshot" />
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