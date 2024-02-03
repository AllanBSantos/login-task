import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://cms.trial-task.k8s.ext.fcse.io/graphql"
  });

  export default client;
