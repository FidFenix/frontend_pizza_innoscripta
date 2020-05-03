import axios from 'axios';
import config from '../config';

export const ordersService = {
    getBuys
};

function getBuys(user) {
    const headers = {
        headers: {
            Authorization: `Bearer ${user.data.data.jwt}`
        }
    };

    return axios.get(`${config.apiUrl}/buys/`, headers ).then(resp => {
        console.log(resp);
        return resp;
    }).catch(error => {
        if( "response" in error ){
            if( error.response !== undefined ){
                if('status' in error.response ) { alert(error.response.data.message);}
                else {console.log( error.response );}
            }else {
                console.log( error );
            }
        }else{
            console.log( error );
        }
    });
}