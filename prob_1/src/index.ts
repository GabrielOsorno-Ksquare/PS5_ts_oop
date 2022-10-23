/* Setting the variables and types */
type timeframes = {
  daily: {
    current: number;
    previous: number;
  };
  weekly: {
    current: number;
    previous: number;
  };
  monthly: {
    current: number;
    previous: number;
  };
};

type reportObject = {
  title: string;
  timeframes: timeframes;
};

let reportData: reportObject[];
const timeOptions = document.querySelectorAll('.option');

/* function that fetches User time reports info */
const fetchUserData = async () => {
  try {
    const res = await fetch(
      'https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json'
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('An error has occured. Please try reloading.', error);
  }
};

/* function that creates a reports element with its correct info */
const createReportSection = (el: reportObject) => {
  const timeReportsSection = document.querySelector('.time_reports_section');

  if (timeReportsSection) {
    /* Creating the Report section */
    const reportSection = document.createElement('section');
    if (el.title === 'Self Care') {
      reportSection.className = `report self_care`;
    } else {
      reportSection.className = `report ${el.title.toLowerCase()}`;
    }
    timeReportsSection.appendChild(reportSection);

    /* Creating the Report's body */
    const reportContainer = document.createElement('div');
    reportContainer.className = 'report_body';
    reportSection.appendChild(reportContainer);

    /* Creating the div that will contain the title and options of the Report */
    const reportHeadersDiv = document.createElement('div');
    reportHeadersDiv.className = 'report_headers';
    reportContainer.appendChild(reportHeadersDiv);

    const reportTitle = document.createElement('span');
    reportTitle.innerText = `${el.title}`;
    reportHeadersDiv.appendChild(reportTitle);

    const moreBttn = document.createElement('button');
    moreBttn.className = 'report_options_menu';
    reportHeadersDiv.appendChild(moreBttn);

    const moreBttnSvg = document.createElement('img');
    moreBttnSvg.className = 'more_options_svg';
    moreBttnSvg.src = '../src/images/more_horiz.svg';
    moreBttnSvg.alt = 'More options.';
    moreBttn.appendChild(moreBttnSvg);

    /* Creating the div that will contain the actual hour report for both current and previous Day/Week/Month */
    const reportTimesDiv = document.createElement('div');
    reportTimesDiv.className = 'report_times';
    reportContainer.appendChild(reportTimesDiv);

    const currentTime = document.createElement('p');
    currentTime.className = 'current_time';
    currentTime.innerText = `${el.timeframes.weekly.current}hrs`;
    reportTimesDiv.appendChild(currentTime);

    const previousTime = document.createElement('p');
    previousTime.className = 'previous_time';
    previousTime.innerText = `Last Week - ${el.timeframes.weekly.previous}hrs`;
    reportTimesDiv.appendChild(previousTime);
  }
};

/* function that will run on load and set the initial view */
const main = () => {
  fetchUserData().then((value) => {
    reportData = value;

    /* if that checks if reportData is defined */
    if (reportData) {
      /* Loop that will go through each of the objects in the fetched array */
      reportData.forEach((el: reportObject) => {
        /* Creates the report element for each object */
        createReportSection(el);
      });
    }

    /* Event listeners for each period setting button */
    timeOptions.forEach((el) => {
      el.addEventListener('click', (e) => {
        const currentTimePs = document.querySelectorAll('.current_time');
        const previousTimePs = document.querySelectorAll('.previous_time');
        const selectedTimeOpt = document.querySelector('.selected');
        let currTimeOpt: keyof timeframes;
        let previousText: string;

        /* Updating styles to show the current selection */
        selectedTimeOpt?.setAttribute('class', 'option unselected');
        el.setAttribute('class', 'option selected');

        /* Setting the values that will be used in order to update the time reports depending on the pressed button */
        switch (el.getAttribute('value')) {
          case 'daily':
            currTimeOpt = 'daily';
            previousText = 'Day';
            break;
          case 'weekly':
            currTimeOpt = 'weekly';
            previousText = 'Week';
            break;
          case 'monthly':
            currTimeOpt = 'monthly';
            previousText = 'Month';
            break;
        }

        /* Updating time report texts */
        currentTimePs.forEach((el, i) => {
          el.innerHTML = `${reportData[i].timeframes[currTimeOpt].current}hrs`;
        });

        previousTimePs.forEach((el, i) => {
          el.innerHTML = `Last ${previousText} - ${reportData[i].timeframes[currTimeOpt].previous}hrs`;
        });
      });
    });
  });
};

/* Running the main function that will initialize the view */
main();
