<script lang="ts">
export default {
	methods: {
		// darkMode() {
		// 	const body = document.querySelector("body");
		// 	body?.classList.toggle("darkMode");
		// 	store(body?.classList.contains("darkMode"));
			
		// 	load();
		// 	function load() {
		// 		const darkmode = localStorage.getItem("darkMode");
		// 		if (!darkmode) {
		// 			store("false");
		// 		} else if (darkmode === "true") {
		// 			body?.classList.add("darkMode");
		// 		}
		// 	}
			

		// 	function store(e) {
		// 		localStorage.setItem("darkMode", e);
		// 	}
		// },
	},
};
</script>

<template>
	<header>
		<div class="container">
			<div class="nav">
				<a href="/" class="navbar-brand">
					<img src="@/assets/fiduoccidente_logo.png" alt="fiduoccidente_logo" />
				</a>
				<div class="icons_acce">
					<button
						type="button"
						class="line"
						data-bs-toggle="modal"
						data-bs-target="#exampleModal"
						data-bs-whatever="@mdo"
					>
						<i class="fid-search"></i>
					</button>
					<i class="fid-font-plus" id="font-up"></i>
					<i class="fid-font-less" id="font-down"></i>
					<!-- <i class="fid-sun" @click="darkMode()"></i> -->
				</div>
			</div>
		</div>
	</header>
</template>
