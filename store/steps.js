import availableCalendarFilter from '../helper/availableCalendarFilter.js'

const defaultAvailableSteps = ['process', 'calendar', 'appointment', 'customer', 'summary'];

export function steps (store) {
  var removeStep = (availableSteps, removedStep) => {
    return defaultAvailableSteps.filter(
      (step) => availableSteps.indexOf(step) != -1 && step != removedStep
    )
  }

  var addStep = (availableSteps, addedStep) => {
    return defaultAvailableSteps.filter(
      (step) => availableSteps.indexOf(step) != -1 || step == addedStep
    )
  }

  store.on('@init', () => {
    return {
      currentStep: 'process',
      availableSteps: defaultAvailableSteps,
      calendarStepShouldBeHidden: false
    };
  });

  store.on('currentStep/set', ({ availableSteps, currentStep }, newStep) => {
    return { currentStep: availableSteps.indexOf(newStep) != -1 ? newStep : currentStep };
  });

  store.on('calendarStepShouldBeHidden/set', ({availableSteps}, calendarStepShouldBeHidden) => {
    return { calendarStepShouldBeHidden, availableSteps: removeStep(availableSteps, 'calendar') };
  });

  store.on('currentStep/next', ({ currentStep, availableSteps }) => {
    var index = availableSteps.indexOf(currentStep);
    return { currentStep: index < availableSteps.length - 1 ? availableSteps[index + 1] : currentStep };
  });

  store.on('currentStep/previous', ({ currentStep, availableSteps }) => {
    var index = availableSteps.indexOf(currentStep);
    return { currentStep: index > 0 ? availableSteps[index - 1] : currentStep };
  });

  store.on('eyeExaminationProcesses/set', ({ eyeExaminationProcesses, availableSteps, currentStep }) => {
    if (eyeExaminationProcesses.length == 1) {
      return {
        availableSteps: availableSteps = removeStep(availableSteps, 'process'),
        currentStep: currentStep == 'process' ? availableSteps[0] : currentStep
      };
    }
  });

  store.on(
      'currentStep/eyeExaminationProcessSelected',
      ({ availableSteps, appointment, calendars, currentStep, calendarStepShouldBeHidden }) => {
    if (calendarStepShouldBeHidden) {
      return;
    }

    var availableCalendars = availableCalendarFilter({appointment, calendars});

    if (availableCalendars.length == 1 ) {
      return {
        appointment: Object.assign(appointment, {calendar: availableCalendars[0]}),
        availableSteps: removeStep(availableSteps, 'calendar'),
        currentStep: currentStep == 'calendar' ? 'appointment' : currentStep
      };
    }

    return { availableSteps: addStep(availableSteps, 'calendar') };
  });
}
