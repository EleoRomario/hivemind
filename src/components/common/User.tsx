import Image from 'next/image';

export function User() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/images/avatar.webp"
        alt="avatar"
        width={32}
        height={32}
        className="aspect-square size-8 rounded-full bg-bunker-700 object-cover object-center"
      />
      <div className="flex flex-col text-sm">
        <span className="block w-fit truncate">Ana Lorem</span>
        <span className="text-xs text-bunker-500">Admin</span>
      </div>
    </div>
  );
}
