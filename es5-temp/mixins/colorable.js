import Vue from 'vue';
export default Vue.extend({
    name: 'colorable',
    props: {
        color: String
    },
    data() {
        return {
            defaultColor: undefined
        };
    },
    computed: {
        computedColor() {
            return this.color || this.defaultColor;
        }
    },
    methods: {
        addBackgroundColorClassChecks(obj, color) {
            const classes = Object.assign({}, obj);
            const selectedColor = color === undefined ? this.computedColor : color;
            if (selectedColor) {
                classes[selectedColor] = true;
            }
            return classes;
        },
        addTextColorClassChecks(obj, color) {
            const classes = Object.assign({}, obj);
            if (color === undefined)
                color = this.computedColor;
            if (color) {
                const [colorName, colorModifier] = color.toString().trim().split(' ');
                classes[colorName + '--text'] = true;
                colorModifier && (classes['text--' + colorModifier] = true);
            }
            return classes;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21peGlucy9jb2xvcmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFBO0FBRXJCLGVBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN4QixJQUFJLEVBQUUsV0FBVztJQUVqQixLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUUsTUFBTTtLQUNkO0lBRUQsSUFBSTtRQUNGLE9BQU87WUFDTCxZQUFZLEVBQUUsU0FBUztTQUN4QixDQUFBO0lBQ0gsQ0FBQztJQUVELFFBQVEsRUFBRTtRQUNSLGFBQWE7WUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQTtRQUN4QyxDQUFDO0tBQ0Y7SUFFRCxPQUFPLEVBQUU7UUFDUCw2QkFBNkIsQ0FBdUIsR0FBTyxFQUFFLEtBQVM7WUFDcEUsTUFBTSxPQUFPLEdBQVEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDM0MsTUFBTSxhQUFhLEdBQUcsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO1lBRXRFLElBQUksYUFBYSxFQUFFO2dCQUNqQixPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFBO2FBQzlCO1lBRUQsT0FBTyxPQUFPLENBQUE7UUFDaEIsQ0FBQztRQUNELHVCQUF1QixDQUFFLEdBQVMsRUFBRSxLQUFxQjtZQUN2RCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUN0QyxJQUFJLEtBQUssS0FBSyxTQUFTO2dCQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFBO1lBRW5ELElBQUksS0FBSyxFQUFFO2dCQUNULE1BQU0sQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDckUsT0FBTyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUE7Z0JBQ3BDLGFBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUE7YUFDNUQ7WUFFRCxPQUFPLE9BQU8sQ0FBQTtRQUNoQixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG4gIG5hbWU6ICdjb2xvcmFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgY29sb3I6IFN0cmluZ1xuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0Q29sb3I6IHVuZGVmaW5lZFxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNvbXB1dGVkQ29sb3IgKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgICByZXR1cm4gdGhpcy5jb2xvciB8fCB0aGlzLmRlZmF1bHRDb2xvclxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYWRkQmFja2dyb3VuZENvbG9yQ2xhc3NDaGVja3M8VCwgQyBleHRlbmRzIHN0cmluZz4gKG9iaj86IFQsIGNvbG9yPzogQyk6IFQgJiBSZWNvcmQ8QywgdHJ1ZT4ge1xuICAgICAgY29uc3QgY2xhc3NlczogYW55ID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKVxuICAgICAgY29uc3Qgc2VsZWN0ZWRDb2xvciA9IGNvbG9yID09PSB1bmRlZmluZWQgPyB0aGlzLmNvbXB1dGVkQ29sb3IgOiBjb2xvclxuXG4gICAgICBpZiAoc2VsZWN0ZWRDb2xvcikge1xuICAgICAgICBjbGFzc2VzW3NlbGVjdGVkQ29sb3JdID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xhc3Nlc1xuICAgIH0sXG4gICAgYWRkVGV4dENvbG9yQ2xhc3NDaGVja3MgKG9iaj86IGFueSwgY29sb3I/OiBzdHJpbmcgfCBudWxsKTogYW55IHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBPYmplY3QuYXNzaWduKHt9LCBvYmopXG4gICAgICBpZiAoY29sb3IgPT09IHVuZGVmaW5lZCkgY29sb3IgPSB0aGlzLmNvbXB1dGVkQ29sb3JcblxuICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGNvbnN0IFtjb2xvck5hbWUsIGNvbG9yTW9kaWZpZXJdID0gY29sb3IudG9TdHJpbmcoKS50cmltKCkuc3BsaXQoJyAnKVxuICAgICAgICBjbGFzc2VzW2NvbG9yTmFtZSArICctLXRleHQnXSA9IHRydWVcbiAgICAgICAgY29sb3JNb2RpZmllciAmJiAoY2xhc3Nlc1sndGV4dC0tJyArIGNvbG9yTW9kaWZpZXJdID0gdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsYXNzZXNcbiAgICB9XG4gIH1cbn0pXG4iXX0=