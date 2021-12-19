import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

const Backdrop = ({ onClick, show }) => {
  const nodeRef = useRef()
  return ReactDOM.createPortal(
    <CSSTransition
      in={show}
      timeout={200}
      classNames='slide-in'
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className='fixed inset-0 bg-gray-700/70 z-40'
        onClick={onClick}
      ></div>
    </CSSTransition>,
    document.getElementById('backdrop-hook')
  )
}

export default Backdrop
