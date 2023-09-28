import { prisma } from ".";

(async () => {
  try {
    // await Promise.all();
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
