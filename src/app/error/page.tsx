import { useRouter } from 'next/navigation';

const ErrorPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Error</h1>
      <button onClick={() => router.push('/')}>Go to Home</button>
      <button onClick={() => router.replace('/', { scroll: false })}>Back</button>
    </div>
  );
};

export default ErrorPage;
