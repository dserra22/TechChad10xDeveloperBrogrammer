// What is a 10x developer brogrammer
// how to become a 10x developer brogrammer (mindset)
// accomplishments of 10x developer brogrammers
// the vertical monitor
//
// mindset => why
// trajectory => how to do it
// principle centered learning
// all career paths

const body: HTMLElement = document.body;
const sectionWhat: HTMLElement = document.querySelector(".section-hero")!;
const sectionHow: HTMLElement = document.querySelector(".section-how")!;
const sectionGallery: HTMLElement = document.querySelector(".section-gallery")!;

const create = (elem: string): HTMLElement => {
  return document.createElement(elem);
};
const addClass = (elem: HTMLElement, className: string): void => {
  elem.classList.add(className);
};

const openingModal = (): HTMLElement => {
  const section: HTMLElement = document.createElement("section");
  section.classList.add("opening-modal");

  // create titles
  const title = create("h1");
  title.innerHTML = "Tech Chad 10x Developer Brogrammers";
  //   titles[1].innerHTML = "10x Developer";
  //   titles[2].innerHTML = "Brogrammers";

  const pressToEnter = create("i");
  pressToEnter.innerHTML = "Press To Enter";

  //   // create modal to house titles
  const modal: HTMLDivElement = document.createElement("div");
  addClass(modal, "modal");

  //   // append titles to modal
  //   titles.forEach((title: HTMLElement) => {
  // });
  modal.appendChild(pressToEnter);
  addClass(pressToEnter, "press-to-enter");

  modal.appendChild(title);
  addClass(title, "modal--title");

  // append btn to modal
  const modalBtn = create("btn");
  addClass(modalBtn, "modal--btn");
  modal.appendChild(modalBtn);

  // append modal
  section.appendChild(modal);
  return section;
};
const createBrogrammers = (): void => {
  body.appendChild(openingModal());
};

createBrogrammers();

const openingModalEl: HTMLElement = document.querySelector(".opening-modal")!;

const modal = openingModalEl?.querySelector(".modal")!;

modal.addEventListener("click", function () {
  addClass(openingModalEl, "close-modal");
});

const imgBox: HTMLElement = document.querySelector(".what-is--image-box")!;

let num: number = 1;

let milli: number = 5000;
let difference: number = 500;
const imgText: HTMLElement = document.querySelector(".what-is--img-desc")!;
imgText.style.width = "425px";

const createAccent = (
  length: number,
  amount: number,
  left: number,
  top: number
): void => {
  let accentDiv = document.createElement("div");
  accentDiv.classList.add("accent-div");
  accentDiv.style.backgroundColor = "#CFCFCF";
  //   accentDiv.style.top = `${top}%`;
  accentDiv.style.width = "3px";
  accentDiv.style.height = `${length}px`;
  //   accentDiv.style.transform = "rotate(-45deg)";
  accentDiv.style.zIndex = "999";
  accentDiv.innerHTML = "";

  imgBox.appendChild(accentDiv);
};

createAccent(50, 3, 30, 50);

const loopTime = (): void => {
  if (num === 5) {
    num = 1; // images 1 - 4
  }

  if (num === 1) {
    imgBox.style.backgroundPosition = "top";
  } else {
    imgBox.style.backgroundPosition = "center";
  }

  if (num === 1) {
    imgText.innerHTML = "11/13/22. A Jacked Brogrammer";
  } else if (num === 2) {
    imgText.innerHTML = "11/18/22. Tech Chads dress up";
  } else if (num == 3) {
    imgText.innerHTML = "11/21/22. A 10x Developer presenting";
  } else if (num == 4) {
    imgText.innerHTML = "11/21/22. A 10x Developer presenting (2x)";
  }

  imgBox.style.backgroundImage = `linear-gradient(#3333338F,  #000000F3), url(img/img${num}.jpg)`;
  num++;

  setTimeout(() => {
    imgBox.style.opacity = "0";
    imgBox.style.height = "0%";
  }, milli - difference);
  setTimeout(() => {
    imgBox.style.opacity = "1";
    imgBox.style.height = "100%";
  }, milli + difference);

  setTimeout(loopTime, milli);
};

loopTime();

// we wil do the accenter later

// background color => title in cursive,
// with font

const whatIsButton = document.querySelector(".next-button.what-is")!;

console.log(whatIsButton);

const switchSections = (thisSection: HTMLElement, nextSection: HTMLElement) => {
  thisSection.classList.add("close-section");
  setTimeout(function () {
    thisSection.style.display = "none";
  }, 1000);

  nextSection.style.display = "block";
  nextSection.style.opacity = "1";
  setTimeout(function () {
    nextSection.style.zIndex = "999";
  }, 1000);
};

const switchToHow = (): void => {
  switchSections(sectionWhat, sectionHow);
};

whatIsButton.addEventListener("click", switchToHow);

let selectedNum: number = -1;
let selectedMind: HTMLElement = document.querySelector(
  ".mindmap[data-type='0']"
)!;
selectedMind.classList.toggle("selected-mind");

const howDiv: HTMLElement = document.querySelector(".section-how")!;

const mindmapData = new Map<string, string>();
mindmapData.set(
  "0",
  `It all starts with the right mindset. They know that every outside
journey must start from within. This journey is not like any other
journey. The struggles of computer science equates to a more
meaningful life as well as more stress. It is ultimately up to you
to take on the task. Give yourself a reason for Computer Science to
be your passion. For me, it is because it <i>embodies</i> the
meaning of life. It requires constant learning on the job and it is
constantly evolving. You will be compenseted well for the value you
provide to this world. You deserve it.`
);

