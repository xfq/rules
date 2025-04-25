import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-950 py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">About Trae Rules Directory</h1>

        <div className="space-y-8">
          <section className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">What is this website?</h2>
            <p className="text-gray-300 mb-4">
              The Trae Rules Directory is a community-driven collection of AI coding rules designed to enhance your
              development workflow. Our goal is to create a central hub where developers can discover, share, and use
              effective Trae Rules.
            </p>
          </section>

          <section className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">What are Trae Rules?</h2>
            <p className="text-gray-300 mb-4">
              Trae Rules are AI coding prompts that enhance your development workflow.
            </p>
            <p className="text-gray-300 mb-4">
              Each rule is designed to solve specific problems or tasks in your coding workflow, making you more
              productive and efficient.
            </p>
            <div className="mt-4">
              <Button asChild variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-900/20">
                <a href="https://docs.trae.ai/ide/rules-for-ai" target="_blank" rel="noopener noreferrer">
                  Learn More in Official Docs
                </a>
              </Button>
            </div>
          </section>

          <section className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">How to Contribute</h2>
            <p className="text-gray-300 mb-4">
              This directory is community-driven, and we welcome contributions from everyone. If you've created a useful
              Trae Rule, please consider sharing it with the community.
            </p>
            <p className="text-gray-300 mb-4">
              To contribute, you can submit your rule through our submission process. We'll review it and add it to the
              directory if it meets our quality standards.
            </p>
            <div className="mt-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <Link href="/submit">Submit a Rule</Link>
              </Button>
            </div>
          </section>

          <section className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">How do I use these rules?</h3>
                <p className="text-gray-300">
                  Simply copy the rule content and paste it into your Trae AI interface.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Can I modify these rules?</h3>
                <p className="text-gray-300">
                  Feel free to customize any rule to better fit your specific needs or workflow.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">How are rules categorized?</h3>
                <p className="text-gray-300">
                  Rules are categorized based on the technologies they work with (e.g., React, TypeScript).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Is this an official Trae website?</h3>
                <p className="text-gray-300">
                  No, this is a community-driven project and is not officially affiliated with Trae. For official
                  documentation, please visit the Trae website.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
