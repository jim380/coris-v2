const express = require("express");
const cors = require('cors');
const blockModel = require("./models");
const app = express();
const cron = require("node-cron");
const fetch = require("node-fetch");
require("dotenv").config();

const fetchURL = process.env.COSMOS_RPC

cron.schedule('*/5 * * * * *', function(){
    //cron to run at every 5sec to get latest blocks
        getBlocksAsync()
});


async function getBlocksAsync() {
    try{
      let response = await fetch(`${fetchURL}/blocks/latest`);
      const block = await response.json();
      const blockData =  new blockModel({
        height: block.block.header.height,
        hash: block.block_id.hash,
        proposer: block.block.header.proposer_address,
        noTxs: block.block.data.txs.length,
        time: block.block.header.time
         })
         blockData.save((err)=>{
            try {
                if (err){
                    throw('blockdata can not be duplicated')
                }
            } catch(e) {
                console.log(e)
            }
        })


     }catch(err){
      console.error(err);
      // Handle errors here
    }
  }



  
app.use(cors({
    origin: '*'
}));

app.get('/Blocks', async function(req, res) {
      
   const blocks = await blockModel.find({})
    res.json(blocks)
   console.log(blocks)
});



module.exports = app;