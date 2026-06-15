export const SummaryPrompt = (
  title = "frontend developer",
  description = "Developed and maintained the front-end of the company website using React.js, ensuring a responsive and user-friendly interface.\n- Collaborated with the design team to implement UI/UX improvements, resulting in a 20% increase in user engagement.\n- Optimized website performance by implementing code-splitting and lazy loading techniques, reducing load times by 30%.\n- Worked closely with back-end developers to integrate RESTful APIs, enhancing data retrieval and display on the front-end.",
) => {
  return `I have the following work experience details:
    Job Title: ${title}  
    Raw Description: ${description}

Please rewrite this description in a professional, resume-ready format with strong, action-oriented bullet points. Each bullet should:
- Clearly describe contributions and responsibilities
- Highlight specific technologies used and how they were applied
- Include quantifiable results if possible
- Be suitable for a software developer resume

I want exactly 1 professional rewrite of the description, and I need the final result in the following strict JSON format:

{
  "position": "${title}",
   "description_options": [
    {
      "option_number": 1,
      "bullets": [
        "First bullet point",
        "Second bullet point",
        "Third bullet point"
      ]
    }
  ]
}

Do not add any commentary outside the JSON. Keep it ATS-optimized and ready to be used directly in a resume.
`;
};

// export const prompt = `
//     I have the following work experience details:

// Job Title: ${"frontend developer"}
// Raw Description: ${"- Developed and maintained the front-end of the company website using React.js, ensuring a responsive and user-friendly interface.\n- Collaborated with the design team to implement UI/UX improvements, resulting in a 20% increase in user engagement.\n- Optimized website performance by implementing code-splitting and lazy loading techniques, reducing load times by 30%.\n- Worked closely with back-end developers to integrate RESTful APIs, enhancing data retrieval and display on the front-end."}

// Please rewrite this description in a professional, resume-ready format with strong, action-oriented bullet points. Each bullet should:
// - Clearly describe contributions and responsibilities
// - Highlight specific technologies used and how they were applied
// - Include quantifiable results if possible
// - Be suitable for a software developer resume

// I want 2 to 4 variations of the description, and I need the final result in the following strict JSON format:

// {
//   "position":  ${"frontend developer"}  ,
//    "description_options": [
//     {
//       "option_number": 1,
//       "bullets": [
//         "First bullet point",
//         "Second bullet point",
//         "Third bullet point"
//       ]
//     },
//     {
//       "option_number": 2,
//       "bullets": [
//         "First bullet point",
//         "Second bullet point",
//         "Third bullet point"
//       ]
//     }
//   ]
// }

// Do not add any commentary outside the JSON. Keep it ATS-optimized and ready to be used directly in a resume.
// `;
