import { motion, AnimatePresence } from 'framer-motion'
interface PopupProps {
  children: React.ReactNode,
  renderPopover: React.ReactNode
}
import { useState } from "react"
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useRole, useInteractions, useId, FloatingPortal } from '@floating-ui/react'
const Popup = ({children, renderPopover}: PopupProps) => {
  const [open, setOpen] = useState(false)
  const {x, y,  refs, context, strategy, middlewareData } = useFloating({
    open: open,
    onOpenChange: setOpen,
    middleware: [
      offset(0),
      flip({ fallbackAxisSideDirection: "end"}),
      shift()
    ],
    whileElementsMounted: autoUpdate,
    placement: "bottom-end"
  })
  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getReferenceProps } = useInteractions([
    click,
    dismiss,
    role
  ])
  const headingId = useId()

  const onShowPopup = () => {
    setOpen(true)
  }

  const onClosePopup = () => {
    setOpen(false)
  }

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()} onMouseEnter={onShowPopup} onMouseLeave={onClosePopup}>
        { renderPopover }
      
      {
        open && (
          <FloatingPortal id={headingId}>
            <AnimatePresence>
              <motion.div
                ref={refs.setFloating}
                style={{
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0,
                  width: 'max-content',
                  transformOrigin: `${middlewareData.arrow?.x}px top`
                }}
                initial={{ opacity: 0, transform: 'scale(0)' }}
                animate={{ opacity: 1, transform: 'scale(1)' }}
                exit={{ opacity: 0, transform: 'scale(0)' }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  { children }
                </div>
              </motion.div>
            </AnimatePresence>
          </FloatingPortal>
        )
      }
      </div>
    </>
  )
}

export default Popup