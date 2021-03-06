import OurVue from 'vue';
import application from './mixins/application';
import breakpoint from './mixins/breakpoint';
import theme from './mixins/theme';
import icons from './mixins/icons';
import options from './mixins/options';
import genLang from './mixins/lang';
import goTo from './util/goTo';
// Utils
import { consoleWarn, consoleError } from '../../util/console';
const Vuetify = {
    install(Vue, opts = {}) {
        if (this.installed)
            return;
        this.installed = true;
        if (OurVue !== Vue) {
            consoleError('Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you\'re seeing "$attrs is readonly", it\'s caused by this');
        }
        checkVueVersion(Vue);
        const lang = genLang(opts.lang);
        Vue.prototype.$vuetify = new Vue({
            mixins: [
                breakpoint
            ],
            data: {
                application,
                dark: false,
                icons: icons(opts.iconfont, opts.icons),
                lang,
                options: options(opts.options),
                rtl: opts.rtl,
                theme: theme(opts.theme)
            },
            methods: {
                goTo,
                t: lang.t.bind(lang)
            }
        });
        if (opts.directives) {
            Object.values(opts.directives).forEach(directive => {
                Vue.directive(directive.name, directive);
            });
        }
        (function registerComponents(components) {
            if (components) {
                for (const key in components) {
                    const component = components[key];
                    if (!registerComponents(component.$_vuetify_subcomponents)) {
                        Vue.component(key, component);
                    }
                }
                return true;
            }
            return false;
        })(opts.components);
    },
    version: __VUETIFY_VERSION__
};
export function checkVueVersion(Vue, requiredVue) {
    const vueDep = requiredVue || __REQUIRED_VUE__;
    const required = vueDep.split('.', 3).map(v => v.replace(/\D/g, '')).map(Number);
    const actual = Vue.version.split('.', 3).map(n => parseInt(n, 10));
    // Simple semver caret range comparison
    const passes = actual[0] === required[0] && // major matches
        (actual[1] > required[1] || // minor is greater
            (actual[1] === required[1] && actual[2] >= required[2]) // or minor is eq and patch is >=
        );
    if (!passes) {
        consoleWarn(`Vuetify requires Vue version ${vueDep}`);
    }
}
export default Vuetify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WdWV0aWZ5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLEtBQUssQ0FBQTtBQUV4QixPQUFPLFdBQVcsTUFBTSxzQkFBc0IsQ0FBQTtBQUM5QyxPQUFPLFVBQVUsTUFBTSxxQkFBcUIsQ0FBQTtBQUM1QyxPQUFPLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQTtBQUNsQyxPQUFPLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQTtBQUNsQyxPQUFPLE9BQU8sTUFBTSxrQkFBa0IsQ0FBQTtBQUN0QyxPQUFPLE9BQU8sTUFBTSxlQUFlLENBQUE7QUFDbkMsT0FBTyxJQUFJLE1BQU0sYUFBYSxDQUFBO0FBRTlCLFFBQVE7QUFDUixPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBTTlELE1BQU0sT0FBTyxHQUFrQjtJQUM3QixPQUFPLENBQUUsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFO1FBQ3JCLElBQUssSUFBWSxDQUFDLFNBQVM7WUFBRSxPQUM1QjtRQUFDLElBQVksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1FBRS9CLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtZQUNsQixZQUFZLENBQUMsMEpBQTBKLENBQUMsQ0FBQTtTQUN6SztRQUVELGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUVwQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRS9CLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxDQUFDO1lBQy9CLE1BQU0sRUFBRTtnQkFDTixVQUFVO2FBQ1g7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osV0FBVztnQkFDWCxJQUFJLEVBQUUsS0FBSztnQkFDWCxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDdkMsSUFBSTtnQkFDSixPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzlCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDYixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDekI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsSUFBSTtnQkFDSixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3JCO1NBQ0YsQ0FBQyxDQUFBO1FBRUYsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDakQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBQzFDLENBQUMsQ0FBQyxDQUFBO1NBQ0g7UUFFRCxDQUFDLFNBQVMsa0JBQWtCLENBQUUsVUFBMkM7WUFDdkUsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsS0FBSyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7b0JBQzVCLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDakMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO3dCQUMxRCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQTtxQkFDOUI7aUJBQ0Y7Z0JBQ0QsT0FBTyxJQUFJLENBQUE7YUFDWjtZQUNELE9BQU8sS0FBSyxDQUFBO1FBQ2QsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFDRCxPQUFPLEVBQUUsbUJBQW1CO0NBQzdCLENBQUE7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFFLEdBQW1CLEVBQUUsV0FBb0I7SUFDeEUsTUFBTSxNQUFNLEdBQUcsV0FBVyxJQUFJLGdCQUFnQixDQUFBO0lBRTlDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2hGLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFFbEUsdUNBQXVDO0lBQ3ZDLE1BQU0sTUFBTSxHQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCO1FBQzdDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBbUI7WUFDN0MsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQ0FBaUM7U0FDMUYsQ0FBQTtJQUVILElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxXQUFXLENBQUMsZ0NBQWdDLE1BQU0sRUFBRSxDQUFDLENBQUE7S0FDdEQ7QUFDSCxDQUFDO0FBRUQsZUFBZSxPQUFPLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3VyVnVlIGZyb20gJ3Z1ZSdcblxuaW1wb3J0IGFwcGxpY2F0aW9uIGZyb20gJy4vbWl4aW5zL2FwcGxpY2F0aW9uJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnLi9taXhpbnMvYnJlYWtwb2ludCdcbmltcG9ydCB0aGVtZSBmcm9tICcuL21peGlucy90aGVtZSdcbmltcG9ydCBpY29ucyBmcm9tICcuL21peGlucy9pY29ucydcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vbWl4aW5zL29wdGlvbnMnXG5pbXBvcnQgZ2VuTGFuZyBmcm9tICcuL21peGlucy9sYW5nJ1xuaW1wb3J0IGdvVG8gZnJvbSAnLi91dGlsL2dvVG8nXG5cbi8vIFV0aWxzXG5pbXBvcnQgeyBjb25zb2xlV2FybiwgY29uc29sZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC9jb25zb2xlJ1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgVnVlQ29uc3RydWN0b3IgfSBmcm9tICd2dWUvdHlwZXMnXG5pbXBvcnQgeyBWdWV0aWZ5IGFzIFZ1ZXRpZnlQbHVnaW4sIFZ1ZXRpZnlVc2VPcHRpb25zIH0gZnJvbSAndHlwZXMnXG5cbmNvbnN0IFZ1ZXRpZnk6IFZ1ZXRpZnlQbHVnaW4gPSB7XG4gIGluc3RhbGwgKFZ1ZSwgb3B0cyA9IHt9KSB7XG4gICAgaWYgKCh0aGlzIGFzIGFueSkuaW5zdGFsbGVkKSByZXR1cm5cbiAgICA7KHRoaXMgYXMgYW55KS5pbnN0YWxsZWQgPSB0cnVlXG5cbiAgICBpZiAoT3VyVnVlICE9PSBWdWUpIHtcbiAgICAgIGNvbnNvbGVFcnJvcignTXVsdGlwbGUgaW5zdGFuY2VzIG9mIFZ1ZSBkZXRlY3RlZFxcblNlZSBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnkvaXNzdWVzLzQwNjhcXG5cXG5JZiB5b3VcXCdyZSBzZWVpbmcgXCIkYXR0cnMgaXMgcmVhZG9ubHlcIiwgaXRcXCdzIGNhdXNlZCBieSB0aGlzJylcbiAgICB9XG5cbiAgICBjaGVja1Z1ZVZlcnNpb24oVnVlKVxuXG4gICAgY29uc3QgbGFuZyA9IGdlbkxhbmcob3B0cy5sYW5nKVxuXG4gICAgVnVlLnByb3RvdHlwZS4kdnVldGlmeSA9IG5ldyBWdWUoe1xuICAgICAgbWl4aW5zOiBbXG4gICAgICAgIGJyZWFrcG9pbnRcbiAgICAgIF0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGFwcGxpY2F0aW9uLFxuICAgICAgICBkYXJrOiBmYWxzZSxcbiAgICAgICAgaWNvbnM6IGljb25zKG9wdHMuaWNvbmZvbnQsIG9wdHMuaWNvbnMpLFxuICAgICAgICBsYW5nLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zKG9wdHMub3B0aW9ucyksXG4gICAgICAgIHJ0bDogb3B0cy5ydGwsXG4gICAgICAgIHRoZW1lOiB0aGVtZShvcHRzLnRoZW1lKVxuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ29UbyxcbiAgICAgICAgdDogbGFuZy50LmJpbmQobGFuZylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKG9wdHMuZGlyZWN0aXZlcykge1xuICAgICAgT2JqZWN0LnZhbHVlcyhvcHRzLmRpcmVjdGl2ZXMpLmZvckVhY2goZGlyZWN0aXZlID0+IHtcbiAgICAgICAgVnVlLmRpcmVjdGl2ZShkaXJlY3RpdmUubmFtZSwgZGlyZWN0aXZlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAoZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnRzIChjb21wb25lbnRzOiBWdWV0aWZ5VXNlT3B0aW9uc1snY29tcG9uZW50cyddKSB7XG4gICAgICBpZiAoY29tcG9uZW50cykge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c1trZXldXG4gICAgICAgICAgaWYgKCFyZWdpc3RlckNvbXBvbmVudHMoY29tcG9uZW50LiRfdnVldGlmeV9zdWJjb21wb25lbnRzKSkge1xuICAgICAgICAgICAgVnVlLmNvbXBvbmVudChrZXksIGNvbXBvbmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pKG9wdHMuY29tcG9uZW50cylcbiAgfSxcbiAgdmVyc2lvbjogX19WVUVUSUZZX1ZFUlNJT05fX1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tWdWVWZXJzaW9uIChWdWU6IFZ1ZUNvbnN0cnVjdG9yLCByZXF1aXJlZFZ1ZT86IHN0cmluZykge1xuICBjb25zdCB2dWVEZXAgPSByZXF1aXJlZFZ1ZSB8fCBfX1JFUVVJUkVEX1ZVRV9fXG5cbiAgY29uc3QgcmVxdWlyZWQgPSB2dWVEZXAuc3BsaXQoJy4nLCAzKS5tYXAodiA9PiB2LnJlcGxhY2UoL1xcRC9nLCAnJykpLm1hcChOdW1iZXIpXG4gIGNvbnN0IGFjdHVhbCA9IFZ1ZS52ZXJzaW9uLnNwbGl0KCcuJywgMykubWFwKG4gPT4gcGFyc2VJbnQobiwgMTApKVxuXG4gIC8vIFNpbXBsZSBzZW12ZXIgY2FyZXQgcmFuZ2UgY29tcGFyaXNvblxuICBjb25zdCBwYXNzZXMgPVxuICAgIGFjdHVhbFswXSA9PT0gcmVxdWlyZWRbMF0gJiYgLy8gbWFqb3IgbWF0Y2hlc1xuICAgIChhY3R1YWxbMV0gPiByZXF1aXJlZFsxXSB8fCAvLyBtaW5vciBpcyBncmVhdGVyXG4gICAgICAoYWN0dWFsWzFdID09PSByZXF1aXJlZFsxXSAmJiBhY3R1YWxbMl0gPj0gcmVxdWlyZWRbMl0pIC8vIG9yIG1pbm9yIGlzIGVxIGFuZCBwYXRjaCBpcyA+PVxuICAgIClcblxuICBpZiAoIXBhc3Nlcykge1xuICAgIGNvbnNvbGVXYXJuKGBWdWV0aWZ5IHJlcXVpcmVzIFZ1ZSB2ZXJzaW9uICR7dnVlRGVwfWApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVnVldGlmeVxuIl19