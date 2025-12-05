import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-12 text-center">
      <h1 className="mb-8 text-2xl font-bold text-gray-600">Page not found</h1>
      <Link href="/" className="text-gray-600 hover:text-gray-900">
        Back to home
      </Link>
    </div>
  );
}
