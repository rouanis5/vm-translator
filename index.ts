import { WriterService } from './app/Writer/CodeWriter'
import { Main } from './app/Main'
import { ParserService } from './app/Parser/ParserService'

const main = new Main(new ParserService(), new WriterService())
