import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, []);

  return (
    <div className="not-found">
      <h1>Такой страницы не существует</h1>
      <p>
        Перехожу на{' '}
        <Link href="/">
          <a>главную страницу</a>
        </Link>{' '}
        через 4 секунды...
      </p>
    </div>
  );
};

export default NotFoundPage;
