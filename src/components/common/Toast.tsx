import { Toaster } from 'sonner';

export default function Toast() {
  return (
    <Toaster
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'bg-bunker-900 text-white border border-transparent rounded-lg px-4 py-2 shadow-md rounded-lg flex gap-2 items-center w-full',
          success: 'font-light text-teal-500',
          error: 'font-light text-red-500',
          warning: 'font-light text-yellow-500',
          info: 'font-light text-blue-500',
        },
      }}
    />
  );
}
