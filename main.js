let data = [
  {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const buttons = document.querySelectorAll('.btn');

const activateClickedButton = (button) => {
  buttons.forEach((b) => b.classList.remove('active'));
  button.classList.add('active');
};

const clearCards = () => {
  const activities = document.querySelectorAll('.card');
  activities.forEach((a) => a.remove());
};

const renderCards = (clickedOption) => {
  clearCards();
  const activityTracker = document.querySelector('main');

  const calcTimeframe = (option) => {
    if (option === 'daily') {
      return 'Yesterday';
    } else if (option === 'weekly') {
      return 'Last Week';
    } else {
      return 'Last Month';
    }
  };

  data.forEach((activity) => {
    const name = activity.title;
    const cardName = name.toLowerCase().replace(' ', '-');
    const timeframeData = activity.timeframes[clickedOption];
    const previousTimeframe = calcTimeframe(clickedOption);
    const article = document.createElement('article');
    article.classList.add('card', cardName);
    const stringToInject = `
        <div class="color__div color__work">
          <img src="images/icon-${cardName}.svg" alt="icon" />
        </div>
        <div class="data">
          <div class="task__box">
            <p>${name}</p>
            <img src="images/icon-ellipsis.svg" alt="icon-ellipsis" />
          </div>
          <div class="hours__box">
            <p class="hours">${timeframeData.current}</p>
            <p class="last__week">${previousTimeframe} - ${timeframeData.previous}hrs</p>
          </div>
        </div>
        `;
    article.innerHTML = stringToInject;
    activityTracker.append(article);
  });
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    activateClickedButton(button);
    const clickedOption = button.dataset.option;
    renderCards(clickedOption);
  });
});

buttons[0].click();
