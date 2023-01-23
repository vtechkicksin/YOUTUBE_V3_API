const dotenv = require("dotenv").config();
const YT_data = require("../services/index");


async function job()
{
    const API_KEY = process.env.API_KEY;
    const query = process.env.QUERY;
    const data = await new YT_data().getVideoData(API_KEY,query);
    console.log("sandeepingg",data);
    if(data==false)
    {
        const API_KEY_1 = process.env.API_KEY_1;
        data = await new YT_data().getVideoData(API_KEY_1,query);
    }
    data.items.forEach((item) => 
    {
        const title = item.snippet.title;
        const description = item.snippet.description;
        const publishedAt = item.snippet.publishedAt
        const thumbnailUrl = item.snippet.thumbnails.medium.url
        console.log(title);
        console.log(description);
        console.log(publishedAt);
        console.log(thumbnailUrl);
    });
}


job();


