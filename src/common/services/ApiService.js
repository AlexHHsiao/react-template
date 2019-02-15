class ApiService {
    constructor() {

    }

    simpleApi() {
        let url = 'https://api.github.com/userss/AlexHHsiao';
        return fetch(url, {
            method: 'GET'
        }).then(resp => resp.json());
    }
}

export default new ApiService;
