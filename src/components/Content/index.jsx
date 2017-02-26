/**
 * @author Kozinetz Svyatoslav
 * @description Content
 */
import React from "react"
import Switcher from "components/Switcher"

export default class Content extends React.Component {
    constructor ( props ) {
        super( props )
    }

    render () {
        return (
            <main>
                <div className="wrp">
                    <Switcher/>
                </div>
            </main>
        )
    }
}