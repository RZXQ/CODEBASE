// | Class          | Properties                                                   |
// | -------------- | ------------------------------------------------------------ |
// | animate-none   | animation: none;                                             |
// | animate-spin   | animation: spin 1s linear infinite; @keyframes spin {  from {    transform: rotate(0deg);  }  to {    transform: rotate(360deg);  } } |
// | animate-ping   | animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; @keyframes ping {  75%, 100% {    transform: scale(2);    opacity: 0;  } } |
// | animate-pulse  | animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; @keyframes pulse {  0%, 100% {    opacity: 1;  }  50% {    opacity: .5;  } } |
// | animate-bounce | animation: bounce 1s infinite; @keyframes bounce {  0%, 100% {    transform: translateY(-25%);    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);  }  50% {    transform: translateY(0);    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);  } } |
//
// Animation: Utilities for animating elements with CSS animations.
// 1. Spin: Add the animate-spin utility to add a linear spin animation to elements like loading indicators.
// 2. Ping: Add the animate-ping utility to make an element scale and fade like a radar ping or ripple of water — useful for things like notification badges.
// 3. Pulse: Add the animate-pulse utility to make an element gently fade in and out — useful for things like skeleton loaders.
// 4. Bounce: Add the animate-bounce utility to make an element bounce up and down — useful for things like “scroll down” indicators.
// 5. Prefers-reduced-motion: For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transitions using the motion-safe and motion-reduce variants
export default function Animation() {
  return (
    <div className="flex h-10 w-10 animate-none items-center justify-center rounded-full bg-white p-2 shadow-lg ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-slate-200/20">
      <svg
        className="h-6 w-6 text-violet-500"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  );
}
