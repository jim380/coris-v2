const express = require("express");
const cors = require('cors');
const blockModel = require("./models");
const app = express();
const cron = require("node-cron");
const fetch = require("node-fetch");
require("dotenv").config();

const fetchURL = process.env.COSMOS_RPC

cron.schedule('* * * * * *', function(){
    async function blocks() {
        const blocksData = await fetch(
            `${fetchURL}/block_search?query=%22block.height%3E10000000%22&per_page=10&page=1`)
        const response = await blocksData.json(); 
     
     response?.result?.blocks?.map((block) => {
      const b =  new  blockModel({
        height: block.block.header.height
         })
         b.save((err)=>{
            try {
                if (err){
                    throw('block height can not be duplicated')
                }
            } catch(e) {
                console.log(e)
            }
        })
       
    }) 
    
    
        }
    
        blocks()
});
  
app.use(cors({
    origin: '*'
}));

app.get('/Blocks', async function(req, res) {
      
   const blocks = await blockModel.find({})
    res.json(blocks)
   console.log(blocks)
});



module.exports = app;