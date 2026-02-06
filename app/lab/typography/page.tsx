export default function TypographyPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-semibold">Typography</h1>

      <section>
        <h2 className="text-lg font-medium mb-2">Headings</h2>
        <div className="grid gap-2">
          <h1 className="text-4xl font-bold">H1 Heading</h1>
          <h2 className="text-3xl font-semibold">H2 Heading</h2>
          <h3 className="text-2xl font-semibold">H3 Heading</h3>
          <h4 className="text-xl font-medium">H4 Heading</h4>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-2">Body Text</h2>
        <div className="grid gap-2">
          <p className="text-base">This is normal body text.</p>
          <p className="text-sm text-gray-700">This is small body text with muted color.</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium mb-2">Captions / Labels</h2>
        <div className="grid gap-1">
          <p className="text-xs uppercase text-gray-500">Caption text</p>
          <p className="text-xs font-medium text-gray-700">Label text</p>
        </div>
      </section>
    </div>
  )
}
