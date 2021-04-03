import React, { useState } from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";

const DataTable = ({ data, page, setPage }) => {
  //state variable to highlight selected row
  const [selectedRow, setSelectedRow] = useState(null);

  //define the table columns
  const columns = [
    { title: "#", field: "number" },
    { title: "Last Name", field: "lastName" },
    { title: "First Name", field: "firstName" },
    { title: "Email", field: "email" },
    { title: "City", field: "city" },
    { title: "Country", field: "country" },
    // { title: "Button", field: "button" },
    {
      title: "Button",
      field: "internal_action",
      render: (rowData) =>
        rowData && (
          <Link
            to={{
              pathname: "./Details",
              state: { user: rowData },
            }}
            className="text-info"
          >
            Visit Profile
          </Link>
        ),
    },
  ];

  //re-format API data for table usage
  var temp = [];
  data.forEach((user, i) => {
    var obj = {};
    obj["number"] = i + 1;
    obj["lastName"] = user.name.last;
    obj["firstName"] = user.name.first;
    obj["email"] = user.email;
    obj["city"] = user.location.city;
    obj["country"] = user.location.country;
    obj["image"] = user.picture.large;
    obj["email"] = user.email;
    obj["phone"] = user.phone;
    obj["dob"] = user.dob.date;
    obj["location"] = user.location;
    temp.push(obj);
  });

  return (
    <div style={{ maxWidth: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <MaterialTable
        columns={columns}
        data={temp}
        title="Users Directory"
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          search: true,
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#d9f7f7" : "#FFF",
          }),
          initialPage: page,
          pageSizeOptions: [10],
          pageSize: 10,
        }}
        onChangePage={(p) => setPage(p)}
      />
    </div>
  );
};
export default DataTable;
