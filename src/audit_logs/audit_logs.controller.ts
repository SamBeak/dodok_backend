import { Controller } from '@nestjs/common';
import { AuditLogsService } from './audit_logs.service';

@Controller('audit-logs')
export class AuditLogsController {
  constructor(private readonly auditLogsService: AuditLogsService) {}
}
