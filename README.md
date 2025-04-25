# Trae Rules

## How to Contribute

Rule submissions are handled via Pull Requests to this repository. Follow these steps to submit your rule:

### 1. Prepare Your Rule
Create your rule following the template format below. Make sure your rule is clear, concise, and focused on solving a specific problem.

### 2. Fork the Repository
Fork this repository to your GitHub account so you can make changes.

### 3. Add Your Rule
Create a new file in `lib/data/rules/` and update `lib/data/rules/index.ts`. Use the template format below and name your file descriptively.

### 4. Submit a Pull Request
Create a pull request from your fork to our repository. We'll review your submission and provide feedback if needed.

### Rule Template
Use this template as a starting point for your rule submission:

```typescript
{
  title: "Your Rule Title",
  tags: ["Category1", "Category2", "Framework"],
  slug: "your-rule-title-in-kebab-case", 
  content: `Your rule content goes here. This should be the complete prompt/rule text that users will copy and paste.

This can be multiple paragraphs and include code examples.

Example format:
\`\`\`jsx
// Your code example
const example = () => {
  return <div>Example</div>;
};
\`\`\`
`,
  author: {
    name: "Your Name", // Optional
    url: "https://your-website.com", // Optional
    avatar: null, // Optional
  }
}
```

### Guidelines
- Rules should be clear, concise, and focused on solving a specific problem
- Include detailed descriptions and examples to help users understand how to use your rule
- Test your rule thoroughly before submitting
- Ensure your rule doesn't contain sensitive information or violate any licenses
- Be open to feedback and willing to make changes if requested

## Getting Started

### Prerequisites

*   Node.js (Version specified in `.nvmrc` if available, otherwise latest LTS recommended)
*   pnpm

### Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/xfq/rules.git
    cd rules
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
3.  **Run the development server:**
    ```bash
    pnpm dev
    ```
    The application should now be running on [http://localhost:3000](http://localhost:3000).

### Other Scripts

*   **Build for production:** `pnpm build`
*   **Start production server:** `pnpm start`
*   **Lint code:** `pnpm lint`

## Future Plans

*   Internationalization (i18n), starting with Simplified Chinese.
*   User accounts (GitHub/Google/Email login).
*   Advanced search and filtering options.
*   Rule rating/liking system.
*   Comments/discussion section for rules.
*   Rule versioning.
*   "How-to" guides on writing effective rules.
