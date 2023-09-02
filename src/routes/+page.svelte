<script>
	import NewTodoForm from '$lib/NewTodoForm.svelte';
</script>

<div class="mx-auto max-w-md p-6">
	<NewTodoForm />
	<h1 class="my-2 text-2xl font-medium dark:text-white">Todo List</h1>
	<div>
		<ul>
			<li class="flex">
				<label
					class="[&>*:first-child]:checked:accent-red-600 mr-2 flex-1 cursor-pointer select-none rounded-md border-2 bg-gray-50 px-2.5 py-0.5 text-black shadow shadow-gray-400/40 transition-all hover:bg-gray-100/80 hover:shadow-gray-400/90 dark:bg-white/30 dark:text-white dark:hover:bg-white/40"
				>
					<input class="accent-blue-600" type="checkbox" />
					create svelte todo
				</label>
				<button
					class="h-min select-none self-center rounded-md border-2 border-red-500 bg-red-500/50 px-2.5 py-0.5 text-red-500 shadow shadow-red-500/40 transition-all hover:bg-red-500/60 hover:shadow-red-500/90"
					>Delete</button
				>
			</li>
		</ul>
	</div>
</div>
