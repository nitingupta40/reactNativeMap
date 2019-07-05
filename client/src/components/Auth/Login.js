import React from "react";
import { GraphQLClient } from 'graphql-request';
import { GoogleLogin } from 'react-google-login';
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const ME_QUERY = `
{
  me {
  _id
  name
  email
  picture
}
}
`
const Login = ({ classes }) => {
  const onSuccess = async googleUser => {
    const idToken = googleUser.getAuthResponse().id_token;
    const client = new GraphQLClient('http://localhost:4000/graphql', {
        headers: { authorization: idToken } 
      });
      const data = await client.request(ME_QUERY);
      console.log({ data });
    };
  const onFailure = error => {
    console.error(error);
  }  

    return <GoogleLogin 
          clientId="677268207678-o5knbq5qg6hasse03vtjcd83gujbb2bt.apps.googleusercontent.com"
          onSuccess={onSuccess}
          onFailure={onFailure}
          isSignedIn={true}
          />
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
