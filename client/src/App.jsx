import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import Items from "./components/Items";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:action?" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
