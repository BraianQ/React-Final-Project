import { GIVE_ARTIST } from '../constants/action-type';

export function getArtist(data) {
    return { type: GIVE_ARTIST , payload:data}
}

export function getArtistList(data){
    console.log("EXTRANAMENTE ESTOY ACA")
}

export function connectAPI(data , callback) {
    return async dispatch => {
            const response = await fetch(data, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer BQCKvcsyDey5E5djxjGkL_MUpIPVIAbmfP3yKzrtw_EXMfrYqdcwkK_jwbicbo1_-UkPedLFNowjN4-6HAWnka9nbP850M50Myus1B3ittlpr4UUolMyFNwh4l99vacMSMxGXk3pyAvwGTmFAYQosM6TYZBzD-JiNm6oJ0HRu_DXk3s891iT',
            }
          });
          const responseJson = await response.json();
          console.log(responseJson);
          dispatch(callback({response:responseJson}));
    }
}