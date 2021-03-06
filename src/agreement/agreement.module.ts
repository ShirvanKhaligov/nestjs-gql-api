import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { agreementProviders } from './agreement.providers';
import { AgreementResolver } from './agreement.resolver';
import { AgreementService } from './agreement.service';

@Module({
  imports: [DatabaseModule],
  providers: [AgreementService, AgreementResolver, ...agreementProviders],
})
export class AgreementModule {}
