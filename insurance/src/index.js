import { connect } from 'react-redux';

console.clear();
const createPolicy = (name, amount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name,
            amount
        }
    };
};
const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    };
};
const createClaim = (name, amountOfMoney) => {
    return {
        type: 'CREATE_CLAIM',
        paylaod: {
            name,
            amountOfMoney
        }
    };
};

const claimHistory = (oldHistory = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldHistory, action.paylaod];
    }
    return oldHistory;
};

const accounting = (Money = 10000, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return Money - action.paylaod.amountOfMoney;
    } else if (action.type == 'CREATE_CLAIM') {
        return Money + action.paylaod.amount;
    }
    return Money;
};

const policies = (listOfPolices = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...listOfPolices, action.paylaod.name];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolices.filter((name) => name !== action.paylaod.name);
    }
    return listOfPolices;
};

const { createStore, combineReducers } = Redux;
const ourDepartments = combineReducers({
    accounting: accounting,
    claimHistory: claimHistory,
    policies: policies
});

const store = createStore(ourDepartments);
const action = createPolicy('X and Y', 2000);

store.dispatch(action);
store.getState();