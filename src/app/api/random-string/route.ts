import { delay } from "@jobber/helpers/delay";
import { getRandomIntInRange } from "@jobber/helpers/random-int";
import { generateRandomString } from "@jobber/helpers/random-string";

export async function GET() {
    const length = getRandomIntInRange(1, 25);
    console.log('LENGTH:', length);
    await delay(5000);
    const result = generateRandomString(length);
    console.log('RESULT:', result);
    return Response.json({ data: result });
}