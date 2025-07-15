import { notFound } from "next/navigation";
import { PageProps } from "../page";


export const dynamic = 'force-dynamic'

// type Props = {
//   params: { id: string };
// };

// Type error: Type 'Props' does not satisfy the constraint 'PageProps'.
//   Types of property 'params' are incompatible.


    // const id = parseInt(params.id, 10);
export default async function Page({ params }: PageProps) {
    const { id } = await params;

    const idNumber = parseInt(id, 10);

    if(idNumber > 10 ){
        notFound()
    }


  return (
    <div>
      <h1>Dynamic Page (App Router)</h1>
      <pre>{JSON.stringify({ test: 'string '}, null, 2)}</pre>
    </div>
  );
}