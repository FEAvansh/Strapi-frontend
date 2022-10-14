import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HomePage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";
import Banner from "./components/Banner";
import Banner_1 from "./components/Banner_1";
import Technology from "./components/Technology";

// apollo client
const client = new ApolloClient({
  uri: "https://admin-cms.herokuapp.com/graphql",
  // uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

// uri: "http://localhost:1337/graphql",
function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div className="App">
          {/*  <SiteHeader /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Banner />
                </>
              }
            />
            <Route
              path="/banner_1"
              element={
                <>
                  <Banner_1 />
                </>
              }
            />
            <Route
              path="/technology"
              element={
                <>
                  <Technology />
                </>
              }
            />
            {/* <Route exact path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<ReviewDetails />} />
            <Route path="/category/:id" element={<Category />} /> */}
          </Routes>
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
