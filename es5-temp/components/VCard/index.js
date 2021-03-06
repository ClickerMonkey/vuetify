import { createSimpleFunctional } from '../../util/helpers';
import VCard from './VCard';
import VCardMedia from './VCardMedia';
import VCardTitle from './VCardTitle';
import Vue from 'vue';
const VCardActions = Vue.extend(createSimpleFunctional('v-card__actions'));
const VCardText = Vue.extend(createSimpleFunctional('v-card__text'));
export { VCard, VCardMedia, VCardTitle, VCardActions, VCardText };
export default {
    $_vuetify_subcomponents: {
        VCard,
        VCardMedia,
        VCardTitle,
        VCardActions,
        VCardText
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WQ2FyZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUMzRCxPQUFPLEtBQUssTUFBTSxTQUFTLENBQUE7QUFDM0IsT0FBTyxVQUFVLE1BQU0sY0FBYyxDQUFBO0FBQ3JDLE9BQU8sVUFBVSxNQUFNLGNBQWMsQ0FBQTtBQUNyQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUE7QUFFckIsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUE7QUFDMUUsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO0FBRXBFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLENBQUE7QUFFakUsZUFBZTtJQUNiLHVCQUF1QixFQUFFO1FBQ3ZCLEtBQUs7UUFDTCxVQUFVO1FBQ1YsVUFBVTtRQUNWLFlBQVk7UUFDWixTQUFTO0tBQ1Y7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCB9IGZyb20gJy4uLy4uL3V0aWwvaGVscGVycydcbmltcG9ydCBWQ2FyZCBmcm9tICcuL1ZDYXJkJ1xuaW1wb3J0IFZDYXJkTWVkaWEgZnJvbSAnLi9WQ2FyZE1lZGlhJ1xuaW1wb3J0IFZDYXJkVGl0bGUgZnJvbSAnLi9WQ2FyZFRpdGxlJ1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5cbmNvbnN0IFZDYXJkQWN0aW9ucyA9IFZ1ZS5leHRlbmQoY3JlYXRlU2ltcGxlRnVuY3Rpb25hbCgndi1jYXJkX19hY3Rpb25zJykpXG5jb25zdCBWQ2FyZFRleHQgPSBWdWUuZXh0ZW5kKGNyZWF0ZVNpbXBsZUZ1bmN0aW9uYWwoJ3YtY2FyZF9fdGV4dCcpKVxuXG5leHBvcnQgeyBWQ2FyZCwgVkNhcmRNZWRpYSwgVkNhcmRUaXRsZSwgVkNhcmRBY3Rpb25zLCBWQ2FyZFRleHQgfVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICRfdnVldGlmeV9zdWJjb21wb25lbnRzOiB7XG4gICAgVkNhcmQsXG4gICAgVkNhcmRNZWRpYSxcbiAgICBWQ2FyZFRpdGxlLFxuICAgIFZDYXJkQWN0aW9ucyxcbiAgICBWQ2FyZFRleHRcbiAgfVxufVxuIl19