import { 
    FETCH_SURVEYS,
    DELETE_SURVEY 
} from '../actions/types';

export default function( state = [], action ) {
    switch ( action.type ) {
        case FETCH_SURVEYS:
            return action.playload;
        case DELETE_SURVEY:
            return action.payload;
        default:
            return state;
    }
}
