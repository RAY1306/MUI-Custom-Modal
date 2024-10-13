import { Box, Button, CircularProgress, Divider, Modal, Typography } from "@mui/material";
import { modalStyle } from "../modalStyle";
import { memo } from "react";


type ModalOk = {
	open: boolean;
	unIgnorable?: boolean;
	btnHandle: () => {} | void;
	title?: React.ReactNode;
	btnLabel?: string;
	btnVarient?: 'text' | 'outlined' | 'contained';
	btnColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	btnStartIcon?: React.ReactNode | null;
	btnEndIcon?: React.ReactNode | null;
	btnDisabled?: boolean;
	btnProgress?: boolean;
	children?: React.ReactNode;
};

const ModalOk = memo((props: ModalOk) => {
	const {
		// このモーダルに関連する展開状態のstate
		open,

		// 画面外タップすることで無視できないか
		unIgnorable = false,

		// ボタンで処理する関数
		btnHandle = (): void => { },

		// タイトル
		title = <>情報</>,

		// ボタンラベル
		btnLabel = "OK",

		/*
		  ボタンのMUIでの種類
		  https://mui.com/material-ui/react-button/
		*/
		btnVarient = "contained",

		// ボタンカラー
		btnColor = "secondary",

		// ボタン左アイコン
		btnStartIcon = null,

		// ボタン右アイコン
		btnEndIcon = null,

		// ボタン無効状態
		btnDisabled = false,

		// ボタンプログレス
		btnProgress = null,

	} = props;

	return (
		<>
			{/* モーダル本体 */}
			<Modal
				sx={{
					"& > .MuiBackdrop-root": {
						backgroundColor: "rgba(0, 0, 0, 0.5)",
					},
				}}
				open={open} onClose={unIgnorable ? () => { } : btnHandle} >
				<Box sx={modalStyle}>
					{/* タイトル */}
					<Typography id="modal-modal-title" variant="h6" component="h2" style={{
						paddingBottom: 5,
						fontWeight: "600",
					}}><b>{title}</b></Typography>
					<Divider />
					{/* 本文 */}
					<div style={{
						marginTop: "20px",
					}}>
						{props.children}
					</div>
					{/* ボタン */}
					<div style={{
						display: "flex",
						justifyContent: "space-evenly",
						marginTop: 10,
					}}>

						<div style={{
							position: "relative",
						}}>
							<Button startIcon={btnStartIcon} endIcon={btnEndIcon} disabled={btnDisabled} variant={btnVarient} color={btnColor} onClick={btnHandle}>{btnLabel}</Button>
							{btnProgress ?
								<CircularProgress
									size={"25px"}
									sx={{
										position: "absolute",
										top: 6,
										left: 20,
									}} /> :
								null}
						</div>
					</div>
				</Box>
			</Modal>
		</>
	);
});

export default ModalOk;