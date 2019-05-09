const Types = {
  SHOW: 'developmentModal/show',
  HIDE: 'developmentModal/hide',
};

const INITIAL_STATE = {
  isShow: false,
  cordinates: null,
};

export default function developerModal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW:
      return {
        isShow: true,
        cordinates: action.payload.cordinates,
      };

    case Types.HIDE:
      return {
        isShow: false,
        cordinates: null,
      };

    default:
      return state;
  }
}

export const Actions = {
  showModal: cordinates => ({
    type: Types.SHOW,
    payload: { cordinates },
  }),

  hideModal: () => ({
    type: Types.HIDE,
    payload: null,
  }),
};
