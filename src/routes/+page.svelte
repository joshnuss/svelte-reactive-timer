<script lang="ts">
	import { Timer } from '$lib/index.js';
	import { lightFormat } from 'date-fns/lightFormat';

	const timer = new Timer(10_000, { precision: 100 });
</script>

<h1>Timer</h1>
<h2>{Math.floor(timer.elapsed / 1000)}s</h2>
<p>{timer.status}</p>
<p>remaining: {Math.ceil(timer.remaining / 1000)}s</p>
<p>{lightFormat(timer.time || new Date(), 'yyyy-MM-dd HH:MM:ss')}</p>

<button onclick={() => timer.start()} disabled={timer.isRunning}>Start</button>
<button onclick={() => timer.stop()} disabled={timer.isStopped || timer.isPaused}>Stop</button>
<button onclick={() => timer.pause()} disabled={!timer.isRunning}>Pause</button>
<button onclick={() => timer.resume()} disabled={!timer.isPaused}>Resume</button>
<button onclick={() => timer.reset()}>Reset</button>
