import { sql } from "drizzle-orm"
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core"
export const users = sqliteTable("users", {
  id: text("id"),
  name: text("name"),
  email: text("email"),
  //     .notNull()
  //     .default(sql`CURRENT_TIMESTAMP`),
  //   intModifiers: integer("int_modifiers", { mode: "boolean" }).notNull().default(false),
})
