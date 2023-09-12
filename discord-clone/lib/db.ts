import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

// this is all we need in production
export const db = globalThis.prisma || new PrismaClient();

// we need for the hot reload in development 
// in order for hot reload to not init too many clients because of next js 13
if (process.env.NODE_ENV !== "production") globalThis.prisma = db