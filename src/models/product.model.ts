import { Model } from 'objection'
//import Person from './Person'

export default class Product extends Model {
  id!: number
  name!: string
  price!: number


  //owner?: Person

  // Table name is the only required property.
  static tableName = 'products'

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'price'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        price: { type: 'number', minimum: 0 }
      }
    };
  
  }

  // This object defines the relations to other models. The relationMappings
  // property can be a thunk to prevent circular dependencies.
  /*static relationMappings = () => ({
    owner: {
      relation: Model.BelongsToOneRelation,
      // The related model.
      modelClass: Person,

      join: {
        from: 'animals.ownerId',
        to: 'persons.id',
      },
    },
  })*/
}