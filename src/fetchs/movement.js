const getAllMovements = (token) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}movement`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }).then(async (response) => {
        if (response.status === 200) {
          const data = await response.json();
          resolve(data.movements);
        } else {
          reject([]);
        }
      });
    } catch (error) {
      reject([]);
    }
  });
};

const createMovement = (movement, token) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}movement`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(movement)
      }).then(async (response) => {
        if (response.status === 200) {
          resolve();
        } else {
          reject();
        }
      });
    } catch (error) {
      reject();
    }
  });
};

const movementFetcher = {
  getAllMovements,
  createMovement
};

export default movementFetcher;
