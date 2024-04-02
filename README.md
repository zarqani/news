# Newsvoyager

[![GitHub license](https://img.shields.io/github/license/zarqani/news)](https://github.com/zarqani/news/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/zarqani/news)](https://github.com/zarqani/news/issues)
[![GitHub stars](https://img.shields.io/github/stars/zarqani/news)](https://github.com/zarqani/news/stargazers)

## Overview

Newsvoyager is a front-end application built with Next.js, Tailwind CSS, and TypeScript. The project incorporates key features such as interface for a news aggregator website that pulls articles from various sources and displays them in a clean, easy-to-read format

## Features

- **Next.js**: Utilize the power of Next.js for server-side rendering and a smooth, optimized React application.
- **Tailwind CSS**: Create stylish and responsive user interfaces with the help of Tailwind CSS.
- **TypeScript**: Enhance code maintainability and catch errors early with TypeScript.
- **Data Caching**: Optimize performance by implementing data caching with the Fetch API.
- **Clean Architecture**: Follow best practices for clean and maintainable code architecture.
- **Optimize** This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/zarqani/news.git
   cd news

   ```

2. **Run the development server**

   ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t nextjs-docker .`.
1. Run your container: `docker run -p 3000:3000 nextjs-docker`.

You can view your images created with `docker images`.

### In existing projects

To add support for Docker to an existing project, just copy the [`Dockerfile`](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile) into the root of the project and add the following to the `next.config.js` file:

```js
// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: "standalone",
};
```

This will build the project as a standalone app inside the Docker image.

## Deploying to Google Cloud Run

1. Install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) so you can use `gcloud` on the command line.
1. Run `gcloud auth login` to log in to your account.
1. [Create a new project](https://cloud.google.com/run/docs/quickstarts/build-and-deploy) in Google Cloud Run (e.g. `nextjs-docker`). Ensure billing is turned on.
1. Build your container image using Cloud Build: `gcloud builds submit --tag gcr.io/PROJECT-ID/helloworld --project PROJECT-ID`. This will also enable Cloud Build for your project.
1. Deploy to Cloud Run: `gcloud run deploy --image gcr.io/PROJECT-ID/helloworld --project PROJECT-ID --platform managed --allow-unauthenticated`. Choose a region of your choice.

   - You will be prompted for the service name: press Enter to accept the default name, `helloworld`.
   - You will be prompted for [region](https://cloud.google.com/run/docs/quickstarts/build-and-deploy#follow-cloud-run): select the region of your choice, for example `us-central1`.