// Today, we are given the luxury of CHOICE with our journeys. Don't be picky. Our ancestors did not have choice in their journey to traveling to the United States. Most of them did not have a choice in their occupations, their daily duties, etc.
mindmapData.set(
  "1",
  `After you have the right mindset, you have to realize that you have an exponential sloping trajectory. When you are starting, you truly know absolutely NOTHING. I can remember knowing NOTHING back in the day. Realize that the skill cap to computer science is so high that it is okay to not feel smart! CS is the highest concentration of majors with imposter syndrome - you're not alone. I had it, but it's okay that you know nothing.`
);
mindmapData.set(
  "2",
  `There are better ways to learn than other ways. Our work outputs are cyclical, meaning that you learn the most effectively when you work, relax, work relax, work relax. How I implement this is through the Pomodoro study method. I set 30 minutes on the clock, and then take a 5 minute break. Sometimes I do an hour and take a break. When you take a break though, free your head of all thoughts. This allows your brain to clean out the waste products of effort, making you more effective.`
);
mindmapData.set(
  "3",
  `Midway through your journey, however you go about it being online, thru school, etc., you need to focus on a career path. CS is so huge that it is critical that you choose a path, stick to it and do nothing else but that. Be a specialist and not a generalist, because specialists are paid for knowing 'where to strike the hammer' Our world is so fast paced that you forget it takes awhile to build yourself. It took Lewis and Clark 1 year and 6 months to travel to the Pacific Ocean. Today, you can complete the same physical journey in a 3 hour plane ride. What stays the same though is how much time that should be spent on journeys. Don't switch to another area unless you HATE it. It WILL be tough, and you must accept that.`
);

mindmapData.set(
  "4",
  `I had chosen game development last summer before I switched over to web development. What I like about web dev so much is that it is a quick pleasure and quite affirming: you can see your progress work right before your eyes. Also, you are able to create beautiful full stack applications that allow users to log in, pay for a service, etc.. It is also the highest in-demand field of CS out there. Surely there might be a surplus of web developers, there aren't a surplus of talented web developers.`
);
mindmapData.set(
  "5",
  `Embedded Systems combine both hardware and software. There's this thing called an Arduino, where I can inject code into it and have it do things. For example, I made a remote control arduino car with my group in CS 362. It was incredibly hard and very satisfying. We had to get a bluetooth module to send data wirelessly to the car. We had to control motors to drive it in all 4 directions. We had to implement a sensor that detects when a car has passed the finish line. It was awesome. `
);
mindmapData.set(
  "7",
  `Data science is the field where people take a lot of data and analyze it. This field has a high growth potential. Many companies are starting to realize the value of everyday data and implementing it in order to make their systems maximally effective.`
);
mindmapData.set(
  "6",
  `When you do a Captcha request when signing up for something online, have you noticed them get HARDER???? That is because The data used from all of the Captcha requests over the years have made machine learning algorithms smarter, making them able to detect simpler images.`
);
mindmapData.set(
  "8",
  `There are many other fields such as game development, artificial intelligence, Software engineering, Blockchain, web3, cloud, security, infrastructure `
);

let explanation = document.querySelector(".explanation")!;
let explanationTitle = explanation.querySelector(".explanation-title")!;
let explanationDesc = explanation.querySelector(".explanation-desc")!;

const changeSelected = (selectedNum: number, mindmapName: string): void => {
  explanationDesc.innerHTML = mindmapData.get("" + selectedNum)!;
  explanationTitle.innerHTML = mindmapName;
};

howDiv.addEventListener("click", function (e: any) {
  if (!e.target.closest(".mindmap") && !e.target.classList.contains("mindmap"))
    return;

  // remove old
  console.log(selectedMind);
  if (selectedMind !== undefined) {
  }

  selectedMind !== undefined
    ? selectedMind.classList.toggle("selected-mind")
    : "";

  let target = e.target.closest(".mindmap")
    ? e.target.closest(".mindmap")
    : e.target;

  selectedMind = target;
  target.classList.toggle("selected-mind"); // add new

  selectedNum = target.dataset.type;
  changeSelected(selectedNum, target.innerHTML);
});
// switch over to gallery

const mindsetButton: HTMLButtonElement =
  document.querySelector(".next-button.how")!;

mindsetButton.addEventListener("click", function () {
  switchSections(sectionHow, sectionGallery);
});

// gallery
let selectedGallery: number = -1;
let allGalleries: NodeListOf<Element> =
  document.querySelectorAll(".gallery-figure")!;

allGalleries.forEach((gallery: Element, i: number) => {
  gallery.addEventListener("mouseenter", function (e: any) {
    let target = e.target;
    let textSection = target.querySelector(".figure-text")!;

    target.classList.toggle("open-figure");
    textSection.classList.toggle("open-text");
  });

  gallery.addEventListener("mouseleave", function (e: any) {
    let target = e.target;
    let textSection = target.querySelector(".figure-text")!;

    target.classList.toggle("open-figure");
    textSection.classList.toggle("open-text");
  });
});

// gallery.addEventListener("mouseenter", function (e) {
//   if (!e.target.closest(".mindmap") && !e.target.classList.contains("mindmap"))
//     return;
// });
