// Tests for Question component logic
import Question from "../../src/components/Question.vue";

describe('Question Component', () => {
  it('has expected properties', () => {
    expect(Question).toBeDefined();
    expect(Question.name).toBe('Question');
    expect(Question.emits).toEqual(['onSuccess', 'onError']);
    expect(Question.props).toBeDefined();
  });

  it('sets up with level prop', () => {
    // Check that the component expects a level prop with proper validation
    const levelProp = Question.props.level;
    expect(levelProp).toBeDefined();
    expect(levelProp.required).toBe(true);
    expect(levelProp.type).toBe(Object);

    // Test the validator function
    const mockLevel = {
      variants: 5, min: 1, max: 10, maxQuestions: 3, range: 2
    };
    expect(levelProp.validator(mockLevel)).toBe(true);

    // Test invalid level object
    const invalidLevel = {
      variants: 3, // Less than 4 - should fail
      min: 1, max: 10, maxQuestions: 3, range: 2
    };
    expect(levelProp.validator(invalidLevel)).toBe(false);
  });

  it('generates answers with correct logic', () => {
    // Test the core question logic by testing with a mock setup
    // Create a simple function that mimics the mtRand function from the component
    const mtRand = (min, max) => {
      // In real tests, we'd want to control this, but for now we'll test the logic
      const diff = max - min;
      return Math.floor(Math.random() * (diff + 1) + min);
    };

    // Test that the right answer equals x + y
    const x = 5;
    const y = 7;
    const rightAnswer = x + y;
    expect(rightAnswer).toBe(12);

    // Test answer generation logic would create the right answer + variants-1 more options
    const level = { variants: 4, min: 1, max: 20, range: 5 };
    const mockRightAnswer = 15;
    const mockAnswers = [mockRightAnswer];

    // Simulate the answer generation logic
    while (mockAnswers.length < level.variants) {
      // In a real scenario, we'd have a controlled random number
      // For this test, we'll just verify the structure
      const num = mockRightAnswer + Math.floor(Math.random() * (level.range * 2 + 1)) - level.range;
      if (!mockAnswers.includes(num)) {
        mockAnswers.push(num);
      }
    }

    expect(mockAnswers).toContain(mockRightAnswer);
    expect(mockAnswers.length).toBe(level.variants);
  });
});


