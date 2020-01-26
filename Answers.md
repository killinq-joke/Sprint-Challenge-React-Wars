# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS makes building components way faster and more visual with the jsx synthax

1. What does it mean to think in react?

Thinking in react is the way you think while building an app that is well reflected by the way you build apps in react

1. Describe state.

state is some value that can be changed each time you want it to be changed in a component
helpful for functionality

1. Describe props.

props are values that are passed from parent to child and that the child can only use as it is
helpful for components that require data

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

side effects are effects that happen that you may not want to happen too much because it can hinder / crash the server. 
To sync effects to a state/prop you useEffect(() => {
    do effects
}, [state/prop])
