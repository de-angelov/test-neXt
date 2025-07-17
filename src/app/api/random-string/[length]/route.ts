import { generateRandomString } from "@jobber/helpers/random-string";

export async function GET(
    request: Request,
    { params }:  { params: Promise<{ length: number }> }
) {
    const { length } = await params;

    console.log('request', request);

    const result = generateRandomString(length);
    console.log('RESULT:', result);
    return Response.json({ data: result });
}