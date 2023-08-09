
import Password from 'objection-password'
import BaseModel from './baseModel.js'

export default class User extends Password()(BaseModel){

    static get tableName(){
        return 'users'
    }

    static get hiddenFields(){
        return ['password']
    }
}