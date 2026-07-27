import { Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <span className="font-display text-7xl font-bold text-gradient">404</span>
      <h1 className="mt-6 text-3xl">Page not found</h1>
      <p className="mt-3 max-w-md text-muted">
        The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
      </p>
      <Button href="/" className="mt-8">Back to home</Button>
    </Container>
  );
}
