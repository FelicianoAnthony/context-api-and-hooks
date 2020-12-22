import React, { Component, useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import {AuthContext} from '../contexts/AuthContext';

// class Navbar extends Component {

//     // contextType can ONLY be used in class component 
//     /* goes "up the component tree" to find a Provider and get data in value property from Provider that was found ... 
//     and attaches it to a context property inside this component
//     */
//     // static contextType = ThemeContext;
    
    
//     render() {
//         // const  { isDarkTheme, darkTheme, lightTheme } = this.context;
//         // const theme = isDarkTheme ? darkTheme : lightTheme;
        
//         return (
//             <AuthContext.Consumer>{(authContext) => {
//                 return (
//                     <ThemeContext.Consumer>{(themeContext) => {
//                         console.log(authContext)
//                         const  { isDarkTheme, darkTheme, lightTheme } = themeContext;
//                         const { isLoggedIn, changeAuthStatus} = authContext;
//                         const theme = isDarkTheme ? darkTheme : lightTheme;
    
//                         return (
//                             <nav style={{background: theme.background, color: theme.text, height: '120px'}}> 
//                             <h2 className={{textAlight: 'center'}}>
//                                 Oak Academy
//                             </h2>
//                             <p 
//                                 onClick={changeAuthStatus}
//                                 style={{textAlign: 'center'}}    
//                             > {isLoggedIn ? 'logged in' : 'logged out'}
//                             </p>
//                             <div className='ui three buttons'>
//                                 <button className='ui button'> Overview</button>
//                                 <button className='ui button'> Contact</button>
//                                 <button className='ui button'> Support</button>
//                             </div>
//                         </nav>
//                         )
//                     }} 
//                     </ThemeContext.Consumer>
//                 )
//             }}
//             </AuthContext.Consumer>  
//         );
//     }
// }

const Navbar = () => {

    const  { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
    const { isLoggedIn, changeAuthStatus} = useContext(AuthContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const test = useContext(AuthContext); 

    return (
        <nav style={{background: theme.background, color: theme.text, height: '120px'}}> 
        <h2 className={{textAlight: 'center'}}>
            Oak Academy
        </h2>
        <p 
            onClick={changeAuthStatus}
            style={{textAlign: 'center'}}    
        > {isLoggedIn ? 'logged in' : 'logged out'}
        </p>
        <div className='ui three buttons'>
            <button className='ui button'> Overview</button>
            <button className='ui button'> Contact</button>
            <button className='ui button'> Support</button>
        </div>
    </nav>
    ) 

}

export default Navbar;