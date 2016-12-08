'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('attendees', function(table) {
        table.increments();

        table.integer('concert_id').notNullable().references('id').inTable('concerts').onDelete('CASCADE');

        table.string('name').notNullable().defaultTo('');

        table.integer('age');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('attendees')
};


// exports.up = function(knex, Promise) {
//   return knex.schema.createTable('conditions', function(table){
//     table.increments();
//     table.integer('trail_id').notNullable().references('id').inTable('trails').onDelete('CASCADE');
//     //always use integer type for foreign keys
//     //notNullable-makes sure these columns are not null
//     //references condition-references an id from another table
//     //inTable-references which table is being referenced
//     //onDelete('CASCADE')-Makes sure to also delete any dependencies as well
//     table.integer('runner_id').notNullable().references('id').inTable('runners').onDelete('CASCADE');
//     table.text('condition').notNullable();
//     table.timestamps(true, true); //or timestamp(no s), look at docs
//   });
// };
//
// exports.down = function(knex, Promise) {
//   return knex.schema.dropTable('conditions');
// };
