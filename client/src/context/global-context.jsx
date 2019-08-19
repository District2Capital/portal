import React from 'react';

export default React.createContext({
  lists: [],
  userInfo: {},
  getUserInfo: userObject => { },
  getListNames: newlists => { },
  createNewList: listName => { },
  deleteList: listName => { }
});