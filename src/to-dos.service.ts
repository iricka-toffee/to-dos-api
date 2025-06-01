import { Injectable } from '@nestjs/common'

type Request = {
  id: number
  maxPrice: number
}

@Injectable()
export class RequestFormService {
  private readonly _requests: Request[] = []
  private _nextRequestId = 1

  getRequests(): Request[] {
    return this._requests
  }

  addRequest({ maxPrice }: { maxPrice: number }) {
    const newRequestId = this._nextRequestId

    this._requests.push({
      id: newRequestId,
      maxPrice,
    })

    this._nextRequestId++

    return { 
      newRequestId,
    }
  }

  completeRequest({ id }: { id: number }) {
    const index = this._requests.findIndex((request) => request.id === id)

    if (index !== -1) {
      this._requests.splice(index, 1)
    }
  }
}