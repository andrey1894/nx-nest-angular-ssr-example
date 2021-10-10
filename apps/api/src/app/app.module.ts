import { Module } from '@nestjs/common';
import { join } from 'path';
import { AngularUniversalModule } from '@nestjs/ng-universal';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AppServerModule } from '../../../frontend/src/main.server';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/frontend/browser')
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
