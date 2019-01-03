class ForgottenPasswordAPI {

    static setPassword(password){
        const url = '/api/password';
        fetch(url, {
            method: 'POST',
            body: {},
        }).then(response => {return response.json()})
    }
}