import { LOGIN , GET_USER_WORKSPACES , IS_LOGIN } from './action-type';
import { URL } from '../main';
import axios from 'axios';

export const login = (userData) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${URL}login`, userData);
            if(!data) throw new Error('No se pudo obtener data');
            
            return dispatch({
                type: LOGIN,
                payload: data
            })
        } catch (error) {
            console.log(error.message);
        }
    }
};

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
};

export const setIsLogin = (value) => {
    return {
        type: IS_LOGIN,
        payload: value
    }
};