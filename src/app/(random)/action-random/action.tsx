import { delay } from "@jobber/helpers/delay";

export const getServerRandom = async () => {
    "use server"

   const random = Math.random();

    await delay(10_000);

    return random;
}