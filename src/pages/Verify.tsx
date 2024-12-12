import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

// Define the expected params type for useParams
interface VerifyEmailParams extends Record<string, string | undefined> {
  token: string; // Explicitly define the token field
}

const VerifyEmail: React.FC = () => {
  const { token } = useParams<VerifyEmailParams>(); // Type the params to expect a 'token'
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate(); // useNavigate for redirection

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/auth/verify-email/${token}`);
        setMessage(response.data.message);
        setLoading(false);

        // Only navigate to the login page if the verification is successful
        if (response.data.message === 'Email verified successfully') {
          setTimeout(() => {
            navigate('/login'); // Redirect to login page after successful verification
          }, 2000); // Optional delay before redirect
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setMessage(err.response?.data?.message || 'Failed to verify email');
        } else {
          setMessage('An unexpected error occurred');
        }
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div>
      <h2>Email Verification</h2>
      {loading ? <p>Verifying...</p> : <p>{message}</p>}
    </div>
  );
};

export default VerifyEmail;
