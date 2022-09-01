import axios from "axios";
import { Html5Qrcode } from "html5-qrcode";
import React, { useEffect, useState, Redirect } from "react";
import { useNavigate } from "react-router";
import AddItem from "./AddItem";

export default function Scan({ setScannedData, collectionId }) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Effect");
    //Create instance of the object. The only argument is the "id" of HTML element created above.
    const html5QrCode = new Html5Qrcode("qrRegion");

    // This method will trigger user permissions
    Html5Qrcode.getCameras()
      .then((devices) => {
        /**
         * devices would be an array of objects of type:
         * { id: "id", label: "label" }
         */
        if (devices && devices.length) {
          var cameraId = devices[0].id;
          html5QrCode
            .start(
              cameraId, // retreived in the previous step.
              {
                fps: 10, // sets the framerate to 10 frame per second
                qrbox: 250, // sets only 250 X 250 region of viewfinder to scannable, rest shaded.
              },
              (qrCodeMessage) => {
                // do something when code is read. For example:
                console.log(`QR Code detected: ${qrCodeMessage}`);
                //expample isbn 9781549776670
                axios
                  .get(`http://localhost:8000/books/${qrCodeMessage}`)
                  .then(async (data) => {
                    setScannedData(data.data);
                    await html5QrCode.stop();
                    navigate(`/collectionts/${collectionId}/addItem`);
                  });
              },
              (errorMessage) => {
                // parse error, ideally ignore it. For example:
                //console.log(`QR Code no longer in front of camera.`);
              }
            )
            .catch((err) => {
              // Start failed, handle it. For example,
              console.log(`Unable to start scanning, error: ${err}`);
            });
        }
      })
      .catch((err) => {
        console.log("Failed to find a camera of your device", err);
      });

    return async () => {
      if (html5QrCode.isScanning) {
        await html5QrCode.stop();
        html5QrCode.clear();
        console.log("STOP");
      }
    };
  }, []);

  return (
    <>
      <div id="qrRegion" />
    </>
  );
}
