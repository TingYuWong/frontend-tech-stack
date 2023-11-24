import { useMemo } from "react";

const Child = ({ bool, arr }: { bool: boolean; arr: number[] }) => {
  const filterArr = () => {
    console.log("[ARTIFICIALLY SLOW] Calculating...");
    let startTime = performance.now();
    while (performance.now() - startTime < 500) {
      // 模擬blocking狀況
    }
    return arr.filter((item) => item >= 100);
  };

  /*
  目前情境：
  父層元件更新bool這個值 會導致子層元件更新
  子層元件re-render時會重新呼叫filterArr(刻意被我們延長執行時間的function)
  如果不使用useMemo cache function return的結果
  每次bool更新時 畫面都會卡頓500毫秒
  但加上useMemo後，因為filterArr回傳的值始終沒有變，子層元件因為bool props更新而re-render時，就不會重新呼叫filterArr，
  畫面就不會有blocking了
  */
  // const result = filterArr();
  const result = useMemo(() => filterArr(), []);

  return (
    <>
      <div>{bool ? "True" : "False"}</div>
      <div>{result[0]}</div>
    </>
  );
};

export default Child;
