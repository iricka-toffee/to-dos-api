import { Injectable } from '@nestjs/common'

type ToDo = {
  id: number
  name: string
}

@Injectable()
export class ToDosService {
  private readonly _toDos = [
    {
      id: 1,
      name: 'Listen to this Workshop',
    },
    {
      id: 2,
      name: 'Read TDD book',
    },
    {
      id: 3,
      name: 'Read Mobx & React basic docs',
    },
    {
      id: 4,
      name: 'Explore Cypress',
    },

    {
      id: 5,
      name: 'Pitch to your colleagues',
    },
    {
      id: 6,
      name: 'Use and improve',
    },
  ]

  private _nextToDoId = 7

  getToDos(): ToDo[] {
    return this._toDos
  }

  addToDo({ name }) {
    const newToDoId = this._nextToDoId

    this._toDos.push({
      id: newToDoId,
      name,
    })

    this._nextToDoId++

    return {
      newToDoId,
    }
  }

  completeToDo({ id }) {
    const toDoIndex = this._toDos.findIndex((toDo) => toDo.id === id)

    if (toDoIndex !== -1) {
      this._toDos.splice(toDoIndex, 1)
    }
  }
}
