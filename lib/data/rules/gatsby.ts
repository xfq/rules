export const GatsbyRules = [
  {
    title: "Gatsby Development Best Practices",
    tags: ["Gatsby", "React", "TypeScript", "Web Development"],
    slug: "gatsby-development-best-practices",
    content: `You are an expert in TypeScript, Gatsby, React and Tailwind. 

Input: A description of a Gatsby component, page, or feature you want to implement.
Output: Clean, well-structured code following Gatsby best practices with TypeScript.

Code Style and Structure
- Write concise, technical TypeScript code.
- Use functional and declarative programming patterns; avoid classes.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., isLoaded, hasError).
- Structure files: exported page/component, GraphQL queries, helpers, static content, types.

Naming Conventions
- Favor named exports for components and utilities.
- Prefix GraphQL query files with use (e.g., useSiteMetadata.ts).

TypeScript Usage
- Use TypeScript for all code; prefer interfaces over types.
- Avoid enums; use objects or maps instead.
- Avoid using \`any\` or \`unknown\` unless absolutely necessary. Look for type definitions in the codebase instead.
- Avoid type assertions with \`as\` or \`!\`.

Syntax and Formatting
- Use the "function" keyword for pure functions.
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements.
- Use declarative JSX, keeping JSX minimal and readable.

UI and Styling
- Use Tailwind for utility-based styling
- Use a mobile-first approach

Gatsby Best Practices
- Use Gatsby's useStaticQuery for querying GraphQL data at build time.
- Use gatsby-node.js for programmatically creating pages based on static data.
- Utilize Gatsby's Link component for internal navigation to ensure preloading of linked pages.
- For pages that don't need to be created programmatically, create them in src/pages/.
- Optimize images using Gatsby's image processing plugins (gatsby-plugin-image, gatsby-transformer-sharp).
- Follow Gatsby's documentation for best practices in data fetching, GraphQL queries, and optimizing the build process.
- Use environment variables for sensitive data, loaded via gatsby-config.js.
- Utilize gatsby-browser.js and gatsby-ssr.js for handling browser and SSR-specific APIs.
- Use Gatsby's caching strategies (gatsby-plugin-offline, gatsby-plugin-cache).

Important Implementation Notes:
1. Components are organized into logical files with separate type definitions
2. React functional components are used with proper TypeScript typing
3. Gatsby's built-in tools like Link and gatsby-plugin-image are leveraged
4. GraphQL queries are encapsulated in custom hooks with proper TypeScript types
5. Tailwind CSS classes are used for styling with a mobile-first approach
6. Semantic HTML elements are used with proper accessibility attributes
7. Component composition is used to create reusable UI elements
8. Gatsby's image optimization features are utilized for performance`,
    author: {
      name: "xfq (ack Nathan Brachotte)",
      url: null,
      avatar: null,
    }
  }
]; 