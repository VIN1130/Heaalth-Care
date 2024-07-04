import React, { useReducer } from 'react';
import { formReducer, initialState, actionTypes } from './formReducer';
import './FamilyRelationsForm.css'; 

const FamilyRelationsForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleAddFamilyMember = () => {
    dispatch({ type: actionTypes.ADD_FAMILY_MEMBER });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    dispatch({
      type: actionTypes.UPDATE_FAMILY_MEMBER,
      payload: { index, name, value }
    });
  };

  const handleDelete = (index) => {
    dispatch({
      type: actionTypes.REMOVE_FAMILY_MEMBER,
      payload: index
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log('Form submitted with state:', state);
  };

  return (
    <div className="container">
      <h1>Family Composition</h1>
      {state.formData.familyMembers.map((member, index) => (
        <div key={index} className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name={`firstName_${index}`}
            value={member.firstName}
            onChange={(e) => handleChange(e, index)}
            required
          />
          <label>Middle Name:</label>
          <input
            type="text"
            name={`middleName_${index}`}
            value={member.middleName}
            onChange={(e) => handleChange(e, index)}
            required
          />
          <label>Surname:</label>
          <input
            type="text"
            name={`surname_${index}`}
            value={member.surname}
            onChange={(e) => handleChange(e, index)}
            required
          />
          <label>Relationship:</label>
          <input
            type="text"
            name={`relationship_${index}`}
            value={member.relationship}
            onChange={(e) => handleChange(e, index)}
            required
          />
          <label>Age:</label>
          <input
            type="number"
            name={`age_${index}`}
            value={member.age}
            onChange={(e) => handleChange(e, index)}
            required
          />
          <label>Cellphone number:</label>
          <input
            type="tel"
            name={`cellphone_${index}`}
            value={member.cellphone}
            onChange={(e) => handleChange(e, index)}
            required
          />
          <label>Gender:</label>
          <select
            name={`gender_${index}`}
            value={member.gender}
            onChange={(e) => handleChange(e, index)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <button type="button" onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      ))}
      <div className="form-group">
        <button type="button" onClick={handleAddFamilyMember}>
          Add Family Member
        </button>
      </div>
      <div className="form-group">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FamilyRelationsForm;
