# React + Vite

## Conversation archive

Chat exchanges are logged server-side through Upstash Redis. Create an Upstash Redis database and configure these Vercel environment variables:

```text
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
ADMIN_USERNAME=choose-an-admin-username
ADMIN_PASSWORD=choose-a-strong-admin-password
ADMIN_SESSION_SECRET=use-a-long-random-secret
```

Open the private console at `/?admin=1` and sign in with the configured username and password. The password is checked server-side and never stored in the browser. Conversation records include the question, assistant answer, source, timestamp, session ID, full visitor IP address, request headers, user agent, platform, languages, timezone, screen and viewport dimensions, pixel density, touch support, hardware hints, cookie/online status, referrer, and related browser details. The store keeps the latest 500 exchanges.

Without the Upstash variables, the public chat still works, but logging and the archive remain unavailable.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
