Class based and functional based 

Class based:

These are es6 classes that extend react.component
must include a render method to return jsx
can use state via this.state
can use lifecycle methods like componentDidMount, shouldComponentUpdate, etc.
More verbose syntax


Functional components:

These are pure js functions
uses use state for state management
useeffect for lifecycle methods


What is JSX
JSX stands for JavaScript XML,

JSX is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript. 
Before JSX, you had to use React.createElement() to build UI elements. 
JSX makes this process more readable and expressive, especially when building complex UIs.
It’s not valid JavaScript on its own—but tools like Babel convert it into regular JavaScript that browsers can understand.



🔍 How JSX Works Behind the Scenes
You write JSX like <h1>Hello</h1>

Babel transforms it into React.createElement(...)

React uses that to build a virtual DOM

The virtual DOM updates the real DOM efficiently






Life Cycle Methods:

Stages of a componets:

  Mount  create 
  Update  re render due to changes using state
  UnMount  remove from dom

Methods:
At the time of mount
  component did mount
at Updation
  component did update
at deletion
  component will un mount


Summary
Class Component Method	Functional Hook Equivalent
componentDidMount	useEffect(() => {}, [])
componentDidUpdate	useEffect(() => {}, [deps])
componentWillUnmount	useEffect(() => return () => {}, [])

----------------------------------------------------------------------------------------------------------------------
  React Hooks
UseSate
UseEffect
Useref  (referenece to dom elements and doesnt re render a components)
UseMemo (memoization or caching values) returns value  returned by function
UseCallback ( memoization or caching a function) useful when dealing with parent passes a function as prop to children.return functions reference
UseContext 


------------------------------------------------------------------------------------------------------------

  Custom Hooks in react

“A custom hook in React is a reusable function that encapsulates component logic using built-in hooks like useState,
  useEffect, or useMemo. It allows us to share logic across components without duplicating code, 
  while keeping components clean and focused on rendering.”

🧠 Explain Why They Matter
“Custom hooks are especially useful when multiple components need the same behavior—like fetching data, 
  syncing with localStorage, handling forms, or tracking window size. Instead of repeating logic, 
  we abstract it into a hook and reuse it.”




-------------------------------------------------------------------------------------------------------------------------------------------

Pure and impure components

  A pure component is one that:
  
  Always renders the same output for the same props and state.
  
  Does not cause side effects during rendering.
  
  Does not mutate props or state directly.




    ------------------------------------------------------------------------------------------------------------------------------------------

    useSate Hook:

const [count, setCount] = useState(0)
const [color, setColor] = useState("red")

setPreferences(prevPreferences => {
  return { ...prevPreferences, theme: "dark" }
})


  
  
  





