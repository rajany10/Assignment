import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "userId", headerName: "User ID", width: 90, type: "number" },
  {
    field: "id",
    headerName: "ID",
    width: 90,
    type: "number",
  },
  {
    field: "title",
    headerName: "Title",
    width: 150,
  },
  {
    field: "body",
    headerName: "Body",
    width: 110,
  },
];

interface Response {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function DataTable() {
  const [data, setData] = React.useState<Response[]>([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data as Response[]));
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
