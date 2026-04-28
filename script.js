const form = document.querySelector(".contact-form");
const statusMessage = document.querySelector(".form-status");
const briefTabs = document.querySelectorAll(".brief-tab");
const briefOutput = document.querySelector(".brief-output");

const briefs = {
  tech: {
    title: "Guide her through the video call slowly.",
    body:
      "Start with WhatsApp, wait for each tap, then confirm Ada's profile photo before asking her to press call.",
  },
  routine: {
    title: "Turn the clinic visit into a calm sequence.",
    body:
      "Remind her at 12:45 PM to eat, 1:05 PM to collect her bag, and 1:15 PM to leave. Send the family a short confirmation.",
  },
  wellbeing: {
    title: "Flag the missed lunch without sounding alarming.",
    body:
      "Ask if she would like tea or a light meal, check energy levels, and let the family know only if the pattern repeats tomorrow.",
  },
};

if (briefTabs.length && briefOutput) {
  briefTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const brief = briefs[tab.dataset.brief];

      if (!brief) {
        return;
      }

      briefTabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");

      briefOutput.innerHTML = `
        <p class="brief-kicker">Today's AI prompt</p>
        <h3>${brief.title}</h3>
        <p>${brief.body}</p>
      `;
    });
  });
}

if (form && statusMessage) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const need = formData.get("need")?.toString().trim();

    const greeting = name ? `Thanks, ${name}.` : "Thanks.";
    const nextStep = need
      ? ` Your ${need.toLowerCase()} setup is ready for a Memory Lanez AI review.`
      : " Your Memory Lanez AI caregiver setup is ready for review.";

    statusMessage.textContent = `${greeting}${nextStep}`;
    form.reset();
  });
}
