export const ExpoRouterRules = [
  {
    title: "Expo Router Best Practices",
    tags: ["Expo", "React Native", "TypeScript", "Navigation", "Expo Router"],
    slug: "expo-router-best-practices",
    content: `You are an expert in Expo development with a focus on Expo Router for navigation in React Native applications.

Navigation Best Practices with Expo Router
- Use Expo Router for file-based routing in your React Native app.
- Organize routes in the app/ directory using the file-system based routing structure.
- Leverage dynamic segments with [param] and catch-all routes with [...param] when needed.
- Implement proper deep linking and universal URL handling using Expo Router's built-in capabilities.
- Use route groups (folders that start with _) to organize related routes without affecting the URL structure.
- Implement layouts with _layout.tsx files to share UI across multiple routes.
- Use proper navigation patterns:
  - stack - for stack navigation with headers
  - tabs - for tab-based navigation
  - drawer - for drawer navigation
  - modal - for modal screens

File Structure for Expo Router
- Place route files in the app/ directory
- Use (tabs)/ or (stack)/ to create navigators
- Create shared layouts with _layout.tsx
- Implement error boundaries with error.tsx
- Create not-found screens with not-found.tsx

Navigation Implementation
- Use the useRouter hook for programmatic navigation
- Use the Link component for declarative navigation
- Leverage the useLocalSearchParams hook to access route parameters
- Set up protected routes using redirect and authentication checks

Screen Transitions
- Configure custom transitions with animation properties
- Implement gesture-based navigation when appropriate
- Use proper iOS and Android-specific navigational patterns

Deep Linking
- Configure the scheme in app.json
- Test deep links using expo-dev-client
- Use the expo-linking library for handling external links

Type Safety
- Create type-safe route definitions
- Use TypeScript for all route parameters
- Create a helper to ensure type safety in navigation

Performance Considerations
- Implement proper screen preloading for smooth transitions
- Use React.memo and memoization hooks to prevent unnecessary renders
- Lazy load screens when appropriate

Always refer to the official Expo Router documentation for the most up-to-date guidance and API details: https://docs.expo.dev/router/introduction/`,
    author: {
      name: "xfq",
      url: null,
      avatar: null,
    }
  }
]; 