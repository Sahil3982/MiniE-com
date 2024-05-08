import React, { useState } from 'react';

interface Entry {
  id: number;
  name: string;
  age: number;
  email: string;
}

interface AddEntryFormProps {
  addEntry: (newEntry: Entry) => void;
}

const AddEntryForm: React.FC<AddEntryFormProps> = ({ addEntry }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !email) return;
    addEntry({ id: Date.now(), name, age: parseInt(age), email });
    setName('');
    setAge('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddEntryForm;
