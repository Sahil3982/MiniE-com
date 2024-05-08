import React, { useState } from 'react';
import Table from './Table';
import AddEntryForm from './AddEntryForm';

interface Entry {
  id: number;
  name: string;
  age: number;
  email: string;
}

const TableManager: React.FC = () => {
  const [data, setData] = useState<Entry[]>([
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    { id: 3, name: 'Pri Patel', age: 40, email: 'pri@example.com' },
    { id: 3, name: 'Sahil Patel', age: 40, email: 'sahil@example.com' },
    { id: 3, name: 'Satyam Sahu', age: 40, email: 'satyam@example.com' },
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
