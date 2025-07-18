import { db } from "@jobber/db/db-instance";
import { organizations, users } from "@jobber/db/schema";
import { eq } from 'drizzle-orm';

export const getAllUsers = async () => {
    return db
        .select({
            id: users.id,
            name: users.name,
            organizationId: users.organizationId,
            organizationName: organizations.name,
        })
        .from(users)
        .innerJoin(organizations, eq(organizations.id, users.organizationId));
};


export const getUserPageDataById = async (id: number) => {
   return  db.query.users.findFirst({
    where: (users, { eq }) => eq(users.id, id)
    });
};

