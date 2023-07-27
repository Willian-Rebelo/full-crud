'use server'
import sql from "@/app/db"

export async function Create ( brand :string, model :string, release_date :number ) {
    await sql `INSERT into cars ( brand, model, release_date) values (${brand}, ${model},
     ${release_date})`;

}

// The SELECT function is in the Read folder inside the components

export async function Update ( id :'', brand :string, model :string, release_date :number ) {
    await sql `UPDATE cars SET (id = ?, brand = ?, model = ?, release_date = ? WHERE id = ?,
     values (${id}, ${brand}, ${model}, ${release_date})`;
}
