'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Unit extends Model {

    user () {
        return this.hasMany('App/Models/User')
    }

    projects () {
        return this.hasMany('App/Models/Project')
    }

    //TODO: Not sure if needed
    tasks () {
        return this.hasMany('App/Models/Task')
    }
}

module.exports = Unit
