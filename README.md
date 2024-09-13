# Goction Documentation

This repository contains the official documentation for [Goction](https://github.com/goction/goction), a lightweight and extensible framework for creating, managing, and executing custom actions.

## About Goction

Goction is a service that allows users to create and manage custom actions (called "goctions") via a command-line interface (CLI) and an HTTP API. The main Goction service is developed and maintained in a separate repository:

- [Goction Service Repository](https://github.com/goction/goction)

This documentation aims to provide comprehensive information about installing, configuring, and using the Goction service.

## Documentation Overview

This documentation is built using [VuePress](https://v2.vuepress.vuejs.org/), a static site generator powered by Vue.js. It covers various aspects of Goction, including:

- Installation instructions
- Configuration guide
- Usage examples
- API documentation
- Troubleshooting tips
- Advanced features

## Getting Started with the Documentation

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone this documentation repository:

   ```
   git clone https://github.com/goction/goction.git
   cd goctiondoc
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Local Development

To start a local development server for the documentation:

```
npm run docs:dev
```

This will start a hot-reloading development server at `http://localhost:3000`.

### Building for Production

To build the static files for the documentation:

```
npm run docs:build
```

The built files will be in the `docs/.vuepress/dist` directory.

## Project Structure

```
.
├── docs
│   ├── .vuepress
│   │   ├── components    # Custom Vue components
│   │   ├── public        # Static assets
│   │   └── config.js     # VuePress configuration
│   ├── guide             # Guide pages
│   ├── api               # API documentation
│   └── README.md         # Homepage
├── .github
│   └── workflows         # GitHub Actions workflows
└── package.json
```

## Contributing

We welcome contributions to improve the Goction documentation! Here's how you can contribute:

1. Fork this documentation repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## Deployment

This documentation is automatically deployed to GitHub Pages using GitHub Actions. Any push to the `main` branch will trigger a new build and deployment.

The live documentation can be found at: https://goction.github.io

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Ben - [GitHub](https://github.com/benoitpetit)

Project Links:

- Goction Service: [https://github.com/goction/goction](https://github.com/goction/goction)
- Goction Documentation: [https://github.com/goction/goction.github.io](https://github.com/goction/goction.github.io)

## Acknowledgements

- [VuePress](https://v2.vuepress.vuejs.org/)
- [Vue.js](https://vuejs.org/)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Actions](https://github.com/features/actions)
