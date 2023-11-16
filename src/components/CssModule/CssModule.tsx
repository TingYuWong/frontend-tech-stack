import styles from "./style.module.css";

const CssModule = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Css Module</div>
      <div className={styles.content}>Content</div>
    </div>
  );
};

export default CssModule;
