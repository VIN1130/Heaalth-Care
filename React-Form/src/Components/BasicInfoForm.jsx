import React from 'react';

const BasicInfoForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Middle Name:</label>
            <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Surname:</label>
            <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Birthday:</label>
            <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Height (cm):</label>
            <input type="number" name="height" value={formData.height} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Weight (kg):</label>
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
          </div>
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default BasicInfoForm;
