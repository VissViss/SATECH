{
  "name": "frontend-monorepo",
  "private": true,
  "workspaces": [
    "common",
    "web",
    "vsc"
  ],
  "scripts": {
    "install-all": "npm install",
    "dev:web": "npm --workspace @ra-aid/web run dev"
  },
  "dependencies": {
    "react": "18.0.0",
    "react-dom": "18.0.0"
  }
