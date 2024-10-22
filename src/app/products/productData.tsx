// 選項格式
export type ColourOption = {
  label: string; // 顏色的文字描述或標籤
  color: string; // 顏色的實際值 (如 'red', '#fff', 'rgba(0,0,0,1)')
  value:string;
};

// 選項內容
export const colourOptions: ColourOption[] = [
  { label: "Red", color: "#FF0000" ,value:"Red"},
  { label: "Green", color: "#00FF00" ,value:"Green"},
  { label: "Blue", color: "#0000FF" ,value:"Blue"},
  { label: "aa", color: "#000000" ,value:"aa"},
];
