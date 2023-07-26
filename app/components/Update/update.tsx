'use server'
import sql from "@/app/db"

export async function Update ( id :'', brand :string, model :string, release_date :number ) {
    await sql `UPDATE cars SET (id = ?, brand = ?, model = ?, release_date = ? WHERE id = ?, values (${id}, ${brand}, ${model}, ${release_date})`;
}


