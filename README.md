# Expo Starter Template

Clean Expo React Native starter template with:

- Expo Router auth flow
- Login, registration, and forgot password screens
- Bottom tab navigation
- Home, Profile, and Settings starter screens
- NativeWind/Tailwind setup
- Zustand auth placeholder store
- Axios API client placeholder
- Reusable button, input, header, and error boundary components

## Start

```bash
npm install
npm start
```

## New Project

```bash
git clone <template-repo-url> my-new-app
cd my-new-app
npm install
npm start
```

Then update:

- `package.json` name
- `app.json` app name, slug, scheme, bundle identifier, and Android package
- assets in `assets/images`
- API URL in `.env` as `EXPO_PUBLIC_API_URL`

## Structure

```text
app/
  (auth)/
  (tabs)/
components/
constants/
contexts/
hooks/
locales/
services/
stores/
type/
utils/
```
