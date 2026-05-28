export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-400 mb-4">
          Crafted with <span className="text-pink-600">♥</span> by Prasanga Niraula
        </p>
        <p className="text-slate-500 text-sm">
          © {currentYear} All rights reserved. Built with React, Vite, and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
