# PlayAlong-Monorepo

Production-ready monorepo containing:
- Expo React Native mobile app
- Next.js 14 admin and owner web panels
- Express + Prisma backend
- Shared UI and config packages

## Prerequisites

- Node.js 18.18+
- npm 10+
- PostgreSQL 14+
- Android Studio (for `expo run:android`)
- Xcode (later, for iOS)

## Installation

1. Clone and install dependencies:
   ```bash
   npm install
   ```
2. Configure backend env:
   ```bash
   cp backend/.env.example backend/.env
   ```
3. Update `backend/.env` with your PostgreSQL connection and JWT secret.
4. Generate Prisma client and apply schema:
   ```bash
   npm --workspace @playalong/backend run prisma:generate
   npm --workspace @playalong/backend run prisma:push
   ```

## Run apps

### Mobile (Expo)

```bash
npm run dev
```

(Equivalent: `npm run dev:mobile`)

Android:
```bash
npm --workspace @playalong/mobile run android
```

Web:
```bash
npm --workspace @playalong/mobile run web
```

### Backend

```bash
npm run dev:backend
```

### Admin Panel

```bash
npm run dev:admin
```

### Owner Panel

```bash
npm run dev:owner
```

## Workspace structure

```text
PlayAlong-Monorepo/
├── apps/
│   ├── mobile/
│   ├── admin/
│   └── owner/
├── backend/
├── packages/
│   ├── ui/
│   └── config/
└── package.json
```

## Notes for Expo/Reanimated

- Reanimated is pinned to Expo SDK 50 compatible version.
- Babel includes `react-native-reanimated/plugin` as the last plugin.
- `metro.config.js` is configured for monorepo + shared packages.
- Works on Android-first without Android-only code paths.
