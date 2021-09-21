import React from "react";
import MaterialTable from "material-table";

let columns = [
  { title: "TEXT FIELD", field: "textfield" },
  { title: "PHONE NO", field: "phone" },
  { title: "NAME", field: "name" },
  { title: "EMAIL", field: "email" },
  { title: "RD1", field: "rd1" },
  { title: "RD2", field: "rd2" },
  { title: "RD3", field: "rd3" },
  { title: "RD4", field: "rd4" }
];

let allData=[];

    
  
   
const Table = () => {
  for (let i = 0; i < localStorage.length; i++)        
   {allData= (JSON.parse(localStorage.getItem(localStorage.key(i))));}
   
   console.log("megu");
  console.log(allData);
  
  
  return (
    <MaterialTable
      title="User Table"
      columns={columns}
      data={allData}
      options={{
        headerStyle: {
          borderBottomColor: "white",
          borderBottomWidth: "3px",
          fontFamily: "verdana"
        },
        actionsColumnIndex: -1
      }}
    />
  );
};
export default Table;
