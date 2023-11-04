import { WriterService } from './Writer/CodeWriter'
import { ParserService } from './Parser/ParserService'

export class Main {
  constructor(private parser: ParserService, private writer: WriterService) {}
}
