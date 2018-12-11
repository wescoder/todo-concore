import Moleculoid from 'concore-sdk-js/lib/node/Datacore/Moleculoid'
import MetatomType from 'concore-sdk-js/lib/node/Datacore/MetatomType'

const {
  BooleanType,
  DateTime,
  Reference,
  Text
} = MetatomType

export const Todo = new Moleculoid('Todo', [
  new Text('description'),
  new BooleanType('done'),
  new DateTime('doneDate', { required: false }),
  new DateTime('dueDate'),
  new Reference('owner', 'User', {
    labelId: 'name',
    multiple: false,
    required: true
  })
])

export default Todo
