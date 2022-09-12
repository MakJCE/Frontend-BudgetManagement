const getAllAccounts = (token) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}bank-account`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }).then(async (response) => {
        if (response.status === 200) {
          const data = await response.json();
          resolve(data.bankAccounts);
        } else {
          reject([]);
        }
      });
    } catch (error) {
      reject([]);
    }
  });
};

const createAccount = (bankAccount, token) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}bank-account`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(bankAccount)
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

const bankAccountFetcher = {
  getAllAccounts,
  createAccount
};

export default bankAccountFetcher;
