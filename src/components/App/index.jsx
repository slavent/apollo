/**
 * Created by Kozinetz Svyatoslav
 * Description: App component
 */
import React from "react"
import Header from "components/Header"
import Content from "components/Content"
import "./style.scss"

class App extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}

export default App
