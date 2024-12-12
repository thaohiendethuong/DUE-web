import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignupPage.css';

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(''); // New state for error messages

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRePassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error message on new submission

    try {
      // Update the API call to target the backend on port 5000
      const response = await axios.post('http://localhost:5000/api/auth/signup', { username, password, repassword });
      setMessage(response.data.message); // Display success message
    } catch (error) {
      // If the error is due to email already being registered, display a specific message
      if (error.response?.status === 400) {
        setError('Email đã được đăng ký. Vui lòng sử dụng email khác.');
      } else {
        // Handle other errors (such as server errors)
        setError('Có lỗi xảy ra. Vui lòng thử lại sau.');
      }
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Xin chào!</h1>
      <p className="login-subtitle-single-line">
        Chào mừng bạn đến với <span className="login-subtitle-bold">ON IDEAS</span>
      </p>
      <p className="login-subtitle-line">Đăng ký</p>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-input-container">
          <label htmlFor="username" className="input-label">Tài khoản</label>
          <input
            id="username"
            type="email"
            placeholder="Email"
            value={username}
            onChange={handleUsernameChange}
            className="input-field"
            required
          />
        </div>

        <div className="login-input-container">
          <label htmlFor="password" className="input-label">Mật khẩu</label>
          <input
            id="password"
            type="password"
            placeholder="Mật khẩu bao gồm 8 ký tự"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
            required
          />
        </div>
        
        <div className="login-input-container">
          <label htmlFor="password" className="input-label">Nhập lại mật khẩu</label>
          <input
            id="password"
            type="password"
            placeholder="Mật khẩu bao gồm 8 ký tự"
            value={repassword}
            onChange={handleRePasswordChange}
            className="input-field"
            required
          />
        </div>

        <div className="button-group">
          <button className="button-79" type="submit" disabled={loading}>
            {loading ? 'Đang tạo tài khoản...' : 'Đăng ký'}
          </button>
        </div>
      </form>

      {/* Displaying the success message */}
      {message && <p>{message}</p>}

      {/* Displaying the error message if email is already registered */}
      {error && <p style={{ color: 'white' }}>{error}</p>}
    </div>
  );
};

export default SignupPage;
