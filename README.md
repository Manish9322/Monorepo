# Monorepo 

Welcome to Monorepo, a Next.js 15 monorepo project built with Turborepo. This repository contains a suite of applications designed to work together seamlessly.

## What's inside?

This Turborepo includes the following packages and applications:

### Apps
g 
- `web`: The main public-facing website.
- `crm`: A customer relationship management portal for vendors.
- `admin`: An internal administrative dashboard.

### Packages

- `ui`: A shared UI component library.
- `store`: Shared Redux Toolkit store, slices, and RTK Query APIs.
- `lib`: Shared utilities, constants, and database connection logic.
- `typescript-config`: Shared `tsconfig.json`s used throughout the monorepo.
- `eslint-config-custom`: Shared ESLint configurations.

### Architecture

- **Monorepo**: Turborepo for managing the multi-package/multi-app repository.
- **Framework**: Next.js 15 (App Router).
- **State Management**: Redux Toolkit with RTK Query.
- **Authentication**: JWT-based authentication with roles, using httpOnly cookies.
- **Database**: MongoDB with a shared connection utility.
- **Styling**: Tailwind CSS with a shared, configurable theme.

## Getting Started

To get started with this monorepo, you'll need to have Node.js, npm/yarn/pnpm, and a MongoDB instance available.

### 1. Install Dependencies

From the root of the project, run:

```bash
npm install
```

### 2. Set up Environment Variables

Each application in the `apps` directory requires its ow n `.env.local` file. You can copy the contents from `.env.local.example` in each app's directory and fill in the required values.

A single `.env` file at the root of the project can also be used to share environment variables across all apps during development.

**Required variables:**

- `MONGO_URI`: Your MongoDB connection string.
- `JWT_SECRET`: A secret key for signing JWTs.

### 3. Run Development Servers

To run all applications in development mode, execute the following command from the root directory:

```bash
npm run dev
```

This will start the development servers for `web`, `crm`, and `admin` concurrently.

- **Web App**: `http://localhost:3000`
- **CRM App**: `http://localhost:3001`
- **Admin App**: `http://localhost:3002`

## Building for Production

To build all applications for production, run:

```bash
npm run build
```


**Monorepo** is a full-stack monorepo project designed to empower businesses and developers by providing a scalable, maintainable, and high-performance architecture. It combines multiple applications into a single repository, making collaboration and management seamless.  

The project includes applications such as a **public-facing website**, **CRM portal**, and **admin dashboard**, along with shared packages for **UI components**, **state management**, and **utilities**.  

The platform is built with a modern technology stack, including **Next.js 15**, **React**, **TypeScript**, **Tailwind CSS**, **Shadcn UI**, **Redux Toolkit**, and **Turborepo** for monorepo management. This ensures a highly modular and efficient development experience.  

---

### Copyright Notice
**Monorepo**  

Copyright © 2024 Manish Sonawane. All rights reserved.  

This project, **Monorepo**, is a demonstration of a monorepo-based full-stack system. Unauthorized use, modification, or distribution of the software or its components is prohibited unless explicitly stated under the terms of the license.  

By using or contributing to this project, you agree to comply with the terms and conditions defined in the license. You may use the software for personal or educational purposes, provided that proper credit is given to the original author.  

---

### License Information
This project is licensed under the MIT License. Please refer to the `LICENSE` file in this repository for detailed license information. The terms of the license govern the use, distribution, and modification of the software. If you have any questions regarding the licensing, please contact **manishsonawane3010@gmail.com**.  

---

### Disclaimer
The software is provided "as-is" without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the software or the use or other dealings in the software.  

---

### Trademarks
Any trademarks, service marks, or other marks associated with this project or its components are the property of their respective owners.  

