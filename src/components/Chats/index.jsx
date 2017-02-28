/**
 * @author Kozinetz Svyatoslav
 * @description Dialogs
 */
import React from "react"
import "./style.scss"

export default class Chats extends React.Component {
    constructor ( props ) {
        super( props )
    }

    render () {
        return (
            <div className="chats">
                { this.props.data.map( ( item, i ) => {
                    return (
                        <div key={ i } className="chats__item" onClick={ this.onClick.bind( this, item ) }>
                            <div className="chats__avatar"></div>
                            <div className="chats__info">
                                <div className="chats__username">{ item.username }</div>
                                <div className="chats__date">{ item.time }</div>
                                <div className="chats__last-message">{ item.lastMessage }</div>
                            </div>
                        </div>
                    )
                } ) }
            </div>
        )
    }

    onClick ( data ) {
        console.log( data );
    }
}

Chats.defaultProps = {
    data: [ {
        avatar: "",
        username: "SilverName",
        time: "19:27",
        lastMessage: "Так вот.. выиграл я, значит, около…"
    }, {
        avatar: "",
        username: "ODpixel",
        time: "19:04",
        lastMessage: "Вы: Смотрел видос ODpixel Rap God. Т…"
    }, {
        avatar: "",
        username: "MAXPAIN",
        time: "18:46",
        lastMessage: "Подвинь кнопку на 1 пиксель!"
    }, {
        avatar: "",
        username: "DavCost",
        time: "18:20",
        lastMessage: "Вы: AWP бог."
    }, {
        avatar: "",
        username: "Team Spirit",
        time: "18:19",
        lastMessage: "Cheshir: Сегодня тренировка с..."
    }, {
        avatar: "Команда FastCup",
        username: "",
        time: "17:56",
        lastMessage: "MAXPAIN: Проверьте этого чувак…"
    } ]
}