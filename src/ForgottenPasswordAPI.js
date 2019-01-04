class ForgottenPasswordAPI {

    static setPassword(dn, password) {
        const url = '/api/password';
        fetch(url, {
            method: 'POST',
            body: {
                "dn": dn,
                "password": password,
            },
        }).then(response => {
            return response.json();
        });
    }

    static getUserinfo(dn) {
        const url = `/api/userinfo/${dn}`;
        const request = new Request(url, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        });

        fetch(request).then(response => {
            return response.json();
        });
    }

}

export default ForgottenPasswordAPI