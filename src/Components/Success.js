import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const { state } = useLocation();
  const { formData } = state;

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
      </div>
    </div>
  );
};

export default Success;
