import styles from './page.module.css';

export default function Page() {
  const environment = process.env.VERCEL_ENV || 'local';
  const commitSha = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'unknown';
  const branch = process.env.VERCEL_GIT_COMMIT_REF || 'unknown';
  const deploymentUrl = process.env.VERCEL_URL || 'localhost';

  return (
    <div className={styles.container}>
      <h1>Hello, Next.js on Vercel!</h1>
      <p>Environment: <strong>{environment}</strong></p>
      <p>Branch: <strong>{branch}</strong></p>
      <p>Commit: <strong>{commitSha}</strong></p>
      <p>Deployment URL: <strong>{deploymentUrl}</strong></p>
    </div>
  );
}
