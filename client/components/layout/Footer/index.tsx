import styles from "../Layout.module.css"

function Footer() {
    return(
        <div className={styles["flex-row-6"]}>
      <div className={styles["flex-col-8"]}>
        <div className={styles["company"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-bold-black-20px"}>
          Company
        </div>
        <div className={styles["about"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}>
          About
        </div>
        <div className={styles["security"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}>
          Security
        </div>
        <div className={styles["place-4"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}>
          Contact
        </div>
        <div className={styles["climate"] +" "+  styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}>
          Climate
        </div>
      </div>
      <div className={styles["flex-col"]}>
        <div className={styles["our-projects"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-bold-black-20px"}>
          Our Projects
        </div>
        <div
          className={styles["testnet-portal"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}
        >
          Testnet Portal
        </div>
        <div
          className={styles["staking-portal"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}
        >
          Staking Portal
        </div>
        <div
          className={styles["node-monitoring"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}
        >
          Node Monitoring
        </div>
      </div>
      <div className={styles["flex-col-9"]}>
        <div className={styles["logo-3"]}>
          <img className={styles["asset-6-2-1"]} src="img/asset-6-2-1@2x.png" /><img
            className={styles["asset-7-2-1"]}
            src="asset-7-2-1.png"
          /><img className={styles["asset-8-1"]} src="img/asset-8-1@2x.png" />
        </div>
        <div className={styles["community"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-bold-black-20px"}>
          Community
        </div>
        <div className={styles["about-1"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}>
          About
        </div>
        <div className={styles["security-1"] +" "+ styles["valign-text-middle"] +" "+  "urbanist-medium-black-18px"}>
          Security
        </div>
        <div className={styles["place-5"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}>
          Contact
        </div>
        <div className={styles["climate-1"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}>
          Climate
        </div>
        <div className={styles["solidbrands-container"]}>
          <img
            className={styles["solid-brands-telegram"]}
            src="img/solid-brands-telegram@2x.png"
          /><img className={styles["solid-brands"]} src="img/solid-brands-linkedin@2x.png" /><img
            className={styles["solid-brands"]}
            src="img/solid-brands-instagram@2x.png"
          /><img className={styles["solid-brands"]} src="img/solid-brands-twitter@2x.png" /><img
            className={styles["solid-brands"]}
            src="img/solid-brands-youtube@2x.png"
          /><img className={styles["solid-brands"]} src="img/solid-brands-chrome@2x.png" />
        </div>
        <div className={styles["eosadolor382gmailcom"] +" "+ styles["valign-text-middle"]}>
          eosadolor382@gmail.com
        </div>
      </div>
      <div className={styles["flex-col-10"]}>
        <div className={styles["resources"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-bold-black-20px"}>
          Resources
        </div>
        <div className={styles["about-2"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}>
          About
        </div>
        <div className={styles["security-2"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}>
          Security
        </div>
        <div className={styles["place-6"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}>
          Contact
        </div>
        <div className={styles["climate-2"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}>
          Climate
        </div>
      </div>
      <div className={styles["flex-col"]}>
        <div className={styles["learn"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-bold-black-20px"}>
          Learn
        </div>
        <div
          className={styles["testnet-portal-1"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}
        >
          Testnet Portal
        </div>
        <div
          className={styles["staking-portal-1"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-medium-black-18px"}
        >
          Staking Portal
        </div>
        <div
          className={styles["node-monitoring-1"] +" "+ styles["valign-text-middle"] +" "+  'urbanist-medium-black-18px'}
        >
          Node Monitoring
        </div>
      </div>
    </div>
    )
}

export default Footer