CREATE TABLE "corbett_booking" (
	"id" varchar PRIMARY KEY NOT NULL,
	"date" date NOT NULL,
	"vehicle" varchar NOT NULL,
	"zone" varchar NOT NULL,
	"timing" varchar NOT NULL,
	"adults" varchar NOT NULL,
	"children" varchar,
	"traveler_name" varchar NOT NULL,
	"mobile" varchar NOT NULL,
	"email" varchar NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "generic_payment" (
	"id" varchar PRIMARY KEY NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"mobile" varchar(20) NOT NULL,
	"zip" varchar(20) NOT NULL,
	"country" varchar(100) NOT NULL,
	"city" varchar(100) NOT NULL,
	"remark" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
