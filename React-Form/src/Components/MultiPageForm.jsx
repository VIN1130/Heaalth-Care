import React, { useReducer } from 'react';
import BasicInfoForm from './BasicInfoForm';
import MedicalHistoryForm from './MedicalHistoryForm';
import FamilyRelationsForm from './FamilyRelationsForm';
import { formReducer, initialState } from './formReducer';

const MultiPageForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FORM_DATA', payload: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'NEXT_PAGE' });
  };

  const handleBack = () => {
    dispatch({ type: 'PREVIOUS_PAGE' });
  };

  const addFamilyMember = () => {
    dispatch({ type: 'ADD_FAMILY_MEMBER' });
  };

  const updateFamilyMember = (e, index) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FAMILY_MEMBER', payload: { name, value, index } });
  };

  const { page, formData } = state;

  return (
    <div>
      {page === 1 && (
        <BasicInfoForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
      {page === 2 && (
        <MedicalHistoryForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
        />
      )}
      {page === 3 && (
        <FamilyRelationsForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBack={handleBack}
          addFamilyMember={addFamilyMember}
          updateFamilyMember={updateFamilyMember}
        />
      )}
    </div>
  );
};

export default MultiPageForm;
