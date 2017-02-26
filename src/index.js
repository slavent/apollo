/**
 * Created by Kozinetz Svyatoslav
 * Description: Entry point
 */
import ReactDOM from "react-dom"
import React from "react"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import ApolloClient from "apollo-client"
import { ApolloProvider } from "react-apollo"
// import { todoReducer, userReducer } from "./reducers"
import App from "components/App"

ReactDOM.render( <App/>, document.getElementById( "app" ) )

// const client = new ApolloClient()
//
// const store = createStore(
//     combineReducers( {
//         todos: todoReducer,
//         users: userReducer,
//         apollo: client.reducer()
//     } ),
//     {}, // initial state
//     compose(
//         applyMiddleware( client.middleware() ),
//         // If you are using the devToolsExtension, you can add it here also
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     )
// )
//
// ReactDOM.render(
//     <ApolloProvider store={ store } client={ client }>
//         <App/>
//     </ApolloProvider>,
//     document.getElementById( "app" )
// )