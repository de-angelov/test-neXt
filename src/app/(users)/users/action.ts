import { db } from "@jobber/db/db-instance";
import { organizations, users } from "@jobber/db/schema";
import { eq } from 'drizzle-orm';

export const getUsers = async () => {
    const result = await db
        .select({
            id: users.id,
            name: users.name,
            organizationId: users.organizationId,
            organizationName: organizations.name,
        })
        .from(users)
        .innerJoin(organizations, eq(organizations.id, users.organizationId));

    return result;
}

