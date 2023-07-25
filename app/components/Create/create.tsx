'use server'
import sql from "@/app/db"

export async function Create ( brand :string, model :string, release_date :number ) {
    await sql `INSERT into cars ( brand, model, release_date) values (${brand}, ${model}, ${release_date})`;

}