import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/slices/authSlice";
import { useNavigate } from 'react-router-dom';
import Loading from "../../components/loading/Loading";
import "./signup.css"


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  
  // Use the correct path to access loading state
  const loading = useSelector((state) => state.auth.loading); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const user = {
      email,
      password,
      name,
      phone,
      address,
      gender,
    };
    
    console.log("Signup clicked", user);

    try {
      await dispatch(signup(user)).unwrap(); // Handle any errors thrown by the signup action
      navigate('/login'); // Navigate after successful signup
    } catch (error) {
      console.error("Signup failed:", error);
      // You can set an error state here to display to the user if needed
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>
          Signup
          <button onClick={() => navigate('/login')} className="l-btn">
            <h1>/Login</h1>
          </button>
        </h1>
        <form onSubmit={handleSignup}> {/* Use form submission */}
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input-field"
            required
          />

          <div className="gender-section">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={() => setGender('male')}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={() => setGender('female')}
                required
              />
              Female
            </label>
          </div>

          <button type="submit" className="signup-button">Signup</button>
          {loading && <Loading />}
        </form>
      </div>
    </div>
  );
}
