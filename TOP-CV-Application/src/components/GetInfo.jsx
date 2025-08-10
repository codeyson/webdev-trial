import { useState } from 'react';
import '../styles/GetInfo.css';

export default function GetInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='input'
      />
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='input'/>
      <input
        type="text"
        placeholder="Enter your phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className='input'
      />

      <h1>Personal Info Preview</h1>
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Phone: {phone}</h2>
    </div>
  );
}
