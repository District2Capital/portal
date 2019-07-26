import React from 'react';

export default React.createContext({
  lists: [],
  getListNames: newlists => { },
  createNewList: listName => { },
  deleteList: listName => { }
});