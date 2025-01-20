import React from 'react';

const Layer = <P extends object>(WrappedComponent: React.ComponentType<P>, props: P) => {
  console.log('props', props)
  return () => {
    return (
      <div className="fixed w-full h-screen opacity-[0.5] bg-gray-400 z-[100] user-select-none">
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Layer

