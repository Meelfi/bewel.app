# Bewel.app

**License: Proprietary (All Rights Reserved)**

> Craft your digital identity. A single, fully customizable page to showcase who you are, what you love, and where you'll be next.

---

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [License](#license)

## About The Project

This project is a full-stack application designed to help users craft a unique digital identity. It provides a single, fully customizable profile page where users can showcase their bio, social links, favorite music, and upcoming events. Built to offer complete creative freedom beyond typical 'link-in-bio' services, it allows every user to design a page that truly reflects their personal brand.

The application leverages a modern, sophisticated technology stack, with a clear separation of concerns to ensure performance, scalability, and a great developer experience.

## Key Features

-   **Full Profile Customization:** Display personal bio, age, height, and other stats.
-   **Link Aggregation:** Consolidate all your social media, portfolios, and other important links.
-   **Music Showcase:** Share your favorite tracks or playlists with your visitors.
-   **Event Calendar:** Announce your participation in upcoming events, streams, or meetings.
-   **Deep Styling Engine:** Complete control over the page's visual appearance, including colors, fonts, and layouts.

## Tech Stack

A detailed breakdown of the technologies used to build this application.

#### **Frontend**
-   **Framework:** React
-   **Build Tool:** Vite
-   **Runtime / Package Manager:** Bun
-   **State Management:**
    -   **Zustand:** For global client-side state (UI state, etc.).
    -   **Apollo Client Cache:** For all server state, caching data from the GraphQL API.
-   **Styling:**
    -   **Linaria (Zero-runtime CSS-in-JS):** For dynamic, user-driven styling of profile components.

#### **Backend**
-   **API Framework:** Apollo Server
-   **API Schema:** GraphQL
-   **Authentication:** JSON Web Tokens (JWT)

#### **Database**
-   **Type:** PostgreSQL

#### **Infrastructure**
-   **Server:** Linux
-   **Reverse Proxy:** Nginx
-   **Process Manager:** PM2

## Installation and Setup

Follow these steps to get a local copy up and running.

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Meelfi/bewel.app.git
    cd bewel.app
    ```
2.  **Install dependencies**
    ```bash
    bun install
    ```
3.  **Set up environment variables**
    -   Copy the example environment file and edit it with your configuration.
    ```bash
    cp .env.example .env
    ```
    -   Fill in the necessary variables in the `.env` file.

4.  **Run the development server**
    ```bash
    bun dev
    ```

## Available Scripts

-   `bun dev`: Starts the Vite development server.
-   `bun build`: Builds the application for production.
-   `bun lint`: Runs ESLint to statically analyze the codebase for potential errors and to enforce a consistent code style.
-   `bun preview`: Previews the production
## Environment Variables

This project requires the following environment variables to be set in a `.env` file. See `.env.example` for a comprehensive list.

```env
# No env file right now
```

## License

This project is proprietary and a trade secret. The source code is confidential and may not be redistributed, copied, modified, or used in any other way without the express written permission of the owner.

Copyright (c) 2025 Igor Krenca. All Rights Reserved.