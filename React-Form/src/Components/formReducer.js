export const initialState = {
    page: 1,
    formData: {
      firstName: '',
      middleName: '',
      surname: '',
      birthday: '',
      address: '',
      email: '',
      phone: '',
      height: '',
      weight: '',
      drinkAlcohol: '',
      howOftenDrink: '',
      smoke: '',
      howOftenSmoke: '',
      bloodType: '',
      previousConditions: '',
      familyMembers: [{ firstName: '', middleName: '', surname: '', relationship: '', age: '', cellphone: '', gender: '' }],
    },
    isSubmitted: false,
  };
  
  export const actionTypes = {
    NEXT_PAGE: 'NEXT_PAGE',
    PREVIOUS_PAGE: 'PREVIOUS_PAGE',
    UPDATE_FORM_DATA: 'UPDATE_FORM_DATA',
    ADD_FAMILY_MEMBER: 'ADD_FAMILY_MEMBER',
    UPDATE_FAMILY_MEMBER: 'UPDATE_FAMILY_MEMBER',
    REMOVE_FAMILY_MEMBER: 'REMOVE_FAMILY_MEMBER',
    SUBMIT_FORM: 'SUBMIT_FORM',
  };
  
  export const formReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.NEXT_PAGE:
        return { ...state, page: state.page + 1 };
      case actionTypes.PREVIOUS_PAGE:
        return { ...state, page: state.page - 1 };
      case actionTypes.UPDATE_FORM_DATA:
        return {
          ...state,
          formData: {
            ...state.formData,
            [action.payload.name]: action.payload.value,
          },
        };
      case actionTypes.ADD_FAMILY_MEMBER:
        return {
          ...state,
          formData: {
            ...state.formData,
            familyMembers: [...state.formData.familyMembers, { firstName: '', middleName: '', surname: '', relationship: '', age: '', cellphone: '', gender: '' }],
          },
        };
      case actionTypes.UPDATE_FAMILY_MEMBER:
        const updatedFamilyMembers = state.formData.familyMembers.map((member, index) =>
          index === action.payload.index
            ? { ...member, [action.payload.name]: action.payload.value }
            : member
        );
        return {
          ...state,
          formData: { ...state.formData, familyMembers: updatedFamilyMembers },
        };
      case actionTypes.REMOVE_FAMILY_MEMBER:
        const filteredFamilyMembers = state.formData.familyMembers.filter((_, index) => index !== action.payload);
        return {
          ...state,
          formData: { ...state.formData, familyMembers: filteredFamilyMembers },
        };
      case actionTypes.SUBMIT_FORM:
        return {
          ...state,
          isSubmitted: true,
          page: 4,
        };
      default:
        return state;
    }
  };
  