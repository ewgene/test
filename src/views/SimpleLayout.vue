<template>


	<div id="Box">
		<h2>Тестовое задание</h2>
		<p>Разместить график здесь</p>

		<div id="Charts"
				v-bind:style="{ 
					left: chartPos +'px'
				}">
			<Charts :chart="chart2" />
			<Charts :chart="chart1" />
		</div>

	</div>


</template>

<script lang="ts" src="./SimpleLayout.ts"/>

<style lang="scss">

#Charts {
	width: 339px;
	height: 226px;
	display: block;
	position: relative;
	transform: scale(2.5);
	transform-origin: 0 0;
}
.chart, .line {
	position: absolute;
	width: 100%;
	height: 100%;
	background: transparent;
}
.chart {
	top: 0;
	left: 0;
}
.line {
	top: 3px;
	left: 3px;
}
</style>