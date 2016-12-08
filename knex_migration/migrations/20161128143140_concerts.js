'use strict';
exports.up = function(knex, Promise) {
    return knex.schema.createTable('concerts', function(table) {
        table.increments();
        //id
        table.string('name').notNullable().defaultTo('');
        //name
        table.decimal('price', 5, 2);
        //price
        table.timestamp('started_at');
        //started_at or created/updated at
        table.timestamp('ended_at');
        //ended_at
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('concerts');
};
