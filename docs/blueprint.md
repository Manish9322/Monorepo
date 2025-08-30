# **Project Name**: Monorepo Maestro

## Project Overview:
Monorepo Maestro is an integrated platform that leverages a monorepo architecture to streamline development workflows across multiple interconnected applications. This structure enables code sharing, consistent styling, and unified deployment processes while maintaining separation of concerns between the public-facing website, vendor CRM, and administrative dashboard.

## Core Features:

- **UI Component Library**: A comprehensive set of reusable UI components with consistent styling. All components support theming, accessibility standards, and responsive design principles. The library serves as the foundation for all web applications in the ecosystem.

- **State Management**: Centralized Redux Toolkit store configuration shared across web, CRM, and admin applications. Includes pre-configured reducers, middleware setup, and RTK Query for API data fetching with automatic caching and request lifecycle management.

- **Turborepo Configuration**: Advanced monorepo setup with optimized build pipelines, intelligent caching, and parallel task execution. Configured for efficient development, testing, and deployment workflows across all applications.

- **Authentication System**: Secure JWT-based authentication using HTTP-only cookies. Implements role-based access control with distinct permissions for users, vendors, and administrators. Includes session management, token refresh mechanism, and protection against common security vulnerabilities.

- **Vendor CRM Portal**: Dedicated customer relationship management system for vendors to manage their products, track sales, and communicate with customers. Features interactive dashboards, analytics, and integration with the main platform.

- **Admin Dashboard**: Comprehensive administrative interface with system-wide configuration controls, user management, content moderation tools, and performance analytics. Provides granular access controls and audit logging.

## Design Guidelines:

- **Color Palette**:
  - Primary: HSL(210, 70%, 50%) / #3388FF - A vibrant blue conveying trust and reliability
  - Background: HSL(210, 20%, 95%) / #F0F5FA - Clean, professional light blue backdrop
  - Accent: HSL(240, 80%, 60%) / #4A00E0 - Distinctive purple for highlighting interactive elements
  - Success: HSL(160, 70%, 45%) / #1ED990 - Clear green for positive actions and confirmations
  - Warning: HSL(40, 90%, 60%) / #FFC632 - Attention-grabbing amber for cautionary states
  - Error: HSL(0, 80%, 60%) / #FF4D4D - Strong red for critical alerts and errors

- **Typography**:
  - Headings: 'Space Grotesk' (sans-serif) - Modern, distinctive character for hierarchical structure
  - Body Text: 'Inter' (sans-serif) - Highly readable with excellent legibility at all sizes
  - Font Scale: Following a 1.25 ratio for harmonious progression (16px base with 20px line height)
  - Weight Usage: Regular (400) for body text, Medium (500) for emphasis, Bold (700) for headings

- **Component Styling**:
  - Consistent 8px spacing grid system applied throughout all applications
  - Subtle rounded corners (4px standard, 8px for cards and containers)
  - Light shadows for elevation (3 levels of depth) with consistent implementation
  - Interactive elements have distinct hover, focus, and active states

- **Motion & Animation**:
  - Subtle transitions (250-300ms) with ease-out timing function for natural movement
  - Consistent animation patterns for similar interactions across all applications
  - Reduced motion option available for accessibility compliance
  - Strategic use of micro-interactions to enhance user experience without distraction

## Technical Architecture:

- **Frontend**: Next.js for all applications with TypeScript for type safety
- **API Strategy**: RESTful principles with consistent endpoint structure and response formatting
- **Testing**: Jest for unit tests, React Testing Library for component tests, Cypress for E2E testing
- **CI/CD**: Automated pipelines for testing, building, and deploying each application
- **Performance Targets**: 90+ Lighthouse scores across all core metrics for each application