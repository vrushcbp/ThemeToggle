import React, { Component,createContext } from 'react'

export const ThemeContext=createContext()

export class ThemeContextProvider extends Component {
    state={
        isLightTheme:true,
        light:{syntax:'#555',ui:'#ddd',bg:'#eee'},
        dark:{syntax:'#ddd',ui:'#333',bg:'#555'}
    }
    themeToggle=()=>
    {
        this.setState({isLightTheme: !this.state.isLightTheme})
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state,themeToggle:this.themeToggle}} >
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider
