import { Rule } from "../../../lib/interfaces";

export const BlazorRules: Rule[] = [
  {
    title: "Blazor & ASP.NET Core",
    tags: ["csharp", "blazor", "dotnet", "web-development", "asp-net-core"],
    slug: "blazor-aspnet-core",
    icon: "⚡",
    description: "Expert guidelines for Blazor and ASP.NET Core development following best practices and architectural principles",
    color: "#512BD4",
    content: `
# Blazor & ASP.NET Core

## Key Principles
- Write clean, maintainable C# code for both server and client components
- Follow ASP.NET Core and Blazor conventions and best practices
- Implement component-based architecture with proper state management
- Ensure accessibility and responsive design
- Write performant code that considers both server resources and client-side rendering
- Use dependency injection for loose coupling and testability
- Implement proper error handling throughout the application

## C# / .NET Guidelines
- Use C# 10+ features when appropriate (e.g., global using directives, nullable reference types)
- Follow Microsoft's C# coding conventions
- Utilize .NET 6+ features and APIs
- Implement async/await pattern for asynchronous operations
- Use LINQ appropriately for data manipulation
- Implement proper exception handling with custom exceptions when needed
- Use nullable reference types to prevent null reference exceptions
- Implement IDisposable pattern for proper resource management
- Utilize record types for immutable data structures
- Write clean, self-documenting code with appropriate XML documentation

## Blazor Best Practices
- Properly implement component lifecycle methods
- Separate concerns with clear component boundaries
- Implement proper state management strategies
  - Use parameters for component input
  - Implement cascading parameters for shared state
  - Use dependency injection for services
  - Implement state containers for complex state
- Minimize JavaScript interop when possible
- Implement proper error boundaries
- Optimize for performance:
  - Use @key directive for efficient list rendering
  - Minimize component rendering with ShouldRender()
  - Use virtualization for large data sets
  - Implement proper component granularity
- Ensure proper handling of component events
- Implement proper form validation
- Use Blazor's built-in features for routing and navigation
- Implement proper security measures and authorization

## Key Conventions
1. Follow component-based architecture patterns
2. Use Pascal case for component, class, and method names
3. Use camel case for private fields and method parameters
4. Prefix private fields with underscore
5. Implement interfaces for services
6. Use dependency injection for services and components
7. Follow MVVM or similar patterns for component design
8. Use built-in form validation
9. Implement proper error handling with try-catch blocks
10. Use async/await for asynchronous operations
11. Implement proper authentication and authorization
12. Use proper data binding techniques
13. Implement proper component communication methods
14. Follow RESTful principles for API endpoints
`,
    author: {
      name: "xfq",
    },
    date: "2025-04-24",
  },
]; 