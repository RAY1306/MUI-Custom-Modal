import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Stack, Typography } from '@mui/material';
import ModalOk from './components/ModalOk';
import ModalOkCancel from './components/ModalOkCancel';
import { Info } from '@mui/icons-material';

function App() {
  const [isOpenModalOkCancel, setOpenModalOkCancel] = useState(false);
  const [isOpenNestedModal, setOpenNestedModal] = useState(false);
  const [isOpenModalOk, setOpenModalOk] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Stack
          justifyContent={"space-between"}
          height={80}
        >
          <Button
            variant='contained'
            sx={{ textTransform: "none" }}
            onClick={(): void => setOpenModalOk(true)}
          >ModalOkオープン</Button>

          <Button
            variant='contained'
            sx={{ textTransform: "none" }}
            onClick={(): void => setOpenModalOkCancel(true)}
          >ModalOkCancelオープン</Button>
        </Stack>
      </header>

      <ModalOk
        title={<Stack
          direction={"row"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Info /><Typography fontWeight={"bold"}>ModalOk表示中</Typography>
        </Stack>}
        open={isOpenModalOk}
        btnHandle={(): void => setOpenModalOk(false)}
      >
        <Typography textAlign={"center"}>
          モーダルを閉じますか？
        </Typography>
      </ModalOk>

      <ModalOkCancel
        title={<Stack
          direction={"row"}
          justifyContent={"center"}
          alignContent={"center"}
        >
          <Info /><Typography fontWeight={"bold"}>ModalOkCancel表示中</Typography>
        </Stack>}
        open={isOpenModalOkCancel}
        unIgnorable={true}
        btn1Label='OK...'
        btn1Handle={(): void => setOpenNestedModal(true)}
        btn2Handle={(): void => setOpenModalOkCancel(false)}
      >
        <Typography textAlign={"center"}>
          モーダルを閉じますか？
        </Typography>
      </ModalOkCancel>

      {/* ネストされたモーダル */}
      <ModalOkCancel
        title={<Typography
          color='warning'
          fontWeight={"bold"}
        >ネストされたモーダル表示中</Typography>}
        open={isOpenNestedModal}
        unIgnorable={true}
        btn1Label='大丈夫です'
        btn1Handle={(): void => {
          setOpenNestedModal(false);
          setOpenModalOkCancel(false);
          window.alert("ModalOkCancelを閉じました");
        }}
        btn2Handle={(): void => setOpenNestedModal(false)}
      >
        <Typography textAlign={"center"}>
          本当にモーダルを閉じてよろしいですか？
        </Typography>
      </ModalOkCancel>
    </div >
  );
}

export default App;
