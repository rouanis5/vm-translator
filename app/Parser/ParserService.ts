/**
 * parses each VM command into its lexical elements
 * - Handles the parsing of a single .vm file
 * - Reads a VM command, parses the command into its lexical components, and provides convenient access to these components
 * - Ignores white space and comments
 *
 */

import { COMMAND_TYPE } from '../common/enums'

export class ParserService {
  constructor() {}

  hasMoreLines(): boolean {
    return false
  }

  advance(): void {}

  getCommandType(): COMMAND_TYPE {
    return COMMAND_TYPE.C_CALL
  }

  getArg1(): string {
    return ''
  }

  getArg2(): number {
    return 0
  }
}
