import styles from "../Layout.module.css"


function Header() {
    return(
        <div className={styles["top_-nav_-bar"]}>
        <div className={styles["search-bar"]}>
          <img
            className={styles["outline-interface-search"]}
            src="img/outline-interface-search@2x.png"
          />
        </div>
        <div className={styles["connect-wallet"]}>
          <img className={styles["asset-6-2"]} src="img/asset-6-2@2x.png" /><img
            className={styles["asset-7-2"]}
            src="img/asset-7-1@2x.png"
          /><img className={styles["outline-media-shuffle"]} src="img/outline-media-shuffle@2x.png" />
        </div>
        <div className={styles["nightmode-button"]}>
          <div className={styles["overlap-group-2"]}>
            <img className={styles["outline-general-moon"]} src="img/outline-general-moon@2x.svg" />
          </div>
        </div>
      </div>
    )
}

export default Header