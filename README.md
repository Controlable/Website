# Controlable Website

A modern React + Tailwind CSS website built with Vite, TypeScript, and deployed on production with Nginx.

**Website:** Controlable - A SaaS platform for real-time monitoring and insights

## What is inside?

This project uses many tools like:

- [Vite](https://vitejs.dev)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)

## Getting Started Locally

### Install Dependencies

```bash
npm install
```

### Development Server

Serve with hot reload at <http://localhost:5173>:

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Deployment

### Prerequisites

- Server with SSH access
- Git installed
- Node.js and npm installed
- Nginx installed

### Automatic Deployment

The deployment script is located at `/root/deploy.sh` and handles:

1. **Git Pull** - Fetches latest changes from the main branch
2. **Dependencies** - Installs/updates npm packages
3. **Build** - Creates optimized production build
4. **Serve** - Nginx automatically serves from `/root/website/dist`

**To deploy:**

```bash
/root/deploy.sh
```

### Manual Deployment Steps

If you need to deploy manually:

```bash
# 1. Navigate to website directory
cd /root/website

# 2. Pull latest code
git pull origin main

# 3. Install dependencies
npm install

# 4. Build project
npm run build

# 5. Reload Nginx (if needed)
nginx -s reload
```

### Production URLs

- **Web Root:** `/root/website/dist`
- **Nginx Config:** `/etc/nginx/sites-available/website`
- **Logs:** `/var/log/nginx/`
- **Status:** `systemctl status nginx`

### Nginx Configuration

Nginx is configured as a reverse proxy serving static files with:
- SPA routing (all requests go to index.html)
- Asset caching (365 days for JS/CSS/images)
- Gzip compression
- HTTP/2 support

### Restarting Services

```bash
# Restart Nginx
systemctl restart nginx

# Reload Nginx (zero-downtime)
nginx -s reload
```

## Local Development Scripts

### Lint

```bash
npm run lint
```

### Typecheck

```bash
npm run typecheck
```

### Test

```bash
npm run test
```

View and interact with your tests via UI.

```bash
npm run test:ui
```

## Technologies

This project uses many tools like:

- [Vite](https://vitejs.dev)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)

## License

This project is licensed under the MIT License.
