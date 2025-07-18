import { sqliteTable as table } from "drizzle-orm/sqlite-core";
import * as t from "drizzle-orm/sqlite-core";

export const users = table(
    'users',
    {
        id: t.int().primaryKey({ autoIncrement: true }),
        name: t.text().notNull(),
        organizationId: t.int("organization_id").references(() => organizations.id)
    },
    (table) => [
        t.index("organizationId_idx").on(table.organizationId, table.name),
    ]

)

export const organizations = table(
    'organizations',
    {
        id: t.int().primaryKey({ autoIncrement: true }),
        name: t.text().notNull(),
        about: t.text(),
    }
)

export const schema = {
  users,
  organizations,
};