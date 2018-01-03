const baseUrl = 'http://localhost:3000/api/v1'

function getHeaders() {
  const token = localStorage.getItem('token');

  const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    Authorization: token
  };
  return headers
}

const login = (username, password) => {
  return fetch(`${baseUrl}/auth/`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${baseUrl}/current_user`, {
    headers: getHeaders()
  }).then(res => res.json());
};

export default {
  auth: {
    login,
    getCurrentUser
  }
};
