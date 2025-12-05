// Integration tests for application logic
import App from "../../src/App.vue";
import StartScreen from "../../src/components/StartScreen.vue";
import Question from "../../src/components/Question.vue";
import ResultScreen from "../../src/components/ResultScreen.vue";
import Message from "../../src/components/Message.vue";
import ProgressBar from "../../src/components/ProgressBar.vue";

describe('Full Application Logic', () => {
  it('all components are properly structured', () => {
    expect(App).toBeDefined();
    expect(StartScreen).toBeDefined();
    expect(Question).toBeDefined();
    expect(ResultScreen).toBeDefined();
    expect(Message).toBeDefined();
    expect(ProgressBar).toBeDefined();

    // Verify each component has expected properties
    expect(App.name).toBe('app');
    expect(StartScreen.name).toBe('StartScreen');
    expect(Question.name).toBe('Question');
    expect(ResultScreen.name).toBe('ResultScreen');
    expect(Message.name).toBe('Message');
    expect(ProgressBar.name).toBe('ProgressBar');
  });

  it('components have proper event interfaces', () => {
    // Check that components emit the expected events
    expect(StartScreen.emits).toEqual(['onStart']);
    expect(Question.emits).toEqual(['onSuccess', 'onError']);
    expect(Message.emits).toEqual(['onNext']);
    expect(ResultScreen.emits).toEqual(['repeat', 'nextLevel']);
  });

  it('components have proper props definitions', () => {
    // Check that components accept the right props
    expect(Question.props).toBeDefined();
    expect(Question.props.level).toBeDefined();

    expect(Message.props).toBeDefined();
    // Message component defines props as array: ['type', 'text']
    expect(Array.isArray(Message.props)).toBe(true);
    expect(Message.props).toContain('type');
    expect(Message.props).toContain('text');

    expect(ProgressBar.props).toBeDefined();
    expect(Array.isArray(ProgressBar.props)).toBe(true);
    expect(ProgressBar.props).toContain('progStyle');

    expect(ResultScreen.props).toBeDefined();
    expect(ResultScreen.props.stats).toBeDefined();
    expect(ResultScreen.props.next).toBeDefined();
  });

  it('application state management follows expected flow', () => {
    // Test the App component setup function for state management
    const setupResult = App.setup();

    // Initial state should be start
    expect(setupResult.state.value).toBe('start');

    // After success, should transition properly
    setupResult.onQuestionSuccess();
    expect(setupResult.state.value).toBe('message');
    expect(setupResult.message.value.type).toBe('alert-success');
    expect(setupResult.stats.value.success).toBe(1);
  });
});
