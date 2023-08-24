import { Routes, Route } from "react-router-dom";
import BasicTextFields from "./components/Form";
import LeftSidebar from "./components/LeftSidebar";
import DataTable from "./components/DataTable";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BasicTextFields />} />
        <Route
          path="/page"
          element={
            <>
              {" "}
              <DataTable />
              <LeftSidebar />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
