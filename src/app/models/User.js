import Sequelize, { Model } from "sequelize";
import bcryptJs from "bcryptJs";
class User extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                password_hash: Sequelize.STRING,
            },
            {
                sequelize,
            }
        )
        //antes de salvar
        this.addHook('beforeSave', async user => {
            if (user.password) {
                user.password_hash = await bcryptJs.hash(user.password, 8)
            }
        })

        return this;
    }

    checkPassword(password){
        return bcryptJs.compare(password, this.password_hash)
    }
}

export default User;