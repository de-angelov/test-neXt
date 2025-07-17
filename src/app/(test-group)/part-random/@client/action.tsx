import { delay } from "@jobber/helpers/delay";

export const getServerRandom = async () => {
    "use server"

   const random = Math.random();

      // simulate async call
    await delay(1500);

    return random;
}