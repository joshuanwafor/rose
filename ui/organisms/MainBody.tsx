export function MainBody({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="container py-4" style={{minHeight: "80vh"}}>{children}</div>
    </div>
  );
}
