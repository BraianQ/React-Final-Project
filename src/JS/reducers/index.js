import { GIVE_ARTIST , GIVE_ARTISTLIST , TOKEN, GIVE_ALBUM, GIVE_CD} from '../constants/action-type';

const initialState = {
    inputArtist : '',
    artistsids : [],
    artistslist : [],
    albums : [],
    token : '',
    cds: []
}

function rootReducer( state = initialState , action) {
    if (action.type === GIVE_ARTIST){
        return {
            ...state,
            inputArtist: action.payload,
        }
    }

    if (action.type === GIVE_ALBUM){
        return {
            ...state,
            albums: action.payload,
        }
    }

    if (action.type === TOKEN ){
        return{
            ...state,
            token : action.payload,
        }
    } 
    
    if (action.type === GIVE_CD ){
        return{
            ...state,
            cds : action.payload,
        }
    }    

    if (action.type === GIVE_ARTISTLIST){
        return{
            ...state,
            artistslist : action.payload.artists,
            artistsids : action.payload.ids
        }
    }

    return state;
}

export default rootReducer;