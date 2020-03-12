#!/usr/bin/env node

require('dotenv').config();

const { query } = require('../');

async function createBadgesTable() {
  const sql = 'CREATE TABLE IF NOT EXISTS `badges` ( \
    `id` bigint(20) NOT NULL AUTO_INCREMENT, \
    `name` varchar(255) NOT NULL, \
    `description` text, \
    PRIMARY KEY (`id`) \
    );';

  await query(sql);

  console.log('Badges table created');
}

async function createUsersTable() {
  const sql = 'CREATE TABLE IF NOT EXISTS `users` ( \
    `id` bigint(20) NOT NULL AUTO_INCREMENT, \
    `name` varchar(255) NOT NULL, \
    PRIMARY KEY (`id`) \
    );';

  await query(sql);

  console.log('Users table created');
}

async function createUsersBadgesTable() {
  const sql = 'CREATE TABLE IF NOT EXISTS `users_badges` ( \
       `badge_id` bigint(20) NOT NULL, \
       `user_id` bigint(20) NOT NULL, \
       PRIMARY KEY (`user_id`,`badge_id`), \
       CONSTRAINT `users_badges_badges_FK` FOREIGN KEY (`badge_id`) REFERENCES `badges` (`id`) ON DELETE CASCADE, \
       CONSTRAINT `users_badges_users_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE \
   );';

  await query(sql);

  console.log('Users badges table created');
}

async function run() {
  try {
    await createBadgesTable();
    await createUsersTable();
    await createUsersBadgesTable();

    console.log('Database created');

    process.exit();
  } catch (e) {
    console.error(e);

    process.exit(1);
  }
}

run();
