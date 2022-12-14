import { client, gql } from "./graph";

const createAccount = async (name, email, password) => {
  const query = gql`
    mutation MyQuery {
      createAccount(data: { email: "${email}", password: "${password}", name: "${name}" }) {
        email
        id
      }
    }`;

  try {
    const { createAccount } = await client.request(query);
    if (createAccount.email) {
      return {
        success: true,
        message: "Account created successfully",
        data: createAccount,
      };
    } else {
      return {
        success: false,
        message: "Account creation failed",
        data: null,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Email must be in unique.",
      data: null,
    };
  }
};

const checkIfLoggedIn = () => {
  if (typeof window !== "undefined") {
    const account = JSON.parse(localStorage.getItem("account"));
    if (account) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const loginWithCredentials = async (email, password) => {
  const query = gql`
    query MyQuery {
      accounts(where: { email: "${email}", password: "${password}" }) {
        email
        name
      }
    }
  `;

  try {
    const { accounts } = await client.request(query);
    if (accounts.length == 1) {
      return {
        success: true,
        message: "Login successful",
        data: accounts[0],
      };
    } else if (accounts.length == 0) {
      return {
        success: false,
        message: "Invalid email or password",
        data: null,
      };
    } else {
      return {
        success: false,
        message: "Something went wrong",
        data: null,
      };
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong",
      data: null,
    };
  }
};

export { createAccount, checkIfLoggedIn, loginWithCredentials };
