import React from 'react';

interface Entry {
  id: number;
  name: string;
  age: number;
  email: string;
}

interface TableProps {
  data: Entry[];
  updateEntry: (index: number, updatedEntry: Entry) => void;
  deleteEntry: (index: number) => void;
}

const Table: React.FC<TableProps> = ({ data, updateEntry, deleteEntry }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={entry.id}>
            <td>{entry.name}</td>
            <td>{entry.age}</td>
            <td>{entry.email}</td>
            <td>
              <button onClick={() => updateEntry(index, { ...entry, age: entry.age + 1 })}>
                Update
              </button>
              <button onClick={() => deleteEntry(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
