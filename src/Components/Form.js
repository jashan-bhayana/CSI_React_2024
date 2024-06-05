import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {

    
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    showPassword: false,
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'panNo') {
        const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (value && !panPattern.test(value)) {
          setErrors({ ...errors, panNo: 'Invalid PAN format' });
        } else {
          const { panNo, ...rest } = errors; 
          setErrors(rest);
        }
      }
  
      if (name === 'aadharNo') {
        const aadharPattern = /^[0-9]{12}$/;
        if (value && !aadharPattern.test(value)) {
          setErrors({ ...errors, aadharNo: 'Invalid Aadhar format' });
        } else {
          const { aadharNo, ...rest } = errors; // 
          setErrors(rest);
        }
      }
  };

  const handleTogglePassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate('/success', { state: { formData } });
    }
  }

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First Name is required";
    if (!formData.lastName) errors.lastName = "Last Name is required";
    if (!formData.username) errors.username = "Username is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.password) errors.password = "Password is required";
    if (!formData.phoneNo) errors.phoneNo = "Phone Number is required";
    if (!formData.country) errors.country = "Country is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.panNo) errors.panNo = "Pan Number is required";
    if (!formData.aadharNo) errors.aadharNo = "Aadhar Number is required";
    return errors;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={formData.showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute right-2 top-2 text-sm text-blue-500"
              >
                {formData.showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone No</label>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.phoneNo && <span className="text-red-500 text-sm">{errors.phoneNo}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="China">China</option>
              <option value="Australia">Australia</option>
              <option value="Russia">Russia</option>

            </select>
            {errors.country && <span className="text-red-500 text-sm">{errors.country}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="">Select City</option>
              {formData.country === 'India' && (
                <>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Bangalore">Bangalore</option>
                </>
              )}
              {formData.country === 'USA' && (
                <>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Houston">Houston</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Philadelphia">Philadelphia</option>

                </>
              )}
              {formData.country === 'Canada' && (
                <>
                  <option value="Toronto">Toronto</option>
                  <option value="Vancouver">Vancouver</option>
                  <option value="Ottawa">Ottawa</option>
                  <option value="Calgary">Calgary</option>
                  <option value="Brampton">Brampton</option>


                </>
              )}
              {formData.country === 'China' && (
                <>
                  <option value="Beijing">Beijing</option>
                  <option value="Wuhan">Wuhan</option>
                  <option value="Shanghai">Shanghai</option>
                  <option value="Zhengzhou">Zhengzhou</option>
                  <option value="Chengdu">Chengdu</option>
                
                </>
              )}
              {formData.country === 'Australia' && (
                <>
                  <option value="Perth">Perth</option>
                  <option value="Melbourne">Melbourne</option>
                  <option value="Sydney">Sydney</option>
                  <option value="Brisbane">Brisbane</option>
                  <option value="Adelaide">Adelaide</option>
                </>
              )}
              {formData.country === 'Russia' && (
                <>
                  <option value="Moscow">Moscow</option>
                  <option value="Kazan">Kazan</option>
                  <option value="Samara">Samara</option>
                  <option value="Novosibirsk">Novosibirsk</option>
                  <option value="St. Petersburg">St. Petersburg</option>

                </>
              )}
            </select>
            {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Pan No.</label>
            <input
              type="text"
              name="panNo"
              value={formData.panNo}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.panNo && <span className="text-red-500 text-sm">{errors.panNo}</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Aadhar No.</label>
            <input
              type="text"
              name="aadharNo"
              value={formData.aadharNo}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {errors.aadharNo && <span className="text-red-500 text-sm">{errors.aadharNo}</span>}
          </div>
          <button
            type="submit"
            disabled={Object.keys(errors).length > 0}
            className="mt-4 p-2 w-full bg-blue-500 text-white rounded-md disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
