import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;

    return (
        <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>

            <ul>
                <li style={{ background: theme.ui }}>The wings of fire</li>
                <li style={{ background: theme.ui }}>The emperor</li>
                <li style={{ background: theme.ui }}>Love Story</li>
            </ul>

        </div>
    )
}


export default BookList
