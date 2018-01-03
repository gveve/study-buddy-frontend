const baseUrl = 'http://localhost:3000/api/v1'

const token = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
};

const login = (username, password) => {
  return fetch(`${baseUrl}/auth/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${baseUrl}/current_user`, {
    headers: headers
  }).then(res => res.json());
};

export default {
  auth: {
    login,
    getCurrentUser
  }
};
