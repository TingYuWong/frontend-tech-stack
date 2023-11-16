import styles from "./style.module.css";
import CustomInput from "../mui/CustomInput";
import { useState } from "react";

const Playground = () => {
  const [inputVal, setInputVal] = useState("");

  const handleInputValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <CustomInput value={inputVal} handleValueChange={handleInputValChange} />
    </div>
  );
};

export default Playground;
