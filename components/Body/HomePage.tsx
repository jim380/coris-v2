import styles from "../layout/Layout.module.css"


function HomePageContent() {
    return(
        <>
        <div className={styles["flex-row-1"]}>
        <div className={styles["flex-col-4"]}>
          <h1 className={styles["title"]}>Overview</h1>
          <div className={styles["live-line-chart-section"]}>
            <div className={styles["chart"]}>
              <div className={styles["group-7277"]}>
                <img className={styles["vector-2"]} src="img/vector-2@2x.png" />
                <div className={styles["flex-col-5"]}>
                  <div className={styles["price"]}>$0.11</div>
                  <div className={styles["x568-24h"]}>5.68% (24h)</div>
                </div>
              </div>
              <div className={styles["overlap-group1"]}>
                <div className={styles["rectangle-21"]}></div>
                <div className={styles["rectangle-23"]}></div>
                <div className={styles["rectangle-22"]}></div>
                <div className={styles["rectangle-24"]}></div>
                <div className={styles["text-2"] +" "+ "urbanist-semi-bold-black-12px"}>13:00</div>
                <div className={styles["text-3"] +" "+ "urbanist-semi-bold-black-12px"}>17:00</div>
                <div className={styles["text-4"] +" "+ "urbanist-semi-bold-black-12px"}>21:00</div>
                <div className={styles["text-5"] +" "+ "urbanist-semi-bold-black-12px"}>28:00</div>
                <img className={styles["vector-1"]} src="img/vector-1@1x.png" /><img
                  className={styles["path-4"]}
                  src="img/path-4@2x.png"
                /><img className={styles["oval-8-copy"]} src="img/oval-8-copy@2x.png" />
                <div className={styles["time"] +" "+ styles["valign-text-middle"]}>3:59AM</div>
                <div className={styles["overlap-group-3"]}>
                  <div className={styles["oval-7"]}></div>
                  <div className={styles["price-1"]}>$376</div>
                </div>
                <img className={styles["line-chart"]} src="img/line-chart@1x.png" /><img
                  className={styles["oval-8"]}
                  src="img/oval-8@2x.png"
                />
              </div>
              <div className={styles["logo-2"]}>
                <img className={styles["asset-6-1"]} src="img/asset-6-1@2x.png" /><img
                  className={styles["asset-7-1"]}
                  src="img/asset-7-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["flex-col-6"]}>
          <div className={styles["market-cap"]}>
            <div className={styles["group-7275"]}>
              <div className={styles["group-7273"]}>
                <div className={styles["market-cap-1"] +" "+ "urbanist-normal-black-24px"}>
                  Market Cap
                </div>
                <div className={styles["x24th-vol"] +" "+ "urbanist-normal-black-24px"}>24th Vol</div>
              </div>
              <div className={styles["group-7274"]}>
                <div className={styles["phone-1"] +" "+ "urbanist-bold-black-26px"}>$113 987 435</div>
                <div className={styles["phone-2"] +" "+ "urbanist-bold-black-26px"}>$113 987 435</div>
              </div>
            </div>
          </div>
          <div className={styles["overlap-group12"]}>
            <div className={styles["group-7322"]}>
              <div className={styles["group-7321"]}>
                <div className={styles["group-7278"]}>
                  <div className={styles["latest-block"] +" "+ "urbanist-normal-black-24px"}>
                    Latest Block
                  </div>
                  <div className={styles["phone-3"] +" "+ "urbanist-bold-black-26px"}>6 508 366</div>
                </div>
                <div className={styles["group-7279"]}>
                  <div className={styles["block-time"] +" "+ "urbanist-normal-black-24px"}>
                    Block Time
                  </div>
                  <div className={styles["x602s"] +" "+ "urbanist-bold-black-26px"}>6.02s</div>
                </div>
                <div className={styles["group-7280"]}>
                  <div className={styles["chain"] +" "+ "urbanist-normal-black-24px"}>Chain</div>
                  <div className={styles["corichain-1"] +" "+ "urbanist-bold-black-26px"}>
                    corichain-1
                  </div>
                </div>
              </div>
            </div>
            <img className={styles["rectangle-31"]} src="img/rectangle-31@2x.png" /><img
              className={styles["rectangle-32"]}
              src="img/rectangle-31@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles["flex-row-2"]}>
        <div className={styles["apr"]}>
          <div className={styles["group-7281"]}>
            <div className={styles["apr-1"] +" "+ "urbanist-normal-black-24px"}>APR</div>
            <div className={styles["text-1"] +" "+ "urbanist-bold-black-26px"}>~170%</div>
          </div>
        </div>
        <div className={styles["overlap-group13"]}>
          <div className={styles["place"] +" "+ "urbanist-normal-black-24px"}>Supply</div>
          <div className={styles["group-728"]}>
            <div className={styles["address"] +" "+ "urbanist-bold-black-26px"}>
              1 453 930 716.2345 CORIS
            </div>
          </div>
        </div>
        <div className={styles["flex-row-item"]}>
          <div className={styles["details"]}>
            <div className={styles["online-voting-power"] +" "+ "urbanist-normal-black-24px"}>
              Online Voting power
            </div>
            <div className={styles["group-7328"]}>
              <div className={styles["x36516m"] +" "+ "urbanist-bold-black-16px"}>365.16m</div>
              <div className={styles["place-1"] +" "+ "urbanist-normal-black-16px"}>from</div>
              <div className={styles["x36516m-1"] +" "+ "urbanist-bold-black-16px"}>365.16m</div>
            </div>
          </div>
          <div className={styles["piechart"]}>
            <div className={styles["overlap-group-4"]}>
              <div className={styles["percent"] +" "+ "urbanist-bold-chambray-21px"}>100%</div>
              <div className={styles["ellipse-9"]}></div>
            </div>
          </div>
        </div>
        <div className={styles["flex-row-item"]}>
          <div className={styles["details-1"]}>
            <div className={styles["active-validators"] +" "+ "urbanist-normal-black-24px"}>
              Active Validators
            </div>
            <div className={styles["group-7328-1"]}>
              <div className={styles["number-1"] +" "+ "urbanist-bold-black-16px"}>100</div>
              <div className={styles["out-of"] +" "+ "urbanist-normal-black-16px"}>out of</div>
              <div className={styles["number-2"] +" "+ "urbanist-bold-black-16px"}>251</div>
            </div>
          </div>
          <div className={styles["piechart-1"]}>
            <div className={styles["overlap-group-5"]}>
              <img className={styles["vector"]} src="img/ellipse-11@2x.png" />
              <div className={styles["percent-1"] +" "+ "urbanist-bold-chambray-21px"}>40%</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["flex-row-3"]}>
        <div className={styles["inflation"]}>
          <div className={styles["group-7282"]}>
            <div className={styles["inflation-1"] +" "+ "urbanist-normal-black-24px"}>Inflation</div>
            <div className={styles["percent-2"] +" "+ "urbanist-bold-black-26px"}>42.7%</div>
          </div>
        </div>
        <div className={styles["overlap-group14"]}>
          <div className={styles["community-pool"] +" "+ "urbanist-normal-black-24px"}>
            Community pool
          </div>
          <div className={styles["group-728"]}>
            <div className={styles["address"] +" "+ "urbanist-bold-black-26px"}>
              1 453 930 716.2345 CORIS
            </div>
          </div>
        </div>
        <div className={styles["overlap-group15"]}>
          <div className={styles["flex-col-7"]}>
            <div className={styles["tokenomics"] +" "+ "urbanist-normal-black-24px"}>Tokenomics</div>
            <div className={styles["flex-row-4"]}>
              <div className={styles["rectangle-28"]}></div>
              <div className={styles["place-2"] +" "+ "urbanist-light-black-24px"}>Supply</div>
              <div className={styles["rectangle-34"]}></div>
              <div className={styles["bonded"] +" "+ "urbanist-light-black-24px"}>Bonded</div>
            </div>
            <div className={styles["phone-container"]}>
              <div className={styles["phone-4"] +" "+ "urbanist-bold-black-16px"}>1 234 567 890</div>
              <div className={styles["phone-5"] +" "+ "urbanist-bold-black-16px"}>1 234 567 890</div>
            </div>
          </div>
          <div className={styles["overlap-group-6"]}>
            <img className={styles["ellipse-11"]} src="img/ellipse-11-1@2x.png" />
            <div className={styles["place-3"]}>supply</div>
            <div className={styles["percent-3"]}>75%</div>
          </div>
        </div>
      </div>
      <div className={styles["flex-row-5"]}>
        <div className={styles["latest-blocks"]}>Latest Blocks</div>
        <div className={styles["view-all"] +" "+ "urbanist-normal-black-24px"}>View all</div>
      </div>
      <div className={styles["latest-blocks-1"]}>
        <div className={styles["latest-blocks-tilte"]}>
          <div className={styles["height"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-semi-bold-black-17-2px"}>
            Height
          </div>
          <div className={styles["hash"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-semi-bold-black-17-2px"}>
            Hash
          </div>
          <div
            className={styles["proposer"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-semi-bold-black-17-2px"}
          >
            Proposer
          </div>
          <div
            className={styles["no-of-txs"] +" "+ styles["valign-text-middle"] +" "+  "urbanist-semi-bold-black-17-2px"}
          >
            No. of Txs
          </div>
          <div className={styles["time-1"] +" "+ styles["valign-text-middle"] +" "+ "urbanist-semi-bold-black-17-2px"}>
            Time
          </div>
        </div>
        <div className={styles["row1"]}>
          <div className={styles["overlap-group"]}>
            <div className={styles["phone"] +" "+ "urbanist-medium-absolute-zero-17-2px"}>
              6 508 396
            </div>
            <div className={styles["x34567efe34g6j7k85h"] +" "+ "urbanist-normal-black-17-2px"}>
              34567ef...e34g6j7k85h
            </div>
            <div className={styles["ellipse-8"]}></div>
            <div className={styles["dgtize-stake"] +" "+ "urbanist-normal-new-car-17-2px"}>
              Dgtize Stake
            </div>
            <div className={styles["number"] +" "+ "urbanist-normal-black-17-2px"}>3</div>
            <div className={styles["x6s-ago"] +" "+ "urbanist-normal-black-17-2px"}>6s ago</div>
          </div>
        </div>
        <div className={styles["latest-blocks-item"]}>
          <div className={styles["overlap-group-1"]}>
            <div className={styles["phone"] +" "+ "urbanist-medium-absolute-zero-17-2px"}>
              6 508 396
            </div>
            <div className={styles["x34567efe34g6j7k85h"] +" "+ "urbanist-normal-black-17-2px"}>
              34567ef...e34g6j7k85h
            </div>
            <div className={styles["ellipse-8-1"]}></div>
            <div className={styles["dgtize-stake"] +" "+ "urbanist-normal-new-car-17-2px"}>
              Dgtize Stake
            </div>
            <div className={styles["number"] +" "+ "urbanist-normal-black-17-2px"}>3</div>
            <div className={styles["x6s-ago"] +" "+ "urbanist-normal-black-17-2px"}>6s ago</div>
          </div>
        </div>
      </div>
      </>
    )
}

export default HomePageContent