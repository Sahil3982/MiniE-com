import React from 'react';

interface Entry {
  id: number;
  name: string;
  age: number;
  email: string;
  status : string;
  total : number;

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
          <th><input type='checkbox'></input></th>
          <th>#</th>
          <th>Status</th>
          <th>Client</th>
          <th>Total</th>
          <th>Age</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={entry.id}>

            <td><input type='checkbox'></input></td>
            <td className='id'>#30{entry.id}</td>
            <td>{entry.status}</td>
            <td>{entry.name}</td>
            <td>{entry.total}</td>
            <td>{entry.age}</td>
            <td>{entry.email}</td>
            <td>
              <button onClick={() => updateEntry(index, { ...entry, age: entry.age + 1 })}>
                Update
              </button>
              <button onClick={() => deleteEntry(index)} className='delete-btn'>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default Table;
