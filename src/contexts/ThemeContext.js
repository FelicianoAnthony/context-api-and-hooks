import React, { Component, createContext } from 'react';

export const ThemeContext = createContext(); 

// provide context data to any components this Provider class wraps 
class ThemeContextProvider extends Component {

    state = {
        isDarkTheme: true,
        lightTheme: {
            text: '#222',
            background: '#d8ddf1'
        },
        darkTheme: {
            text: '#fff', 
            background: '#5c5c5c'
        }
    }

    changeTheme = () => {
        this.setState({isDarkTheme: !this.state.isDarkTheme})
    }


    render() {
        return (
            // note that ThemeContextProvider returns ThemeContext.Provider
            <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme  }}> 
            {this.props.children} 
            {/* displays any children that ThemeContext wraps */}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;