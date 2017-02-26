/**
 * @author Kozinetz Svyatoslav
 * @description Header
 */
import React from "react"
import Navigation from "components/Navigation"
import UserBar from "components/UserBar"
import "./style.scss"

export default class Header extends React.Component {
    constructor ( props ) {
        super( props )
    }

    render () {
        return (
            <header>
                <a className="logo" href="/"></a>
                <Navigation/>
                <UserBar/>
            </header>
        )
    }
}