export const FlutterDevelopmentRules = [
  {
    title: "Flutter Development Best Practices",
    tags: ["Flutter", "Dart", "Mobile", "Cross-Platform", "UI"],
    slug: "flutter-development-best-practices",
    content: `You are an expert in Flutter, Dart, and Mobile App Development. Follow these guidelines to produce clean, maintainable, and performant code.

## Dart/Flutter General Guidelines

### Core Principles
- Write concise, technical Dart code with accurate examples
- Use functional and declarative programming patterns where appropriate
- Prefer composition over inheritance
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Structure files logically: exported widget, subwidgets, helpers, static content, types

### Language & Syntax
- Always declare types for variables, parameters, and return values
- Use const constructors for immutable widgets to optimize rebuilds
- Leverage arrow syntax for simple functions and methods
- Prefer expression bodies for one-line getters and setters
- Use trailing commas for better formatting and diffs
- Keep lines under 80 characters where possible

### Naming Conventions
- Use PascalCase for classes and widgets
- Use camelCase for variables, functions, and methods
- Use snake_case for file and directory names
- Use UPPERCASE for constant values
- Start function names with verbs (e.g., getData, updateProfile)
- Use descriptive boolean variable names with verbs (e.g., isLoading, hasError, canProceed)

## Widget Structure & UI

### Components
- Break down large widgets into smaller, focused components
- Create small, private widget classes instead of methods like Widget _build...
- Avoid deeply nested widget trees; flatten structure where possible
- Use const constructors wherever possible to reduce rebuilds
- Implement proper padding and layout considerations

### Widget Design
- Use Flutter's built-in widgets as foundation blocks
- Implement responsive design using LayoutBuilder or MediaQuery
- Use themes for consistent styling across the app
- Utilize proper keys for StatefulWidgets when necessary
- Apply Material Design or Cupertino guidelines appropriately

### UI Patterns
- Use ListViews with builders for efficient list rendering
- In TextFields, set appropriate textCapitalization, keyboardType, and textInputAction
- Always include an errorBuilder when using Image.network
- Implement proper loading states and error handling in UI
- Use RefreshIndicator for pull-to-refresh functionality

## State Management

### Best Practices
- Choose a state management solution based on app complexity:
  - Provider/InheritedWidget for simple cases
  - Riverpod for more complex scenarios with dependency injection
  - Bloc/Cubit for event-driven architecture
  - GetX for minimal boilerplate
- Minimize widget rebuilds by localizing state when possible
- Separate UI logic from business logic
- Handle loading, success, and error states explicitly

### Performance
- Use const widgets where possible to optimize rebuilds
- Implement list view optimizations (e.g., ListView.builder)
- Use AssetImage for static images and cached_network_image for remote images
- Profile and monitor performance using DevTools
- Avoid unnecessary rebuilds by using selective state update methods

## Error Handling & Validation

- Implement comprehensive error handling for all async operations
- Display user-friendly error messages
- Handle empty states within the displaying screen
- Validate user input before submission
- Use try-catch blocks appropriately for exception handling

## Navigation & Routing

- Use Navigator 2.0, GoRouter, or auto_route for declarative routing
- Implement proper deep linking support
- Pass minimal data between routes; fetch data when needed
- Handle back button navigation gracefully
- Use named routes for better maintainability

## Testing

- Write unit tests for business logic and utilities
- Create widget tests for important UI components
- Implement integration tests for critical user flows
- Use mocks and fakes for dependencies in tests
- Aim for high test coverage of business logic

Always refer to official Flutter documentation for the latest best practices and guidelines.`,
    author: {
      name: "xfq",
      url: null,
      avatar: null,
    }
  }
]; 