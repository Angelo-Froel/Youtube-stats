import auxio from 'axios';

const KEY='AIzaSyBI_n6KK8zjfxBBamzeWVbxIBRHoJixmnU'
export default auxio.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet,statistics',
        key:KEY
    }

  });