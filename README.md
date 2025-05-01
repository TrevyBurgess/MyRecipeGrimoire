# My Recipe Grimoire

A simple web application for managing recipies

## 1. Create project

1. npm create vite@latest my-recipe-grimoire -- --template react
1. cd MyRecipeGrimoire
1. npm run dev

## 2. Install Latest React

npm install --save-exact react@rc react-dom@rc
npm install

## 3. Tools

1. https://ViteJS.dev
1. Next.js framework
1. [One Drive](https://dev.to/mainulspace/onedrive-integration-with-react-step-by-step-guide-2md5)

## 4. Resources

App Icon - MyRecipeGrimoire.png - [Soup Icon](https://www.iconarchive.com/show/outline-icons-by-iconsmind/Soup-icon.html)

## 5. One Drive Integration

1. [OneDrive Integration tutorial](https://dev.to/mainulspace/onedrive-integration-with-react-step-by-step-guide-2md5)
1. [Microsoft Graph](https://developer.microsoft.com/en-us/graph/graph-explorer)
1. [Azurem Portal](https://portal.azure.com/)
1. **For Microsoft Graph Integration:** npm install axios

### 5.1. Configuration: Branding and properties

1. Name: MyRecipeGrimoire
1. Logo: MyRecipeGrimoire.png
1. Home page URL: [http://localhost:5173/](http://localhost:5173/)
1. Terms of service URL: [http://localhost:5173/TermsOfService](http://localhost:5173/TermsOfService)
1. Privacy statement URL: [http://localhost:5173/PrivacyStatement](http://localhost:5173/PrivacyStatement)
1. Publisher domain: < TODO >
1. Permissions: Files.ReadWrite.All, offline_access

### 5.3. Certificates and Secrets - Add secret

1. Description: MyRecipeGrimoire certificate
1. Store in: Secrets.txt (Not saved to Git)

### 5.3. API Permissions

1. Files.ReadWrite.All
1. offline_access
1. User.Read





.
.
.
.
.

## c------------------

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
