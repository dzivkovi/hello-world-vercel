# Hello World Vercel

This is a minimal Next.js project set up with Vercel for automated CI/CD.

## Deployment Environments

- Production: [https://hello-world-vercel-prod.vercel.app](https://hello-world-vercel-prod.vercel.app)
- Development: [https://hello-world-vercel-dev.vercel.app](https://hello-world-vercel-dev.vercel.app)
- Staging: [https://hello-world-vercel-staging.vercel.app](https://hello-world-vercel-staging.vercel.app) (if applicable)
- Preview: Automatically generated for each Pull Request (PR)

## Branching Strategy

- `main`: Production branch. Deploys to the production environment.
- `dev`: Development branch. Deploys to the development environment.
- `feature/*`: Feature branches. Preview deployments created. [ PLEASE CLARIFY: for each PR or for ANY branch regardless of its name?]

## Local Development

1. Clone the repository:

    ```sh
    git clone https://github.com/dzivkovi/hello-world-vercel.git
    cd hello-world-vercel
   ```sh

2. Install dependencies:

   ```sh
   npm install
   ```sh

3. Run the development server:

   ```sh
   npm run dev
   ```sh

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment Process

This project uses Vercel for automated deployments:

1. Push to `main` branch: Triggers a production deployment
2. Push to `dev` branch: Triggers a deployment to the development environment
3. Create a Pull Request: Generates a preview deployment

### Creating a Pull Request

1. Create a new branch from `dev`:

   ```sh
   git checkout dev
   git pull
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:

   ```sh
   git add .
   git commit -m "Description of your changes"
   ```

3. Push your branch:

   ```sh
   git push -u origin feature/your-feature-name
   ```

4. Go to the GitHub repository and create a Pull Request to merge into `dev`.
5. Vercel will automatically create a preview deployment for your PR.
6. After review and approval, merge the PR into `dev`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
