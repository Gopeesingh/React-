# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



1. Create Store - single source of truth
it has configureStore
introduce reducer

2. Create Slice(functions) method(createSlice)
Slice has name, initialState, reducers :{key: function}
Access of two things (State, action)
state = state value in the store
action = action.payload 
export individual functionality 
export main source export

3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
 dispatch(addTodo())

4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
variable me values lelo ek baar aagaie uske baad pure JS concept hai

Note: Todo's Project basic nai hote xD  :


==>>  importance of uses of two libraries:
jab redux aaya tha to uske stepup me thoda jayada time lagta tha compare to contex api and debugging karne me v problem ja rhi thi. tab developers ne redux-toolkit introduce kiya jisme setUp or debugging easy ho gya kuchh redux functions ke dawara, isliye redux use karne ke liye ye dono libraries install karni jaruri hai.


==>>   1. React-Redux: Connecting Redux with React : 
React-Redux is the official binding library that connects React with Redux. It provides hooks like useSelector, useDispatch, and Provider that allow React components to interact with the Redux store.