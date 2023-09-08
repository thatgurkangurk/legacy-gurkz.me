CREATE TABLE IF NOT EXISTS "vokemon" ("id" serial PRIMARY KEY NOT NULL,
																																							"imgUrl" text, "name" text NOT NULL);

--> statement-breakpoint

CREATE TABLE IF NOT EXISTS "vote" ("id" text PRIMARY KEY NOT NULL,
																																				"pokemonId" integer NOT NULL);

--> statement-breakpoint

CREATE UNIQUE INDEX IF NOT EXISTS "pokemon_id_key" ON "pokemon" ("id");--> statement-breakpoint

DO $$ BEGIN
 ALTER TABLE "vote" ADD CONSTRAINT "vote_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;