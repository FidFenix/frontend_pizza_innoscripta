import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser], //or without [] or as arrrya
    (user) => user.currentUser
);