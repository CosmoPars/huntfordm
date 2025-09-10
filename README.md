# The Hunt for Dark Matter
An interactive game based on using gravitational lensing to look for dark matter

## Getting Started

This repository uses [NX](https://nx.dev/) to assist and simplify managing the repository.

### Prerequisites

- **Node.js**: Version 18.x or higher (LTS recommended)
- **npm**: Version 9.x or higher

### Installation

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run start` to start the development server (or `npx nx serve grav-lensing`)
4. Open your browser to `http://localhost:4200`

### Updated Dependencies (2024)

This project has been updated to use the latest stable versions of key dependencies:

- **NX**: v21.4.1 (updated from v13.9.6)
- **React**: v18.3.1 (updated from v17.0.2)
- **TypeScript**: v5.7.3 (updated from v4.2.4)
- **React Router DOM**: v6.29.0 (updated from v5.2.0)
- **Emotion**: v11.14.0 (updated from v11.1.5)
- **Jest**: v29.7.0 (updated from v26.6.3)
- **ESLint**: v8.57.1 (updated from v7.22.0)

### Known Issues

None at this time.

## Contributing

PRs are welcomed, and will be reviewed.

## Project Structure

This project is front-end only and built entirely in React. Styling is done using `@emotion/styled`, and routing done using `react-router-dom`. The majority of code is in the `apps/grav-lensing/src/app` folder. Within this folder there are a few useful starting points.

### Available Scripts

- `npm run start` - Start the development server
- `npm run build` - Build the application for production
- `npm run test` - Run the test suite
- `npm run lint` - Run ESLint to check code quality

### Top Level Configuration
Common configurations are stored directly in the `config.ts` file. This includes things like the images used for Galaxy Stacking, and Tutorial Chapter markers.

Routes can be configured in `routes.ts` file.

### Components

The `components` folder contains all the various React components used in the app. This includes a wide variety of components from simple SVG icons, to `React Contexts` such as the `Game Manager`, that handle a lot of the logic in the app.

### Pages

The `pages` folder contains high-level React components that represent pages on the site. For example, each Tutorial page is in here. A page is directly linked to a `React Route`, so each page in this folder can be accessed by the appropriate URI.

### Util

The `util` folder contains non-react helper utilities.

### Assets

All assets (images, audio files, fonts, etc...) go in the `assets` folder. This is a special folder that is copied into the build directory when NX builds the app. SVG elements can either go here and be used like images, or can be placed in the `components` folder and used like React Components.

### Environments

NX utilises `environment` files to allow different configurations for different environments (e.g. local testing vs staging vs production). Currently the only configurable environment variable is the API key used for linking the app to an Amplitude account for analytics.

### Production Builds

To build for a production environment:

1. First duplicate `apps/grav-lensing/src/environments/environment.ts` and rename it to `environment.prod.ts`
2. Optionally specify an Amplitude API key for analytics in the production environment file
3. Run `npm run build` to create a production build
4. The built files will be available in the `dist/` directory

**Note**: The production environment file is ignored by default in version control, but be careful not to commit files with sensitive information such as API keys.

### Testing

Run the test suite with:
```bash
npm run test
```

### Troubleshooting

If you encounter issues:

1. **Node.js version**: Ensure you're using Node.js 18.x or higher
2. **Clear cache**: Try deleting `node_modules` and running `npm install` again
3. **Port conflicts**: The default port is 4200, ensure it's not in use by another application
4. **TypeScript warnings**: The current version has some React Router v6 migration warnings that don't affect functionality
