import { Vue, Prop } from "vue-property-decorator"
import Component from 'vue-class-component'

@Component
export default class Charts extends Vue {
	@Prop() chart: any
	
	polyLine:string = ""

	mounted() {
		for( let i in this.chart.dataset ) {
			this.polyLine+=this.chart.dataset[i].x+","+this.chart.dataset[i].y+" "
		}
		console.log(this.polyLine)
	}
}
