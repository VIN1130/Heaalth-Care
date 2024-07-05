import React, { useReducer } from 'react';
import { formReducer, initialState, actionTypes } from './formReducer';
import './FamilyRelationsForm.css';

const FamilyRelationsForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleNextPage = () => {
    dispatch({ type: actionTypes.NEXT_PAGE });
  };

  const handlePreviousPage = () => {
    dispatch({ type: actionTypes.PREVIOUS_PAGE });
  };

  const handleAddFamilyMember = () => {
    dispatch({ type: actionTypes.ADD_FAMILY_MEMBER });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (index !== undefined) {
      dispatch({
        type: actionTypes.UPDATE_FAMILY_MEMBER,
        payload: { index, name, value }
      });
    } else {
      dispatch({
        type: actionTypes.UPDATE_FORM_DATA,
        payload: { name, value }
      });
    }
  };

  const handleDelete = (index) => {
    dispatch({
      type: actionTypes.REMOVE_FAMILY_MEMBER,
      payload: index
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.SUBMIT_FORM });
  };

  return (
    <div className="container">
      {state.page === 1 && (
        <div>
          <h1>Basic Info</h1>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={state.formData.firstName}
              onChange={handleChange}
              required
            />
            <label>Middle Name:</label>
            <input
              type="text"
              name="middleName"
              value={state.formData.middleName}
              onChange={handleChange}
              required
            />
            <label>Surname:</label>
            <input
              type="text"
              name="surname"
              value={state.formData.surname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Birthday:</label>
            <input
              type="date"
              name="birthday"
              value={state.formData.birthday}
              onChange={handleChange}
              required
            />
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={state.formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={state.formData.email}
              onChange={handleChange}
              required
            />
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={state.formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Height (cm):</label>
            <input
              type="number"
              name="height"
              value={state.formData.height}
              onChange={handleChange}
              required
            />
            <label>Weight (kg):</label>
            <input
              type="number"
              name="weight"
              value={state.formData.weight}
              onChange={handleChange}
              required
            />
          </div>
          <button type="button" onClick={handleNextPage}>
            Next
          </button>
        </div>
      )}

      {state.page === 2 && (
        <div>
          <h1>Medical History</h1>
          <div className="form-group">
            <label>Do you drink alcohol?</label>
            <div className="input-group">
              <input
                type="radio"
                name="drinkAlcohol"
                value="yes"
                checked={state.formData.drinkAlcohol === 'yes'}
                onChange={handleChange}
              /> Yes
              <input
                type="radio"
                name="drinkAlcohol"
                value="no"
                checked={state.formData.drinkAlcohol === 'no'}
                onChange={handleChange}
              /> No
            </div>
            {state.formData.drinkAlcohol === 'yes' && (
              <div className="form-group">
                <label>How often?</label>
                <textarea
                  name="howOftenDrink"
                  value={state.formData.howOftenDrink}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Do you smoke?</label>
            <div className="input-group">
              <input
                type="radio"
                name="smoke"
                value="yes"
                checked={state.formData.smoke === 'yes'}
                onChange={handleChange}
              /> Yes
              <input
                type="radio"
                name="smoke"
                value="no"
                checked={state.formData.smoke === 'no'}
                onChange={handleChange}
              /> No
            </div>
            {state.formData.smoke === 'yes' && (
              <div className="form-group">
                <label>How often?</label>
                <textarea
                  name="howOftenSmoke"
                  value={state.formData.howOftenSmoke}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
          <div className="form-group">
            <label>Blood Type:</label>
            <input
              type="text"
              name="bloodType"
              value={state.formData.bloodType}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Other previous conditions:</label>
            <textarea
              name="previousConditions"
              value={state.formData.previousConditions}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={handlePreviousPage}>
            Previous
          </button>
          <button type="button" onClick={handleNextPage}>
            Next
          </button>
        </div>
      )}

      {state.page === 3 && (
        <div>
          <h1>Family Composition</h1>
          <div className="family-grid">
            {state.formData.familyMembers.map((member, index) => (
              <div key={index} className="family-member">
                <label>First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={member.firstName}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
                <label>Middle Name:</label>
                <input
                  type="text"
                  name="middleName"
                  value={member.middleName}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
                <label>Surname:</label>
                <input
                  type="text"
                  name="surname"
                  value={member.surname}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
                <label>Relationship:</label>
                <input
                  type="text"
                  name="relationship"
                  value={member.relationship}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={member.age}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
                <label>Cellphone:</label>
                <input
                  type="tel"
                  name="cellphone"
                  value={member.cellphone}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
                <label>Gender:</label>
                <input
                  type="text"
                  name="gender"
                  value={member.gender}
                  onChange={(e) => handleChange(e, index)}
                  required
                />
                <button type="button" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            ))}
          </div>
          <button type="button" onClick={handleAddFamilyMember}>
            Add Family Member
          </button>
          <button type="button" onClick={handlePreviousPage}>
            Previous
          </button>
          <button type="button" onClick={handleNextPage}>
            Next
          </button>
        </div>
      )}

      {state.page === 4 && (
        <div>
          <h1>Confirmation</h1>
          <p>Form was successfully submitted!</p>
        </div>
      )}

      {state.page < 4 && (
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default FamilyRelationsForm;
