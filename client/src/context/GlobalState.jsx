import React, { useReducer } from 'react';

import GlobalContext from './global-context';
import { reducer, UPDATE_LIST_NAMES, CREATE_LIST, DELETE_LIST, USER_INFO } from './reducers';

const GlobalState = props => {
  const [lists, dispatch] = useReducer(reducer, { lists: [] });
  const [userInfo, changeUserInfo] = useReducer(reducer, {});

  const getUserInfo = (userObject) => {
    changeUserInfo({ type: USER_INFO, userObject });
  };

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
        userInfo,
        getUserInfo,
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