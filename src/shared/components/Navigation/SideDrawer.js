import React, {useRef} from 'react'
import ReactDOM  from 'react-dom'
import { CSSTransition } from 'react-transition-group'

const SideDrawer = ({ onClick, children, show }) => {
  const nodeRef = useRef()
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames='slide-in'
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      <aside
        className='fixed ltr:left-0 rtl:right-0 top-0 w-4/5 z-50 shadow-lg h-screen overflow-y-auto bg-white text-main'
        onClick={onClick}
        ref={nodeRef}
      >
        {children}
      </aside>
    </CSSTransition>
  )

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
}

export default SideDrawer
