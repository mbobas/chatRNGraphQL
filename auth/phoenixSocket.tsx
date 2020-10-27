import ApolloClient from "@apollo/client";
import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import { Socket as PhoenixSocket } from "phoenix";
import { InMemoryCache } from "apollo-cache-inmemory";
import Cookies from "js-cookie";

// Create a standard Phoenix websocket connection. If you need
// to provide additional params, like an authentication token,
// you can configure them in the `params` option.
const phoenixSocket = new PhoenixSocket("wss://chat.thewidlarzgroup.com/socket", {
  params: (Authorization: "Bearer ${eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MDU1MjMxMTMsImlhdCI6MTYwMzEwMzkxMywiaXNzIjoiY2hhdGx5IiwianRpIjoiY2I2MDIwYjEtZGEyYy00MDQ4LWIwOWUtOTQ1NjQyM2EyMDIxIiwibmJmIjoxNjAzMTAzOTEyLCJzdWIiOiJmOGNiNmZiYi1hM2Q2LTQ3ZWItOGM0Yy03YjRlMGUwZjI2YjkiLCJ0eXAiOiJhY2Nlc3MifQ.XUHW8C8638MgdiGD8ikfuyd3RGOeJ9pE5rNjVS79GaHiPj__Hz5-zXO3iWBL9xQcZaL7fxa_xx8Oc5l7bXPjvg}") => {
    if (Cookies.get("token")) {
      return { token: Cookies.get("token") };
    } else {
      return {};
    }
  }
});

// Wrap the Phoenix socket in an AbsintheSocket.
const absintheSocket = AbsintheSocket.create(phoenixSocket);

// Create an Apollo link from the AbsintheSocket instance.
const link = createAbsintheSocketLink(absintheSocket);

// Apollo also requires you to provide a cache implementation
// for caching query results. The InMemoryCache is suitable
// for most use cases.
const cache = new InMemoryCache();

// Create the client.
const client = new ApolloClient({
  link,
  cache
});