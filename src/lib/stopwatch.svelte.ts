type Status = 'running' | 'paused' | 'stopped'
type Options = {
  precision?: number
}

export class StopWatch {
  status = $state<Status>('stopped')
  elapsed = $state<number>(0)
  startAt = $state<Date | null>(null)
  endAt = $state<Date | null>(null)
  time = $state<Date | null>(null)
  precision: number
  #interval: number | null = null

  constructor(options: Options = {}) {
    this.precision = options.precision || 200
  }

  get isRunning() {
    return this.status == 'running'
  }

  get isStopped() {
    return this.status == 'stopped'
  }

  get isPaused() {
    return this.status == 'paused'
  }

  start() {
    this.time = new Date()
    this.startAt = this.time
    this.endAt = null
    this.status = 'running'
    this.elapsed = 0
    this.#schedule()
  }

  stop() {
    this.time = new Date()
    this.status = 'stopped'
    this.endAt = this.time
    this.#dispose()
  }

  pause() {
    this.#dispose()
    this.status = 'paused'
  }

  resume() {
    this.status = 'running'
    this.#schedule()
  }

  reset() {
    this.#dispose()
    this.start()
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
    const now = new Date()

    this.elapsed += now.getTime() - this.time!.getTime()
    this.time = now
  }
}
