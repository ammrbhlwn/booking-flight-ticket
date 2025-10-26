/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextRequest } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import type { TypeSeat } from '@prisma/client';

export async function POST(request: NextRequest) {
  const body = await request.json();

  let departureDate: Date | null = null;

  if (body.date) {
    departureDate = new Date(body.date);
    departureDate.setHours(1);
  }

  try {
    const data = await prisma.flight.findMany({
      where: {
        departureCity: body.departure || undefined,
        destinationCity: body.arrival || undefined,
        seats:
          body.seat
            ? {
                some: {
                  type: body.seat as TypeSeat,
                  isBooked: false,
                },
              }
            : {},
        departureDate:
          departureDate
            ? {
                gte: departureDate,
              }
            : {},
        planeId:
          body.planeIds.length > 0
            ? {
                in: body.planeIds,
              }
            : {},
      },
      include: {
        plane: true,
      },
    });

    return Response.json({ data });
  } catch (error) {
    console.error('Failed to fetch flights:', error);
    return Response.json(
      {
        error: true,
        error_message: 'Failed to get data',
      },
      { status: 500 }
    );
  }
}
