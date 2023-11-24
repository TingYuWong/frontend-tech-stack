import { useEffect, memo } from "react";

type ChildProps = {
  handleSomething: () => void;
};

// const Child = ({ handleSomething }: ChildProps) => {
//   console.log("[ARTIFICIALLY SLOW] Rendering <Child />");
//   let startTime = performance.now();
//   while (performance.now() - startTime < 500) {
//     // Do nothing for 500 ms to emulate extremely slow code
//   }

//   useEffect(() => {
//     console.info("I am child");
//   }, []);

//   return <div onClick={handleSomething}>Child</div>;
// };

/* 
用memo的作用 => React會判對傳入子層元件的props有沒有更動，沒有就不需要re-render

這邊傳入的props是一個在父層定義的function，
原本父層會因為父層變數count更動就re-render，導致function也被放到新的記憶體位址，
最後導致以此function為props的子層元件也re-render
但如果我們搭配useCallback，確保父層傳來的function有被cache住，那麽只要function裡面用到的state沒有變動，
子層收到的props就不會變，子層也就不會re-render了！
*/
const Child = memo(({ handleSomething }: ChildProps) => {
  console.log("[ARTIFICIALLY SLOW] Rendering <Child />");
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // 500毫秒內不渲染子層元件 模擬re-render子層元件的blocking情況
  }

  useEffect(() => {
    console.info("I am child");
  }, []);

  return <div onClick={handleSomething}>Child</div>;
});

export default Child;
