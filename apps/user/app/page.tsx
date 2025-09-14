import { Button } from '@repo/ui/button';

export default function page() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <section>
        <Button className='bg-orange-500 px-4 py-2 rounded-md' appName='user'>
          hii three
        </Button>
      </section>
    </main>
  );
}

