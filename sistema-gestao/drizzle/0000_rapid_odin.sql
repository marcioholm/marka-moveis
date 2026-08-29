CREATE TABLE `customers` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`document` text NOT NULL,
	`city` text NOT NULL,
	`address` text,
	`birth` text,
	`father` text,
	`mother` text,
	`workplace` text,
	`created_at` text DEFAULT 'Hoje' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`sku` text NOT NULL,
	`category` text NOT NULL,
	`stock` integer DEFAULT 0 NOT NULL,
	`min_stock` integer DEFAULT 2 NOT NULL,
	`cost` real DEFAULT 0 NOT NULL,
	`sale_price` real DEFAULT 0 NOT NULL
);
