class ForgottenPasswordAPI {

    static setPassword(dn, password) {
        const url = '/api/password';
        return fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "dn": dn,
                "password": password,
            }),
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

        return fetch(request).then(response => {
            return response.json();
        });
    }

    static getDn() {
        const url = `/api/userinfo/dn`;
        return fetch(url, {
            method: 'GET', headers: {
                'x-dn': '',
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.text().then(text => {
                return text;
            });
        });
    }

}

export default ForgottenPasswordAPI;