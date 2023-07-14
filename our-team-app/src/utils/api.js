class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((err) => { throw err.message; });
  }

  register({ name, email, password }) {
    return fetch(`${this._url}/register`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => this._getResponseData(res));
  }

  getUsers() {
    return fetch(`${this._url}/users`, {
      headers: this._headers,
    })
      .then((res) => this._getResponseData(res));
  }

  getUser(id) {
    return fetch(`${this._url}/users/${id}`, {
      headers: this._headers,
    })
      .then((res) => this._getResponseData(res));
  }
}

const api = new Api({
  baseUrl: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
