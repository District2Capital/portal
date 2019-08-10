import React, { useReducer } from 'react';

import GlobalContext from './global-context';
import { listReducer, UPDATE_LIST_NAMES, CREATE_LIST, DELETE_LIST } from './reducers';

const GlobalState = props => {
  const [lists, dispatch] = useReducer(listReducer, { lists: [] });

  const updateListNames = newlists => {
    dispatch({ type: UPDATE_LIST_NAMES, newlists });
  };

  // create new list
  const createNewList = listName => {
    dispatch({ type: CREATE_LIST, listName });
  };

  const deleteList = listName => {
    dispatch({ type: DELETE_LIST, listName });
  };

  return (
    <GlobalContext.Provider
      value={{
        lists,
        updateListNames,
        createNewList,
        deleteList
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;