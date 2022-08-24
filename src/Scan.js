import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect } from 'react';

export default function Scan(props) {
    const qrcodeRegionId = "html5qr-code-full-region";

    const onSuccess = (decodedText, decodedResult) => {
        console.log("decodedText:", decodedText);
        console.log("decodedResult:", decodedResult);
    };

    const onError = (error) => {
        console.error(error);
    };

    useEffect(() => {
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, {});

        html5QrcodeScanner.render(onSuccess, onError);
    
      return () => {
        html5QrcodeScanner.clear().catch(error => {
            console.error("Failed to clear html5QrcodeScanner. ", error);
        });
      }
    }, [])
    
    return <div id={qrcodeRegionId} />;
}