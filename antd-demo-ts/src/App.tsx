import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux'
import { connect } from 'react-redux'

import { createStore } from 'redux'
import todoApp from './reducers'
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'

let store = createStore(todoApp)

// 打印初始状态
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// 发起一系列 action
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))

// 停止监听 state 更新
unsubscribe()
interface Person {
  visibilityFilter: string;
  text: string;
}

interface stateP {
  visibilityFilter: string;
  text: string;
}

const Text = ({visibilityFilter,text}:Person)=>(<div>{visibilityFilter}  {text}</div>)

let i =1;
const onClick=()=>{
  store.dispatch(setVisibilityFilter(i++));
}


const mapStateToProps = (state:stateP) => {
  console.log(state)
  return {
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch:any, ownProps:any) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}


const VisibleTodoList = connect(
  mapStateToProps,
  // mapDispatchToProps
)(Text)



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <VisibleTodoList text={'222'}/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
