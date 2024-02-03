import { gql } from '@apollo/client';

const getUserQuery = gql`
query user($id: ID!) {
    user(id: $id){
      id
      email
      firstName
      lastName
    }
  }
`;

export default getUserQuery;
