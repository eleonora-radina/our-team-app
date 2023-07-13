class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if(res.ok) {
      return res.json();
    }
    return res.json().then((err) => {throw err.message;})
  }

  getUsers() {
    console.log(this._url);
    return fetch(`${this._url}/users`, {
      headers: this._headers,
    })
    .then((res) => { 
      return this._getResponseData(res)
    });
  }

  getUser(id) {
    console.log(this._url);
    return fetch(`${this._url}/users/${id}`, {
      headers: this._headers,
    })
    .then((res) => { 
      console.log(res);
      return this._getResponseData(res)
    });
  }
}

const api = new Api({
  baseUrl: 'https://reqres.in/api', 
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;