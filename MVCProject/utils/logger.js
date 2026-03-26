/**
 * Logger Utility
 * Provides logging functionality with different levels
 */

class Logger {
  constructor(prefix = '[APP]') {
    this.prefix = prefix;
  }

  log(message, data = null) {
    console.log(`${this.prefix} [INFO]`, message, data || '');
  }

  error(message, error = null) {
    console.error(`${this.prefix} [ERROR]`, message, error || '');
  }

  warn(message, data = null) {
    console.warn(`${this.prefix} [WARN]`, message, data || '');
  }

  info(message, data = null) {
    console.info(`${this.prefix} [INFO]`, message, data || '');
  }

  debug(message, data = null) {
    if (process.env.DEBUG) {
      console.debug(`${this.prefix} [DEBUG]`, message, data || '');
    }
  }

  table(data) {
    console.table(data);
  }
}

export default Logger;
