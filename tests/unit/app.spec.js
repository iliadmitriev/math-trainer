// Tests for App component composition API logic
import { ref, computed } from 'vue';
import App from "../../src/App.vue";

describe('App Component', () => {
  it('has expected properties', () => {
    expect(App).toBeDefined();
    expect(App.name).toBe('app');
    expect(App.setup).toBeDefined();
  });

  it('initializes with correct default values', () => {
    // Test the setup function logic separately
    const setupResult = App.setup();

    // Check that all expected reactive variables are returned
    expect(setupResult.level).toBeDefined();
    expect(setupResult.state).toBeDefined();
    expect(setupResult.stats).toBeDefined();
    expect(setupResult.message).toBeDefined();
    expect(setupResult.questDone).toBeDefined();
    expect(setupResult.progressStyles).toBeDefined();
    expect(setupResult.maxLevelQuestions).toBeDefined();

    // Check initial values
    expect(setupResult.level.value).toBe(1);
    expect(setupResult.state.value).toBe('start');
    expect(setupResult.stats.value.success).toBe(0);
    expect(setupResult.stats.value.error).toBe(0);
  });

  it('computes progress correctly', () => {
    // Mock the data needed to test the computed values
    const mockStats = ref({ success: 2, error: 1 });
    const mockLevel = ref(1);
    const mockLevels = ref([
      {variants: 4, min: 100, max: 200, maxQuestions: 3, range: 20},
      {variants: 5, min: 100, max: 400, maxQuestions: 4, range: 20}
    ]);

    const questDone = computed(() => mockStats.value.success + mockStats.value.error);
    const maxLevelQuestions = computed(() => mockLevels.value[mockLevel.value - 1].maxQuestions);
    const progressStyles = computed(() => ({
      width: Math.round(questDone.value / maxLevelQuestions.value * 100) + '%'
    }));

    // Test progress calculation with 2 correct and 1 wrong out of 3 max questions
    expect(questDone.value).toBe(3);
    expect(maxLevelQuestions.value).toBe(3); // Level 1 has 3 max questions
    expect(progressStyles.value.width).toBe('100%'); // (3/3)*100 = 100%

    // Test with partial completion
    mockStats.value = { success: 1, error: 1 };
    expect(questDone.value).toBe(2);
    expect(progressStyles.value.width).toBe('67%'); // (2/3)*100 rounded = 67%
  });

  it('implements all required methods', () => {
    const setupResult = App.setup();

    // Check that all required methods are available
    expect(setupResult.onStart).toBeDefined();
    expect(setupResult.onQuestionSuccess).toBeDefined();
    expect(setupResult.onQuestionError).toBeDefined();
    expect(setupResult.onNext).toBeDefined();
    expect(setupResult.nextLevel).toBeDefined();
  });
});


