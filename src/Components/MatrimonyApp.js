import React, { useState } from 'react';
import './MatrimonyApp.css';
const MatrimonyApp = () => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    setProfiles([...profiles, profile]);
  };

  return (
    <div className="Appsd">
      <h1>Matrimony App</h1>
      <ProfileForm addProfile={addProfile} />
      <ProfileList profiles={profiles} />
    </div>
  );
};

const ProfileForm = ({ addProfile }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile({ name, age });
    setName('');
    setAge('');
  };

  return (
    <form className="ProfileForm" onSubmit={handleSubmit}>
      <input className="ProfileForm input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input className="ProfileForm input"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button className='ProfileForm button'type="submit">Add Profile</button>
    </form>
  );
};

const ProfileList = ({ profiles }) => {
  return (
    <div className="ProfileList">
      <h2>Profiles</h2>
      <ul className="ProfileList li">
        {profiles.map((profile, index) => (
          <li key={index}>
            <strong >Name:</strong> {profile.name}, <strong>Age:</strong> {profile.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatrimonyApp;