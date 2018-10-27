import '../../stylus/components/_app.styl';
// Component level mixins
import AppTheme from './mixins/app-theme';
import Themeable from '../../mixins/themeable';
// Directives
import Resize from '../../directives/resize';
/* @vue/component */
export default {
    name: 'v-app',
    directives: {
        Resize
    },
    mixins: [
        AppTheme,
        Themeable
    ],
    props: {
        id: {
            type: String,
            default: 'app'
        },
        dark: Boolean
    },
    computed: {
        classes() {
            return {
                'application--is-rtl': this.$vuetify.rtl,
                ...this.themeClasses
            };
        }
    },
    watch: {
        dark() {
            this.$vuetify.dark = this.dark;
        }
    },
    mounted() {
        this.$vuetify.dark = this.dark;
    },
    render(h) {
        const data = {
            staticClass: 'application',
            'class': this.classes,
            attrs: { 'data-app': true },
            domProps: { id: this.id }
        };
        const wrapper = h('div', { staticClass: 'application--wrap' }, this.$slots.default);
        return h('div', data, [wrapper]);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVkFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZBcHAvVkFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLG1DQUFtQyxDQUFBO0FBRTFDLHlCQUF5QjtBQUN6QixPQUFPLFFBQVEsTUFBTSxvQkFBb0IsQ0FBQTtBQUV6QyxPQUFPLFNBQVMsTUFBTSx3QkFBd0IsQ0FBQTtBQUU5QyxhQUFhO0FBQ2IsT0FBTyxNQUFNLE1BQU0seUJBQXlCLENBQUE7QUFFNUMsb0JBQW9CO0FBQ3BCLGVBQWU7SUFDYixJQUFJLEVBQUUsT0FBTztJQUViLFVBQVUsRUFBRTtRQUNWLE1BQU07S0FDUDtJQUVELE1BQU0sRUFBRTtRQUNOLFFBQVE7UUFDUixTQUFTO0tBQ1Y7SUFFRCxLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxLQUFLO1NBQ2Y7UUFDRCxJQUFJLEVBQUUsT0FBTztLQUNkO0lBRUQsUUFBUSxFQUFFO1FBQ1IsT0FBTztZQUNMLE9BQU87Z0JBQ0wscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHO2dCQUN4QyxHQUFHLElBQUksQ0FBQyxZQUFZO2FBQ3JCLENBQUE7UUFDSCxDQUFDO0tBQ0Y7SUFFRCxLQUFLLEVBQUU7UUFDTCxJQUFJO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNoQyxDQUFDO0tBQ0Y7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtJQUNoQyxDQUFDO0lBRUQsTUFBTSxDQUFFLENBQUM7UUFDUCxNQUFNLElBQUksR0FBRztZQUNYLFdBQVcsRUFBRSxhQUFhO1lBQzFCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO1lBQzNCLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO1NBQzFCLENBQUE7UUFFRCxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUVuRixPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0NBQ0YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vLi4vc3R5bHVzL2NvbXBvbmVudHMvX2FwcC5zdHlsJ1xuXG4vLyBDb21wb25lbnQgbGV2ZWwgbWl4aW5zXG5pbXBvcnQgQXBwVGhlbWUgZnJvbSAnLi9taXhpbnMvYXBwLXRoZW1lJ1xuXG5pbXBvcnQgVGhlbWVhYmxlIGZyb20gJy4uLy4uL21peGlucy90aGVtZWFibGUnXG5cbi8vIERpcmVjdGl2ZXNcbmltcG9ydCBSZXNpemUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yZXNpemUnXG5cbi8qIEB2dWUvY29tcG9uZW50ICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICd2LWFwcCcsXG5cbiAgZGlyZWN0aXZlczoge1xuICAgIFJlc2l6ZVxuICB9LFxuXG4gIG1peGluczogW1xuICAgIEFwcFRoZW1lLFxuICAgIFRoZW1lYWJsZVxuICBdLFxuXG4gIHByb3BzOiB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdhcHAnXG4gICAgfSxcbiAgICBkYXJrOiBCb29sZWFuXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdhcHBsaWNhdGlvbi0taXMtcnRsJzogdGhpcy4kdnVldGlmeS5ydGwsXG4gICAgICAgIC4uLnRoaXMudGhlbWVDbGFzc2VzXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgZGFyayAoKSB7XG4gICAgICB0aGlzLiR2dWV0aWZ5LmRhcmsgPSB0aGlzLmRhcmtcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy4kdnVldGlmeS5kYXJrID0gdGhpcy5kYXJrXG4gIH0sXG5cbiAgcmVuZGVyIChoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHN0YXRpY0NsYXNzOiAnYXBwbGljYXRpb24nLFxuICAgICAgJ2NsYXNzJzogdGhpcy5jbGFzc2VzLFxuICAgICAgYXR0cnM6IHsgJ2RhdGEtYXBwJzogdHJ1ZSB9LFxuICAgICAgZG9tUHJvcHM6IHsgaWQ6IHRoaXMuaWQgfVxuICAgIH1cblxuICAgIGNvbnN0IHdyYXBwZXIgPSBoKCdkaXYnLCB7IHN0YXRpY0NsYXNzOiAnYXBwbGljYXRpb24tLXdyYXAnIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG5cbiAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgW3dyYXBwZXJdKVxuICB9XG59XG4iXX0=