import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const fetchUsers = async () => {
    const res = await axios.get(`http://localhost:5000/api/users?search=${search}&page=${page}`);
    setUsers(res.data);
  };

  useEffect(() => { fetchUsers(); }, [search, page]);

  const register = async () => {
    await axios.post('http://localhost:5000/api/register', form);
    fetchUsers();
  };

  return (
    <div>
      <h2>User System</h2>

      <input placeholder="Search" onChange={e => setSearch(e.target.value)} />

      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})} />
      <input placeholder="Phone" onChange={e => setForm({...form, phone:e.target.value})} />
      <input placeholder="Password" type="password" onChange={e => setForm({...form, password:e.target.value})} />

      <button onClick={register}>Register</button>

      <ul>
        {users.map(u => <li key={u.id}>{u.name} - {u.email} - {u.phone}</li>)}
      </ul>

      <button onClick={() => setPage(page-1)}>Prev</button>
      <button onClick={() => setPage(page+1)}>Next</button>

      <footer>Made by Muhammad Ali CT-23074</footer>
    </div>
  );
}

export default App;
