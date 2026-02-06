import Link from "next/link"

export default function LabLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-[1200px] mx-auto bg-white p-6">
                <div className="grid grid-cols-[240px_1fr] gap-6">
                    {/* Left column: navigation */}
                    <div className="bg-gray-200 p-4">
                        <strong>Navigation</strong>
                        <div className="mt-3 text-sm space-y-2">
                            <div>
                                <Link href="/lab">Overview</Link>
                            </div>
                            <div>
                                <Link href="/lab/buttons">Buttons</Link>
                            </div>
                            <div>
                                <Link href="/lab/typography">Typography</Link>
                            </div>
                        </div>
                    </div>

                    {/* Right column: page content */}
                    <div>{children}</div>
                </div>
            </div>
        </div>
    )
}
