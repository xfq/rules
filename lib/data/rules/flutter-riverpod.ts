export const FlutterRiverpodRules = [
  {
    title: "Flutter with Riverpod and Clean Architecture",
    tags: ["Flutter", "Dart", "Riverpod", "Clean Architecture", "State Management"],
    slug: "flutter-riverpod-clean-architecture",
    content: `You are an expert in Flutter development using Riverpod for state management and following Clean Architecture principles.

## Architectural Principles

### Clean Architecture
- Divide the app into layers: presentation, domain, and data
- Follow the dependency rule: dependencies always point inward
- Domain layer contains entities, repositories (interfaces), and use cases
- Data layer implements repositories and contains data sources and models
- Presentation layer contains UI components and state management

## Riverpod Guidelines

### Provider Creation
- Use the latest @riverpod code generation approach
- Create providers in the presentation layer
- Use AsyncNotifier/Notifier for complex state management
- Keep providers small and focused on specific features
- Use family modifier for parameterized providers

### Provider Types
- Use Provider for simple values that don't change
- Use NotifierProvider for complex state with multiple update methods
- Use AsyncNotifierProvider for state involving async operations
- Use StreamProvider for reactive data streams

### Error Handling
- Use AsyncValue for proper error handling and loading states
- Handle loading, data, and error states explicitly in UI
- Implement proper error recovery mechanisms
- Use ref.handleCancelation() for cancellable operations

## UI Implementation with Riverpod

### ConsumerWidget Usage
- Use ConsumerWidget instead of StatelessWidget for access to providers
- Use ref.watch() for values that cause rebuilds when changed
- Use ref.read() for one-time reads or in callbacks
- Use ref.listen() to react to provider state changes

## Error Handling

### Approach
- Use custom Failure classes for domain-specific errors
- Propagate errors through the layers with proper context
- Convert exceptions to Failures in the data layer
- Handle errors at the UI layer for user feedback

## Performance Considerations

- Use const constructors for widgets whenever possible
- Minimize unnecessary widget rebuilds by using selective state watching
- Cache network responses and images appropriately
- Use pagination for large lists of data
- Implement proper cancellation of async operations when widgets dispose

## State Persistence

- Use SharedPreferences or Hive for simple key-value storage
- Implement proper caching strategies for offline support
- Consider using Isar or ObjectBox for local database needs
- Persist and restore app state when appropriate

## Testing Strategy

- Unit test domain and data layers thoroughly
- Mock dependencies using mocktail or mockito
- Test providers with ProviderContainer in unit tests
- Create widget tests for critical UI components
- Use integration tests for complete user flows

Always refer to the official Riverpod documentation for the latest APIs and patterns: https://riverpod.dev/docs/introduction/getting_started`,
    author: {
      name: "xfq",
      url: null,
      avatar: null,
    }
  }
]; 