'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('ref')
      table.string('isbn')
      table.string('company')
      table.decimal('price')
      table.decimal('price_list')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
