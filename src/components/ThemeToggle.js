import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext'
export class ThemeToggle extends Component {
    static contextType=ThemeContext
    render() {
        const {themeToggle}=this.context
        return (
            <button onMouseOver={themeToggle} onMouseLeave={themeToggle}>Toggle Theme</button>
        )
    }
}

export default ThemeToggle
