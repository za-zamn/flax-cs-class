import { getCurrentUser } from './users.js';
import getActions from './actions.js';
import { sleep } from './utilities.js';
import { initializeRuntime, isPaused, getSpeed } from './runtime.js';
import { updateWindows, renderUserButtons } from './dom.js';

renderUserButtons();
initializeRuntime();

async function runSimulation() {
  const nextAction = getActions();
  const speed = getSpeed();

  for (const action of nextAction) {
    try {
      while (isPaused()) {
        await sleep(speed);
      }
      action();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Execution error:', error);
    }

    try {
      const currentUser = getCurrentUser();
      updateWindows(currentUser);
      await sleep(speed);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Rendering error:', error);
    }
  }
}

runSimulation();
