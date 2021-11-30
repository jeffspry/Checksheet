'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {

    project () {
        return this.belongsTo('App/Models/Project')
    }


    //TODO: not sure if needed
    unit () {
        return this.belongsTo('App/Model/Unit')
    }
}

module.exports = Task
