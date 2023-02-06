import { useState, useEffect } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setsetPhoneNumber] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [bio, setBio] = useState('');

  console.log(name);

  return (
    <form className="form">
      <label>
        Name
        <input
          id="name"
          type='text'
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
      </label>
      <label>
        Email
        <input id="email" name="email" type={'email'} />
      </label>
      <label>
        Phone Number
        <input id="phone-number" name="phone-number" type='tel' />
      </label>
      <label>
        Phone type
        <select id="phone-type" name="phone-type">
          <option value="Home" >Home</option>
          <option value="Work" >Work</option>
          <option value="Cell" >Cell</option>
        </select>
      </label>
      <label>
        <textarea></textarea>
      </label>
    </form>
  )
}

export default Form;
