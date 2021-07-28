<template>
		<div class="chart">
			<div class="line">
				<svg viewBox="0 0 339 226" xmlns="http://www.w3.org/2000/svg">
					<polyline :points="polyLine"
          :stroke="chart.color"
					stroke-width="4"
					fill-opacity="0" />
				</svg>
			</div>
			<div v-for="(point, i) in chart.dataset"
				v-bind:key="chart.color+i"
				class="point"
				:style="{
					position: 'absolute', 
					top: point.y+'px', 
					left: point.x+'px', 
					borderColor: chart.color
				}">
			</div>
		</div>

</template>

<script lang="ts" src="./Charts.ts"/>

<style lang="scss">
	.point {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		border-width: 1px;
		border-style: solid;
		background: #FFF;
	}
</style>