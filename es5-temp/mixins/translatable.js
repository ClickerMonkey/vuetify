import Vue from 'vue';
export default Vue.extend({
    name: 'translatable',
    props: {
        height: Number
    },
    data: () => ({
        parallax: 0,
        parallaxDist: 0,
        percentScrolled: 0,
        windowHeight: 0,
        windowBottom: 0
    }),
    computed: {
        imgHeight() {
            return this.objHeight();
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.translate, false);
        window.removeEventListener('resize', this.translate, false);
    },
    methods: {
        calcDimensions() {
            this.parallaxDist = this.imgHeight - this.height;
            this.windowHeight = window.innerHeight;
            this.windowBottom = window.pageYOffset + this.windowHeight;
        },
        listeners() {
            window.addEventListener('scroll', this.translate, false);
            window.addEventListener('resize', this.translate, false);
        },
        /** @abstract **/
        objHeight() {
            throw new Error('Not implemented !');
        },
        translate() {
            this.calcDimensions();
            this.percentScrolled = ((this.windowBottom - this.$el.offsetTop) /
                (parseInt(this.height) + this.windowHeight));
            this.parallax = Math.round(this.parallaxDist * this.percentScrolled);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21peGlucy90cmFuc2xhdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFBO0FBRXJCLGVBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUN4QixJQUFJLEVBQUUsY0FBYztJQUVwQixLQUFLLEVBQUU7UUFDTCxNQUFNLEVBQUUsTUFBTTtLQUNmO0lBRUQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDWCxRQUFRLEVBQUUsQ0FBQztRQUNYLFlBQVksRUFBRSxDQUFDO1FBQ2YsZUFBZSxFQUFFLENBQUM7UUFDbEIsWUFBWSxFQUFFLENBQUM7UUFDZixZQUFZLEVBQUUsQ0FBQztLQUNoQixDQUFDO0lBRUYsUUFBUSxFQUFFO1FBQ1IsU0FBUztZQUNQLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3pCLENBQUM7S0FDRjtJQUVELGFBQWE7UUFDWCxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDM0QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFFRCxPQUFPLEVBQUU7UUFDUCxjQUFjO1lBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7WUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFBO1lBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFBO1FBQzVELENBQUM7UUFDRCxTQUFTO1lBQ1AsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ3hELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUMxRCxDQUFDO1FBQ0QsaUJBQWlCO1FBQ2pCLFNBQVM7WUFDUCxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDdEMsQ0FBQztRQUNELFNBQVM7WUFDUCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7WUFFckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUNyQixDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQ3hDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQzVDLENBQUE7WUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDdEUsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuICBuYW1lOiAndHJhbnNsYXRhYmxlJyxcblxuICBwcm9wczoge1xuICAgIGhlaWdodDogTnVtYmVyXG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBwYXJhbGxheDogMCxcbiAgICBwYXJhbGxheERpc3Q6IDAsXG4gICAgcGVyY2VudFNjcm9sbGVkOiAwLFxuICAgIHdpbmRvd0hlaWdodDogMCxcbiAgICB3aW5kb3dCb3R0b206IDBcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBpbWdIZWlnaHQgKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5vYmpIZWlnaHQoKVxuICAgIH1cbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy50cmFuc2xhdGUsIGZhbHNlKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnRyYW5zbGF0ZSwgZmFsc2UpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNhbGNEaW1lbnNpb25zICgpIHtcbiAgICAgIHRoaXMucGFyYWxsYXhEaXN0ID0gdGhpcy5pbWdIZWlnaHQgLSB0aGlzLmhlaWdodFxuICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgIHRoaXMud2luZG93Qm90dG9tID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgdGhpcy53aW5kb3dIZWlnaHRcbiAgICB9LFxuICAgIGxpc3RlbmVycyAoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy50cmFuc2xhdGUsIGZhbHNlKVxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudHJhbnNsYXRlLCBmYWxzZSlcbiAgICB9LFxuICAgIC8qKiBAYWJzdHJhY3QgKiovXG4gICAgb2JqSGVpZ2h0ICgpOiBudW1iZXIge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgaW1wbGVtZW50ZWQgIScpXG4gICAgfSxcbiAgICB0cmFuc2xhdGUgKCkge1xuICAgICAgdGhpcy5jYWxjRGltZW5zaW9ucygpXG5cbiAgICAgIHRoaXMucGVyY2VudFNjcm9sbGVkID0gKFxuICAgICAgICAodGhpcy53aW5kb3dCb3R0b20gLSB0aGlzLiRlbC5vZmZzZXRUb3ApIC9cbiAgICAgICAgKHBhcnNlSW50KHRoaXMuaGVpZ2h0KSArIHRoaXMud2luZG93SGVpZ2h0KVxuICAgICAgKVxuXG4gICAgICB0aGlzLnBhcmFsbGF4ID0gTWF0aC5yb3VuZCh0aGlzLnBhcmFsbGF4RGlzdCAqIHRoaXMucGVyY2VudFNjcm9sbGVkKVxuICAgIH1cbiAgfVxufSlcbiJdfQ==