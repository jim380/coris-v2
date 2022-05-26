const express = require('express')
const app = express()
const port = 4000
const cron = require("node-cron");
const fetch = require("node-fetch");
const  mongoose = require('mongoose')
//let shell = require("shelljs")

mongoose.connect("mongodb+srv://coris:12345@cluster0.5ovl7.mongodb.net/coris",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})





const blockSchema = new mongoose.Schema({
    height: {
        type: Number,
        required: true,
        unique: true
    }
})

const Block = mongoose.model('Block', blockSchema)

cron.schedule('* * * * * *', function(){
    async function blocks() {
    const blocksData = await fetch(
        "http://66.206.5.26:26657/block_search?query=%22block.height%3E10000000%22&per_page=10&page=1")
    const response = await blocksData.json(); 
 
 response?.result?.blocks?.map((block) => {
  //console.log(block.block.header.height)
  const b =  new  Block({
    height: block.block.header.height
     })
    
    b.save((err, result)=>{
        try {
            if (err){
                throw('height already saved')
            }else{
                console.log(result)
            }
        } catch(e) {
            console.log(e)
        }
    })
   

    })




    }

    blocks()

    });





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
