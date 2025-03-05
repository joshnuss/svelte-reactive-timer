<script lang="ts">
  import { Timer, StopWatch, Clock } from '$lib/index.js'
  import { lightFormat } from 'date-fns/lightFormat'

  const timer = new Timer(10_000)
  const stopwatch = new StopWatch()
  const clock = new Clock()
</script>

<section>
  <h2>Timer</h2>
  <h3>{Math.floor(timer.elapsed / 1000)}s</h3>
  <p>{timer.status}</p>
  <p>remaining: {Math.ceil(timer.remaining / 1000)}s</p>
  <p>{lightFormat(timer.time || new Date(), 'yyyy-MM-dd HH:MM:ss')}</p>

  <button onclick={() => timer.start()} disabled={timer.isRunning}>Start</button>
  <button onclick={() => timer.stop()} disabled={timer.isStopped || timer.isPaused}>Stop</button>
  <button onclick={() => timer.pause()} disabled={!timer.isRunning}>Pause</button>
  <button onclick={() => timer.resume()} disabled={!timer.isPaused}>Resume</button>
  <button onclick={() => timer.reset()}>Reset</button>
</section>

<section>
  <h2>Stop Watch</h2>
  <h3>{Math.floor(stopwatch.elapsed / 1000)}s</h3>
  <p>{stopwatch.status}</p>
  <p>{lightFormat(stopwatch.time || new Date(), 'yyyy-MM-dd HH:MM:ss')}</p>

  <button onclick={() => stopwatch.start()} disabled={stopwatch.isRunning}>Start</button>
  <button onclick={() => stopwatch.stop()} disabled={stopwatch.isStopped || stopwatch.isPaused}>Stop</button>
  <button onclick={() => stopwatch.pause()} disabled={!stopwatch.isRunning}>Pause</button>
  <button onclick={() => stopwatch.resume()} disabled={!stopwatch.isPaused}>Resume</button>
  <button onclick={() => stopwatch.reset()}>Reset</button>
</section>

<section>
  <h2>Clock</h2>

  <p>{lightFormat(clock.time, 'yyyy-MM-dd HH:MM:ss')}</p>
</section>
