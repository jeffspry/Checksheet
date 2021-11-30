'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.integer('project_id').unsigned().references('id').inTable('projects')
      table.string('description', 255)
      table.string('status', 55)
      table.string('status_note', 255)
      table.integer('status_color')
      table.boolean('completed')
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
