const initialState = {
  navOpen: true,
};

export default function reducer(state = initialState, action) {
  console.warn("layout reducer");
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}
