## 
at Section 4: Multiple Context Usage 
    > "Modern react JS hooks and context with most recent edition" 

    Context API 
	- way to share state between components without having to pass props up or down 
	- no 3rd party packages 
	- how to know when to use context? 
		> is this data global and do I want to share data in several child components? yes 
	- Context Provider will "wrap" any components you want to supply state to -- 2 ways to use it ... 
		1. static contextType  
			- only used in class based components 
			- can only consume 1 context in component 
			- static contextType = ThemeContext; 
				> this goes "up the component tree" to find nearest Provider and once it does, it gets values passed and assigns them as context property on 
					props in that component 
					
		2. <ThemeContext.Consumer>{(context) => {
				const {context1, context2...} = context
				return (
					JSX...
				)
            }}
			</ThemeContext.Consumer>			
			- can be used in functional or class components
			- can consume multiple contexts  
	
	
	
Hooks 
	- allow us to do stuff in functional components that was preivously only possible in class based components (e.g. using states/lifecycle methods) 	
	- 