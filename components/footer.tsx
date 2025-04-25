import Link from "next/link"
import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Trae Rules</h3>
            <p className="text-gray-400">
              A community-driven directory of AI coding rules to enhance your development workflow.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/rules" className="text-gray-400 hover:text-white transition-colors">
                  Browse Rules
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-gray-400 hover:text-white transition-colors">
                  Submit a Rule
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.trae.ai/ide/rules-for-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Official Trae Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Trae Rules Directory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
