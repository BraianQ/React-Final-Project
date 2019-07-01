import { GIVE_ARTIST, GIVE_ARTISTLIST , TOKEN , GIVE_ALBUM, GIVE_CD} from '../constants/action-type';

export function getArtist(data) {
    return { type: GIVE_ARTIST , payload:data}
}

export function obtainToken(data) {
    return { type: TOKEN , payload:data}
}

export function artistList(data){
  let artistsId = [];
  let artists = [];
  if(data.response.artists.items) {
    data.response.artists.items.forEach(item => {
      let image;
      if (item.images.length) {
        image = item.images[0].url;
      }
      artistsId.push(item.id);
      artists[item.id] = {
        id: item.id,
        img: image,
        name: item.name,
        genre: item.genres
      }
    })
  } else {
    artistsId = null;
    artists = null;
  }
  return { type : GIVE_ARTISTLIST , payload: {ids:artistsId , artists:artists}}
}

export function getArtistList(data,data2){
return async dispatch => {
  try {
    let bearer = 'Bearer ' + data;
    let finalurl = `https://api.spotify.com/v1/search?q=${data2}&type=artist`;
    const response = await fetch(finalurl, {
      method: 'GET',
      headers: {
        'Authorization': bearer,
      }
    });
    const responseJson = await response.json();
    dispatch(artistList({response:responseJson}));
  }
  catch (Error) {
    console.error(Error);
  }
}
}

export function Album(json){
  let data = json.response.items.filter((item) => {
    return (item.available_markets.includes("AR"));
  }).map((item) => {
    return {
      name: item.name,
      id: item.id,
      img: item.images[0].url,
      release: item.release_date.split('-')[0]
    }
  });
  return { type : GIVE_ALBUM , payload: data}
}

export function getAlbumList(token,data){
  return async dispatch => {
    try {
      let bearer = 'Bearer ' + token;
      let finalurl = `https://api.spotify.com/v1/artists/${data}/albums`;
      const response = await fetch(finalurl, {
        method: 'GET',
        headers: {
          'Authorization': bearer,
        }
      });
      const responseJson = await response.json();
      dispatch(Album({response:responseJson}));
    }
    catch (Error) {
      console.error(Error);
    }
  }
}

export function cds(json){
  let data = json.response.items;
  return { type : GIVE_CD , payload : data}
}

export function getCds(token,data){
  return async dispatch => {
    try {
      let bearer = 'Bearer ' + token;
      let finalurl = `https://api.spotify.com/v1/albums/${data}/tracks`;
      const response = await fetch(finalurl, {
        method: 'GET',
        headers: {
          'Authorization': bearer,
        }
      });
      const responseJson = await response.json();
      dispatch(cds({response:responseJson}));
    }
    catch (Error) {
      console.error(Error);
    }
  }
}
