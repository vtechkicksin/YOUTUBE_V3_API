const axios = require("axios");


/*
i will be using axios to make HTTP requests
*/
class YTDATA
{
    async getVideoData(API_KEY,query)    // as per Youtube Data v3 API reference i keep part=snippet maxResults=20 and  publishedAfter=2020-01-01T
    {
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&publishedAfter=2020-01-01T00%3A00%3A00Z&q=${query}&type=video&key=${API_KEY}`;
        
        try {
            const response = await axios.get(url);
            console.log(response);
            if(response.status==200)
            {
                return response.data;
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = YTDATA;