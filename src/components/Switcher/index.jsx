/**
 * @author Kozinetz Svyatoslav
 * @description Switcher
 */
import React from "react"
import Search from "components/Search"
import Chats from "components/Chats"
import "./style.scss"

export default class Switcher extends React.Component {
    constructor ( props ) {
        super( props )

        this.state = {
            active: 0
        }
    }

    render () {
        return (
            <div className="switcher">
                <div className="switcher__header">
                    { this.renderTitles() }
                </div>
                <div className="switcher__body">
                    { this.renderBoxes() }
                </div>
            </div>
        )
    }

    renderTitles () {
        return this.props.boxes.map( ( item, i ) => {
            return <div key={ i }
                        className={ "switcher__header-item " + ( item.id === this.state.active && "active" ) }
                        onClick={ this.onClick.bind( this, item ) }>{ item.name }</div>
        } )
    }

    renderBoxes () {
        return this.props.boxes.map( ( item, i ) => {
            return <div key={ i }
                        className={ "switcher__box " + ( item.id === this.state.active && "active" ) }>{ item.content }</div>
        } )
    }

    static getContent () {
        return (
            <div>
                <div className="sidebar">
                    <Search/>
                    <Chats/>
                </div>
                <div className="content">
                    <div className="chat">
                        <div className="chat__item">
                            <div className="user">
                                <div className="user__avatar"></div>
                                <div className="user__name">ODpixel</div>
                            </div>
                            <div className="messages">
                                <div className="message">
                                    <div className="message__text">pic</div>
                                    <div className="message__time">19:27</div>
                                </div>
                                <div className="message">
                                    <div className="message__text">вау</div>
                                    <div className="message__time">19:27</div>
                                </div>
                                <div className="message">
                                    <div className="message__text">круто</div>
                                    <div className="message__time">19:27</div>
                                </div>
                                <div className="message">
                                    <div className="message__text">моя тактика при открытии</div>
                                    <div className="message__time">19:27</div>
                                </div>
                                <div className="message">
                                    <div className="message__text">смотри</div>
                                    <div className="message__time">19:27</div>
                                </div>
                                <div className="message">
                                    <div className="message__text">советую работает</div>
                                    <div className="message__time">19:27</div>
                                </div>
                                <div className="message">
                                    <div className="message__text">чтобы выпал заветный дроп левой рукой дави на
                                        правое яйцо а правой на левое
                                    </div>
                                    <div className="message__time">19:27</div>
                                </div>
                                <div className="message">
                                    <div className="message__text">тогда будет падать</div>
                                    <div className="message__time">19:27</div>
                                </div>
                                <div className="message">
                                    <div className="message__text">только самый крутой дроп</div>
                                    <div className="message__time">19:27</div>
                                </div>
                            </div>
                        </div>
                        <div className="chat__item">
                            <div className="user">
                                <div className="user__avatar"></div>
                                <div className="user__name">zabredun</div>
                            </div>
                            <div className="messages">
                                <div className="message">
                                    <div className="message__text">ясно</div>
                                    <div className="message__time">19:40</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onClick ( data ) {
        this.setState( { active: data.id } )
    }
}

Switcher.defaultProps = {
    boxes: [ {
        id: 0,
        name: "Все сообщения",
        content: Switcher.getContent()
    }, {
        id: 1,
        name: "Непрочитанные",
        content: "test"
    } ]
}