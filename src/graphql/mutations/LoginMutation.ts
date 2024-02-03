import { gql } from '@apollo/client';

const LoginMutation = gql`
mutation login($identifier: String!, $password: String!) {
    login(
      input:{
        identifier: $identifier
        password: $password
      }
    ){
      jwt
    }
  }
`;

export default LoginMutation;
