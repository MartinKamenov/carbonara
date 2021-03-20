import axios from 'axios';
import config from '../../config';
import {action} from '../../types/request.middleware';

const requestMiddleware = (store: any) => (next: any) => (action: action) => {
    if(!action.request) {
        next(action);
        return;
    }

    const initialHeaders = {};
    // const initialHeaders = getAuthToken() ? {
    //     authorization: `Bearer ${getAuthToken()}`
    // } : {};

    const {
        url,
        method = 'GET',
        payload = {},
        headers = {},
        onSuccess,
        onFailure
    } = action.request;

    axios({
        url: config.BASE_URL + url,
        method: method,
        data: payload,
        headers: {...initialHeaders, ...headers}
    }).then((response: any) => {
        if(Boolean(onSuccess))
        next({
            type: onSuccess,
            result: response.data,
            request: {
                url,
                method,
                payload,
                headers,
            }
        });
    })
    .catch((error) => {
        if(Boolean(onFailure)) {
            next({
                type: onFailure,
                error
            });
        }
    });

    next(action);
};

export default requestMiddleware;