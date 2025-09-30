/**
 * @param { import("knex").Knex } knex
 */
exports.up = function(knex) {
  return knex.schema.table('itens_pedidos', function(table) {
    table.integer('preco_unitario').notNullable().defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.table('itens_pedidos', function(table) {
    table.dropColumn('preco_unitario');
  });
};
