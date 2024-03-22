import { GET_USER_WORKSPACES } from './action-type';
import { URL } from '../main';
import axios from 'axios';

export const getUserWorkspaces = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}user/workspace/${id}`);
            if(!data) throw new Error('No se pudo obtener data');
            
            return dispatch({
                type: GET_USER_WORKSPACES,
                payload: data
            });

        } catch (error) {
            console.error(error.message);
        }
    }
}