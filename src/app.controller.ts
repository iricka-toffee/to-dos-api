import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common'
import { ApiOkResponse, ApiProperty, ApiQuery } from '@nestjs/swagger'
import { ToDosService } from './to-dos.service'

class ToDo {
  @ApiProperty()
  id: number

  @ApiProperty()
  name: string
}

class ToDosResponse {
  @ApiProperty({
    isArray: true,
    type: ToDo,
  })
  toDos: ToDo[]
}

class NewToDoRequest {
  @ApiProperty()
  name: string
}

class NewToDoResponse {
  @ApiProperty({
    type: Number,
  })
  newToDoId: number
}

class CompleteToDosRequest {
  @ApiProperty({
    isArray: true,
    type: Number,
  })
  toDoIds: number[]
}

@Controller('to-dos-api')
export class AppController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly toDosService: ToDosService) { }

  @ApiOkResponse({
    description: 'ToDo items',
    type: ToDosResponse,
  })
  @Get('to-dos')
  getToDos() {
    return {
      toDos: this.toDosService.getToDos(),
    }
  }

  @Post('to-dos')
  @ApiOkResponse({
    description: 'Created ToDo ID',
    type: NewToDoResponse,
  })
  addToDo(@Body() { name }: NewToDoRequest) {
    const { newToDoId } = this.toDosService.addToDo({
      name,
    })

    return {
      newToDoId,
    }
  }

  @Post('to-dos/complete')
  completeToDos(@Body() { toDoIds = [] }: CompleteToDosRequest) {
    toDoIds.forEach((toDoId) =>
      this.toDosService.completeToDo({
        id: toDoId,
      }),
    )
  }

  @Delete('to-dos')
  @ApiQuery({
    name: 'toDoId',
    type: Number,
  })
  deleteToDo(@Query('toDoId') toDoId: string) {
    this.toDosService.completeToDo({
      id: Number(toDoId),
    })
  }
}
