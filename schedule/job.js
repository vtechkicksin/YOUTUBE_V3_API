const dotenv = require("dotenv").config();
const YT_data = require("../services/index");
const videoModel = require("../model/videoModel")
class scheduler
{
    static async job()
    {
        const API_KEY = process.env.API_KEY;
        const query = process.env.QUERY;
        let data = await new YT_data().getVideoData(API_KEY,query);
        console.log("sandeepingg",data);
        if(data==false) // I will take 2 Youtube Key if one return me false then i will use 2nd
        {
            const API_KEY_1 = process.env.API_KEY_1;
            data = await new YT_data().getVideoData(API_KEY_1,query);
        }
        const arr = [];
        data.items.forEach((item) => //converting json response into array then looping and then inserting to mongodb collection
        {
            const title = item.snippet.title;
            const description = item.snippet.description;
            const publishedAt = item.snippet.publishedAt
            const thumbnailUrl = item.snippet.thumbnails.medium.url
            console.log(title);
            console.log(description);
            console.log(publishedAt);
            console.log(thumbnailUrl);
            arr.push({title:title,
                description:description,
                imgUrl:thumbnailUrl,
                publishedAt:publishedAt
                })
        });
        scheduler.insertData(arr);
    }

    static async insertData(arr) 
    {
        //this will create entry one by one
        await videoModel.insertMany(arr,{ordered:false}, (error, docs)=> {
        if (error) {
            console.log(error);
        } else {
            console.log('Documents inserted:', docs);
        }
        });
    } 
    
}

module.exports = scheduler;