import styles from "./floating.module.css";

export const FloatingButtons = () => {
  return (
    <div>
      <div className={styles.left}>
        <img src="http://cdn.onlinewebfonts.com/svg/img_567828.png" alt="bag" />
        <p>Kimaye Rewards</p>
      </div>
      <div className={styles.right}>
        <img
          src="https://cdn.live.zoko.io/store/customers/d9b85c58-d794-4956-a18e-c36f838226bb-zo-ko-Icon.svg"
          alt="chatting"
        />
      </div>
    </div>
  );
};
