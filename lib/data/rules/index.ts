import { TailwindRules } from './tailwind';
import { ExtensionRules } from './extensions';
import { ShadcnRules } from './shadcn';
import { GatsbyRules } from './gatsby';
import { DeepLearningRules } from './deep-learning';
import { LaravelRules } from './laravel';
import { BlazorRules } from './blazor';
import { UnityRules } from './unity';
import { LaravelVueRules } from './laravel-vue';
import { TaskManagementRules } from './task-management';
import { ExpoReactNativeRules } from './expo-react-native';
import { ExpoRouterRules } from './expo-router';

// Combine all rules into one array
export const allRules = [
  ...TailwindRules,
  ...ExtensionRules,
  ...ShadcnRules,
  ...GatsbyRules,
  ...DeepLearningRules,
  ...LaravelRules,
  ...BlazorRules,
  ...UnityRules,
  ...LaravelVueRules,
  ...TaskManagementRules,
  ...ExpoReactNativeRules,
  ...ExpoRouterRules
];

// Export individual rule collections for direct use
export { 
  TailwindRules, 
  ExtensionRules, 
  ShadcnRules, 
  GatsbyRules, 
  DeepLearningRules, 
  LaravelRules, 
  BlazorRules, 
  UnityRules, 
  LaravelVueRules, 
  TaskManagementRules, 
  ExpoReactNativeRules, 
  ExpoRouterRules 
}; 