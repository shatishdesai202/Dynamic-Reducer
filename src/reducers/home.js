const initialState = {
  someHomeStuff: "birds r cool",
};

export default function reducer(state = initialState, action) {
  console.log("home reducer");
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}
