import React from 'react';
import { QrReader } from 'react-qr-reader';
import { Box } from '@mui/material'
import { useRouter} from 'next/router'
const Scanqr = () => {

	const { push } = useRouter();
  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <h1>Scan QR</h1>
        <p>Scan to Place Order</p>
      </Box>

      <QrReader
        constraints={{ facingMode: "environment" }}
        onResult={(result, error) => {
          if (!!result) {
            console.log(result);
            setData(result?.text);
            push(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Scanqr;
