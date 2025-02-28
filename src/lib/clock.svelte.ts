type Status = 'running' | 'stopped'
type Options = {
  precision?: number
  auto_start?: boolean
}

export class Clock {
  status = $state<Status>('stopped')
  time = $state<Date>(new Date())
  precision: number
  #interval: number | null = null

  constructor(options: Options = {}) {
    this.precision = options.precision || 300

    if (options.auto_start !== false) this.start()
  }

  get isRunning() {
    return this.status == 'running'
  }

  get isStopped() {
    return this.status == 'stopped'
  }

  start() {
    this.status = 'running'
    this.#schedule()
  }

  stop() {
    this.#dispose()
    this.status = 'stopped'
  }

  #schedule() {
    this.time = new Date()
    this.#interval = setInterval(() => this.#onInterval(), this.precision)
  }

  #dispose() {
    if (this.#interval) {
      clearInterval(this.#interval)
    }
  }

  #onInterval() {
    this.time = new Date()
  }
}
