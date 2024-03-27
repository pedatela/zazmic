import Sequelize, { Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { isBefore, subHours } from 'date-fns'



class Session extends Model {
    static init(sequelize) {
        super.init(
          {
            start: Sequelize.DATE,
            duration: Sequelize.INTEGER,
            canceled_at: Sequelize.DATE,
            past: {
              type: Sequelize.VIRTUAL,
              get() {
                return isBefore(this.date, new Date())
              }
            },
            cancelable: {
              type: Sequelize.VIRTUAL,
              get() {
                return isBefore(new Date(), subHours(this.date, 2))
              }
            }
          },
          {
            sequelize,
          }
        )
        this.addHook('beforeSave',session => session.id = session.id = uuidv4())
      }
      static associate(models) {
        this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' })
        this.belongsTo(models.Client, { foreignKey: 'coach_id', as: 'coach' })
      }


}

export default Session;