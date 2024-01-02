import { NotFoundError } from "blitz"
import db from "db"
import { users } from "db/schema/users"

export default async function getUser() {
  const result = await db.select().from(users).all()

  if (!result) throw new NotFoundError()
  return result
}
