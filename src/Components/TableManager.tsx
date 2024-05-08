import React, { useState } from "react";
import Table from "./Table";
import AddEntryForm from "./AddEntryForm";

interface Entry {
  id: number;
  name: string;
  age: number;
  email: string;
  status: string;
  total : number;

}

const TableManager: React.FC = () => {
  const [data, setData] = useState<Entry[]>([
    {
      id: 1,
      name: "John Doe",
      status: "cheched",
      age: 30,
      total : 3008,
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      status: "cheched",
      age: 25,
      total : 3008,

      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Pri Patel",
      status: "cheched",
      age: 40,
      total : 3008,

      email: "pri@example.com",
    },
    {
      id: 3,
      name: "Sahil Patel",
      status: "cheched",
      age: 40,
      total : 3008,

      email: "sahil@example.com",
    },
    {
      id: 3,
      name: "Satyam Sahu",
      status: "cheched",
      age: 40,
      total : 3008,

      email: "satyam@example.com",
    },
  ]);

  const addEntry = (newEntry: Entry) => {
    setData([...data, newEntry]);
  };

  const updateEntry = (index: number, updatedEntry: Entry) => {
    const newData = [...data];
    newData[index] = updatedEntry;
    setData(newData);
  };

  const deleteEntry = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div>
      <Table data={data} updateEntry={updateEntry} deleteEntry={deleteEntry} />
      <AddEntryForm addEntry={addEntry} />
    </div>
  );
};

export default TableManager;
