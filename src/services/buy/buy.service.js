import axios from 'axios';
import config from '../config'

export const buyService = {
    buyPizzas
};

function buyPizzas(user, userinfo, items, price) {
    const headers = {
        headers: {
            Authorization: `Bearer ${user.data.data.jwt}`
        }
    };

   // console.log(JSON.stringify(header));
    return axios.post(`${config.apiUrl}/buyitems/`, {user, userinfo, items, price}, headers ).then(resp => {
        alert(resp.data.message);
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