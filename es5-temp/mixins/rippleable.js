// Directives
import Ripple from '../directives/ripple';
// Types
import Vue from 'vue';
export default Vue.extend({
    name: 'rippleable',
    directives: { Ripple },
    props: {
        ripple: {
            type: [Boolean, Object],
            default: true
        }
    },
    methods: {
        genRipple(data = {}) {
            if (!this.ripple)
                return null;
            data.staticClass = 'v-input--selection-controls__ripple';
            data.directives = data.directives || [];
            data.directives.push({
                name: 'ripple',
                value: { center: true }
            });
            data.on = Object.assign({
                click: this.onChange
            }, this.$listeners);
            return this.$createElement('div', data);
        },
        onChange() { }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmlwcGxlYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0FBQ2IsT0FBTyxNQUFNLE1BQU0sc0JBQXNCLENBQUE7QUFFekMsUUFBUTtBQUNSLE9BQU8sR0FBeUMsTUFBTSxLQUFLLENBQUE7QUFFM0QsZUFBZSxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ3hCLElBQUksRUFBRSxZQUFZO0lBRWxCLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRTtJQUV0QixLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJO1NBQ2Q7S0FDRjtJQUVELE9BQU8sRUFBRTtRQUNQLFNBQVMsQ0FBRSxPQUFrQixFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPLElBQUksQ0FBQTtZQUU3QixJQUFJLENBQUMsV0FBVyxHQUFHLHFDQUFxQyxDQUFBO1lBRXhELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUE7WUFDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7YUFDTixDQUFDLENBQUE7WUFDcEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUN0QixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDckIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7WUFFbkIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN6QyxDQUFDO1FBQ0QsUUFBUSxLQUFLLENBQUM7S0FDZjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIERpcmVjdGl2ZXNcbmltcG9ydCBSaXBwbGUgZnJvbSAnLi4vZGlyZWN0aXZlcy9yaXBwbGUnXG5cbi8vIFR5cGVzXG5pbXBvcnQgVnVlLCB7IFZOb2RlLCBWTm9kZURhdGEsIFZOb2RlRGlyZWN0aXZlIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcbiAgbmFtZTogJ3JpcHBsZWFibGUnLFxuXG4gIGRpcmVjdGl2ZXM6IHsgUmlwcGxlIH0sXG5cbiAgcHJvcHM6IHtcbiAgICByaXBwbGU6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBPYmplY3RdLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2VuUmlwcGxlIChkYXRhOiBWTm9kZURhdGEgPSB7fSk6IFZOb2RlIHwgbnVsbCB7XG4gICAgICBpZiAoIXRoaXMucmlwcGxlKSByZXR1cm4gbnVsbFxuXG4gICAgICBkYXRhLnN0YXRpY0NsYXNzID0gJ3YtaW5wdXQtLXNlbGVjdGlvbi1jb250cm9sc19fcmlwcGxlJ1xuXG4gICAgICBkYXRhLmRpcmVjdGl2ZXMgPSBkYXRhLmRpcmVjdGl2ZXMgfHwgW11cbiAgICAgIGRhdGEuZGlyZWN0aXZlcy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3JpcHBsZScsXG4gICAgICAgIHZhbHVlOiB7IGNlbnRlcjogdHJ1ZSB9XG4gICAgICB9IGFzIFZOb2RlRGlyZWN0aXZlKVxuICAgICAgZGF0YS5vbiA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjbGljazogdGhpcy5vbkNoYW5nZVxuICAgICAgfSwgdGhpcy4kbGlzdGVuZXJzKVxuXG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2JywgZGF0YSlcbiAgICB9LFxuICAgIG9uQ2hhbmdlICgpIHt9XG4gIH1cbn0pXG4iXX0=