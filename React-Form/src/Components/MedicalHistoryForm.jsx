import React from 'react';

const MedicalHistoryForm = ({ formData, handleChange, handleSubmit, handleBack }) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <div>
          <label>Do you drink alcohol?</label>
          <input type="radio" name="drinkAlcohol" value="yes" onChange={handleChange} checked={formData.drinkAlcohol === 'yes'} /> Yes
          <input type="radio" name="drinkAlcohol" value="no" onChange={handleChange} checked={formData.drinkAlcohol === 'no'} /> No
        </div>
        {formData.drinkAlcohol === 'yes' && (
          <div>
            <label>How often?</label>
            <textarea name="howOftenDrink" value={formData.howOftenDrink} onChange={handleChange} />
          </div>
        )}
        <div>
          <label>Do you smoke?</label>
          <input type="radio" name="smoke" value="yes" onChange={handleChange} checked={formData.smoke === 'yes'} /> Yes
          <input type="radio" name="smoke" value="no" onChange={handleChange} checked={formData.smoke === 'no'} /> No
        </div>
        {formData.smoke === 'yes' && (
          <div>
            <label>How often?</label>
            <textarea name="howOftenSmoke" value={formData.howOftenSmoke} onChange={handleChange} />
          </div>
        )}
        <div>
          <label>Blood type:</label>
          <input type="text" name="bloodType" value={formData.bloodType} onChange={handleChange} required />
        </div>
        <div>
          <label>Other previous conditions:</label>
          <textarea name="previousConditions" value={formData.previousConditions} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleBack}>Back</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default MedicalHistoryForm;
