import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

export default function Modal({ isOpen, onClose, title, children, size = 'medium' }) {
  const sizeClasses = {
    small: 'max-w-md',
    medium: 'max-w-2xl',
    large: 'max-w-4xl',
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-3 sm:p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={`w-full ${sizeClasses[size]} transform overflow-hidden rounded-xl sm:rounded-2xl glass-card p-4 sm:p-6 md:p-8 shadow-xl transition-all max-h-[90vh] overflow-y-auto`}>
                <div className="flex items-center justify-between mb-4 sm:mb-6 sticky top-0 bg-dark/50 backdrop-blur-md -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8 py-3 sm:py-4 z-10">
                  {title && (
                    <Dialog.Title className="text-xl sm:text-2xl font-bold text-primary">
                      {title}
                    </Dialog.Title>
                  )}
                  <button
                    onClick={onClose}
                    className="ml-auto text-gray-400 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full touch-manipulation"
                    aria-label="Close modal"
                  >
                    <HiX className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
                <div className="mt-2 sm:mt-4">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
