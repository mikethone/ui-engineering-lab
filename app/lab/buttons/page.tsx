import { Button } from "@/components/ui/button"

export default function ButtonsPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-semibold">Buttons</h1>

      {/* Variants */}
      <section>
        <h2 className="text-lg font-medium mb-2">Variants</h2>
        <div className="grid grid-cols-3 gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-lg font-medium mb-2">Sizes</h2>
        <div className="grid grid-cols-3 gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Disabled */}
      <section>
        <h2 className="text-lg font-medium mb-2">Disabled</h2>
        <div className="grid grid-cols-3 gap-4">
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
          <Button variant="destructive" disabled>
            Disabled
          </Button>
        </div>
      </section>
    </div>
  )
}
