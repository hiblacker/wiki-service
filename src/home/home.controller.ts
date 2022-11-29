import { Controller, Post, Res, Req } from '@nestjs/common'
import { HomeService } from './home.service'
import { Response, Request } from 'express'
// import { AxiosResponse } from 'axios'
// import { Observable } from 'rxjs'

@Controller('home')
export class HomeController {
    constructor(private readonly homeService: HomeService) {}

    @Post('juejin-recommend')
    getJuejinRecommend(@Res() res: Response, @Req() req: Request) {
        return this.homeService.getJuejinRecommend(res, req)
    }
}
