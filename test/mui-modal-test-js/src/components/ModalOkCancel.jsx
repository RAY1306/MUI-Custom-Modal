import { Box, Button, CircularProgress, Divider, Modal, Typography } from "@mui/material";
import { modalStyle } from "./modalStyle";
import { memo } from "react";

const ModalOkCancel = memo(props => {
	const {
		// このモーダルに関連する展開状態のstate
		open = false,

		// 画面外をタップすることで無視できないか
		unIgnorable = false,

		// ボタン1で処理する関数
		btn1Handle = () => { },

		// ボタン2で処理する関数
		btn2Handle = () => { },

		// タイトル
		title = <>情報</>,

		// ボタン1ラベル
		btn1Label = "OK",

		// ボタン1のMUIでの種類
		// https://mui.com/material-ui/react-button/
		btn1Varient = "contained",

		// ボタン1カラー
		btn1Color = "secondary",

		// ボタン1左アイコン
		// https://mui.com/material-ui/material-icons/
		btn1startIcon = null,

		// ボタン1右アイコン
		btn1endIcon = null,

		// ボタン1無効状態
		btn1Disabled = false,

		// ボタン1progress
		btn1progress = false,

		// ボタン2ラベル
		btn2Label = "キャンセル",

		// ボタン2のMUIでの種類
		btn2Varient = "text",

		// ボタン2カラー
		btn2Color = "primary",

		// ボタン2左アイコン
		btn2startIcon = null,

		// ボタン2右アイコン
		btn2endIcon = null,

		// ボタン2無効状態
		btn2Disabled = false,

		// ボタン2progress
		btn2progress = false,

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
				open={open}
				onClose={unIgnorable ? () => { } : btn1Handle}
			>
				<Box sx={modalStyle}>
					{/* タイトル */}
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
						textAlign="center"
						style={{
							paddingBottom: 5,
							fontWeight: "600",
						}}
					><b>{title}</b></Typography>
					<Divider />
					{/* 本文 */}
					<div style={{
						marginTop: "20px",
					}}>
						{props.children}
					</div>

					<div style={{
						display: "flex",
						justifyContent: "space-evenly",
						marginTop: 10,
					}}>
						{/* ボタン1 */}
						<div style={{
							position: "relative",
						}}>
							<Button startIcon={btn1startIcon} endIcon={btn1endIcon} disabled={btn1Disabled} variant={btn1Varient} color={btn1Color} onClick={btn1Handle}>{btn1Label}</Button>
							{btn1progress ?
								<CircularProgress
									size={"25px"}
									sx={{
										position: "absolute",
										top: 6,
										left: 20,
									}} /> :
								null}
						</div>
						{/* ボタン2 */}
						<div style={{
							position: "relative",
						}}>
							<Button startIcon={btn2startIcon} endIcon={btn2endIcon} disabled={btn2Disabled} variant={btn2Varient} color={btn2Color} onClick={btn2Handle}>{btn2Label}</Button>
							{btn2progress ?
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

export default ModalOkCancel;