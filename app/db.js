import postgres from 'postgres'

const connectionString = "postgresql://postgres:gU6QFOUKMLyY4ZQi@db.zhkjfnuplgbstsipxykd.supabase.co:5432/postgres"
const sql = postgres(connectionString)

export default sql
