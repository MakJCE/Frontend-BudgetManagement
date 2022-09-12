const login = (values, setCookie, setSessionData) => {
  const { username, password } = values;
  // fetch login
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}person/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        }
      );
      if (response.status !== 200) reject({ message: 'Unauthorized' });
      else {
        const data = await response.json();
        // ======================= SET MANUAL COOCKIE =======================
        setCookie('token', data.token, {
          expires: new Date(
            new Date().setTime(new Date().getTime() + 30 * 60 * 1000)
          ) // expires in 30 mins from now
        });
        // ==================================================================
        setSessionData({ token: data.token, person: data.person });
        alert(`User ${data.person.username} logged in.`);
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
};
const register = (values) => {
  const { username, password } = values;
  return new Promise(async (resolve, reject) => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}person/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
        .then(async (response) => {
          if(response.status !== 200) reject();
          else{
            resolve();
          }
        })
        .catch((error) => {
          reject();
        });
    } catch (error) {
      reject();
    }
  });
};
const getUserData = (token) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}person`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }).then(async (response) => {
        if(response.status === 200) {
          const data = await response.json();
          resolve(data.person);
        }
        else{
          reject({});
        }
      })
    } catch (error) {
      reject({});
    }
  })
}
const logout = (removeCookie, setCookie) => {
  removeCookie('token');
};
const verifyLoggedIn = (Cookies) => {
  return !!Cookies.token;
};

const authFetcher = {
  login,
  register,
  getUserData,
  verifyLoggedIn,
  logout
};

export default authFetcher;
