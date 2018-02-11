const actions = store => ({
  fetchUser() {
    console.log(store);
    store.name = "dilan";
  }
});

export default actions;
