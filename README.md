# svelte-reactive-timer

A reactive timer for Svelte.

## Features

- Declarative timer using Svelte Runes.
- Can pause, stop, resume and reset timer.
- Data-bindable properties, like `status`, `elapsed`, `remaining`, and `duration`.
- Tracks current time, so it can be used as a data-bindable clock.
- Configurable update precision.
- Fully typed.

## Example

[REPL](https://svelte.dev/playground/d8596d4480b24819ad8e29415b4e9906?version=5.20.5)

```html
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

// can change duration during reset (optional)
timer.reset(20_000)
```

## License

MIT
