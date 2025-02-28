# svelte-reactive-timer

A reactive timer for Svelte.

## Features

- Declarative timer using Svelte Runes.
- Can pause, stop, resume and reset timer.
- Data-bindable properties, like `status`, `elapsed`, and `duration`.
- Tracks current time, so it can be used as a data-bindable clock.
- Configurable update precision.
- Fully typed.

## Example

```html
<script lang="ts">
  import { Timer } from 'svelte-reactive-timer'

  // timer is for 10 seconds
  const timer = new Timer(10_000)
</script>

<h1>{timer.elapsed/1000}</h1>

<button onclick={() => timer.start()}>
  Start
</button>

<button onclick={() => timer.stop()}>
  Stop
</button>
```

## API

### Constructor

```js
// 10s timer
const timer = new Timer(10_000)

// 10s timer that will update every ~1s
const timer = new Timer(10_000, { precision: 1_000 })
```

### Attributes

All attributes are bindable.

```js
// duration in ms
timer.duration

// elapsed ms
timer.elapsed

// remaining ms
timer.remaining

// the status of the timer "running", "paused" or "stopped"
timer.status
timer.isRunning // true when status is running
timer.isStopped // true when status is stopped
timer.isPaused // true when status is paused

// the current time
// can be used as a clock
timer.time
```

### Start timer

Starts the timer and sets `status` to `running`.

```js
timer.start()
```

### Stop timer

Stops updating the timer and sets `status` to `stopped`.

```js
timer.stop()
```

### Pause timer

Stops the timer and sets `status` to `paused`.

```js
timer.pause()
```

### Resume timer

Resumes the timer and sets `status` to `running`.

```js
timer.resume()
```

### Reset timer

Resets the timer to the start, and sets `status` to `running`.

```js
timer.reset()
```

## License

MIT
