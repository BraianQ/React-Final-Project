import { GIVE_ARTIST, GIVE_ARTISTLIST } from '../constants/action-type';

export function getArtist(data) {
    return { type: GIVE_ARTIST , payload:data}
}

export function getArtistList(data){
    let artists = [];
    if (data.response.artists.items != null){
    data.response.artists.items.forEach(item => {
      let image;
      if (item.images.length) {
        image = item.images[0].url;
      }
      let count = 0;
      artists[count] = {
        id: item.id,
        img: image,
        name: item.name,
        genre: item.genres
      };count = count + 1})
    } else {artists = []}
  return {
    type: GIVE_ARTISTLIST,
    payload: artists
  }
}

export function connectAPI(data , callback) {
    return async dispatch => {
            const response = await fetch(data, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer BQBFvbekPmwaWPS8EbK-n69s9BZYtEoTMK0dfGQLel1nSSdS-M4os0mQK1bkqSl8_ZhCacuYp71gPcLJxo0FKW1pxYOUj7NlGRydpNCT3WkYUl06AD1fDvzar6-XK3ObfjvTVYHQooZSxmhyUm7QQAUrCuSsGvsfiHb9sngP2graRN36uCAr',
            }
          });
          const responseJson = await response.json();
          dispatch(callback({response:responseJson}));
    }
}