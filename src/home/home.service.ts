import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { map } from 'rxjs'
import { Response, Request } from 'express'
// import { Observable } from 'rxjs'
// import { AxiosResponse } from 'axios'

@Injectable()
export class HomeService {
    constructor(private readonly httpService: HttpService) {}

    getJuejinRecommend(res: Response, req: Request) {
        console.log(new Date())
        return this.httpService
            .post(
                'https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=7054333980195620387&spider=0',
                req.body
            )
            .pipe(map((r) => r.data))
            .subscribe({
                next(data) {
                    console.log(data)
                    res.json(data)
                },
            })
        // console.log(res)
        // return res
    }
}
