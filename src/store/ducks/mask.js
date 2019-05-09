const INITIAL_STATE = {
  isShow: false,
  message: '',
};

export default function mask(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SHOW_MASK':
      return {
        isShow: action.payload.isShow,
        message: action.payload.message,
      };

    default:
      return state;
  }
}

export const Actions = {
  showMask: (isShow, message = 'Aguarde...') => ({
    type: 'SHOW_MASK',
    payload: { isShow, message },
  }),
};
