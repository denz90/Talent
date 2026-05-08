import { 
  Pencil, 
  Palette, 
  Code2, 
  Video 
} from 'lucide-react';

export const PATHS_CONTENT = {
  'AI for Educators': {
    icon: Pencil,
    color: '#a855f7',
    modules: [
      {
        id: 1,
        title: 'Module 1: Planning',
        days: [
          { 
            id: 1, 
            title: 'Day 1: MagicSchool AI', 
            duration: '15 min read', 
            color: 'text-brand-primary', 
            bg: 'bg-blue-50/50',
            quizData: [
              {
                id: 'q1',
                question: "According to the MagicSchool AI Challenge, what is the PRIMARY purpose of MagicSchool AI?",
                options: [
                  "To create social media content for schools",
                  "To automate lesson planning, generate differentiated instructional materials, and create standards-aligned assessments",
                  "To manage student attendance and grading records",
                  "To provide online tutoring sessions for students"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "A teacher wants to support English Learners in their classroom using MagicSchool AI's Differentiation Tool. Which specific adaptation should they select?",
                options: [
                  "Extension activity",
                  "Add visual vocabulary cards",
                  "Debate prompt",
                  "Exit ticket generator"
                ],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: "The challenge describes the Rubric Builder feature. How long does MagicSchool AI claim it takes to create a grading rubric?",
                options: [
                  "Less than 5 minutes",
                  "Less than 1 minute",
                  "About 10 minutes",
                  "Less than 3 minutes"
                ],
                correctAnswer: 1
              },
              {
                id: 'q4',
                question: "What is the BEST way to get more specific and useful outputs from MagicSchool AI when generating a lesson?",
                options: [
                  "Use simple, one-word prompts to keep instructions clear",
                  "Rely only on the default settings without customization",
                  "Add specific details in your prompt, such as 'include hands-on activity' or 'use real-world examples'",
                  "Generate multiple lessons and combine them manually"
                ],
                correctAnswer: 2
              },
              {
                id: 'q5',
                question: "The Differentiation Tool in MagicSchool AI is described as creating which of the following for advanced learners?",
                options: [
                  "A simplified reading passage",
                  "Visual vocabulary cards",
                  "A debate prompt",
                  "An IEP goal document"
                ],
                correctAnswer: 2
              }
            ]
          },
          { 
            id: 2, 
            title: 'Day 2: Eduaide.AI', 
            duration: '10 min read', 
            color: 'text-emerald-600', 
            bg: 'bg-emerald-50/50',
            quizData: [
              {
                id: 'q1',
                question: "Based on the challenge description, which of the following BEST describes what Eduaide.AI is designed to do for educators?",
                options: [
                  "Replace teachers by automating the entire teaching process",
                  "Help teachers create lesson plans, worksheets, assessments, and interactive activities in minutes using generative AI",
                  "Provide a platform for students to complete assignments independently",
                  "Manage school administration tasks such as timetables and staff scheduling"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "A teacher in a multilingual classroom wants to support students who are learning in a second language. Which Eduaide.AI feature from the challenge would BEST help this teacher?",
                options: [
                  "Assessment Creator",
                  "Feedback Bot",
                  "Translation Tool",
                  "Lesson Plan Generator"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "The challenge describes the Assessment Creator feature. At what Bloom's Taxonomy levels is the 'Medium' difficulty setting aligned, according to the Getting Started Guide?",
                options: [
                  "Remember and Understand",
                  "Apply and Analyze",
                  "Evaluate and Create",
                  "Remember and Apply"
                ],
                correctAnswer: 1
              },
              {
                id: 'q4',
                question: "What should a teacher do to avoid recreating resources from scratch in future lessons?",
                options: [
                  "Download all generated materials as PDFs immediately",
                  "Copy and paste content into a separate document for storage",
                  "Click 'Add to My Library' to save and reuse optimized materials as templates",
                  "Share materials with colleagues via email for future reference"
                ],
                correctAnswer: 2
              },
              {
                id: 'q5',
                question: "A teacher wants to give a student personalized, rubric-aligned written feedback on an essay. Which Eduaide.AI feature should they use, and what is the correct first step?",
                options: [
                  "Use the Worksheet Builder and select the 'Essay Review' template",
                  "Use the Feedback Bot by pasting the student's work into the tool",
                  "Use the Assessment Creator and set question types to 'Short Answer'",
                  "Use the Translation Tool to convert the essay into a simpler language"
                ],
                correctAnswer: 1
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Module 2: Assessment',
        days: [
          { 
            id: 3, 
            title: 'Day 3: NotebookLM', 
            duration: '20 min read', 
            color: 'text-purple-600', 
            bg: 'bg-purple-50/50',
            quizData: [
              {
                id: 'q1',
                question: "According to the challenge, what type of tool is NotebookLM, and who created it?",
                options: [
                  "A classroom management system created by Microsoft",
                  "An AI-powered research and writing assistant created by Google",
                  "A video editing and multimedia platform created by Apple",
                  "A student grading and feedback tool created by Canva"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "The challenge highlights a key feature where AI answers always link back to source material. Why is this particularly valuable for educators, according to the challenge?",
                options: [
                  "It makes the AI responses longer and more detailed",
                  "It allows teachers to avoid uploading documents entirely",
                  "It helps teach critical sourcing and avoid plagiarism",
                  "It automatically shares materials with students online"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "What combination of question types should a teacher use when building a quiz?",
                options: [
                  "5 multiple-choice questions only",
                  "A mix of true/false and short answer questions",
                  "Fill-in-the-blank and essay questions",
                  "Only short answer questions for deeper thinking"
                ],
                correctAnswer: 1
              },
              {
                id: 'q4',
                question: "A teacher wants to create an engaging opening for a lesson on climate change for a Grade 7 class using NotebookLM. Which prompt should the teacher use?",
                options: [
                  "\"Create a 10-question multiple-choice quiz about climate change.\"",
                  "\"Summarize the key themes from these climate change sources.\"",
                  "\"Suggest 3 engaging discussion starters about climate change for 12-year-olds.\"",
                  "\"List all scientific terms related to climate change in this document.\""
                ],
                correctAnswer: 2
              },
              {
                id: 'q5',
                question: "How should a teacher organize uploaded sources in NotebookLM to make future retrieval easier?",
                options: [
                  "Arrange sources alphabetically by author name",
                  "Label uploads by topic (e.g., 'Biology – Cell Structure') using tags",
                  "Create a separate notebook for every individual document",
                  "Download all sources as PDFs and store them externally"
                ],
                correctAnswer: 1
              }
            ]
          },
          { 
            id: 4, 
            title: 'Day 4: Diffit', 
            duration: '25 min read', 
            color: 'text-orange-600', 
            bg: 'bg-orange-50/50',
            quizData: [
              {
                id: 'q1',
                question: "Based on the challenge description, which statement BEST explains what Diffit does when it adapts a reading passage?",
                options: [
                  "It rewrites the passage using completely new facts and different content",
                  "It adjusts vocabulary, sentence structure, and complexity while preserving the core content",
                  "It translates the passage into multiple languages and removes all difficult words",
                  "It creates a video summary of the original text for visual learners"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "Which group of students does Diffit's Translation feature PRIMARILY support?",
                options: [
                  "Gifted and advanced learners who need enrichment content",
                  "Students with physical disabilities who need audio materials",
                  "ELL/ESL students and multilingual families",
                  "Students preparing for standardized examinations"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "A teacher wants to send home a reading activity that parents who speak Spanish can also understand. Which steps should the teacher follow?",
                options: [
                  "Use the Question Generator → Export to Google Classroom → Share the link",
                  "Click 'Add Questions' → Choose 'Open-Ended' type → Export as PDF",
                  "Click 'Translate' → Select Spanish → Download the bilingual version or print for parents",
                  "Use the Text Leveler → Select K-grade → Generate → Export as Google Doc"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "Diffit aligns with IEP/504 plans. What does this PRIMARILY mean for classroom teachers?",
                options: [
                  "Diffit can automatically grade assignments and upload results to student files",
                  "Diffit helps create inclusive, differentiated materials for students with specific learning needs",
                  "Diffit replaces the need for specialist teachers such as SPED and ESL educators",
                  "Diffit generates legal documentation for IEP meetings and parent conferences"
                ],
                correctAnswer: 1
              },
              {
                id: 'q5',
                question: "How can Diffit be used to support students who struggle with writing essays using primary sources?",
                options: [
                  "Generate audio recordings of the primary source for listening practice",
                  "Use Diffit to create a video presentation about the primary source topic",
                  "Generate simplified versions of primary sources to scaffold struggling writers",
                  "Export primary sources as flashcards for memorization practice"
                ],
                correctAnswer: 2
              }
            ]
          }
        ]
      },
      {
        id: 3,
        title: 'Module 3: Creation',
        days: [
          { 
            id: 5, 
            title: 'Day 5: Google Gemini', 
            duration: '30 min read', 
            color: 'text-blue-600', 
            bg: 'bg-blue-50/50',
            quizData: [
              {
                id: 'q1',
                question: "According to the challenge, what is Google Gemini primarily described as for educators?",
                options: [
                  "A video editing platform that automatically produces animated classroom lessons",
                  "An AI-powered assistant that helps educators research, generate, and structure lesson content quickly",
                  "A student grading system that provides automated scores and written reports",
                  "A virtual classroom tool that replaces face-to-face teaching sessions"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "Google Gemini 'Promotes Critical Thinking.' Which outputs does Gemini generate to support this?",
                options: [
                  "Student report cards and parent communication letters",
                  "Attendance records and classroom seating arrangements",
                  "Discussion questions, opposing viewpoints, and interactive exercises",
                  "Timetables and curriculum mapping documents"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "Which prompt would a teacher use to get an age-appropriate explanation of a topic using Gemini's Research Assistant feature?",
                options: [
                  "\"Create a 2-min lesson video script about fractions\"",
                  "\"Translate lesson to Spanish\"",
                  "\"Suggest 3 visuals for a solar system video\"",
                  "\"Explain photosynthesis for 5th graders\""
                ],
                correctAnswer: 3
              },
              {
                id: 'q4',
                question: "The challenge mentions that Gemini output can be combined with specific video tools to create animated lessons. Which two tools are named in the challenge for this purpose?",
                options: [
                  "Canva and Adobe Premiere",
                  "Lovart AI and Lumen5",
                  "Flipgrid and Screencastify",
                  "iMovie and Google Slides"
                ],
                correctAnswer: 1
              },
              {
                id: 'q5',
                question: "What is the MOST important thing a teacher should include in their prompt to get the best results from Google Gemini?",
                options: [
                  "A list of student names and their individual learning profiles",
                  "The school's official curriculum document uploaded as an attachment",
                  "The grade level, topic, and desired format for the output",
                  "A sample of a previous lesson plan to use as a style reference"
                ],
                correctAnswer: 2
              }
            ]
          },
          { 
            id: 6, 
            title: 'Day 6: Grok AI', 
            duration: '20 min read', 
            color: 'text-purple-600', 
            bg: 'bg-purple-50/50',
            quizData: [
              {
                id: 'q1',
                question: "According to the challenge, what is the PRIMARY purpose of Grok AI for educators?",
                options: [
                  "To create new lesson videos from scratch using AI-generated animations",
                  "To allow teachers to add interactive elements, quizzes, prompts, and adaptive narration to existing lesson videos",
                  "To replace traditional classroom teaching with fully automated video instruction",
                  "To generate written lesson plans and printable worksheets for students"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "Grok AI helps educators 'Track Student Engagement.' Which specific feature makes this possible, according to the Key Features table?",
                options: [
                  "The AI Voiceover & Narration feature that records student responses",
                  "The Collaboration feature that allows colleagues to review video performance",
                  "The Analytics Dashboard that shows participation, quiz results, and rewatch trends",
                  "The Interactive Quiz Overlay that stores student marks automatically"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "The AI Voiceover & Narration feature in Grok AI is described as supporting diverse learning styles. What additional learner group does this feature specifically accommodate?",
                options: [
                  "Gifted and advanced learners who need accelerated content pacing",
                  "Students with physical disabilities who require assistive technologies",
                  "Multilingual classes and ESL learners through language adjustment",
                  "Students preparing for national examinations with timed practice"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "In the Practical Challenge Task, a teacher shares their enhanced video and notices from the Analytics Dashboard that 'Most students paused at 2:15.' What should this insight prompt the teacher to do?",
                options: [
                  "Remove the section at 2:15 from the video entirely",
                  "Explain the photosynthesis diagram again, as students paused at that point",
                  "Add more polls between the 2:00 and 3:00 minute marks",
                  "Shorten the video to end before the 2:15 mark to avoid confusion"
                ],
                correctAnswer: 1
              },
              {
                id: 'q5',
                question: "WHERE in a video should quiz questions be placed for maximum learning impact?",
                options: [
                  "At the very beginning of the video to activate prior knowledge",
                  "Only at the end of the video as a final assessment",
                  "Evenly spaced throughout regardless of content complexity",
                  "Right after complex topics to maximize retention"
                ],
                correctAnswer: 3
              }
            ]
          }
        ]
      },
      {
        id: 4,
        title: 'Module 4: Final Mastery',
        days: [
          { 
            id: 7, 
            title: 'Day 7: Suno AI', 
            duration: '20 min read', 
            color: 'text-blue-600', 
            bg: 'bg-blue-50/50',
            quizData: [
              {
                id: 'q1',
                question: "According to the challenge, what type of music does Suno generate, and why is this specifically important for educators?",
                options: [
                  "Licensed commercial music that requires purchase for classroom use",
                  "Original, royalty-free music — eliminating the need to search for copyright-free tracks",
                  "Pre-recorded instrumental versions of popular songs for student enjoyment",
                  "Music composed by professional artists donated for educational purposes"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "A teacher wants to set a calm atmosphere during a reading activity. Which TWO features would be most useful together for this purpose?",
                options: [
                  "BPM Customizer set to fast, and Genre Selection set to Pop",
                  "Genre Selection set to Ambient, and Mood Adjuster set toward calm",
                  "Length Control set to 10 seconds, and Download Options as WAV",
                  "BPM Customizer set to high energy, and Mood Adjuster set to energetic"
                ],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: "In the Practical Challenge Task, a teacher is creating music for a history lesson about Ancient Egypt. According to the challenge, which genre should they select?",
                options: [
                  "Electronic",
                  "Ambient",
                  "Pop",
                  "Cinematic"
                ],
                correctAnswer: 3
              },
              {
                id: 'q4',
                question: "What is the range of track lengths a teacher can set using Suno's Length Control feature?",
                options: [
                  "30 seconds to 10 minutes",
                  "10 seconds to 5 minutes",
                  "1 minute to 15 minutes",
                  "5 seconds to 3 minutes"
                ],
                correctAnswer: 1
              },
              {
                id: 'q5',
                question: "According to the Pro Tips section of the challenge, how can teachers involve students directly in the music creation process?",
                options: [
                  "Ask students to write lyrics and submit them as homework assignments",
                  "Let students download and edit the generated tracks using their own devices",
                  "Let kids pick genres for group projects as part of student co-creation",
                  "Have students rate the generated music and suggest improvements to the AI"
                ],
                correctAnswer: 2
              }
            ]
          },
          { 
            id: 8, 
            title: 'Day 8: Brisk Teaching AI', 
            duration: '20 min read', 
            color: 'text-blue-600', 
            bg: 'bg-blue-50/50',
            quizData: [
              {
                id: 1,
                question: "According to the challenge, what is the primary benefit of the Brisk Teaching Chrome extension?",
                options: [
                  "It replaces Google Docs with a new word processor",
                  "It integrates AI directly into the tools teachers already use, like Google Docs, Slides, and Canvas",
                  "It records student audio for verbal assessments",
                  "It manages school cafeteria menus"
                ],
                correctAnswer: 1
              },
              {
                id: 2,
                question: "Which Brisk feature allows a teacher to change the reading level of an article with just a few clicks?",
                options: [
                  "Feedback Generator",
                  "Lesson Planner",
                  "Leveler",
                  "Resource Creator"
                ],
                correctAnswer: 2
              },
              {
                id: 3,
                question: "According to the Getting Started Guide, what can the Feedback Generator provide based on a student's writing?",
                options: [
                  "Only a letter grade (A-F)",
                  "Targeted, rubric-aligned feedback in seconds",
                  "A summary for parents only",
                  "Automatic translation into 100 languages"
                ],
                correctAnswer: 1
              },
              {
                id: 4,
                question: "What is the 'Brisk It' button used for in the Practical Challenge Task?",
                options: [
                  "To shut down the computer",
                  "To launch the Brisk menu on any webpage or Google Doc",
                  "To search for images on Google",
                  "To log out of the system"
                ],
                correctAnswer: 1
              },
              {
                id: 5,
                question: "According to the Pro Tips section, how can Brisk help with personalized feedback?",
                options: [
                  "It uses 'Targeted Feedback' to give actionable, specific suggestions to students",
                  "It only provides praise to boost student confidence",
                  "It grades everything as 'Pass/Fail'",
                  "It emails the student's parents automatically"
                ],
                correctAnswer: 0
              }
            ]
          },
          { 
            id: 9, 
            title: 'Day 9: Snorkl AI', 
            duration: '20 min read', 
            color: 'text-blue-600', 
            bg: 'bg-blue-50/50',
            quizData: [
              {
                id: 1,
                question: "What makes Snorkl different from traditional written assessment tools?",
                options: [
                  "It replaces all written assignments with multiple-choice tests",
                  "It captures and analyzes student verbal explanations via audio/video to provide real-time AI feedback",
                  "It automatically grades PDF essays and generates report cards",
                  "It creates animated video lessons that students watch and respond to in writing"
                ],
                correctAnswer: 1
              },
              {
                id: 2,
                question: "According to the challenge, how does Snorkl specifically support ELL and neurodiverse learners?",
                options: [
                  "By providing simplified reading passages",
                  "By allowing students to express understanding verbally, reducing the barrier of written language",
                  "By translating all content into 50+ languages",
                  "By providing extra time for all tests"
                ],
                correctAnswer: 1
              },
              {
                id: 3,
                question: "In the Practical Challenge Task, what is the 'Thinking Prompt' used for?",
                options: [
                  "To give students the final answer to a math problem",
                  "To guide student verbal explanations (e.g., 'Explain the steps to solve this equation')",
                  "To record the teacher's lecture for later viewing",
                  "To generate a multiple-choice quiz automatically"
                ],
                correctAnswer: 1
              },
              {
                id: 4,
                question: "What does the Snorkl AI do after a student submits their verbal explanation?",
                options: [
                  "It deletes the recording for privacy",
                  "It analyzes the explanation against the teacher's rubric and provides immediate, targeted feedback",
                  "It sends a notification to the principal",
                  "It plays the recording back to the whole class"
                ],
                correctAnswer: 1
              },
              {
                id: 5,
                question: "According to the Pro Tips section, what is 'Scaffolded Reflection' in Snorkl?",
                options: [
                  "A way to build physical models in the classroom",
                  "Using AI feedback to have students record a 'Version 2' of their explanation to improve their score",
                  "A method for grading group projects",
                  "An automated system for tracking attendance"
                ],
                correctAnswer: 1
              }
            ]
          },
          { 
            id: 10, 
            title: 'Day 10: EssayGrader.ai', 
            duration: '20 min read', 
            color: 'text-emerald-600', 
            bg: 'bg-emerald-50/50',
            quizData: [
              {
                id: 1,
                question: "In the Getting Started Guide, what are the TWO ways a teacher can submit a student essay for grading in Step 2?",
                options: [
                  "Type the essay directly into a text box or record it as an audio file",
                  "Paste essay text or upload a PDF/DOCX file",
                  "Import from Google Classroom or copy from an email attachment",
                  "Scan a handwritten essay or link a shared Google Doc"
                ],
                correctAnswer: 1
              },
              {
                id: 2,
                question: "The Practical Challenge Task asks teachers to analyze AI feedback after grading three essays. What exactly should a teacher note about each essay?",
                options: [
                  "The total word count and font size used by the student",
                  "One specific piece of 'Actionable Feedback' the AI suggested for improvement",
                  "The date and time the essay was submitted for grading",
                  "The student's previous grades in the same subject"
                ],
                correctAnswer: 1
              },
              {
                id: 3,
                question: "According to the challenge, what is the purpose of the 'Batch Grading' feature?",
                options: [
                  "To grade multiple essays simultaneously using the same rubric",
                  "To translate essays into different languages",
                  "To check for plagiarism across all students",
                  "To generate lesson plans based on essay topics"
                ],
                correctAnswer: 0
              },
              {
                id: 4,
                question: "Which feature in EssayGrader.ai helps rewrite complex feedback into simpler terms for younger students?",
                options: [
                  "Rubric Builder",
                  "Language Simplifier",
                  "Grammar Checker",
                  "Feedback Bot"
                ],
                correctAnswer: 1
              },
              {
                id: 5,
                question: "According to the Pro Tips section, how can a teacher ensure 'Human-in-the-Loop' grading?",
                options: [
                  "By letting the AI grade everything and only checking the final scores",
                  "By reviewing and editing the AI-generated feedback before sharing it with students",
                  "By having students grade each other's work using the AI",
                  "By printing the AI feedback and manually writing comments on it"
                ],
                correctAnswer: 1
              }
            ]
          }
        ]
      },
      {
        id: 6,
        title: 'Module 6: Assessment & Quizzing',
        days: [
          { 
            id: 11, 
            title: 'Day 11: Quizizz AI Mode', 
            duration: '20 min read', 
            color: 'text-purple-600', 
            bg: 'bg-purple-50/50',
            quizData: [
              {
                id: 1,
                question: "Based on the challenge description, what makes Quizizz AI Mode different from a standard quiz tool?",
                options: [
                  "It only generates written exam papers that teachers print and distribute manually",
                  "It transforms static assessments into adaptive, engaging experiences with real-time feedback using AI",
                  "It creates video lessons that students watch before answering questions offline",
                  "It focuses exclusively on multiple-choice tests for standardized exam preparation"
                ],
                correctAnswer: 1
              },
              {
                id: 2,
                question: "According to the Getting Started Guide, what can the 'AI Question Generator' do with a long PDF document?",
                options: [
                  "Summarize it into a single paragraph",
                  "Instantly extract key concepts and generate a full quiz with multiple question types",
                  "Translate it into 10 different languages",
                  "Read it aloud to students as an audiobook"
                ],
                correctAnswer: 1
              },
              {
                id: 3,
                question: "The Practical Challenge Task asks teachers to activate 'Adaptive Mode.' What does this feature specifically do during a live quiz?",
                options: [
                  "It changes the color of the screen based on student performance",
                  "It adjusts the difficulty of questions in real-time based on individual student answers",
                  "It automatically grades the quiz and emails results to parents",
                  "It plays music that matches the pace of student answering"
                ],
                correctAnswer: 1
              },
              {
                id: 4,
                question: "What is the benefit of the 'Meme Sets' feature mentioned in the challenge?",
                options: [
                  "It teaches students how to create digital art",
                  "It provides humorous, reinforcing feedback after each question to boost engagement",
                  "It replaces traditional questions with image-based puzzles",
                  "It allows students to chat with each other during the quiz"
                ],
                correctAnswer: 1
              },
              {
                id: 5,
                question: "According to the Pro Tips section, how can a teacher use the 'Live Leaderboard' to support a growth mindset?",
                options: [
                  "By only showing the top 3 students to create competition",
                  "By using it to celebrate progress and 'Power-Ups' rather than just high scores",
                  "By hiding it completely so students don't feel discouraged",
                  "By using it to assign extra homework to students at the bottom"
                ],
                correctAnswer: 1
              }
            ]
          },
          { 
            id: 12, 
            title: 'Day 12: Khanmigo AI', 
            duration: '20 min read', 
            color: 'text-violet-600', 
            bg: 'bg-violet-50/50',
            quizData: [
              {
                id: 1,
                question: "Who developed Khanmigo and what is its primary role for educators?",
                options: [
                  "Google developed Khanmigo as a search tool for finding classroom resources online",
                  "Khan Academy developed Khanmigo as an AI-powered teaching assistant for tutoring, lesson planning, and real-time feedback",
                  "Microsoft developed Khanmigo as a grading automation tool integrated with Microsoft Teams",
                  "Anthropic developed Khanmigo as a content generation platform for creating textbooks"
                ],
                correctAnswer: 1
              },
              {
                id: 2,
                question: "According to the Key Features table, what is the 'Socratic Tutor' mode designed to do?",
                options: [
                  "Give students the correct answers immediately to save time",
                  "Guide students through problems with hints and questions rather than giving answers",
                  "Write full essays for students based on their prompts",
                  "Grade student work and assign a numerical score"
                ],
                correctAnswer: 1
              },
              {
                id: 3,
                question: "In the Practical Challenge Task, what should a teacher use Khanmigo to generate for a 'Humanities' lesson?",
                options: [
                  "A 10-question multiple-choice quiz",
                  "A full lesson plan including a hook, activities, and assessment",
                  "A list of vocabulary words and their definitions",
                  "A script for a 5-minute educational video"
                ],
                correctAnswer: 1
              },
              {
                id: 4,
                question: "According to the Getting Started Guide, how can a teacher use the 'Student Progress' dashboard?",
                options: [
                  "To track attendance and late submissions",
                  "To see which students are struggling and what specific concepts they need help with",
                  "To compare their class performance against national standards",
                  "To manage their own professional development hours"
                ],
                correctAnswer: 1
              },
              {
                id: 5,
                question: "What is the benefit of the 'Co-Writing' feature mentioned in the pro tips?",
                options: [
                  "It allows students to write essays together in real-time",
                  "It acts as a partner that brainstorms ideas and provides feedback during the writing process",
                  "It automatically formats student citations in APA or MLA style",
                  "It translates student writing into 20+ different languages"
                ],
                correctAnswer: 1
              }
            ]
          },
          { 
            id: 13, 
            title: 'Day 13: Flint AI', 
            duration: '20 min read', 
            color: 'text-pink-600', 
            bg: 'bg-pink-50/50',
            quizData: [
              {
                id: 1,
                question: "What technology does Flint use to tailor content based on individual student needs?",
                options: [
                  "Blockchain-based learning records that track student history across schools",
                  "Adaptive learning technology that personalizes content based on student needs",
                  "Virtual reality simulations that immerse students in subject matter",
                  "Pre-recorded video lectures that adjust speed based on viewing history"
                ],
                correctAnswer: 1
              },
              {
                id: 2,
                question: "The Practical Challenge Task asks teachers to create tiered assignments. According to the challenge, what should the two quiz versions be designed to test?",
                options: [
                  "Version 1 for English learners and Version 2 for native speakers",
                  "A 'Basic' (scaffolded) version and an 'Advanced' (critical thinking) version",
                  "A take-home version and an in-class timed version of the same quiz",
                  "A multiple-choice version and an open-ended essay version of the assessment"
                ],
                correctAnswer: 1
              },
              {
                id: 3,
                question: "How long should the AI-generated lesson plan be, and what subject example is given?",
                options: [
                  "30-minute lesson on 'Ecosystems' or another science topic",
                  "60-minute lesson on 'Algebra' or any mathematics topic",
                  "45-minute lesson on 'Fractions' or the teacher's subject of choice",
                  "90-minute lesson on 'Photosynthesis' aligned to NGSS standards"
                ],
                correctAnswer: 2
              },
              {
                id: 4,
                question: "According to the Progress Dashboard feature described in the challenge, what is its primary benefit for educators?",
                options: [
                  "It automatically emails parents when a student's grade drops below a threshold",
                  "It identifies at-risk students for timely intervention by showing performance metrics",
                  "It generates awards and certificates for top-performing students in the class",
                  "It syncs student data directly with the school's official report card system"
                ],
                correctAnswer: 1
              },
              {
                id: 5,
                question: "According to the Pro Tips section, what should a teacher use to automatically suggest videos and readings for struggling students?",
                options: [
                  "The 'Team Library' feature to share curated resources with the whole class",
                  "The 'Student Mode' feature to let learners self-select their own support materials",
                  "The 'Recommend Resources' button that auto-suggests videos and readings for struggling students",
                  "The Progress Dashboard filter to sort students by performance and manually assign links"
                ],
                correctAnswer: 2
              }
            ]
          },
          { 
            id: 14, 
            title: 'Day 14: SchoolAI Spaces', 
            duration: '20 min read', 
            color: 'text-orange-600', 
            bg: 'bg-orange-50/50',
            quizData: [
              {
                id: 1,
                question: "According to the challenge, what are SchoolAI Spaces designed to do for educators?",
                options: [
                  "Automate essay grading and generate report cards for student portfolios",
                  "Design immersive, customizable virtual learning environments that simulate real-world scenarios, host interactive lessons, and facilitate collaboration",
                  "Replace physical classrooms with fully remote AI-delivered instruction",
                  "Create printable worksheets and physical activity kits for hands-on classroom use"
                ],
                correctAnswer: 1
              },
              {
                id: 2,
                question: "Based on the Key Features table, what is the specific benefit of using AI Characters in a SchoolAI Space?",
                options: [
                  "They automatically grade student submissions and export results to a gradebook",
                  "They make abstract concepts tangible by acting as virtual guides or subject experts",
                  "They monitor student screen time and flag off-task behavior to the teacher",
                  "They generate parent communication reports based on student activity data"
                ],
                correctAnswer: 1
              },
              {
                id: 3,
                question: "In the Getting Started Guide, what THREE types of AI bots can a teacher add to a Space in Step 3?",
                options: [
                  "Research Bot, Writing Bot, and Presentation Bot",
                  "Grading Bot, Attendance Bot, and Parent Communication Bot",
                  "Quiz Bot, Guide Bot, and Scenario Bot",
                  "Translation Bot, Summary Bot, and Discussion Bot"
                ],
                correctAnswer: 2
              },
              {
                id: 4,
                question: "According to the Getting Started Guide, how can a teacher invite students to join a SchoolAI Space?",
                options: [
                  "Students must be manually added by entering each individual email address",
                  "Teachers click 'Share' and copy the join link or generate QR codes",
                  "Students search for the Space by name and request access from the teacher",
                  "Teachers export a PDF invitation and distribute it via email or print"
                ],
                correctAnswer: 1
              },
              {
                id: 5,
                question: "The Practical Challenge Task asks teachers to build an ecosystems Space. According to the challenge, which specific THREE AI bots should be added?",
                options: [
                  "Research Bot, Writing Bot, and Quiz Bot",
                  "Ecologist Guide, Quiz Bot, and Scenario Bot",
                  "Science Bot, Discussion Bot, and Summary Bot",
                  "Teacher Bot, Assessment Bot, and Support Bot"
                ],
                correctAnswer: 1
              }
            ]
          },
          { 
            id: 15, 
            title: 'Day 15: Kahoot! AI Challenge', 
            duration: '20 min read', 
            color: 'text-pink-600', 
            bg: 'bg-pink-50/50',
            quizData: [
              {
                id: 'q1',
                question: "How does Kahoot! AI simplify quiz creation?",
                options: ["By generating questions from topics or PDFs", "By playing the game for you", "By automatically grading papers", "It doesn't use AI"],
                correctAnswer: 0
              }
            ]
          }
        ]
      },
      {
        id: 7,
        title: 'Module 7: Visual & Multimedia AI',
        days: [
          { 
            id: 16, 
            title: 'Day 16: Scribble Diffusion AI', 
            duration: '20 min read', 
            color: 'text-purple-600', 
            bg: 'bg-purple-50/50',
            quizData: [
              {
                id: 'q1',
                question: "What does Scribble Diffusion turn into a high-quality image?",
                options: ["A voice note", "A rough hand-drawn sketch", "A 1000-page essay", "A spreadsheet"],
                correctAnswer: 1
              }
            ]
          },
          { 
            id: 17, 
            title: 'Day 17: Parlay Challenge', 
            duration: '20 min read', 
            color: 'text-purple-600', 
            bg: 'bg-purple-50/50',
            quizData: [
              {
                id: 'q1',
                question: "What is the core focus of the Parlay tool?",
                options: ["Grading math tests", "Facilitating structured and inclusive classroom discussions", "Designing school posters", "Tracking student attendance"],
                correctAnswer: 1
              }
            ]
          },
          { 
            id: 18, 
            title: 'Day 18: Read Along Challenge', 
            duration: '20 min read', 
            color: 'text-purple-600', 
            bg: 'bg-purple-50/50',
            quizData: [
              {
                id: 'q1',
                question: "Who is 'Diya' in the Google Read Along app?",
                options: ["The principal of the school", "An AI reading tutor that gives real-time feedback", "A character in a specific book", "The developer who built the app"],
                correctAnswer: 1
              }
            ]
          },
          { 
            id: 19, 
            title: 'Day 19: Curipod Challenge', 
            duration: '20 min read', 
            color: 'text-purple-600', 
            bg: 'bg-purple-50/50',
            quizData: [
              {
                id: 'q1',
                question: "What is the primary purpose of Curipod?",
                options: [
                  "To automate grading",
                  "To transform passive learning into dynamic student-led conversations",
                  "To create presentation slides from scratch",
                  "To track teacher attendance"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "Which cognitive framework does Curipod use for its AI Discussion Generator?",
                options: [
                  "Gardner's Multiple Intelligences",
                  "Maslow's Hierarchy of Needs",
                  "Bloom's Taxonomy",
                  "Vygotsky's Zone of Proximal Development"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "What is the benefit of the Live Word Clouds feature in Curipod?",
                options: [
                  "It generates weather reports",
                  "It instantly gauges class consensus",
                  "It downloads images from the web",
                  "It records student audio"
                ],
                correctAnswer: 1
              },
              {
                id: 'q4',
                question: "According to the challenge, how can teachers involve students in 'Student Co-Creation'?",
                options: [
                  "By having them grade each other's work",
                  "By letting kids pick genres or topics for group projects",
                  "By asking them to write the software code",
                  "By having them manage the class budget"
                ],
                correctAnswer: 1
              },
              {
                id: 'q5',
                question: "Which tool can Curipod integrate with to structure Socratic seminars?",
                options: [
                  "Kahoot!",
                  "Parlay",
                  "Quizizz",
                  "Canva"
                ],
                correctAnswer: 1
              }
            ]
          },
          { 
            id: 20, 
            title: 'Day 20: Labster Challenge', 
            duration: '20 min read', 
            color: 'text-indigo-600', 
            bg: 'bg-indigo-50/50',
            quizData: [
              {
                id: 'q1',
                question: "What is the primary benefit of Labster for STEM education?",
                options: [
                  "It replaces the need for a science teacher",
                  "It provides immersive, interactive science simulations in a safe 3D environment",
                  "It only works for medical students",
                  "It generates music for science videos"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "Which feature in Labster allows students to overlay 3D lab equipment onto real-world surfaces?",
                options: [
                  "VR Mode",
                  "AR Mode (mobile app)",
                  "2D Mode",
                  "Textbook Mode"
                ],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: "What can teachers see on the Labster Teacher Dashboard?",
                options: [
                  "Student social media profiles",
                  "Granular analytics on student progress, quiz scores, and time spent",
                  "Only the final grade",
                  "School cafeteria menus"
                ],
                correctAnswer: 1
              },
              {
                id: 'q4',
                question: "According to the challenge, how much time can Labster Manuals save teachers per week on lesson planning?",
                options: [
                  "1 hour",
                  "5+ hours",
                  "10 minutes",
                  "24 hours"
                ],
                correctAnswer: 1
              },
              {
                id: 'q5',
                question: "Which subject is NOT specifically mentioned as part of Labster's 300+ simulations?",
                options: [
                  "Biology",
                  "Chemistry",
                  "Physics",
                  "Art History"
                ],
                correctAnswer: 3
              }
            ]
          },
          { 
            id: 21, 
            title: 'Day 21: Lumen5 Challenge', 
            duration: '20 min read', 
            color: 'text-indigo-600', 
            bg: 'bg-indigo-50/50',
            quizData: [
              {
                id: 'q1',
                question: "What is the primary function of Lumen5 for educators?",
                options: [
                  "To grade student papers",
                  "To transform text-based content into engaging educational videos",
                  "To manage classroom behavior",
                  "To track school budgets"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "How does Lumen5's AI Script-to-Video feature work?",
                options: [
                  "It records the teacher's voice and creates an avatar",
                  "It analyzes text and automatically suggests visuals and scenes",
                  "It downloads videos from YouTube",
                  "It writes the entire curriculum from scratch"
                ],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: "Which feature ensures consistent branding for institutional content?",
                options: [
                  "AI Script-to-Video",
                  "Brand Kit",
                  "Voiceover & Captions",
                  "Media Library"
                ],
                correctAnswer: 1
              },
              {
                id: 'q4',
                question: "What is the benefit of the 'Template Hack' mentioned in the pro tips?",
                options: [
                  "It provides free snacks",
                  "It uses 'Education Explainer' templates to save 10+ minutes per video",
                  "It allows teachers to skip the sign-up process",
                  "It automatically translates the video"
                ],
                correctAnswer: 1
              },
              {
                id: 'q5',
                question: "How many languages are supported by Lumen5's auto-generated captions?",
                options: [
                  "5",
                  "10",
                  "20+",
                  "100+"
                ],
                correctAnswer: 2
              }
            ]
          },
          { 
            id: 22, 
            title: 'Day 22: TeacherMatic Challenge', 
            duration: '20 min read', 
            color: 'text-purple-600', 
            bg: 'bg-purple-50/50',
            quizData: [
              {
                id: 'q1',
                question: "What is the primary goal of TeacherMatic?",
                options: [
                  "To replace teachers with AI robots",
                  "To streamline lesson planning, worksheet creation, and assessment design",
                  "To manage school cafeteria schedules",
                  "To provide games for students to play during lunch"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "According to the challenge, how much time can TeacherMatic save on lesson planning compared to traditional methods?",
                options: [
                  "10%",
                  "50%",
                  "85%",
                  "100%"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "Which TeacherMatic feature allows educators to define assessment criteria and auto-generate editable benchmarks?",
                options: [
                  "Lesson Plan Generator",
                  "Worksheet Builder",
                  "Rubric Creator",
                  "Quiz Maker"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "What is the benefit of the 'Batch Create' pro tip?",
                options: [
                  "It generates music for the classroom",
                  "It allows preparing a month's worth of materials in one session",
                  "It deletes old lesson plans",
                  "It organizes student field trips"
                ],
                correctAnswer: 1
              },
              {
                id: 'q5',
                question: "Which differentiation level includes 'Extension activities, critical thinking prompts, and independent research tasks'?",
                options: [
                  "Beginner",
                  "Intermediate",
                  "Advanced",
                  "Special Needs"
                ],
                correctAnswer: 2
              }
            ]
          },
          { 
            id: 23, 
            title: 'Day 23: Fetchy Challenge', 
            duration: '20 min read', 
            color: 'text-indigo-600', 
            bg: 'bg-indigo-50/50',
            quizData: [
              {
                id: 'q1',
                question: "What is the primary role of Fetchy for educators?",
                options: [
                  "To replace teachers in the classroom",
                  "To act as a virtual assistant that automates administrative tasks and generates resources",
                  "To manage school sports events",
                  "To provide music for student dances"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "Which Fetchy feature helps teachers send polished and empathetic messages to parents in seconds?",
                options: [
                  "Lesson Plan Generator",
                  "Email Draft Assistant",
                  "Worksheet Creator",
                  "Meeting Agenda Builder"
                ],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: "According to the challenge, how much time can Fetchy save on drafting parent emails compared to traditional methods?",
                options: [
                  "20%",
                  "50%",
                  "90%",
                  "100%"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "What is the purpose of the 'Batch Tasks' pro tip in Fetchy?",
                options: [
                  "To create all lesson plans and parent emails for the entire week in one session",
                  "To delete old emails automatically",
                  "To play games with students",
                  "To organize school assemblies"
                ],
                correctAnswer: 0
              },
              {
                id: 'q5',
                question: "Which of the following is a tool mentioned within the Email Draft Assistant?",
                options: [
                  "Weather Reports",
                  "Behavioral Notes",
                  "Budget Planning",
                  "Social Media Posting"
                ],
                correctAnswer: 1
              }
            ]
          },
          { 
            id: 24, 
            title: 'Day 24: Ellie AI Challenge', 
            duration: '20 min read', 
            color: 'text-indigo-600', 
            bg: 'bg-indigo-50/50',
            quizData: [
              {
                id: 'q1',
                question: "According to the challenge, what is the primary purpose of Ellie AI for educators?",
                options: [
                  "To automate administrative tasks, generate personalized materials, and provide data-driven insights",
                  "To replace the need for physical textbooks entirely",
                  "To provide a platform for student social media interaction",
                  "To manage the school's heating and cooling systems"
                ],
                correctAnswer: 0
              },
              {
                id: 'q2',
                question: "Which Ellie AI feature is designed to identify at-risk students early through AI-generated analytics?",
                options: [
                  "Smart Lesson Planner",
                  "Auto-Quiz Generator",
                  "Student Progress Dashboard",
                  "Pedagogical Chatbot"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "How much planning time can be cut by using Ellie AI's Smart Lesson Planner with standards-aligned content?",
                options: [
                  "10%",
                  "30%",
                  "70%",
                  "100%"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "What is the benefit of the 'Pedagogical Chatbot' feature?",
                options: [
                  "It answers phone calls from parents",
                  "It provides on-demand professional development and teaching strategies",
                  "It orders classroom supplies automatically",
                  "It schedules school bus routes"
                ],
                correctAnswer: 1
              },
              {
                id: 'q5',
                question: "According to the weekly time savings breakdown, how much time can Ellie AI save on essay grading compared to traditional methods?",
                options: [
                  "25%",
                  "50%",
                  "85%+",
                  "10%"
                ],
                correctAnswer: 2
              }
            ]
          },
          { 
            id: 25, 
            title: 'Day 25: Gradescope Challenge', 
            duration: '20 min read', 
            color: 'text-indigo-600', 
            bg: 'bg-indigo-50/50',
            quizData: [
              {
                id: 'q1',
                question: "What is the primary benefit of Gradescope's 'AI Answer Groups' feature?",
                options: [
                  "It provides students with free snacks",
                  "It allows educators to grade batches of similar responses in one action",
                  "It generates new textbooks automatically",
                  "It schedules school field trips"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "How much grading time can be saved for 'Programming Assignments' using Gradescope's auto-grading tools?",
                options: [
                  "10%",
                  "35%",
                  "70%+",
                  "100%"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "Which Gradescope feature helps reduce unconscious bias by hiding student names during the grading process?",
                options: [
                  "Dynamic Rubrics",
                  "AI Answer Groups",
                  "Anonymous Grading",
                  "Analytics Dashboard"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "What happens when you edit a rubric item in Gradescope using the 'Rubric Hack' mentioned in the pro tips?",
                options: [
                  "The entire assignment is deleted",
                  "Only the current student's score is updated",
                  "It automatically updates the scores for all students already graded with that item",
                  "It sends an email to the school principal"
                ],
                correctAnswer: 2
              },
              {
                id: 'q5',
                question: "Which subject areas are supported by Gradescope according to the 'Works Across All Subjects' section?",
                options: [
                  "Only English Literature",
                  "Only Physical Education",
                  "Math, Physics, CS, and Engineering",
                  "Only Art History"
                ],
                correctAnswer: 2
              }
            ]
          },
          { 
            id: 26, 
            title: 'Day 26: Turnitin AI Feedback Challenge', 
            duration: '20 min read', 
            color: 'text-indigo-600', 
            bg: 'bg-indigo-50/50',
            quizData: [
              {
                id: 'q1',
                question: "What is the primary purpose of Turnitin's 'Originality Report'?",
                options: [
                  "To check the spelling of student names",
                  "To identify uncited content or potential plagiarism by comparing work against a vast database",
                  "To generate new essay topics for students",
                  "To track student attendance"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "According to the challenge, what do the different highlight colors in AI Feedback represent?",
                options: [
                  "Blue for grammar, Green for style, Red for plagiarism",
                  "Red for grammar, Blue for style, Green for plagiarism",
                  "Green for grammar, Red for style, Blue for plagiarism",
                  "Yellow for everything"
                ],
                correctAnswer: 0
              },
              {
                id: 'q3',
                question: "Which Turnitin feature is specifically designed to let students resubmit improved drafts based on AI suggestions?",
                options: [
                  "Originality Report",
                  "EKG Metrics",
                  "Revision Assistant",
                  "QuickMarks Library"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "What does the 'E' in EKG Metrics stand for in the context of student writing analytics?",
                options: [
                  "Efficiency",
                  "Engagement (time spent on feedback)",
                  "Electronics",
                  "Environment"
                ],
                correctAnswer: 1
              },
              {
                id: 'q5',
                question: "Approximately how much time can be saved on 'Grammar & Style Editing' using Turnitin's AI feedback tools?",
                options: [
                  "10%",
                  "35%",
                  "80%+",
                  "50%"
                ],
                correctAnswer: 2
              }
            ]
          },
          { 
            id: 27, 
            title: 'Day 27: Edthena AI Coach Challenge', 
            duration: '20 min read', 
            color: 'text-indigo-600', 
            bg: 'bg-indigo-50/50',
            quizData: [
              {
                id: 'q1',
                question: "What is the primary purpose of Edthena AI Coach for educators?",
                options: [
                  "To record student lunch breaks",
                  "To analyze classroom videos and provide personalized feedback for teaching refinement",
                  "To replace physical classroom observations by principals",
                  "To edit movies for the school film club"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "Which focus area allows AI to process a video and distribution of high-level vs. low-level questions?",
                options: [
                  "Classroom Management",
                  "Lesson Pacing",
                  "Questioning Techniques",
                  "Student Engagement"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "According to the sample feedback report, what is the recommended wait time for teachers after asking a question?",
                options: [
                  "0.5 seconds",
                  "1.2 seconds",
                  "3-5 seconds",
                  "10 minutes"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "Which pro tip suggests using AI-generated transcripts to eliminate filler words?",
                options: [
                  "Focus Daily",
                  "Track Progress",
                  "Edit the Script",
                  "Collaborative PD"
                ],
                correctAnswer: 2
              },
              {
                id: 'q5',
                question: "What is the 'Confidence Builder' benefit of Edthena AI Coach?",
                options: [
                  "It gives teachers free coffee",
                  "It offers non-judgmental, actionable suggestions in a private space",
                  "It guarantees a salary raise",
                  "It makes the classroom lights brighter"
                ],
                correctAnswer: 1
              }
            ]
          },
          { 
            id: 28, 
            title: 'Day 28: Loop AI Challenge', 
            duration: '20 min read', 
            color: 'text-indigo-600', 
            bg: 'bg-indigo-50/50',
            quizData: [
              {
                id: 'q1',
                question: "What is the primary purpose of the 'Confusion Heatmap' in Loop AI?",
                options: [
                  "To track student attendance",
                  "To visualize class understanding and identify concepts causing the most confusion in real-time",
                  "To generate lunch menus for the cafeteria",
                  "To edit student videos"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "Which Loop AI feature uses AI to cluster similar student queries during a live session?",
                options: [
                  "Knowledge Gaps",
                  "Sentiment Analysis",
                  "Live Q&A",
                  "Peer Loop"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "According to the 'Assign Interventions' step, which of these is an AI-recommended resource for reteaching?",
                options: [
                  "Physical textbooks",
                  "Practice quizzes and targeted videos",
                  "School field trip schedules",
                  "Empty notebooks"
                ],
                correctAnswer: 1
              },
              {
                id: 'q4',
                question: "What benefit does 'Anonymous Mode' provide during live Loop AI sessions?",
                options: [
                  "It hides the teacher's name from students",
                  "It encourages struggling students to ask questions without fear of judgment",
                  "It deletes all student data instantly",
                  "It makes the screen turn black"
                ],
                correctAnswer: 1
              },
              {
                id: 'q5',
                question: "How can Loop AI be combined with existing school systems for better efficiency?",
                options: [
                  "By printing all data on paper",
                  "By integrating with an LMS like Canvas or Google Classroom to sync rosters and grades",
                  "By deleting the LMS entirely",
                  "By using only hand-drawn diagrams"
                ],
                correctAnswer: 1
              }
            ]
          }
        ]
      }
    ]
  },
  'AI for Developers': {
    icon: Code2,
    color: '#2563eb',
    modules: [
      {
        id: 1,
        title: 'Module 1: AI Coding Assistants',
        days: [
          { id: 1, title: 'Day 1: GitHub Copilot & Cursor', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' },
          { id: 2, title: 'Day 2: Claude Dev & Anthropic', duration: '15 min read', color: 'text-orange-600', bg: 'bg-orange-50/50' }
        ]
      },
      {
        id: 2,
        title: 'Module 2: Rapid Prototyping',
        days: [
          { id: 3, title: 'Day 3: Vercel V0 & UI Generation', duration: '20 min read', color: 'text-slate-900', bg: 'bg-slate-50/50' },
          { id: 4, title: 'Day 4: Replit Agent & Fullstack', duration: '25 min read', color: 'text-red-600', bg: 'bg-red-50/50' }
        ]
      },
      {
        id: 3,
        title: 'Module 3: Backend & Data',
        days: [
          { id: 5, title: 'Day 5: Supabase AI & DB Design', duration: '30 min read', color: 'text-emerald-600', bg: 'bg-emerald-50/50' },
          { id: 6, title: 'Day 6: Pinecone & Vector DBs', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      },
      {
        id: 4,
        title: 'Module 4: Advanced AI Apps',
        days: [
          { id: 7, title: 'Day 7: LangChain & Agents', duration: '25 min read', color: 'text-purple-600', bg: 'bg-purple-50/50' },
          { id: 8, title: 'Day 8: OpenAI Function Calling', duration: '20 min read', color: 'text-green-600', bg: 'bg-green-50/50' }
        ]
      },
      {
        id: 5,
        title: 'Module 5: Deployment',
        days: [
          { id: 9, title: 'Day 9: AI Monitoring & Analytics', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      }
    ]
  },
  'AI for Designers': {
    icon: Palette,
    color: '#ec4899',
    modules: [
      {
        id: 1,
        title: 'Module 1: Visual Generation',
        days: [
          { id: 1, title: 'Day 1: Midjourney Mastery', duration: '20 min read', color: 'text-pink-600', bg: 'bg-pink-50/50' },
          { id: 2, title: 'Day 2: Adobe Firefly & Photoshop', duration: '15 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      },
      {
        id: 2,
        title: 'Module 2: Design Systems',
        days: [
          { id: 3, title: 'Day 3: Canva Magic Studio', duration: '20 min read', color: 'text-purple-600', bg: 'bg-purple-50/50' },
          { id: 4, title: 'Day 4: Figma AI & UI Design', duration: '25 min read', color: 'text-blue-500', bg: 'bg-blue-50/50' }
        ]
      },
      {
        id: 3,
        title: 'Module 3: Motion & 3D',
        days: [
          { id: 5, title: 'Day 5: Runway & Video Gen', duration: '30 min read', color: 'text-slate-900', bg: 'bg-slate-50/50' },
          { id: 6, title: 'Day 6: Spline AI & 3D Design', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      },
      {
        id: 4,
        title: 'Module 4: Web & Layout',
        days: [
          { id: 7, title: 'Day 7: Framer AI Site Building', duration: '25 min read', color: 'text-indigo-600', bg: 'bg-indigo-50/50' },
          { id: 8, title: 'Day 8: Luma AI & 3D Capture', duration: '20 min read', color: 'text-orange-600', bg: 'bg-orange-50/50' }
        ]
      },
      {
        id: 5,
        title: 'Module 5: Advanced workflows',
        days: [
          { id: 9, title: 'Day 9: Stable Diffusion Control', duration: '20 min read', color: 'text-pink-600', bg: 'bg-pink-50/50' }
        ]
      }
    ]
  },
  'AI for Content Creators': {
    icon: Video,
    color: '#16a34a',
    modules: [
      {
        id: 1,
        title: 'Module 1: Text & Copy',
        days: [
          { id: 1, title: 'Day 1: Jasper & Copywriting', duration: '20 min read', color: 'text-green-600', bg: 'bg-green-50/50' },
          { id: 2, title: 'Day 2: Notion AI & Productivity', duration: '15 min read', color: 'text-slate-900', bg: 'bg-slate-50/50' }
        ]
      },
      {
        id: 2,
        title: 'Module 2: Video Production',
        days: [
          { id: 3, title: 'Day 3: Descript AI Editing', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' },
          { id: 4, title: 'Day 4: HeyGen & AI Avatars', duration: '25 min read', color: 'text-purple-600', bg: 'bg-purple-50/50' }
        ]
      },
      {
        id: 3,
        title: 'Module 3: Audio & Social',
        days: [
          { id: 5, title: 'Day 5: ElevenLabs Voice Clone', duration: '30 min read', color: 'text-orange-600', bg: 'bg-orange-50/50' },
          { id: 6, title: 'Day 6: CapCut AI for Social', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      },
      {
        id: 4,
        title: 'Module 4: Podcasts & Music',
        days: [
          { id: 7, title: 'Day 7: Riverside & Podcast AI', duration: '25 min read', color: 'text-red-600', bg: 'bg-red-50/50' },
          { id: 8, title: 'Day 8: Suno AI & Music Gen', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      },
      {
        id: 5,
        title: 'Module 5: Automation',
        days: [
          { id: 9, title: 'Day 9: InVideo Automated Video', duration: '20 min read', color: 'text-green-600', bg: 'bg-green-50/50' }
        ]
      }
    ]
  },
  'AI for Educators (Advanced)': {
    icon: Pencil,
    color: '#a855f7',
    modules: [
      {
        id: 1,
        title: 'Module 1: Advanced Implementation',
        days: [
          { 
            id: 1, 
            title: 'Day 1: Building Custom GPTs for Schools', 
            duration: '25 min read', 
            color: 'text-brand-primary', 
            bg: 'bg-blue-50/50',
            quizData: [
              {
                id: 'q1',
                question: "What is the main advantage of creating a Custom GPT for a specific subject area?",
                options: [
                  "It makes the AI faster",
                  "It allows you to provide specialized context and instructions that persist across conversations",
                  "It is cheaper than using the standard ChatGPT",
                  "It automatically grades students' work"
                ],
                correctAnswer: 1
              }
            ]
          },
          { 
            id: 2, 
            title: 'Day 2: AI Agents & Automation with Zapier', 
            duration: '30 min read', 
            color: 'text-orange-600', 
            bg: 'bg-orange-50/50' 
          }
        ]
      },
      {
        id: 2,
        title: 'Module 2: Data & Strategy',
        days: [
          { 
            id: 3, 
            title: 'Day 3: RAG Systems for School Databases', 
            duration: '35 min read', 
            color: 'text-emerald-600', 
            bg: 'bg-emerald-50/50' 
          },
          { 
            id: 4, 
            title: 'Day 4: AI Ethics, Bias & Policy Frameworks', 
            duration: '20 min read', 
            color: 'text-red-600', 
            bg: 'bg-red-50/50' 
          }
        ]
      }
    ]
  },
  'AI for Designers (Advanced)': {
    icon: Palette,
    color: '#ec4899',
    modules: [
      {
        id: 1,
        title: 'Module 1: Generative Systems',
        days: [
          { id: 1, title: 'Day 1: Generative Design Systems', duration: '20 min read', color: 'text-pink-600', bg: 'bg-pink-50/50' },
          { id: 2, title: 'Day 2: AI-Powered UX Research', duration: '15 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      }
    ]
  },
  'AI for Developers (Advanced)': {
    icon: Code2,
    color: '#2563eb',
    modules: [
      {
        id: 1,
        title: 'Module 1: LLM Engineering',
        days: [
          { id: 1, title: 'Day 1: LLM Fine-tuning & Optimization', duration: '30 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' },
          { id: 2, title: 'Day 2: Building Autonomous Agents', duration: '25 min read', color: 'text-orange-600', bg: 'bg-orange-50/50' }
        ]
      }
    ]
  }
};
