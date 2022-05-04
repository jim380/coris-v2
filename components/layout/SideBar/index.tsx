import styles from "../Layout.module.css"

function SideNavBar () {
    return (  
  <div className={styles["side-navigation"]}>
    <div className={styles["overlap-group16"]}>
      <div className={styles["logo"]}>
        <img className={styles["logo-1"]} src="img/asset-3-1@2x.png" />
        <div className={styles["coris-name"]}>
          <img className={styles["asset-4-1"]} src="img/asset-4-1@2x.png" /><img
            className={styles["asset-5-1"]}
            src="img/asset-5-1@2x.png"
          />
        </div>
      </div>
      <div className={styles["flex-row"]}>
        <div className={styles["flex-col-1"]}>
          <img
            className={styles["solid-general-chart-pie"]}
            src="img/solid-general-chart-pie@2x.png"
          /><img
            className={styles["flex-col-item"]}
            src="img/outline-communication-user@2x.png"
          /><img className={styles["flex-col-item"]} src="img/outline-interface-stack@2x.png" /><img
            className={styles["icon"]}
            src="img/outline-interface-edit@2x.png"
          /><img className={styles["icon-1"]} src="img/outline-interface-settings-adjust@2x.png" />
        </div>
        <div className={styles["flex-col-2"]}>
          <div className={styles["overview"] +" "+ styles["valign-text-middle"]}>Overview</div>
          <div className={styles["validators"] +" "+ styles["valign-text-middle"]}>Validators</div>
          <div className={styles["blocks"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-semi-bold-soap-24px"}>
            Blocks
          </div>
          <div
            className={styles["flex-col-item-1"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-semi-bold-soap-24px"}
          >
            Proposals
          </div>
          <div
           className={styles["flex-col-item-1"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-semi-bold-soap-24px"}
          >
            Parameters
          </div>
        </div>
        <div className={styles["ellipse-5"]}></div>
      </div>
    </div>
  </div>
    )
}


export default SideNavBar