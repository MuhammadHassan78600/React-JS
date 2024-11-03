import React, { useState, useEffect } from 'react';

function Signup() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="app">
      {isLoading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}

      {!isLoading && (
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Signup;
