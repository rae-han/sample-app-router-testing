'use client';
import { useRouter } from 'next/navigation';

const EmptyPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Empty</h1>
      <button onClick={() => router.push('/')}>Go to Home</button>
    </div>
  );
};

export default EmptyPage;
