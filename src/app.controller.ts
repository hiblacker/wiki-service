import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import axios, { AxiosRequestConfig } from 'axios'

@Controller('juejin-article')
export class AppController {
    constructor(private readonly appService: AppService) {}
    @Get()
    get() {
        const options: AxiosRequestConfig = {
            url: 'https://api.juejin.cn/recommend_api/v1/article/recommend_cate_feed?aid=2608&uuid=6899010964310705671',
            method: 'post',
            data: { id_type: 2, sort_type: 200, cate_id: '6809637767543259144', cursor: '0', limit: 50 },
        }
        return axios(options).then(res => res.data)
    }
}
