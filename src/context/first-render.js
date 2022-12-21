import * as React from 'react'

const FirstRenderContext = React.createContext()

function firstRenderReducer(state, action) {
  switch (action.type) {
    case 'first': {
      return { isFirstRender: true }
    }
    case 'loaded': {
      return { isFirstRender: false }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function FirstRenderProvider({ children }) {
  const [state, dispatch] = React.useReducer(firstRenderReducer, {
    isFirstRender: true,
  })
  const value = { state, dispatch }
  return (
    <FirstRenderContext.Provider value={value}>
      {children}
    </FirstRenderContext.Provider>
  )
}

function useFirstRender() {
  const context = React.useContext(FirstRenderContext)
  if (context === undefined) {
    throw new Error('useFirstRender must be used within a FirstRenderProvider')
  }
  return context
}

export { FirstRenderProvider, useFirstRender }
