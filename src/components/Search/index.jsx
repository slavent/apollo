/**
 * @author Kozinetz Svyatoslav
 * @description Search
 */
import React from "react"
import "./style.scss"

export default class Search extends React.Component {
    constructor ( props ) {
        super( props )
    }

    render () {
        return (
            <div className="searсh">
                <div className="search__icon"></div>
                <div className="search__title">Поиск...</div>
            </div>
        )
    }
}