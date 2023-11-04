import { CodeWriter } from './app/CodeWriter'
import { Main } from './app/Main'
import { Parser } from './app/Parser'

const main = new Main(new Parser(), new CodeWriter())
