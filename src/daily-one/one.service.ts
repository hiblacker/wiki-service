import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { map } from 'rxjs'
import { Response } from 'express'
// import { Observable } from 'rxjs'
import { AxiosResponse } from 'axios'

@Injectable()
export class OneService {
    constructor(private readonly httpService: HttpService) {}

    getRandomPoetry(res: Response) {
        return this.httpService
            .get('https://v2.jinrishici.com/one.json')
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
