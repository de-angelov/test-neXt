export const getServerRandom = async () => {
    "use server"

   const random = Math.random();

      // simulate async call
    await new Promise((r) => setTimeout(r, 500));

    return random;
}