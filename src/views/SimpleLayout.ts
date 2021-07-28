import { Vue, Watch } from "vue-property-decorator"
import Component from 'vue-class-component'
import Charts from "./Charts.vue"
import chart1 from "./chart1.json"
import chart2 from "./chart2.json"

@Component({
  components:{
		Charts
  }
})

export default class SimpleLayout extends Vue {
	chartPos = 0
	chart1 = {
		color: chart1.color,
		dataset: chart1.dataset,
		description: chart1.decription,
		points: ""
	}
	chart2 = {
		color: chart2.color,
		dataset: chart2.dataset,
		description: chart2.description,
		points: ""
	}
	mounted() {
		let chartWidth = 
			document.querySelector("#Charts")!
			.getBoundingClientRect().width
		this.chartPos = (window.innerWidth - chartWidth)/2
		console.log(this.chartPos)
		return this.chartPos
	}
}
