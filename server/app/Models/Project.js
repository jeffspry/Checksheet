'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {

    unit () {
        return this.belongsTo('App/Models/Unit')
    }

    tasks () {
        return this.hasMany('App/Models/Task')
    }
}

module.exports = Project
