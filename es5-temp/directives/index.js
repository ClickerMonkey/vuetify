import ClickOutside from './click-outside';
import Resize from './resize';
import Ripple from './ripple';
import Scroll from './scroll';
import Touch from './touch';
export { ClickOutside, Ripple, Resize, Scroll, Touch };
export default function install(Vue) {
    Vue.directive('click-outside', ClickOutside);
    Vue.directive('ripple', Ripple);
    Vue.directive('resize', Resize);
    Vue.directive('scroll', Scroll);
    Vue.directive('touch', Touch);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGlyZWN0aXZlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksTUFBTSxpQkFBaUIsQ0FBQTtBQUMxQyxPQUFPLE1BQU0sTUFBTSxVQUFVLENBQUE7QUFDN0IsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFBO0FBQzdCLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQTtBQUM3QixPQUFPLEtBQUssTUFBTSxTQUFTLENBQUE7QUFFM0IsT0FBTyxFQUNMLFlBQVksRUFDWixNQUFNLEVBQ04sTUFBTSxFQUNOLE1BQU0sRUFDTixLQUFLLEVBQ04sQ0FBQTtBQUVELE1BQU0sQ0FBQyxPQUFPLFVBQVUsT0FBTyxDQUFFLEdBQUc7SUFDbEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUE7SUFDNUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDL0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDL0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDL0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGlja091dHNpZGUgZnJvbSAnLi9jbGljay1vdXRzaWRlJ1xuaW1wb3J0IFJlc2l6ZSBmcm9tICcuL3Jlc2l6ZSdcbmltcG9ydCBSaXBwbGUgZnJvbSAnLi9yaXBwbGUnXG5pbXBvcnQgU2Nyb2xsIGZyb20gJy4vc2Nyb2xsJ1xuaW1wb3J0IFRvdWNoIGZyb20gJy4vdG91Y2gnXG5cbmV4cG9ydCB7XG4gIENsaWNrT3V0c2lkZSxcbiAgUmlwcGxlLFxuICBSZXNpemUsXG4gIFNjcm9sbCxcbiAgVG91Y2hcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5zdGFsbCAoVnVlKSB7XG4gIFZ1ZS5kaXJlY3RpdmUoJ2NsaWNrLW91dHNpZGUnLCBDbGlja091dHNpZGUpXG4gIFZ1ZS5kaXJlY3RpdmUoJ3JpcHBsZScsIFJpcHBsZSlcbiAgVnVlLmRpcmVjdGl2ZSgncmVzaXplJywgUmVzaXplKVxuICBWdWUuZGlyZWN0aXZlKCdzY3JvbGwnLCBTY3JvbGwpXG4gIFZ1ZS5kaXJlY3RpdmUoJ3RvdWNoJywgVG91Y2gpXG59XG4iXX0=