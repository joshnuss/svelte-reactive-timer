# svelte-reactive-timer

Reactive timer, stopwatch and clock for Svelte.

## Features

- Declarative time components, using Svelte Runes.
- StopWatch & Timer can pause, stop, resume and reset.
- Data-bindable properties, like `status`, `elapsed`, `remaining`, and `duration`.
- Tracks current time, so it can be used as a data-bindable clock.
- Configurable update precision.
- Fully typed.

## Comparison

What is the difference between `Clock`, `Timer`, and `StopWatch`?

- `Clock`: Exposes the current time, and is always running.
- `Timer`: Counts a duration of time, which is set at the start. Stopping is automatic once duration is complete.
- `StopWatch`: Counts time elapsed. Stopping is manual.

## Examples

### Timer

[REPL](https://svelte.dev/playground/d8596d4480b24819ad8e29415b4e9906?version=5.20.5)

```svelte
<script lang="ts">
  import { Timer } from 'svelte-reactive-timer'

  // timer is for 10 seconds
  const timer = new Timer(10_000)
</script>

<h1>{timer.elapsed/1000}s</h1>

<p>Status: {timer.status}</p>
<p>Remaining: {timer.remaining/1000}s</p>

<button onclick={() => timer.start()}>
  Start
</button>

<button onclick={() => timer.stop()}>
  Stop
</button>
```

### StopWatch

[REPL](https://svelte.dev/playground/6136cf515fd142bca2c3beaa4588e74e?version=5.22.3)

```svelte
<script lang="ts">
  import { StopWatch } from 'svelte-reactive-timer'

  const stopwatch = new StopWatch()
</script>

<h1>{stopwatch.elapsed/1000}s</h1>
<p>Status: {stopwatch.status}</p>

<button onclick={() => stopwatch.start()}>
  Start
</button>

<button onclick={() => stopwatch.stop()}>
  Stop
</button>
```

### Clock

[REPL](https://svelte.dev/playground/333c61dc0ca9459a82d9eb70a0d0b9ca?version=5.22.3)

```svelte
<script lang="ts">
  import { lightFormat } from 'date-fns/lightFormat'
  import { Clock } from 'svelte-reactive-timer'

  const clock = new Clock()
</script>

<h1>{lightFormat(clock.time, 'yyyy-MM-dd HH:MM:ss')}</h1>
```

## API

### Timer

#### Constructor

```js
// 10s timer
const timer = new Timer(10_000)

// 10s timer with update frequency of ~1s
const timer = new Timer(10_000, { precision: 1_000 })
```

#### Attributes

All attributes are bindable.

```js
// duration in ms
timer.duration

// elapsed ms
timer.elapsed

// remaining ms
timer.remaining

// status of the timer, either "running", "paused" or "stopped"
timer.status

// true when status is "running"
timer.isRunning

// true when status is "stopped"
timer.isStopped

// true when status is "paused"
timer.isPaused

// last updated time, can be used as a clock
timer.time
```

#### Functions

```js
// starts the timer and sets `status` to `running`.
timer.start()

// stops updating the timer and sets `status` to `stopped`.
timer.stop()

// pauses the timer and sets `status` to `paused`.
timer.pause()

// resumes the timer and sets `status` to `running`.
timer.resume()

// resets the timer to the start, and sets `status` to `running`.
timer.reset()

// can change duration during reset (optional)
timer.reset(20_000)
```

### Stopwatch

#### Constructor

```js
const stopwatch = new StopWatch(10_000)

// with update frequency of ~1s
const stopwatch = new StopWatch({ precision: 1_000 })
```

#### Attributes

All attributes are bindable.

```js
// elapsed ms
stopwatch.elapsed

// status of the stopwatch, either "running", "paused" or "stopped"
stopwatch.status

// true when status is "running"
stopwatch.isRunning

// true when status is "stopped"
stopwatch.isStopped

// true when status is "paused"
stopwatch.isPaused

// last updated time, can be used as a clock
stopwatch.time

// time when stopwatched stopped
stopwatch.endAt
```

#### Functions

```js
// starts the stopwatch and sets `status` to `running`.
stopwatch.start()

// stops updating the stopwatch and sets `status` to `stopped`.
stopwatch.stop()

// pauses the stopwatch and sets `status` to `paused`.
stopwatch.pause()

// resumes the stopwatch and sets `status` to `running`.
stopwatch.resume()

// resets the stopwatch to the start, and sets `status` to `running`.
stopwatch.reset()
```

### Clock

#### Constructor

```js
const clock = new Clock()

// with update frequency of ~1s
const clock = new Clock({ precision: 1_000 })
```

#### Attributes

```js
// returns the current time
// update frequency is based on `percision`
clock.time
```

## License

MIT
