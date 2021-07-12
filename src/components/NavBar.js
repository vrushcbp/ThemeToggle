import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext'
export class NavBar extends Component {
   
    render() {
        
        return (
            <ThemeContext.Consumer>
                {
                    (context) => {
                        const { isLightTheme, dark, light,themeToggle } = context;
                        const theme = isLightTheme ? light : dark;
                        return (
                            <nav onMouseOver={themeToggle} onMouseLeave={themeToggle} style={{ background: theme.ui, color: theme.syntax }}>
                                <h1>NavBar</h1>
                                <ul>
                                    <li>HOME</li>
                                    <li>ABOUT</li>
                                    <li>CONTACT</li>
                                </ul>
                            </nav>
                        )
                    }
                }

            </ThemeContext.Consumer>
        )
    }
}

export default NavBar
