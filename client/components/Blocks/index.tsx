import  React from "react";
import styles from "./Blocks.module.css";
import {formatTime, formatHash} from "../Util/format"


function BlocksContent({data}: any) {
console.log(data)

  
//if (typeof(data) == 'object') {
 //data.data.result.blocks.map((block: any) => {
  //console.log(block)
  //console.log()
 //console.log(formatTime(block.block.header.time))
 
  //console.log(block.block.data.txs.length)
//}) 

//}


    return(
        <> 
        <div>

        </div>
      <div className={styles["flex-row-5"]}>
        <div className={styles["latest-blocks"]}>Blocks</div>
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
        { typeof(data) == 'object' && 
        data?.data?.result?.blocks?.map((block:any, index:any) => 
        <div className={styles["row1"]} key={index} >
          <div className={styles["overlap-group"]}>
            <div className={styles["phone"] +" "+ "urbanist-medium-absolute-zero-17-2px"}>
              {block.block.header?.height? block.block.header.height : null} 
            </div>
            <div className={styles["x34567efe34g6j7k85h"] +" "+ "urbanist-normal-black-17-2px"}>
             {block.block_id?.hash? formatHash(block.block_id.hash, 10, "...") : null} 
            </div>
            <div className={styles["ellipse-8"]}></div>
            <div className={styles["dgtize-stake"] +" "+ "urbanist-normal-new-car-17-2px"}>
              Dgtize Stake
            </div>
            <div className={styles["number"] +" "+ "urbanist-normal-black-17-2px"}>
              {block.block?.data?.txs? block.block.data.txs.length : null} </div>
            <div className={styles["x6s-ago"] +" "+ "urbanist-normal-black-17-2px"}>
              {block.block?.header?.time? formatTime(block.block.header.time) : null}  </div>
          </div>
        </div>
   )} 
      </div>
      <div>

      </div>
      </>
    )
}

export default BlocksContent
