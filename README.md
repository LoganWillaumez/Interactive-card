# Interactive Card

Here is a project used with two API :

- (randomuser)[https://randomuser.me]
- Google map API

## Stack

- React
- Vite
- Typescript
- SCSS

## Install

Prerequisites: Make sure you've installed Node.js ≥ 12

1. Install dependencies :

```bash
yarn

# or

npm i

# or

pnpm i
```

2. Configure .env

```env
VITE_KEY=YOUR_API_KEY_FROM_GOOGLE
```

3. To launch locally :

```bash
yarn dev

# or

npm run dev

#or

pnpm run dev
```

## Know Issues

- The data used for the map(from the API) seems to not correspond to the location of the user received.
- Problem of React 18 and React strict mode ; double call api.

## Demo

https://interactive-card.vercel.app
