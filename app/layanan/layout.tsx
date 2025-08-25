import { metadata } from './metadata';

export { metadata };

export default function LayananLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="animate-in fade-in duration-700">
      {children}
    </div>
  );
}