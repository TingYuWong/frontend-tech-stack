import { useEffect, useState, useCallback } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [count, setCount] = useState(0);

  const handleSomething = useCallback(() => {
    console.info("This is a function from parent");
  }, []);

  // 下面這種function 會因為count持續在變化而不斷被賦予新位置
  // 因為沒有使用useCallback cache function + memo cache child component(memo作用請參考Child.tsx的comment)
  // const handleSomething = () => {
  //   console.info("This is a function from parent");
  // };

  // --------------------------------------------------------------------------------------

  /* 
  下面這種function 會因為count持續在變化而不斷被賦予新位置 即使用了useCallback function也不會被cache
  導致count更新時畫面會有blocking的情況
  => blocking 阻塞: js重新渲染畫面時因為某些因素導致畫面處理很久才能讓整個網頁正常運作
  */

  // const handleSomething = useCallback(() => {
  //   console.info("This is a function from parent");
  //   setCount(count + 1);
  // }, [count]);

  useEffect(() => {
    console.info("I am parent");
  }, []);

  return (
    <div>
      <div onClick={() => setCount(count + 1)}>
        parent state / child props: {count}
      </div>
      <Child handleSomething={handleSomething} />
    </div>
  );
}

export default App;
