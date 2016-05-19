import request from 'superagent';

const LOAD = 'LOAD';

const initialState = {
  data: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // do reducer stuff
    case LOAD:
      return Object.assign({}, state, {
        data: action.data
      })
    default:
      return state;
  }
}

export function load() {
  return dispatch => {
    request
    .get('http://localhost:3003/data-dev')
    .end( (err, res) => {
      dispatch({
        type: LOAD,
        data: JSON.parse(res.text)
      });
    });
  };
}
