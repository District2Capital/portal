export const CREATE_LIST = 'CREATE_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const UPDATE_LIST_NAMES = 'UPDATE_LIST_NAMES';

const updateListNames = (newlists) => {
    return { lists: newlists }
}

const createList = (listName, state) => {
    // Post request to create new list
    // return all lists
    return { ...state };
};

const deleteList = (listName, state) => {
    // Post request to delete list
    // return all lists
    return { ...state };
};

export const listReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_LIST_NAMES:
            return updateListNames(action.newlists);
        case CREATE_LIST:
            return createList(action.listName, state);
        case DELETE_LIST:
            return deleteList(action.listName, state);
        default:
            return state;
    }
};
