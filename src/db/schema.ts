import { pgTable, uniqueIndex, serial, text, integer } from "drizzle-orm/pg-core"

export const pokemon = pgTable("pokemon", {
	id: serial("id").primaryKey().notNull(),
	imgUrl: text("imgUrl"),
	name: text("name").notNull(),
},
(table) => {
	return {
		idKey: uniqueIndex("pokemon_id_key").on(table.id),
	}
});

export const vote = pgTable("vote", {
	id: text("id").primaryKey().notNull(),
	pokemonId: integer("pokemonId").notNull().references(() => pokemon.id, { onDelete: "restrict", onUpdate: "cascade" } ),
});