
const validations = (userData) => {
    const errors = {}; 

    if(!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(userData.email)){
        errors.email = 'Este mail ingresado no es valido papu :v';
    }
    if(!userData.email){ // userData.email.lenght === ''; !userData.email 
        errors.email = 'Te olvidaste del email jeje T.T';
    }
    if(userData.email.lenght > 35) {
        errors.email = '¿Y ese email de donde papu? 🤔';
    }
    if(!/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,10}$/.test(userData.password)){
        errors.password = 'la contraseña debe contener al menos un número, un simbolo ejm: "?@#!-", y su longitud debe ser de entre 6 a 10 caracteres'
    }        

    return errors;
}


    



export default validations;