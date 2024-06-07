import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Success = () => {
  const { state } = useLocation();
  const { formData } = state;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100 shadow-2xl">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-green-600">Registration Successful!</h2>
        <div>
          <p><strong>First Name:</strong> {formData.firstName}</p>
          <p><strong>Last Name:</strong> {formData.lastName}</p>
          <p><strong>Username:</strong> {formData.username}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone No:</strong> {formData.phoneNo}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>PAN No:</strong> {formData.panNo}</p>
          <p><strong>Aadhar No:</strong> {formData.aadharNo}</p>
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleBack}
            className="mt-4 p-2 w-full max-w-xs bg-blue-500 text-white rounded-md flex items-center justify-center hover:bg-blue-700 transition duration-300"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
