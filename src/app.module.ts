import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { OneController } from './daily-one/one.controller'
import { OneService } from './daily-one/one.service'
import { HomeController } from './home/home.controller'
import { HomeService } from './home/home.service'

@Module({
    imports: [HttpModule],
    controllers: [AppController, OneController, HomeController],
    providers: [AppService, OneService, HomeService],
})
export class AppModule {}
