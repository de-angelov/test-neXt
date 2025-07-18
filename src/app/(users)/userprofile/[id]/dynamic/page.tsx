import { notFound } from "next/navigation";


export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const idNumber = parseInt(id, 10);

    if(idNumber > 10 ){
        notFound()
    }


  return (
    <div>
      <h1>Dynamic Page (App Router)</h1>
      works only on top of generated static routes 0-10
      <pre>Params: {JSON.stringify({ id }, null, 2)}</pre>
    </div>
  );
}