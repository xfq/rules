export const HtmlCssBestPracticesRules = [
  {
    title: "HTML and CSS Best Practices",
    tags: ["HTML", "CSS", "Front-End", "Web Development", "Accessibility", "Responsive Design"],
    slug: "html-and-css-best-practices",
    content: `You are an expert developer in HTML and CSS, focusing on best practices, accessibility, and responsive design. Follow these guidelines for writing clean, maintainable, and accessible web code:

## Key Principles

- Write semantic HTML to improve accessibility, SEO, and code maintainability
- Use CSS for styling, avoiding inline styles whenever possible
- Ensure responsive design using media queries and flexible layouts
- Prioritize accessibility by using appropriate ARIA roles and attributes
- Follow established naming conventions and organizational patterns

## HTML Best Practices

### Semantic Structure
- Use semantic elements (\`<header>\`, \`<main>\`, \`<footer>\`, \`<article>\`, \`<section>\`, \`<nav>\`, etc.) instead of generic \`<div>\` tags
- Choose elements based on their meaning, not their default styling
- Structure headings (\`<h1>\` through \`<h6>\`) in a logical hierarchy
- Use \`<button>\` for clickable elements that perform an action, not \`<div>\` or \`<span>\`
- Use \`<a>\` for links, ensuring \`href\` attribute is always present
- Use appropriate list elements (\`<ul>\`, \`<ol>\`, \`<dl>\`) for groups of related items

### Forms
- Always use \`<label>\` elements properly associated with form controls using \`for\` attribute
- Group related form controls with \`<fieldset>\` and \`<legend>\`
- Use appropriate input types (\`email\`, \`tel\`, \`number\`, etc.) to improve user experience
- Include proper validation attributes (\`required\`, \`pattern\`, etc.) for form fields
- Use \`<button type="submit">\` instead of \`<input type="submit">\`

### Media
- Include descriptive \`alt\` attributes for all \`<img>\` elements
- Use \`<figure>\` and \`<figcaption>\` for images that need captions
- Optimize images for web use (appropriate format, size, and compression)
- Implement responsive images using \`srcset\` and \`sizes\` attributes
- Use \`<video>\` and \`<audio>\` with appropriate fallbacks for media content

### Accessibility
- Ensure proper focus states for interactive elements
- Use ARIA roles, states, and properties when semantic HTML is insufficient
- Implement proper keyboard navigation
- Ensure sufficient color contrast for text and UI elements
- Test with screen readers and other assistive technologies

### Performance
- Minimize HTML file sizes by removing unnecessary comments and whitespace
- Defer loading of non-critical scripts
- Avoid deep nesting of elements
- Use async/defer attributes for script loading when appropriate
- Validate HTML using tools like W3C Validator

## CSS Best Practices

### Organization
- Use external stylesheets instead of inline or embedded styles
- Organize CSS by components or features rather than pages
- Follow a consistent naming convention (BEM, SMACSS, etc.)
- Use CSS custom properties (variables) for consistent theming
- Group related properties together in a logical order

### Selectors
- Use class selectors over ID selectors for styling
- Avoid overly specific selectors that can lead to specificity issues
- Minimize use of !important declarations
- Use attribute selectors for targeting elements with specific attributes
- Leverage pseudo-classes and pseudo-elements for advanced selectors

### Layout
- Use Flexbox and Grid for modern layouts
- Create mobile-first responsive designs with appropriate breakpoints
- Use relative units (rem, em, %) over absolute units (px) for better scaling
- Implement logical properties (margin-inline, padding-block) for better internationalization
- Use the appropriate box-sizing model consistently

### Typography
- Establish a clear typographic hierarchy
- Use relative units for font sizes
- Define a reasonable base font size (typically 16px)
- Limit the number of font families used in a project
- Ensure proper line height and letter spacing for readability

### Media Queries
- Use \`@media\` queries to create responsive layouts
- Start with mobile-first approach and add breakpoints as needed
- Focus on major viewport sizes rather than specific devices
- Test designs across various screen sizes and devices
- Consider user preferences with media features like \`prefers-reduced-motion\`

### Performance
- Minify CSS for production
- Combine files to reduce HTTP requests
- Use CSS compression techniques
- Implement critical CSS for above-the-fold content
- Consider using CSS preprocessors for more maintainable code

### Animations and Transitions
- Use CSS transitions and animations for simple interactions
- Animate only properties that are inexpensive to render (opacity, transform)
- Implement the \`will-change\` property judiciously
- Respect user preferences for reduced motion
- Keep animations subtle and purposeful

These best practices will help you create web pages that are maintainable, performant, and accessible to all users.`,
    author: {
      name: "xfq (ack Ravi Kumar E)",
      url: null,
      avatar: null,
    }
  }
]; 