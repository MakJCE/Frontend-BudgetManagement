const getAllTransfers = (token) => {
    return new Promise((resolve, reject) => {
      try {
        fetch(`${process.env.REACT_APP_API_URL}transfer`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }).then(async (response) => {
          if (response.status === 200) {
            const data = await response.json();
            resolve(data.transfers);
          } else {
            reject([]);
          }
        });
      } catch (error) {
        reject([]);
      }
    });
  };
  
  const createTransfer = (transfer, token) => {
    return new Promise((resolve, reject) => {
      try {
        fetch(`${process.env.REACT_APP_API_URL}transfer`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(transfer)
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
  
  const transferFetcher = {
    getAllTransfers,
    createTransfer
  };
  
  export default transferFetcher;
  