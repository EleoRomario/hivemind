import { Toaster } from 'sonner';

export default function Toast() {
  return (
    <Toaster
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'bg-bunker-900 text-white border border-transparent rounded-lg px-4 py-2 shadow-md rounded-lg flex gap-2 items-center w-full',
          success: 'bg-teal-950 text-teal-500',
          error: 'bg-red-950 text-red-500',
          warning: 'bg-yellow-950 text-yellow-500',
          info: 'bg-blue-950 text-blue-500',
        },
      }}
    />
  );
}
