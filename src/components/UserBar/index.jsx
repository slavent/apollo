/**
 * @author Kozinetz Svyatoslav
 * @description UserBar
 */
import React from "react"

export default class UserBar extends React.Component {
    constructor ( props ) {
        super( props )
    }

    render () {
        return (
            <div className="user-bar">
                <div className="user-bar__item">
                    <div className="icon-ring"></div>
                </div>
                <div className="user-bar__item">
                    <div className="icon-mail"></div>
                </div>
                <div className="user-bar__item">
                    <div className="user-bar__name"></div>
                </div>
                <div className="user-bar__item">
                    <div className="user-bar__avatar"></div>
                </div>
                <div className="user-bar__item">
                    <div className="icon-menu"></div>
                </div>
            </div>

        )
    }
}