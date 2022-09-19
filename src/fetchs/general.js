const getBadges = (token) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}badge`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }).then(async (response) => {
        if (response.status === 200) {
          const data = await response.json();
          resolve(data.badges);
        } else {
          reject([]);
        }
      });
    } catch (error) {
      reject([]);
    }
  });
};
const getCategories = (token) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}category`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }).then(async (response) => {
        if (response.status === 200) {
          const data = await response.json();
          resolve(data.categories);
        } else {
          reject([]);
        }
      });
    } catch (error) {
      reject([]);
    }
  });
};

const generalFetcher = {
    getBadges,
    getCategories
  };
  
  export default generalFetcher;