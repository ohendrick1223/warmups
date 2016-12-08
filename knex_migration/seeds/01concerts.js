
'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('concerts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('concerts').insert({
          id: 1,
          name: 'Cap Hill Blockparty 2016',
          price: 49.99
        }),

        knex('concerts').insert({
          id: 2,
          name: 'Bumbershoot 2016',
          price: 64.99
        })

      ]);
    });
};
//id, name, price

// 'use strict';
//
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('runners').del()
//     .then(function () {
//       return Promise.all([
//         // Inserts seed entries
//         knex('runners').insert({
//           id: 1,
//           first_name: 'Jennie',
//           last_name: 'Zinko'
//         }),
//
//         knex('runners').insert({
//           id: 2,
//           first_name: 'Aaron',
//           last_name: 'Marks'
//         }),
//
//         knex('runners').insert({
//           id: 3,
//           first_name: 'Lydia',
//           last_name: 'Page'
//         })
//
//       ]);
//     });
// };
