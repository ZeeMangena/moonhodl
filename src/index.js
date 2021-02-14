import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
//Apollo client in action, now I need to build the server
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetCoinData {
        data(id: "90") {
          name
          symbol
        }
      }
    `
  })
  .then((result) => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

//The challenge will be stepping up from ASP.Net + SQL experience. Finding the crossover...

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
