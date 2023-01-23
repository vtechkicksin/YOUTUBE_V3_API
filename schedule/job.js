const dotenv = require("dotenv").config();
const YT_data = require("../services/index");
const videoModel = require("../model/videoModel")

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
        insertData(title,description,publishedAt,thumbnailUrl);
    });
}

async function insertData(title,description,publishedAt,thumbnailUrl) 
{
    //this will create entry one by one
  await videoModel.create({title:title , description:description , imgUrl:thumbnailUrl, publishedAt:publishedAt}, (error, docs)=> {
  if (error) {
      console.log(error);
  } else {
      console.log('Documents inserted:', docs);
  }
  });
} 
job();


