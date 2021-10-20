import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
    setCookie(body): string {
        console.log(body)
        return body
    }
}
