const reducer = (posts = [], action) => {
  switch (action.type) {
    case "CREATE":
      return posts;
    case "FETCH_ALL":
      return posts;
    default:
      return posts;
  }
};
