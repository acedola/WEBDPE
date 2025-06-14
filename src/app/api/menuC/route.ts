import { NextResponse } from 'next/server';
import { prisma } from '@/libs/prisma';

export async function GET() {
  const result =
    await prisma.$queryRaw`SELECT * FROM obtener_censos_con_categorias()`;

  return NextResponse.json({ result });
}
