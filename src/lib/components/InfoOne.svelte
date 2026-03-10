<div class="py-[clamp(3.125rem,8.3vw,7.5rem)]">
	<div class="flex gap-[3rem] max-[768px]:flex-col">
		<!-- Left box -->
		<div
			class="bg-[var(--grey-100)] rounded-[var(--border-radius-100)] w-[40%] px-[1.5rem]
                pt-[2rem] pb-[3.75rem] max-[768px]:w-full"
		>
			<h3 class="mb-[2.25rem]">What we stand for</h3>
			<ul>
				<li class="mt-[1.25rem] list-disc ml-[1.25rem] text-[1rem] max-w-[22rem]">
					We craft solutions that fit real problems — not the other way around.
				</li>
				<li class="mt-[1.25rem] list-disc ml-[1.25rem] text-[1rem] max-w-[22rem]">
					We work with modern tools that let us build fast.
				</li>
				<li class="mt-[1.25rem] list-disc ml-[1.25rem] text-[1rem] max-w-[22rem]">
					With skills across development, infrastructure and design — we get things done.
				</li>
			</ul>
		</div>

		<!-- Right box -->
		<div
			class="rounded-[var(--border-radius-100)] w-[60%] relative overflow-hidden
                max-[768px]:w-full max-[768px]:aspect-[16/9] content-end text-right p-9 brick-container"
		>
			<h1 class="text-[clamp(3.25rem,1.0625rem+7vw,5rem)] leading-[1] font-medium">
				Build to <br /> work <br /> for you
			</h1>
		</div>
	</div>
</div>

<style lang="postcss">
	:root {
		--color-one: #e3e3e3;
		--color-two: #cfcfcf;
		--bg-w: 80px;
		--bg-h: 140px;
		--bg-half-w: calc(var(--bg-w) / 2);
		--bg-half-h: calc(var(--bg-h) / 2);
	}

	.brick-container {
		background: var(--grey-100);
		background-size: var(--bg-w) var(--bg-h);
		background-position:
			0 0,
			0 0,
			var(--bg-half-w) var(--bg-half-h),
			var(--bg-half-w) var(--bg-half-h),
			0 0,
			var(--bg-half-w) var(--bg-half-h);
		background-image: linear-gradient(
				30deg,
				var(--color-one) 12%,
				transparent 12.5%,
				transparent 87%,
				var(--color-one) 87.5%,
				var(--color-one)
			),
			linear-gradient(
				150deg,
				var(--color-one) 12%,
				transparent 12.5%,
				transparent 87%,
				var(--color-one) 87.5%,
				var(--color-one)
			),
			linear-gradient(
				30deg,
				var(--color-one) 12%,
				transparent 12.5%,
				transparent 87%,
				var(--color-one) 87.5%,
				var(--color-one)
			),
			linear-gradient(
				150deg,
				var(--color-one) 12%,
				transparent 12.5%,
				transparent 87%,
				var(--color-one) 87.5%,
				var(--color-one)
			),
			linear-gradient(
				60deg,
				var(--color-two) 25%,
				transparent 25.5%,
				transparent 75%,
				var(--color-two) 75%,
				var(--color-two)
			),
			linear-gradient(
				60deg,
				var(--color-two) 25%,
				transparent 25.5%,
				transparent 75%,
				var(--color-two) 75%,
				var(--color-two)
			);
	}
</style>
