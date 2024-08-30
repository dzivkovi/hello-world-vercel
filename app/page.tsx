import styles from './page.module.css';

const buildTime = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZone: 'America/New_York'
}).format(new Date());

export default function Page() {
  const environment = process.env.VERCEL_ENV || 'local';
  const commitSha = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'unknown';
  const branch = process.env.VERCEL_GIT_COMMIT_REF || 'unknown';
  const deploymentUrl = process.env.VERCEL_URL || 'localhost';
  const commitMessage = process.env.VERCEL_GIT_COMMIT_MESSAGE || 'No commit message';

  return (
    <div className={styles.container}>
      <h1>Hello, Next.js on Vercel!</h1>
      <p>Environment: <strong>{environment}</strong></p>
      <p>Branch: <strong>{branch}</strong></p>
      <p>Build Time: <strong>{buildTime}</strong></p>
      <p>Deployment URL: <strong>{deploymentUrl}</strong></p>
      <p>Commit: <strong>{commitSha}</strong></p>
      <p>Commit Message: <strong>{commitMessage}</strong></p>
    </div>
  );
}
