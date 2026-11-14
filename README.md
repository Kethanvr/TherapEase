# TherapEase

TherapEase is a web prototype for exploring mental-wellness interactions. The app includes a chat experience, mood-tracking interface, relaxation exercises, medication-reminder screens, and appointment-booking screens. It uses Next.js, React, Clerk, and Google's Generative AI SDK.

This project is not a medical service, diagnostic tool, or substitute for care from a qualified professional. Treat the wellness features as prototype functionality and do not enter sensitive health information into an unreviewed deployment.

## Run locally

    npm install
    npm run dev

Authentication and chat depend on external Clerk and Gemini configuration. Set up local credentials for a development project before using those integrations, and never commit secrets.

## Scripts

- `npm run dev` starts Next.js.
- `npm run build` creates a production build.
- `npm run start` serves the build.
- `npm run lint` runs the configured Next.js lint command.
