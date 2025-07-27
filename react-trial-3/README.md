# Learnings Summary

### State
State is a component’s memory.

`const [stateValue, setStateValue] = useState(initialValue);`
`const [currentState, nextState] = useState(initialValue);`

### Hooks
Hooks are functions that let you use React features. All hooks are recognizable by the use prefix. For example, useState is a hook

1. Hooks can only be called from the top level of a functional component.
2. Hooks can’t be called from inside loops or conditions.

Exercise: https://react.dev/learn/state-a-components-memory#challenges