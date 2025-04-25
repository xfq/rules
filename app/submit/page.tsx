import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-gray-950 py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Submit a Rule</h1>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">How to Submit</h2>
          <p className="text-gray-300 mb-6">
            We use GitHub for rule submissions to ensure quality and maintainability. Follow these steps to submit your
            rule:
          </p>

          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-medium text-white mb-2">1. Prepare Your Rule</h3>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-medium text-white mb-2">2. Fork the Repository</h3>
              <p className="text-gray-300 mb-4">Fork our GitHub repository to your account so you can make changes.</p>
              <Button asChild variant="outline" className="flex items-center gap-2 border-gray-700 text-gray-300">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Fork Repository
                </a>
              </Button>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-medium text-white mb-2">3. Add Your Rule</h3>
              <p className="text-gray-300">
                Create a new file in the appropriate directory with your rule. Use the template provided in the
                repository README.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-medium text-white mb-2">4. Submit a Pull Request</h3>
              <p className="text-gray-300">
                Create a pull request from your fork to our repository. We'll review your submission and provide
                feedback if needed.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Guidelines</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Rules should be clear and concise.</li>
            <li>Ensure your rule doesn't contain sensitive information or violate any licenses.</li>
            <li>Be open to feedback and willing to make changes if requested.</li>
          </ul>
        </div> */}
      </div>
    </main>
  )
}
