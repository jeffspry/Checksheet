'use strict'

const Unit = require("../../Models/Unit")

class UnitController {
    async create ({ request }) {
        const { unit_name } = request.all()
        const unit = new Unit
        unit.fill({
            unit_name,
        })
        return unit
    }
}

module.exports = UnitController
