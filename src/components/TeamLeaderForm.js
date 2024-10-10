import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use for redirection

const TeamLeaderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    phoneNumber: '',
    gender: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormClosed, setIsFormClosed] = useState(false); // State to track form closing

  const navigate = useNavigate(); // To handle navigation

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.position) formErrors.position = 'Position is required';
    if (!formData.phoneNumber) formErrors.phoneNumber = 'Phone number is required';
    if (!/^\d{10}$/.test(formData.phoneNumber)) formErrors.phoneNumber = 'Phone number must be 10 digits';
    if (!formData.gender) formErrors.gender = 'Gender is required';
    if (!formData.address) formErrors.address = 'Address is required';

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form Data Submitted:', formData);

      // Reset form data
      setFormData({
        name: '',
        position: '',
        phoneNumber: '',
        gender: '',
        address: '',
      });
      setErrors({});

      // Close the form after successful submission
      setIsFormClosed(true);
    }
  };

  // Function to close the form manually
  const closeForm = () => {
    setIsFormClosed(true);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {!isFormClosed ? (
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-center mb-6">Create Team Leader & Employee</h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Position */}
          <div className="mb-4">
            <label className="block text-gray-700">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter position"
            />
            {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter phone number"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter address"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>

            {/* Optional Close Button */}
            <button
              type="button"
              onClick={closeForm} // Closes the form without submission
              className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Form Closed!</h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={() => navigate('/')} // Navigate back to home or any other page
          >
            Go to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamLeaderForm;
