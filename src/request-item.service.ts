import { Injectable } from '@nestjs/common'

@Injectable()
export class RequestFormService {
  private requests: { id: number; maxPrice: number }[] = []
  private nextId = 1

  addRequest(maxPrice: number) {
    const request = {
      id: this.nextId++,
      maxPrice,
    }

    this.requests.push(request)

    return {
      newRequestId: request.id,
    }
  }

  getRequests() {
    return this.requests
  }
 completeRequest(id: number) {
    // Например, удаляем запрос по id
    this.requests = this.requests.filter(request => request.id !== id)
  }
}