import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Profile from './Profile';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [user, setUser] = useState(null);
  const testlogin = async (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      alert('Please enter an email and password');
    } else {
      await signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          console.log(cred);
          setUser(cred.user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <form>
      {user ? (
        <Profile user={user} />
      ) : (
        <div>
          <div classname="form-group">
            <label htmlfor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              classname="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" classname="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div classname="form-group">
            <label htmlfor="exampleInputPassword1">Password</label>
            <input
              type="password"
              classname="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div classname="form-check">
            <input
              type="checkbox"
              classname="form-check-input"
              id="exampleCheck1"
            />
            <label classname="form-check-label" htmlfor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" classname="btn btn-primary" onClick={testlogin}>
            Submit
          </button>
        </div>
      )}
    </form>
  );
}
