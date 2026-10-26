interface JobDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { id } = await params;

  return (
    <main>
      <h1>Job Details</h1>
      <p>Job ID: {id}</p>
    </main>
  );
}
