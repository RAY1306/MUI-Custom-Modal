# MUI Custom Modal
MUIのModalを自分なりに使いやすくしたものです  
MUIを利用したReactでの開発でのみ使用可能です。初めにプロジェクトのフォルダを任意のターミナルで開いて`npm install @mui/material @emotion/react @emotion/styled`を実行してください。  
JavaScript及びTypeScriptに対応しています。  
MUIのModalの仕様上、モーダルのネスト(モーダルの上に重ねて表示するモーダル)も可能です。  
再配布や改変に関して細かいルールは特に規定していないので自己責任でどなたでもご自由にお使いください。  

## セット内容
- ModalOk.jsx
	- ボタン1つのみのモーダル
- ModalOkCancel.jsx
	- ボタン2つのモーダル
 - ModalOk.tsx
 	- ModalOkのTS版
  - ModalOkCancel.tsx
    	ModalOkCancelのTS版

## props: 型 (初期値)
- open: boolean
	- このモーダルに関連する展開状態のstate(false)

- unIgnorable?: boolean
	- 画面外をタップすることで無視できないか(false)

- btn1Handle: () => {} | void;
	- 左ボタンで処理する関数((): void => { })

- btn2Handle: () => {} | void;
	- 右ボタンで処理する関数((): void => { })

- title?: React.ReactNode;
	- モーダルの見出し(<>情報</>)

- btn1Label?: string;
	- 左ボタンのラベル("OK")

- btn1Varient?: 'text' | 'outlined' | 'contained';
	- 左ボタンのMUIでの種類("contained") 詳細：[https://mui.com/material-ui/react-button/](https://mui.com/material-ui/react-button/)

- btn1Color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'e
rror' | 'info' | 'warning';
	- 左ボタンのカラー("secondary")

- btn1startIcon?: React.ReactNode | null;
	- 左ボタンの先頭に表示するMUIアイコン(null) 詳細：[https://mui.com/material-ui/material-icons/](https://mui.com/material-ui/material-icons/)

- btn1endIcon?: React.ReactNode | null;
	- 左ボタンの末尾に表示するMUIアイコン(null)

- btn1Disabled?: boolean;
	- 左ボタンdisabled状態(false)

- btn1progress?: boolean;
	- 左ボタンのCircularProgress表示(false)

- btn2Label?: string;
	- 右ボタンのラベル("OK")

- btn2Varient?: 'text' | 'outlined' | 'contained';
	- 右ボタンのMUIでの種類("contained") 詳細：[https://mui.com/material-ui/react-button/](https://mui.com/material-ui/react-button/)

- btn2Color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'e
rror' | 'info' | 'warning';
	- 右ボタンのカラー("secondary")

- btn2startIcon?: React.ReactNode | null;
	- 右ボタンの先頭に表示するMUIアイコン(null) 詳細：[https://mui.com/material-ui/material-icons/](https://mui.com/material-ui/material-icons/)

- btn2endIcon?: React.ReactNode | null;
	- 右ボタンの末尾に表示するMUIアイコン(null)

- btn2Disabled?: boolean;
	- 右ボタンdisabled状態(false)

- btn2progress?: boolean;
	- 右ボタンのCircularProgress表示(false)

## その他
- Reactのmemoを利用しています
- titleにはMUI Iconsも使用できますが縦方向にずれる場合があります。その際はStackで囲むなどして適宜調整してください
- カスタマイズする際はMUIのドキュメントの確認をおすすめします
[https://mui.com/material-ui/getting-started/](https://mui.com/material-ui/getting-started/)
