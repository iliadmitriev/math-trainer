// Tests for ResultScreen component logic
import ResultScreen from "../../src/components/ResultScreen.vue";

describe('ResultScreen Component', () => {
  it('has expected properties', () => {
    expect(ResultScreen).toBeDefined();
    expect(ResultScreen.name).toBe('ResultScreen');
    expect(ResultScreen.emits).toEqual(['repeat', 'nextLevel']);
    expect(ResultScreen.props).toBeDefined();
    expect(ResultScreen.props.stats).toBeDefined();
  });

  it('sets up with proper methods', () => {
    const mockEmit = jest.fn();
    const context = { emit: mockEmit };
    const mockProps = { stats: { success: 0, error: 0 }, next: true };

    // Call the setup function with mock context
    const setupResult = ResultScreen.setup(mockProps, context);

    expect(setupResult.onRepeat).toBeDefined();
    expect(setupResult.onNextLevel).toBeDefined();

    // Test that calling onRepeat emits the expected event
    setupResult.onRepeat();
    expect(mockEmit).toHaveBeenCalledWith('repeat');

    // Test that calling onNextLevel emits the expected event
    setupResult.onNextLevel();
    expect(mockEmit).toHaveBeenCalledWith('nextLevel');
  });

  it('validates props correctly', () => {
    const propsDef = ResultScreen.props;
    expect(propsDef).toBeDefined();
    expect(propsDef.stats).toBeDefined();
    expect(propsDef.next).toBeDefined();
    expect(propsDef.next.default).toBe(true);
  });
});