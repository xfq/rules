export const TaskManagementRules = [
  {
    title: "Task List Management",
    tags: ["Task Management", "Markdown", "Project Management"],
    slug: "markdown-task-list-management",
    content: `Guidelines for organizing and tracking project progress using markdown task lists. Follow these guidelines:

Best Practices:
- Use GitHub-flavored markdown checkbox syntax for tasks: \`- [ ] Task description\` (uncompleted) and \`- [x] Task description\` (completed)
- Create clear hierarchical structure with headings (# for main sections, ## for subsections)
- Group related tasks under descriptive headings
- Include progress indicators (e.g., percentages, status labels)
- Maintain consistent formatting throughout the document
- Use labels or tags to categorize tasks (e.g., #bug, #feature, #priority)
- Add links to relevant resources, files, or issues
- Update regularly with completion dates and status changes

Example Markdown Task List:
\`\`\`markdown
# Project: [Project Name] Task List

## 📋 Overview
**Progress:** 65% complete  

## 🔄 In Progress

### Backend API Development
- [x] Create user authentication endpoints
- [x] Implement JWT token validation
- [ ] Set up rate limiting middleware #security
- [ ] Create documentation for API endpoints #docs
  - [x] Authentication endpoints
  - [ ] User management endpoints
  - [ ] Content endpoints

### Frontend Implementation
- [x] Create login/signup components
- [ ] Implement dashboard layout #priority
  - [x] Navigation sidebar
  - [ ] Content area with cards
  - [ ] Responsive design for mobile
- [ ] Connect authentication API to frontend #priority
- [ ] Add form validation

## 📅 Upcoming Tasks

### Testing
- [ ] Write unit tests for authentication #testing
- [ ] Set up integration testing workflow #devops
- [ ] Create test data generators

### Deployment
- [ ] Configure CI/CD pipeline #devops
- [ ] Set up staging environment
- [ ] Create deployment documentation #docs

## ✅ Completed

### Project Setup
- [x] Initialize repository
- [x] Set up project structure
- [x] Configure development environment
- [x] Add base dependencies

### Planning
- [x] Define MVP requirements
- [x] Create initial wireframes
- [x] Set up project board

## 📌 Notes & Resources
- [Design Figma](https://figma.com/example-link)
- [API Documentation](https://docs.example.com)
- [Development Guidelines](https://github.com/example/repo/wiki)
\`\`\`

Key Elements of Effective Markdown Task Lists:
1. Clear structure with logical sections (In Progress, Upcoming, Completed)
2. Nested tasks to show relationships and dependencies
3. Progress tracking at both task and project levels
4. Links to relevant resources and documentation
5. Regular updates with completion information

When managing task lists:
- Add implementation details
- Include relevant context without making tasks too verbose
- Use consistent formatting for tags
- Archive completed tasks rather than deleting them to maintain history
- Consider splitting into multiple markdown files for very large projects`,
    author: {
      name: "xfq",
      url: null,
      avatar: null,
    }
  }
]; 