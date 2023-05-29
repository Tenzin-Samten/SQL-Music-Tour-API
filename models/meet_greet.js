'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( {Band, Event}) {
      // define association here
      MeetGreet.belongsTo (Band, {
        foreignKey: "band_id",
        as: "band",
      })

      MeetGreet.belongsTO (EventCounts, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
  meet_greet.init({
    event_id: DataTypes.SMALLINT,
    band_id: DataTypes.SMALLINT,
    date: DataTypes.DATE,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'meet_greet',
  });
  return meet_greet;
};