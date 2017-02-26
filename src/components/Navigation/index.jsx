/**
 * @author Kozinetz Svyatoslav
 * @description Navigation
 */
import React from "react"
import "./style.scss"

export default class Navigation extends React.Component {
    constructor ( props ) {
        super( props )
    }

    render () {
        return (
            <ul className="nav">
                { this.props.data.map( ( item, i ) => {
                    return <li key={ i } className="nav__item"><a href={ "#" + item.alias }>{ item.title }</a></li>
                } ) }
            </ul>
        )
    }
}

Navigation.defaultProps = {
    data: [ {
        title: "Главная",
        alias: "main"
    }, {
        title: "Матчи",
        alias: "mathes"
    }, {
        title: "Турниры",
        alias: "tournaments"
    }, {
        title: "Команды",
        alias: "teams"
    }, {
        title: "Игроки",
        alias: "players"
    }, {
        title: "Форум",
        alias: "forum"
    }, {
        title: "Помощь",
        alias: "help"
    } ]
}