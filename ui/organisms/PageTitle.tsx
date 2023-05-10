export function PageTitle({
  title,
  caption,
  right
}: {
  title: string;
  caption?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="bg-body-tertiary">
      <div className="container py-4 d-flex justify-content-between ">
        <div>
          <h3>{title}</h3>
          {caption == undefined ? null : <p>{caption}</p>}
        </div>
        {right}
      </div>
    </div>
  );
}
