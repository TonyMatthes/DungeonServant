--table Creation
CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "character" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (100) NOT NULL,
	"strength" INT NOT NULL,
	"dexterity" INT NOT NULL,
	"constitution" INT NOT NULL,
	"intelligence" INT NOT NULL,
	"wisdom" INT NOT NULL,
	"charisma" INT NOT NULL,
	"hit_points" INT NOT NULL,
	"armor_class", INT NOT NULL,
	"person_id" INT REFERENCES person(id) ON DELETE CASCADE
);
--person_id can be null until authentication is brought back in

CREATE TABLE "campaign" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL,
    "dungeon_master_id" INT REFERENCES person(id) ON DELETE CASCADE
);
--person_id can be null until authentication is brought back in

CREATE TABLE "character_campaign" (
	"id" SERIAL PRIMARY KEY,
	"character_id" INT REFERENCES character(id) ON DELETE CASCADE,
	"campain_id" INT REFERENCES campaign(id) ON DELETE CASCADE,
    "current_hit_points"
);

CREATE TABLE "monster" (
    "id" SERIAL PRIMARY KEY,
    "name" character varying(100) NOT NULL,
    "strength" integer,
    "dexterity" integer,
    "constitution" integer,
    "intelligence" integer,
    "wisdom" integer,
    "charisma" integer,
    "hit_points" integer,
    "hit_dice" character varying(6),
    "armor_class" integer,
    "challenge_rating" double precision,
    "actions" jsonb,
    "special_abilities" jsonb
);


--insert mock data
INSERT INTO "public"."person"(,"username","password")
VALUES
('Tony','these'),
('Eric','passwords'),
('Vince','won''t'),
('Bruno','work'),
('Alex','at all'),
('Troy', 'noauth';

INSERT INTO "character"("name","strength","dexterity","constitution","intelligence","wisdom","charisma","max_hitpoints","hit_points","person_id")
VALUES
('grabnar',5,5,5,5,5,5,5,15,1),
('robgar',10,20,14,16,11,13,20,15,2),
('gumby',10,10,10,10,10,10,20,15,3),
('Mr. Pirate',3,19,14,14,14,14,15,15,4)
('Brumble', 5,5,5,5,5,5,5,15,5)

INSERT INTO "public"."campaign"("id","name","dungeon_master_id")
VALUES
(1,E'mock campagin',NULL);

INSERT INTO "public"."character_campaign"("character_id","campain_id")
VALUES
(1,1,5),
(2,1,5),
(3,1,5),
(4,1,5),
(5,1,5);

-- copy command for included monster csv file
--replace /YOUR/FILE/PATH/HERE with your file path
COPY monster("id",
		"name",
        "strength",
        "dexterity",
        "constitution",
        "intelligence",
        "wisdom",
        "charisma",
        "hit_points",
        "hit_dice",
        "armor_class",
        "challenge_rating",
        "actions",
        "special_abilities")
        FROM '/YOUR/FILE/PATH/monster.csv' DELIMITER ',' CSV HEADER;