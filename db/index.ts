import { drizzle } from "drizzle-orm/libsql"
import { createClient } from "@libsql/client"

const client = createClient({
  url: "libsql://my-db-self-madeboy.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDIzLTEyLTI4VDA4OjU2OjEzLjQ4MDIyMjcwMloiLCJpZCI6ImJhNGI2M2Y5LWE0YzQtMTFlZS04ZTNiLTgyZDViNGZlYjEyYyJ9.L7jBjEbBrMD2j_5xfYiify1LmWEU9xjbodB6bZPNnuezXAIipcBk-YU5b7C7DeqqROcJfCja2m4FSUngBs4ECQ",
})

const db = drizzle(client)

export default db
