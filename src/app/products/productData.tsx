
// 背景顏色
export type ColourOption = {
  label: string;  // 顏色的文字描述或標籤
  color: string;  // 顏色的實際值 (如 'red', '#fff', 'rgba(0,0,0,1)')
};

// 選項內容
export const colourOptions: ColourOption[] = [
  { label: "Red", color: "#FF0000" },
  { label: "Green", color: "#00FF00" },
  { label: "Blue", color: "#0000FF" }
];