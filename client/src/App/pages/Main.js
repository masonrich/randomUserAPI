import React from "react";
import DataTable from "../components/DataTable";

const Main = ({ usersList, page, setPage }) => {
  return (
    <div>
      <div style={{ margin: 50 }}>
        <h1>Clozd Assignment</h1>
        <h3>Mason Rich</h3>
      </div>
      <DataTable data={usersList} page={page} setPage={setPage} />
    </div>
  );
};

export default Main;
