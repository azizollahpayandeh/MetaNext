import Home from "./Pages/Home/Home";
import "./App.css";
import routes from "./Routes";
import { useRoutes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";

function App() {
  const Client = new QueryClient();

  const router = useRoutes(routes);

  return (
    <RecoilRoot>
      <QueryClientProvider client={Client}>
        <NavBar />
        {router}
        <Footer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
