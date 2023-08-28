<a id="scrollIndicator" href="#about">
	<svg xmlns="http://www.w3.org/2000/svg" class="bounce" fill="var(--text)" width="24" height="24"
		><path
			d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
		/></svg
	>
</a>

<style>
	#scrollIndicator {
		position: fixed;
		width: 100%;
		bottom: 2vh;
		height: 10vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.bounce {
		animation: bounce 3s infinite;
	}

	@keyframes bounce {
		0%,
		25%,
		50%,
		75%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-20px);
		}
		60% {
			transform: translateY(-12px);
		}
	}
</style>
