import prisma from "@/prisma.config";

export async function getAll(): Promise<IResponse> {
  const buildings = await prisma.buildings.findMany({
    include: { zones: true },
  });

  return { status: 200, data: buildings };
}
