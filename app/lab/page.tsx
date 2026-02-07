import Link from "next/link"

export default function LabHomePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-serif font-bold">UI Engineering Lab</h1>

      <p className="text-gray-700">
        Welcome to the UI Engineering Lab! I'm using this space to learn and experiment with design system components
        using Next.js, Tailwind CSS, and shadcn/ui. Here you'll find examples of buttons, typography, and more.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>
            <strong>Next.js (App Router)</strong>: modern framework for React-based
            apps with file-system routing.
          </li>
          <li>
            <strong>React + TypeScript</strong>: strongly typed, component-driven
            architecture.
          </li>
          <li>
            <strong>Tailwind CSS</strong>: utility-first styling system for layout
            and design tokens.
          </li>
          <li>
            <strong>shadcn/ui</strong>: accessible, production-ready components
            built with Radix + Tailwind.
          </li>
          <li>
            <strong>Radix Primitives</strong>: headless components providing
            behavior and accessibility.
          </li>
          <li>
            <strong>Vercel</strong>: deployment and hosting for live feedback.
          </li>
        </ul>
      </section>


    </div>
  )
}
