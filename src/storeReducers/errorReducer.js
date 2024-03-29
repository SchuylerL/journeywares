export const CREATE_ERROR = 'CREATE_ERROR';
export const REMOVE_ERROR = 'REMOVE_ERROR';

export const createError = (context, error) => dispatch => {
  dispatch({ type: CREATE_ERROR, context, error });
};

export const removeError = (context, error) => dispatch => {
  dispatch({ type: REMOVE_ERROR, context, error });
};

export default (errors = {}, action) => {
  const newErrors = { ...errors };
  switch (action.type) {
    case CREATE_ERROR:
      if (newErrors[action.context])
        newErrors[action.context] = [
          ...newErrors[action.context],
          action.error,
        ];
      else newErrors[action.context] = [action.error];
      break;
    case REMOVE_ERROR:
      newErrors[action.context] = newErrors[action.context].filter(
        e => e !== action.error,
      );
      break;
  }
  return newErrors;
};
