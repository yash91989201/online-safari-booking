CREATE TABLE `account` (
	`id` varchar(36) NOT NULL,
	`account_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`access_token` text,
	`refresh_token` text,
	`id_token` text,
	`access_token_expires_at` timestamp,
	`refresh_token_expires_at` timestamp,
	`scope` text,
	`password` text,
	`created_at` timestamp NOT NULL,
	`updated_at` timestamp NOT NULL,
	CONSTRAINT `account_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `corbett_booking` (
	`id` varchar(36) NOT NULL,
	`date` varchar(12),
	`zone` varchar(16),
	`adults` int,
	`childrens` int,
	`traveller_name` varchar(256),
	`phone_number` varchar(16),
	CONSTRAINT `corbett_booking_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `corbett_visitors` (
	`id` varchar(36) NOT NULL,
	`name` varchar(256),
	`nationality` varchar(16),
	`age` int,
	`id_type` varchar(16),
	`id_number` varchar(16),
	`booking_id` varchar(36) NOT NULL,
	CONSTRAINT `corbett_visitors_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `enquiry` (
	`id` varchar(36) NOT NULL,
	`name` varchar(512) NOT NULL,
	`email` varchar(512) NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`message` text NOT NULL,
	`resolved` boolean NOT NULL DEFAULT false,
	CONSTRAINT `enquiry_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` varchar(36) NOT NULL,
	`expires_at` timestamp NOT NULL,
	`token` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL,
	`updated_at` timestamp NOT NULL,
	`ip_address` text,
	`user_agent` text,
	`user_id` varchar(36) NOT NULL,
	CONSTRAINT `session_id` PRIMARY KEY(`id`),
	CONSTRAINT `session_token_unique` UNIQUE(`token`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` varchar(36) NOT NULL,
	`name` text NOT NULL,
	`email` varchar(255) NOT NULL,
	`email_verified` boolean NOT NULL,
	`image` text,
	`created_at` timestamp NOT NULL,
	`updated_at` timestamp NOT NULL,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `verification` (
	`id` varchar(36) NOT NULL,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expires_at` timestamp NOT NULL,
	`created_at` timestamp,
	`updated_at` timestamp,
	CONSTRAINT `verification_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `account` ADD CONSTRAINT `account_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `corbett_visitors` ADD CONSTRAINT `corbett_visitors_booking_id_corbett_booking_id_fk` FOREIGN KEY (`booking_id`) REFERENCES `corbett_booking`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `session` ADD CONSTRAINT `session_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;