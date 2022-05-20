
const initialState = {
    employeeId: "E-003",
    employeeName: "Rahul",
    employeeEmail: "rahul@gmail.com",
    phone: 1122334455
}

const employeeReducer = (currentState = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ENAME':
            return {
                ...currentState,
                employeeName: action.payload
            }
        default:
            return currentState;
    }
}
export default employeeReducer;
