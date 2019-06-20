import { GIVE_ARTIST , GIVE_ARTISTLIST} from '../constants/action-type';

const initialState = {
    inputArtist : '',
    artistslist : []
}

function rootReducer( state = initialState , action) {
    if (action.type === GIVE_ARTIST){
        return {
            ...state,
            inputArtist: action.payload,
        }
    }

    if (action.type === GIVE_ARTISTLIST){
        return{
            ...state,
            artistslist : action.payload,
        }
    }
    return state;
}

export default rootReducer;