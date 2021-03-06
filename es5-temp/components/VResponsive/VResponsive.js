import '../../stylus/components/_responsive.styl';
// Types
import Vue from 'vue';
// Utils
import { convertToUnit } from '../../util/helpers';
export default Vue.extend({
    name: 'v-responsive',
    props: {
        aspectRatio: [String, Number],
        height: [String, Number],
        maxHeight: [String, Number]
    },
    computed: {
        computedAspectRatio() {
            return Number(this.aspectRatio);
        },
        aspectStyle() {
            return this.computedAspectRatio
                ? { paddingBottom: (1 / this.computedAspectRatio) * 100 + '%' }
                : undefined;
        },
        __cachedSizer() {
            if (!this.aspectStyle)
                return [];
            return this.$createElement('div', {
                style: this.aspectStyle,
                staticClass: 'v-responsive__sizer'
            });
        }
    },
    methods: {
        genContent() {
            return this.$createElement('div', {
                staticClass: 'v-responsive__content'
            }, this.$slots.default);
        }
    },
    render(h) {
        return h('div', {
            staticClass: 'v-responsive',
            style: {
                height: convertToUnit(this.height),
                maxHeight: convertToUnit(this.maxHeight)
            },
            on: this.$listeners
        }, [
            this.__cachedSizer,
            this.genContent()
        ]);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVlJlc3BvbnNpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WUmVzcG9uc2l2ZS9WUmVzcG9uc2l2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLDBDQUEwQyxDQUFBO0FBRWpELFFBQVE7QUFDUixPQUFPLEdBQWMsTUFBTSxLQUFLLENBQUE7QUFHaEMsUUFBUTtBQUNSLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUlsRCxlQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDeEIsSUFBSSxFQUFFLGNBQWM7SUFFcEIsS0FBSyxFQUFFO1FBQ0wsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBZ0I7UUFDNUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBZ0I7UUFDdkMsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBZ0I7S0FDM0M7SUFFRCxRQUFRLEVBQUU7UUFDUixtQkFBbUI7WUFDakIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ2pDLENBQUM7UUFDRCxXQUFXO1lBQ1QsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2dCQUM3QixDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtnQkFDL0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtRQUNmLENBQUM7UUFDRCxhQUFhO1lBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO2dCQUFFLE9BQU8sRUFBRSxDQUFBO1lBRWhDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDdkIsV0FBVyxFQUFFLHFCQUFxQjthQUNuQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7SUFFRCxPQUFPLEVBQUU7UUFDUCxVQUFVO1lBQ1IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRTtnQkFDaEMsV0FBVyxFQUFFLHVCQUF1QjthQUNyQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDekIsQ0FBQztLQUNGO0lBRUQsTUFBTSxDQUFFLENBQUM7UUFDUCxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDZCxXQUFXLEVBQUUsY0FBYztZQUMzQixLQUFLLEVBQUU7Z0JBQ0wsTUFBTSxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNsQyxTQUFTLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDekM7WUFDRCxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDcEIsRUFBRTtZQUNELElBQUksQ0FBQyxhQUFhO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEVBQUU7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vLi4vc3R5bHVzL2NvbXBvbmVudHMvX3Jlc3BvbnNpdmUuc3R5bCdcblxuLy8gVHlwZXNcbmltcG9ydCBWdWUsIHsgVk5vZGUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBQcm9wVmFsaWRhdG9yIH0gZnJvbSAndnVlL3R5cGVzL29wdGlvbnMnXG5cbi8vIFV0aWxzXG5pbXBvcnQgeyBjb252ZXJ0VG9Vbml0IH0gZnJvbSAnLi4vLi4vdXRpbC9oZWxwZXJzJ1xuXG50eXBlIFVua25vd25Qcm9wID0gUHJvcFZhbGlkYXRvcjxzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+XG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAndi1yZXNwb25zaXZlJyxcblxuICBwcm9wczoge1xuICAgIGFzcGVjdFJhdGlvOiBbU3RyaW5nLCBOdW1iZXJdIGFzIFVua25vd25Qcm9wLFxuICAgIGhlaWdodDogW1N0cmluZywgTnVtYmVyXSBhcyBVbmtub3duUHJvcCxcbiAgICBtYXhIZWlnaHQ6IFtTdHJpbmcsIE51bWJlcl0gYXMgVW5rbm93blByb3BcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkQXNwZWN0UmF0aW8gKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gTnVtYmVyKHRoaXMuYXNwZWN0UmF0aW8pXG4gICAgfSxcbiAgICBhc3BlY3RTdHlsZSAoKTogb2JqZWN0IHwgdW5kZWZpbmVkIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVkQXNwZWN0UmF0aW9cbiAgICAgICAgPyB7IHBhZGRpbmdCb3R0b206ICgxIC8gdGhpcy5jb21wdXRlZEFzcGVjdFJhdGlvKSAqIDEwMCArICclJyB9XG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBfX2NhY2hlZFNpemVyICgpOiBWTm9kZSB8IG5ldmVyW10ge1xuICAgICAgaWYgKCF0aGlzLmFzcGVjdFN0eWxlKSByZXR1cm4gW11cblxuICAgICAgcmV0dXJuIHRoaXMuJGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgc3R5bGU6IHRoaXMuYXNwZWN0U3R5bGUsXG4gICAgICAgIHN0YXRpY0NsYXNzOiAndi1yZXNwb25zaXZlX19zaXplcidcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBnZW5Db250ZW50ICgpOiBWTm9kZSB7XG4gICAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBzdGF0aWNDbGFzczogJ3YtcmVzcG9uc2l2ZV9fY29udGVudCdcbiAgICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoaCk6IFZOb2RlIHtcbiAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgc3RhdGljQ2xhc3M6ICd2LXJlc3BvbnNpdmUnLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgaGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMuaGVpZ2h0KSxcbiAgICAgICAgbWF4SGVpZ2h0OiBjb252ZXJ0VG9Vbml0KHRoaXMubWF4SGVpZ2h0KVxuICAgICAgfSxcbiAgICAgIG9uOiB0aGlzLiRsaXN0ZW5lcnNcbiAgICB9LCBbXG4gICAgICB0aGlzLl9fY2FjaGVkU2l6ZXIsXG4gICAgICB0aGlzLmdlbkNvbnRlbnQoKVxuICAgIF0pXG4gIH1cbn0pXG4iXX0=