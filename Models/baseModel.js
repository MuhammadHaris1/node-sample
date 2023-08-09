import { Model } from 'objection'
import vbs from 'objection-visibility'
const visibility =vbs.default;

/**
 * Class BaseModel.
 * @extends Model
 */
export default class BaseModel extends visibility(Model) {
    static get hidden() {
        let hidden = ['created_at', 'updated_at','password']

        return hidden.concat(this.hiddenFields)
    }

    static get hiddenFields() {
        return []
    }
}