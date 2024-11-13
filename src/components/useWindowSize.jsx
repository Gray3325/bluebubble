import { useState, useEffect } from 'react';

function useWindowSize() {
  // 定義初始狀態，寬度與高度為 undefined
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // 建立一個處理視窗變更的函數
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // 初始呼叫一次來設置當前視窗大小
    handleResize();

    // 在視窗變更時觸發 handleResize
    window.addEventListener('resize', handleResize);

    // 在元件卸載時移除監聽器
    return () => window.removeEventListener('resize', handleResize);
  }, []); // 空的依賴陣列確保 useEffect 只會在首次渲染時執行

  return windowSize;
}

export default useWindowSize;
