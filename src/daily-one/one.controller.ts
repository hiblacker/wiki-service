import { Controller, Get, Res } from '@nestjs/common'
import { OneService } from './one.service'
import { Response } from 'express'
// import { AxiosResponse } from 'axios'
// import { Observable } from 'rxjs'

@Controller('one')
export class OneController {
    constructor(private readonly oneService: OneService) {}

    @Get('poetry')
    getRandomPoetry(@Res() res: Response) {
        return this.oneService.getRandomPoetry(res)
    }
}
