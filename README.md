# Dance Connexions

A modern dance studio website built with Next.js 16, featuring studio rentals, class schedules, and instructor profiles.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Database**: PostgreSQL with Prisma ORM
- **Development**: Docker + Docker Compose

## 🏗️ Project Structure

```
danceconnexions/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Home page
│   │   ├── rentals/      # Studio rental pages
│   │   ├── kids/         # Kids program page
│   │   ├── teens/        # Teens program page
│   │   ├── young-adults/ # Young adults page
│   │   ├── adults/       # Adults program page
│   │   └── active-adults/# Active adults page
│   ├── components/       # React components (70+ UI components)
│   │   └── ui/          # shadcn/ui primitives
│   ├── lib/             # Utility functions
│   └── hooks/           # Custom React hooks
├── prisma/              # Database schema and migrations
├── public/              # Static assets
└── docker-compose.yml   # Docker development setup
```

## 🐳 Getting Started with Docker (Recommended)

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Setup & Run

1. **Start the development environment:**
   ```bash
   docker compose up --build
   ```

2. **Access the application:**
   - Website: [http://localhost:3000](http://localhost:3000)
   - Database: localhost:5432

3. **Run Prisma commands in the container:**
   ```bash
   # Open Prisma Studio
   docker exec -it danceconnexions_app npx prisma studio

   # Create a migration
   docker exec -it danceconnexions_app npx prisma migrate dev --name init

   # Seed the database
   docker exec -it danceconnexions_app npx prisma db seed
   ```

4. **Stop the environment:**
   ```bash
   docker compose down
   ```

5. **Stop and remove everything (including database):**
   ```bash
   docker compose down -v
   ```

## 💻 Local Development (Without Docker)

### Prerequisites
- Node.js 22+
- PostgreSQL 17

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Update DATABASE_URL with your PostgreSQL credentials
   ```

3. **Set up database:**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

## 🗄️ Database Schema

The application includes the following models:

- **Room** - Studio spaces available for rental
- **Booking** - Rental reservations
- **Instructor** - Dance instructors
- **Class** - Dance classes and programs
- **ContactSubmission** - Contact form submissions

Age groups supported:
- Kids (under 12)
- Teens (13-17)
- Young Adults (18-25)
- Adults (26+)
- Active Adults (50+)

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Features

- ✅ Studio rental booking system
- ✅ Class schedules for all age groups
- ✅ Instructor profiles
- ✅ Responsive design
- ✅ Dark mode support
- ✅ 70+ pre-built UI components
- ✅ PostgreSQL database with Prisma
- ✅ Docker development environment

## 🔧 Customization

The project uses shadcn/ui components which can be customized in:
- `src/app/globals.css` - Color themes and CSS variables
- `components.json` - Component configuration

## 📦 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Docker Production
```bash
# Build production image
docker build -t danceconnexions:latest .

# Run with production database
docker run -p 3000:3000 -e DATABASE_URL="..." danceconnexions:latest
```

## 📄 License

Private project - All rights reserved

## 🤝 Support

For issues or questions, please create an issue in the repository.
