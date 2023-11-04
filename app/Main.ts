import { CodeWriter } from './CodeWriter'
import { Parser } from './Parser'

export class Main {
  constructor(private parser: Parser, private writer: CodeWriter) {}
}
