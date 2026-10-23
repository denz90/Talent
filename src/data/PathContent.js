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
                correctAnswer: 2
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
                correctAnswer: 2
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
                correctAnswer: 2
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
                correctAnswer: 3
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
                correctAnswer: 3
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
                correctAnswer: 2
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
                correctAnswer: 3
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
                correctAnswer: 2
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
                correctAnswer: 3
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
                correctAnswer: 2
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
                correctAnswer: 2
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
                correctAnswer: 3
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
                correctAnswer: 2
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
                correctAnswer: 3
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
                correctAnswer: 2
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
                correctAnswer: 2
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
                correctAnswer: 3
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
                correctAnswer: 3
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
                correctAnswer: 2
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
                correctAnswer: 3
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
                correctAnswer: 2
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
                correctAnswer: 3
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
                correctAnswer: 4
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
                correctAnswer: 2
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
                correctAnswer: 3
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
                correctAnswer: 2
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
                correctAnswer: 3
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
                correctAnswer: 3
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
                correctAnswer: 2
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
                correctAnswer: 4
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
                correctAnswer: 2
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
                correctAnswer: 2
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
                correctAnswer: 4
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
                correctAnswer: 2
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
                correctAnswer: 3
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
                question: "According to the challenge, what type of tool is Brisk Teaching, and where does it need to be installed?",
                options: [
                  "A paid desktop application that requires monthly subscription and download",
                  "A free AI-powered Chrome extension installed from the Chrome Web Store",
                  "A web-based platform accessed directly through any internet browser",
                  "A mobile app for iOS and Android that connects to Google Classroom"
                ],
                correctAnswer: 2
              },
              {
                id: 2,
                question: "A teacher wants to give a struggling student encouraging written feedback on their essay using Brisk Teaching. Which sequence of steps should the teacher follow?",
                options: [
                  "Upload essay as PDF → Click 'AI Detection' → Review highlighted sections",
                  "Open Google Doc → Click Brisk icon → Sign in → Highlight paragraph → Click 'Feedback' → Choose 'Praise' → Edit → Insert",
                  "Open news article → Click 'Generate Quiz' → Export to Google Forms",
                  "Paste text → Click 'Simplify' → Adjust reading level → Download"
                ],
                correctAnswer: 2
              },
              {
                id: 3,
                question: "A teacher runs the AI detector on a student essay and gets a result of 80% or higher. According to the challenge, what should the teacher reflect on?",
                options: [
                  "How to improve the essay's grammar and sentence structure using Brisk",
                  "How to simplify the essay to a lower reading grade level",
                  "How they would address a student with 80%+ AI detection",
                  "How to export the essay results to Google Classroom for record-keeping"
                ],
                correctAnswer: 3
              },
              {
                id: 4,
                question: "A teacher wants to differentiate a science article for Grade 6 students. What should they do in Brisk Teaching to achieve this?",
                options: [
                  "Open the article → Click 'Generate Quiz' → Select Grade 6 difficulty",
                  "Paste the science article into Brisk → Click 'Simplify' to Grade 6 level",
                  "Upload the article as PDF → Click 'AI Detection' → Choose Grade 6 filter",
                  "Highlight key sentences → Click 'Feedback' → Choose 'Constructive' tone"
                ],
                correctAnswer: 2
              },
              {
                id: 5,
                question: "The Pro Tips section of the challenge recommends a strategy for saving time when grading multiple student essays. What is this time-saving tip?",
                options: [
                  "Download all essays as a ZIP file and process them in one batch upload",
                  "Use the AI Detection tool first to filter out AI-written work before grading",
                  "Batch-grade essays by opening multiple Google Docs in separate tabs",
                  "Share all essays with a colleague for co-grading using the Collaboration feature"
                ],
                correctAnswer: 3
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
                correctAnswer: 2
              },
              {
                id: 2,
                question: "According to the challenge, how does Snorkl specifically support ELL and neurodiverse learners?",
                options: [
                  "It translates all student responses into the teacher's preferred language automatically",
                  "It provides visual flashcards and graphic organizers for complex topics",
                  "It reduces reliance on written responses by allowing verbal submissions",
                  "It generates simplified text versions of assignments for struggling readerss"
                ],
                correctAnswer: 3
              },
              {
                id: 3,
                question: "What THREE elements does the AI analyze when reviewing a student's verbal submission?",
                options: [
                  "Volume, speaking speed, and pronunciation accuracy",
                  "Keywords, clarity, and gaps in the student's spoken response",
                  "Grammar, spelling, and sentence structure from the transcript",
                  "Engagement level, eye contact, and body language from video"
                ],
                correctAnswer: 2
              },
              {
                id: 4,
                question: "The Practical Challenge Task requires teachers to set up a rubric. According to the challenge, which THREE criteria should the rubric include?",
                options: [
                  "Grammar, Spelling, and Sentence Length",
                  "Creativity, Enthusiasm, and Eye Contact",
                  "Accuracy, Use of Vocabulary, and Clarity",
                  "Duration, Fluency, and Topic Coverage"
                ],
                correctAnswer: 3
              },
              {
                id: 5,
                question: "The Pro Tips section suggests a strategy called 'Flip Feedback.' According to the challenge, what does this approach involve?",
                options: [
                  "Having teachers record verbal feedback instead of writing comments",
                  "Swapping student essays between classrooms for peer grading",
                  "Having students review their own transcripts to self-assess their thinking",
                  "Using Snorkl data to flip the classroom by assigning recordings as homework"
                ],
                correctAnswer: 3
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
                correctAnswer: 2
              },
              {
                id: 2,
                question: "The Practical Challenge Task asks teachers to analyze AI feedback after grading three essays. What exactly should a teacher note about each essay, according to the task instructions?",
                options: [
                  "The word count, sentence length, and overall reading level of each essay",
                  "Two strengths and weaknesses per essay (e.g., 'Strong thesis but weak citations')",
                  "The plagiarism percentage and grammar score for each submission",
                  "The time taken to grade each essay compared to manual grading"
                ],
                correctAnswer: 2
              },
              {
                id: 3,
                question: "According to the Practical Challenge Task, what specific action should a teacher take when manually enhancing feedback on a chosen essay?",
                options: [
                  "Rewrite the entire AI-generated feedback from scratch using the teacher's own words",
                  "Lower the rubric score to match the teacher's personal grading standard",
                  "Add 2 personalized comments (e.g., 'Expand on this example for clarity')",
                  "Delete all AI comments and replace them with standard written remarks"
                ],
                correctAnswer: 3
              },
              {
                id: 4,
                question: "According to the challenge, how does EssayGrader.ai specifically support ESL (English as a Second Language) students?",
                options: [
                  "It automatically translates essays into the student's native language for comparison",
                  "It provides clear language improvement suggestions through the 'Language Simplifier' feedback",
                  "It generates bilingual versions of grading rubrics for non-native speakers",
                  "It reduces the grammar weighting in rubrics for students still developing English skills"
                ],
                correctAnswer: 2
              },
              {
                id: 5,
                question: "The Pro Tips section recommends a strategy called 'Batch Grading.' What does this involve and when is it most useful?",
                options: [
                  "Grading one essay per day consistently throughout the school term",
                  "Pairing each student's essay with a peer review before AI grading",
                  "Uploading 50+ essays at once, which is particularly efficient at end-of-termI",
                  "Having a co-teacher review AI grades before sharing results with students"
                ],
                correctAnswer: 3
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
                correctAnswer: 2
              },
              {
                id: 2,
                question: "According to the challenge, Quizizz 'Boosts Engagement' by turning tests into multiplayer games. Which two specific gamification elements are mentioned?",
                options: [
                  "Timers and certificates of achievement",
                  "Badges and progress bars",
                  "Memes and leaderboards",
                  "Avatars and reward points"
                ],
                correctAnswer: 3
              },
              {
                id: 3,
                question: "The Adaptive Learning feature adjusts question difficulty based on student performance. What must a teacher do to activate this feature?",
                options: [
                  "Upload a class roster so the AI can track individual student data",
                  "Set a minimum score threshold before the difficulty changes",
                  "Enable 'Adaptive Mode' in the quiz settings",
                  "Select 'Advanced' difficulty when generating the initial quiz"
                ],
                correctAnswer: 3
              },
              {
                id: 4,
                question: "After running a live quiz session, a teacher reviews the Reports section. What specific data analysis should the teacher perform?",
                options: [
                  "Calculate the class average score and compare it to the previous quiz",
                  "Identify the 2 most-missed questions and note why students may have struggled",
                  "Export the CSV data and upload it to the school's grade management system",
                  "Check how many students used Power-Ups and whether it improved their scores"
                ],
                correctAnswer: 2
              },
              {
                id: 5,
                question: "According to the Pro Tips section, how can a teacher celebrate student progress and motivate learners after a quiz using a fun customization feature?",
                options: [
                  "Customize post-quiz memes via Settings → Meme Library to celebrate progress",
                  "Sync quiz results with Google Classroom to automatically post scores on the grade portal",
                  "Enable Power-Ups like '50/50' or 'time freeze' during the quiz session",
                  "Share the class leaderboard screenshot on the school's social media page"
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
                correctAnswer: 2
              },
              {
                id: 2,
                question: "What does the 'Student Progress' tab in the Teacher Dashboard show educators?",
                options: [
                  "A leaderboard ranking students by quiz scores and completion rates",
                  "GA list of all assignments submitted with timestamps and file attachments",
                  "Attendance records and participation rates for each student",
                  "Khanmigo-flagged misconceptions, such as which students are confused about specific concepts"
                ],
                correctAnswer: 4
              },
              {
                id: 3,
                question: "According to the Practical Challenge Task, what specific criteria should a teacher use when asking Khanmigo to build a rubric for the debate activity?",
                options: [
                  "Clarity and evidence",
                  "Accuracy, Use of Vocabulary, and Clarity",
                  "Grammar, structure, and argument strength",
                  "Critical thinking, creativity, and collaboration"
                ],
                correctAnswer: 1
              },
              {
                id: 4,
                question: "In the Practical Challenge Task, students are asked to seek tutoring help from Khanmigo. What specific question should students ask, and what key tip does the AI provide?",
                options: [
                  "Ask 'How do I structure a persuasive argument?' and the AI tip is 'Use claim-evidence-reasoning'",
                  "Ask 'How do I write an introduction?' and the AI suggests using a hook sentence",
                  "Ask 'Can you give me an example debate?' and the AI generates a sample transcript",
                  "Ask 'What is a debate?' and the AI provides a dictionary definition"
                ],
                correctAnswer: 1
              },
              {
                id: 5,
                question: "WAccording to the Pro Tips section, how can a teacher get the best results when using the Lesson Planner in Khanmigo?",
                options: [
                  "Keep prompts short and general so the AI has creative freedom to generate varied content",
                  "Upload a class roster so Khanmigo can personalize lessons to individual student needs",
                  "Use specific prompts that include duration, topic, and learner type — for example, 'Generate a 3-day lesson on quadratic equations for visual learners'",
                  "Always start with a preset template and then ask the AI to make minor adjustments"
                ],
                correctAnswer: 3
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
                correctAnswer: 2
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
                correctAnswer: 3
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
                correctAnswer: 2
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
                correctAnswer: 3
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
                correctAnswer: 2
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
                correctAnswer: 2
              },
              {
                id: 3,
                question: "How can a teacher invite students to join a SchoolAI Space?",
                options: [
                  "Teachers click 'Share' and copy the join link or generate QR codes",
                  "Students must be manually added by entering each individual email address",
                  "Students search for the Space by name and request access from the teacher",
                  "Teachers export a PDF invitation and distribute it via email or print"
                ],
                correctAnswer: 1
              },
              {
                id: 4,
                question: "According to the Analytics Dashboard feature in the challenge, what type of visual data does it provide to help educators identify learning gaps?",
                options: [
                  "Bar charts showing quiz scores sorted by student performance rank",
                  "Heatmaps of student activity and time spent on tasks",
                  "Pie charts displaying subject area coverage across the school year",
                  "Line graphs tracking individual student progress over multiple sessions"
                ],
                correctAnswer: 1
              },
              {
                id: 5,
                question: "What is the 'Student-Led Design' strategy recommended for Mastery of SchoolAI Spaces?",
                options: [
                  "Having students vote on which Space templates they want the teacher to use for upcoming lessons",
                  "Training students to moderate AI bot conversations and flag incorrect responses",
                  "Assigning students to test and evaluate each other's completed Spaces for usability",
                  "Allowing students to co-create Spaces as a peer teaching activity"
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
                question: "According to the challenge description, what is Kahoot! AI and which AI model powers it?",
                options: [
                  "A manual quiz builder that uses pre-loaded question banks created by teachers",
                  "An AI-powered question generator that uses OpenAI's GPT-4 model to convert content into interactive quizzes",
                  "A video lesson platform powered by Google Gemini for creating recorded tutorials",
                  "A digital flashcard tool that uses machine learning to personalise revision schedules"
                ],
                correctAnswer: 2
              },
              {
                id: 'q2',
                question: "According to the challenge's Step 3 (Customise Generation Settings), a teacher wants to create a quiz for students who are finding the topic difficult. Which Skill Level setting should they select?",
                options: [
                  "Intermediate, because it is the balanced middle option",
                  "Advanced, because it prepares struggling learners for harder content",
                  "Beginner, because it differentiates for students at that level",
                  "Expert, because the challenge recommends pushing all learners further"
                ],
                correctAnswer: 3
              },
              {
                id: 'q3',
                question: "The Pro Tips section warns teachers about one important limitation of Kahoot! AI-generated content. What is it, and what should teachers do about it?",
                options: [
                  "AI only supports English; teachers must manually translate questions for multilingual classes",
                  "AI can occasionally produce incorrect information; teachers should always review questions carefully before using them",
                  "AI-generated quizzes expire after 24 hours; teachers must regenerate them before each lesson",
                  "AI cannot generate image descriptions; teachers must add all visuals manually after generation"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "A teacher wants to create a Kahoot! quiz about a breaking news story that happened this morning. Which input method and feature should they use?",
                options: [
                  "PDF Upload — scan a printout of the news article and upload it",
                  "Wikipedia Integration — search for the news event title on Wikipedia",
                  "Perplexity Integration — type the current event topic so AI pulls real-time information",
                  "Topic-to-Quiz — type the news headline and generate from the AI's existing training data"
                ],
                correctAnswer: 3
              },
              {
                id: 'q5',
                question: "According to the Pro Tips section, a teacher wants to reward careful thinking rather than speed during a complex topic quiz. Which feature should they enable?",
                options: [
                  "Confidence Mode — students rate how sure they are of each answer",
                  "Accessibility Settings — adjust the display for inclusive play",
                  "Accuracy Mode — turn off speed scoring to reward thoughtful analysis over quick reactions",
                  "Flipped Classroom Mode — generate pre-lesson quizzes from textbook PDFs"
                ],
                correctAnswer: 3
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
                question: "According to the challenge, what is the primary purpose of Scribble Diffusion for educators?",
                options: [
                  "To automatically grade student sketches",
                  "To transform rough hand-drawn sketches into polished digital illustrations",
                  "To replace traditional art teachers with AI", 
                  "To generate full lesson plans from a single drawing"
                ],
                correctAnswer: 2
              },
              {
                id: 'q2',
                question: "A teacher wants to help a student with motor skill challenges participate in a visual art activity. Which benefit of Scribble Diffusion directly supports this need?",
                options: [
                  "It supports inclusive learning for non-artists or students with motor skill challenges",
                  "It requires advanced drawing skills to work properly",
                  "It only works with typed descriptions, not drawings", 
                  "It automatically animates all student drawings"
                ],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: "Which Pro Tip from the challenge suggests a way to improve accuracy when using Scribble Diffusion?",
                options: [
                  "Use the darkest pencil possible",
                  "Draw only geometric shapes",
                  "Sketch over a reference image for accuracy", 
                  "Never redraw messy lines"
                ],
                correctAnswer: 3
              },
              {
                id: 'q4',
                question: "According to the challenge, what should a teacher do if the AI output from Scribble Diffusion isn’t perfect?",
                options: [
                  "Delete the sketch and start a new lesson",
                  "Redraw messy lines and retry",
                  "Blame the students for poor drawing", 
                  "Use a different AI tool without retrying"
                ],
                correctAnswer: 2
              },
              {
                id: 'q5',
                question: "The challenge suggests using Scribble Diffusion to visualize which of the following types of abstract concepts?",
                options: [
                  "Mathematical formulas only",
                  "Science diagrams and historical scenes",
                  "Musical notation", 
                  "Sports statistics"
                ],
                correctAnswer: 2
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
                question: "According to the challenge, what is the primary purpose of Parlay for educators?",
                options: [
                  "To automatically grade written essays", 
                  "To create structured, inclusive, and data-rich student debates called RoundTables", 
                  "To replace teachers during class discussions", 
                  "To generate video lectures for students"
                ],
                correctAnswer: 2
              },
              {
                id: 'q2',
                question: "A teacher has several shy students who rarely speak during class debates. Which Parlay feature is specifically designed to support quieter students?",
                options: [
                  "AI Feedback only",
                  "Anonymous Mode only",
                  "Written Mode (students type responses instead of speaking)", 
                  "Custom Rubrics"
                ],
                correctAnswer: 3
              },
              {
                id: 'q3',
                question: "During a live RoundTable discussion, how can a teacher encourage a specific quiet student to participate according to the challenge?",
                options: [
                  "Call on the student publicly in front of the class only",
                  "Use the Teacher Dashboard to send private nudges",
                  "Wait until the discussion ends to email the student", 
                  "Disable anonymous mode to identify the student"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "After a Parlay discussion session ends, where can a teacher find AI-detected common misconceptions from students?",
                options: [
                  "In the Custom Rubrics section",
                  "On the join code screen",
                  "In the Analytics Tab under AI insights", 
                  "Inside the Written Mode settings"
                ],
                correctAnswer: 3
              },
              {
                id: 'q5',
                question: "According to the Pro Tips for Mastery, what is one suggested way to prepare students before using Parlay?",
                options: [
                  "Have them memorize discussion questions in advance",
                  "Use Parlay's 'Discussion Skills' mini-lessons to teach active listening",
                  "Require students to install third-party recording software", 
                  "Disable all rubrics to reduce pressure"
                ],
                correctAnswer: 2
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
                question: "According to the challenge, what is the primary purpose of Read Along for educators?",
                options: [
                  "To replace English teachers completely", 
                  "To grade reading comprehension essays automatically", 
                  "To create animated story videos for students", 
                  "To help children improve reading skills through real-time speech recognition and feedback"
                ],
                correctAnswer: 4
              },
              {
                id: 'q2',
                question: "A teacher has students who need to practice reading but have limited internet access at home. Which Read Along feature directly addresses this challenge?",
                options: [
                  "Offline Access (no internet needed after initial download)", 
                  "Teacher Dashboard only", 
                  "Custom Word Lists only", 
                  "Multilingual Library only"
                ],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: "According to the Step-by-Step Getting Started Guide, what should a teacher enable to disable games and ensure focused reading practice?",
                options: [
                  "School Mode", 
                  "Anonymous Mode", 
                  "Reward System", 
                  "AI Prompt Generator"
                ],
                correctAnswer: 1
              },
              {
                id: 'q4',
                question: "A teacher wants to reinforce specific vocabulary from their current science unit on ecosystems. Which feature should they use according to the challenge?",
                options: [
                  "AI Reading Buddy only", 
                  "Custom Word Lists (upload vocabulary from current lessons)", 
                  "Multilingual Library only", 
                  "Reward System badges"
                ],
                correctAnswer: 2
              },
              {
                id: 'q5',
                question: "The Practical Challenge Task asks teachers to run a 3-day reading fluency experiment. On Day 2 of the intervention, what type of reading material should students use?",
                options: [
                  "Teacher's choice from the library", 
                  "App-selected story only", 
                  "Custom word list (e.g., 'science terms')", 
                  "Student's choice from library only"
                ],
                correctAnswer: 3
              },

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
                question: "According to the challenge, what is the primary purpose of Curipod for educators?",
                options: [
                  "To replace teachers with AI-generated lectures",
                  "To generate thought-provoking questions, polls, and activities that transform passive learning into dynamic student-led conversations",
                  "To automatically grade student essays",
                  "To create 3D animations for science lessons"
                ],
                correctAnswer: 2
              },
              {
                id: 'q2',
                question: "A teacher pastes their lesson topic into Curipod. What does the AI Discussion Generator produce according to the challenge?",
                options: [
                  "A full lesson plan with videos",
                  "Leveled questions based on Bloom's Taxonomy",
                  "A printable quiz with 50 questions",
                  "A student attendance report"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "During a live Curipod session, a teacher wants to instantly see the most common answers from the entire class. Which feature should they use?",
                options: [
                  "Reflection Journals",
                  "Parlay Integration",
                  "Live Word Clouds",
                  "Global Exchange"
                ],
                correctAnswer: 3
              },
              {
                id: 'q4',
                question: "According to the Pro Tips for Mastery, which mode should a teacher use to challenge class consensus and encourage deeper thinking?",
                options: [
                  "'Quiet Classroom' mode",
                  "'Devil's Advocate' mode",
                  "'Auto-Grade' mode",
                  "'Silent Reading' mode"
                ],
                correctAnswer: 2
              },
              {
                id: 'q5',
                question: "A teacher wants to connect their classroom with another classroom worldwide to compare debate outcomes. Which Curipod feature supports this?",
                options: [
                  "Reflection Journals only",
                  "Parlay Integration only",
                  "Global Exchange",
                  "Live Word Clouds only"
                ],
                correctAnswer: 3
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
                question: "According to the challenge, what is the primary purpose of Labster for educators?",
                options: [
                  "To replace all physical science teachers with AI",
                  "To provide immersive, interactive science simulations that replace or supplement physical labs with 3D environments",
                  "To grade student lab reports automatically",
                  "To livestream science experiments from real laboratories"
                ],
                correctAnswer: 2
              },
              {
                id: 'q2',
                question: "A teacher wants students to conduct a DNA sequencing experiment but lacks expensive lab equipment. Which Labster benefit directly addresses this problem?",
                options: [
                  "Gamification and rewards only",
                  "Safe and accessible virtual experiments (dangerous/expensive experiments done virtually)",
                  "AR Mode for mobile devices only",
                  "Pre-lab PDFs only"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "A teacher wants to view heatmaps of student attempts and quickly identify struggling students. Which Labster feature should they use?",
                options: [
                  "Lab Manuals",
                  "AR Mode",
                  "Teacher Dashboard",
                  "Assignments section only"
                ],
                correctAnswer: 3
              },
              {
                id: 'q4',
                question: "According to the Pro Tips for Mastery, which mode should a teacher use for struggling students who need more time and support?",
                options: [
                  "Expert Mode",
                  "Slow Mode",
                  "Quiz Mode",
                  "AR Mode"
                ],
                correctAnswer: 2
              },
              {
                id: 'q5',
                question: "A teacher wants to enhance kinesthetic learning by allowing students to interact with 3D lab equipment in their physical classroom space. Which Labster feature supports this?",
                options: [
                  "Lab Manuals only",
                  "Virtual Labs only",
                  "AR Mode (use mobile app to overlay 3D lab equipment onto real-world surfaces)",
                  "Teacher Dashboard only"
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
                question: "According to the challenge, what is the primary purpose of Lumen5 for educators?",
                options: [
                  "To replace video editors with professional film crews",
                  "To turn text (lesson plans, articles, scripts) into engaging educational videos using AI",
                  "To manage classroom behavior",
                  "To track school budgets"
                ],
                correctAnswer: 2
              },
              {
                id: 'q2',
                question: "What should a teacher select as their use case when signing up for Lumen5?",
                options: [
                  "Business",
                  "Marketing",
                  "Education",
                  "Entertainment"
                ],
                correctAnswer: 3
              },
              {
                id: 'q3',
                question: "A teacher wants to ensure their video is accessible for ESL students and compliant with accessibility standards. Which two features should they use according to the challenge?",
                options: [
                  "Voiceover and Captions (auto-captions supporting 20+ languages)",
                  "Brand Kit and Collaboration only",
                  "Media Library and Export only",
                  "AI Script-to-Video only"
                ],
                correctAnswer: 1
              },
              {
                id: 'q4',
                question: "Which template does Lumen5 offer for faster formatting of educational content?",
                options: [
                  "'Business Pitch' template",
                  "'Education Explainer' template",
                  "'Movie Trailer' template",
                  "News Report' template"
                ],
                correctAnswer: 2
              },
              {
                id: 'q5',
                question: "A teacher wants to maintain consistent school branding (colors and fonts) across all their educational videos. Which Lumen5 feature should they use?",
                options: [
                  " Voiceover & Captions",
                  "Media Library",
                  "Brand Kit (set school colors/fonts → apply to all videos automatically)",
                  "Collaboration"
                ],
                correctAnswer: 3
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
                question: "A teacher reports feeling burned out from repetitive lesson preparation tasks. Which benefit of TeacherMatic directly addresses this problem?",
                options: [
                  "Generates student report cards only",
                  "Reduces burnout by automating repetitive tasks",
                  "Provides free coffee vouchers",
                  "Schedules parent-teacher conferences automatically"
                ],
                correctAnswer: 2
              },
              {
                id: 'q2',
                question: "A teacher wants to create two versions of a worksheet on the same topic—one for beginners and one for advanced students. Which feature and action from the Practical Challenge Task supports this?",
                options: [
                  "Use the Quiz Maker to generate true/false questions only",
                  "Use the Worksheet Builder to make two versions (e.g., 'Beginner' and 'Advanced')",
                  "Use the Resource Bank to find pre-made exit tickets",
                  "Use the Rubric Creator to standardize grading"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "According to the Key Features table, what should a teacher do to standardize grading with clear benchmarks?",
                options: [
                  "Use the Quiz Maker to generate auto-graded quizzes",
                  "Use the Rubric Creator to auto-generate editable rubrics",
                  "Use the Lesson Plan Generator for structured plans",
                  "Use the Resource Bank to browse templates"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "How can a teacher prepare a week's worth of materials efficiently in one session?",
                options: [
                  "Use the Quiz Maker for all subjects at once",
                  "Batch create using the 'Resource Bank'",
                  "Generate lesson plans one day at a time",
                  "Manually type every worksheet from scratch"
                ],
                correctAnswer: 2
              },
              {
                id: 'q5',
                question: "A teacher wants to collaborate with colleagues to build a departmental resource hub. Which Pro Tip suggests a strategy for this?",
                options: [
                  "Share your library with colleagues to build a departmental resource hub",
                  "Keep all resources private and never share",
                  "Delete resources after each use",
                  "Use only printed materials instead of digital resources"
                ],
                correctAnswer: 1
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
                question: "According to the challenge, what is the primary purpose of Fetchy for educators?",
                options: [
                  "To automate administrative tasks, generate teaching resources, and enhance classroom productivity as a virtual assistant for teachers",
                  "To replace teachers with AI-powered virtual instructors",
                  "To grade student essays automatically",
                  "To create school lunch menus"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "A teacher needs to send a polished, empathetic progress update to a parent about a student named Alex. What should the teacher do after selecting 'Progress Update' from the Communications section?",
                options: [
                  "Immediately click send without editing",
                  "Fill in Student Name, Strengths, and Area for Growth, then click 'Generate Draft' and polish the tone",
                  "Delete the draft and write the email from scratch",
                  "Use the Lesson Plan Generator instead"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "The Practical Challenge Task asks teachers to automate one week of lesson prep. After generating 3 lesson plans and screenshotting the 'Standards Alignment' section, what is the next step?",
                options: [
                  "Delete all lesson plans immediately",
                  "Draft 2 emails (1 behavioral update + 1 curriculum preview) and share one email draft showing before/after AI refinement",
                  "Skip parent communication entirely",
                  "Generate only worksheets without any emails"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "According to the Key Features table, which Fetchy feature should a teacher use to keep team meetings focused and efficient by auto-generating discussion points and timelines?",
                options: [
                  "Lesson Plan Generator",
                  "Worksheet Creator",
                  "Meeting Agenda Builder",
                  "Email Draft Assistant"
                ],
                correctAnswer: 3
              },
              {
                id: 'q5',
                question: "A teacher wants to prepare all teaching materials for an entire week in one sitting. Which Pro Tip suggests a strategy for this?",
                options: [
                  "Use Fetchy every Monday to prep the entire week's materials (Batch Tasks)",
                  "Generate materials one day at a time only",
                  "Avoid using templates for recurring needs",
                  "Manually type every worksheet from scratch"
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
                  "To replace teachers with fully automated classrooms",
                  "To act as an AI-powered virtual assistant that automates administrative tasks, generates personalized learning materials, and provides data-driven insights",
                  "To create social media content for schools",
                  "To design school building floor plans"
                ],
                correctAnswer: 2
              },
              {
                id: 'q2',
                question: "A teacher reports spending over 8 hours weekly on repetitive tasks like emails and grading. Which benefit of Ellie AI directly addresses this problem?",
                options: [
                  "Provides free coffee vouchers for teachers",
                  "Saves 8+ hours/week by automating repetitive tasks (emails, grading, scheduling)",
                  "Automatically hires substitute teachers",
                  "Creates student ID cards"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "A teacher uploads a student essay as a PDF and wants AI-suggested rubric scores. Which feature should they use?",
                options: [
                  "Smart Lesson Planner",
                  "Email Automation",
                  "Feedback Assistant (Upload a student essay → Click 'Feedback Assistant' → Screenshot AI-suggested rubric scores)",
                  "Pedagogical Chatbot"
                ],
                correctAnswer: 3
              },
              {
                id: 'q4',
                question: "How can a teacher use Ellie AI while commuting to plan a lesson?",
                options: [
                  "Wait until arriving at school to type all lesson ideas",
                  "Use Ellie's mobile app with voice commands (e.g., 'Plan a 9th-grade algebra lesson on polynomials')",
                  "Send an email to themselves with lesson ideas",
                  "Write lesson plans on paper during the commute"
                ],
                correctAnswer: 2
              },
              {
                id: 'q5',
                question: "A teacher wants to receive automatic notifications when a student misses 3 or more assignments. Which Pro Tip suggests a strategy for this?",
                options: [
                  "Set up AI alerts for when students miss 3+ assignments (Data-Driven Interventions)",
                  "Manually check each student's record daily",
                  "Ignore missing assignments completely",
                  "Only check grades at the end of the semester"
                ],
                correctAnswer: 1
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
                question: "According to the challenge, what is the primary purpose of Gradescope for educators?",
                options: [
                  "To replace teachers with automated grading robots",
                  "To help educators grade paper-based exams, online homework, and programming projects efficiently using AI-assisted grading and assessment tools",
                  "To create video lectures for students",
                  "To design school websites"
                ],
                correctAnswer: 2
              },
              {
                id: 'q2',
                question: "A teacher wants to ensure consistent grading across all student submissions and reduce bias. Which two features support this goal?",
                options: [
                  "Live chat and video conferencing",
                  "Fairness with rubric-based grading and anonymization",
                  "Automatic letter writing and parent notifications",
                  "Student self-assessment and peer voting"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "The Practical Challenge Task asks teachers to grade a batch of submissions using AI-assisted grouping. After uploading a sample assignment and creating a rubric with 3 criteria, what is the next step?",
                options: [
                  "Skip grading entirely",
                  "Grade 1 representative answer per AI group → Apply scores to all matches",
                  "Manually grade each submission individually without using AI groups",
                  "Delete the rubric and start over"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "A teacher wants to save time on future assignments by reusing grading criteria. Which Pro Tip suggests a strategy for this?",
                options: [
                  "Delete rubrics after each assignment",
                  "Save rubrics as templates for future assignments (Rubric Hack)",
                  "Manually recreate rubrics every time",
                  "Avoid using rubrics altogether"
                ],
                correctAnswer: 2
              },
              {
                id: 'q5',
                question: "According to the Key Features table, what should a teacher use to view histograms, question stats, and grade distributions after grading to identify class-wide knowledge gaps?",
                options: [
                  "Programming Exams feature only",
                  "Analytics Dashboard",
                  "Peer Review feature only",
                  "AI Answer Groups only"
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
                question: "According to the challenge, what is the primary purpose of Turnitin with AI Feedback for educators?",
                options: [
                  "To automatically grade all student assignments without teacher input",
                  "To detect plagiarism and provide actionable insights on grammar, clarity, and structure while maintaining academic integrity",
                  "To create video essays for students",
                  "To replace writing teachers entirely"
                ],
                correctAnswer: 2
              },
              {
                id: 'q2',
                question: "A teacher wants to identify uncited content or potential plagiarism in student essays. According to the Key Features table, which feature should they use?",
                options: [
                  "Originality Report (generates similarity score + sources)",
                  "AI Writing Feedback only",
                  "Peer Review only",
                  "EKG Metrics only"
                ],
                correctAnswer: 1
              },
              {
                id: 'q3',
                question: "The Practical Challenge Task asks teachers to analyze and improve a student essay. After uploading a sample essay and screenshotting the Originality Report, what is the next step?",
                options: [
                  "Send the unedited essay directly to parents",
                  "Skip AI feedback and only check for plagiarism",
                  "Immediately delete the essay without providing feedback",
                  "Apply AI Feedback by noting 3 grammar/style suggestions from AI Feedback Studio and adding 2 custom comments using QuickMarks"
                ],
                correctAnswer: 4
              },
              {
                id: 'q4',
                question: "How can a teacher filter false positives in Originality Reports (such as properly cited quotes showing as matches)?",
                options: [
                  "Delete the entire report",
                  "Disable the Originality Report entirely",
                  "Use 'Exclude Quotes' in Originality Reports",
                  "Ignore all similarity scores"
                ],
                correctAnswer: 3
              },
              {
                id: 'q5',
                question: "A teacher wants to track long-term writing progress for individual students, including Engagement, Knowledge, and Growth. Which Key Feature provides this data?",
                options: [
                  "Originality Report",
                  "AI Writing Feedback",
                  "Peer Review",
                  "EKG Metrics (Engagement, Knowledge, Growth analytics per student)"
                ],
                correctAnswer: 4
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
                question: "According to the challenge, what is the primary purpose of Edthena AI Coach for educators?",
                options: [
                  "To analyze classroom videos and provide personalized, evidence-based feedback to help educators refine their teaching strategies",
                  " To replace human instructional coaches entirely",
                  "To automatically grade student assignments",
                  "To create student report cards"
                ],
                correctAnswer: 1
              },
              {
                id: 'q2',
                question: "A teacher feels anxious about receiving feedback from administrators. Which benefit of Edthena AI Coach addresses this concern?",
                options: [
                  "It only provides positive feedback",
                  "It offers non-judgmental, actionable suggestions (Confidence Builder)",
                  "It hides all feedback from the teacher",
                  "It automatically shares videos with the entire school"
                ],
                correctAnswer: 2
              },
              {
                id: 'q3',
                question: "A teacher wants to compare their teaching video against research-backed professional standards such as Danielson. Which Key Feature should they use?",
                options: [
                  "Video Upload only",
                  "Skill Benchmarks (compare videos against research-backed teaching frameworks)",
                  "AI Feedback only",
                  "Collaborative PD only"
                ],
                correctAnswer: 2
              },
              {
                id: 'q4',
                question: "What is the recommended length for classroom video clips to receive focused feedback from Edthena AI Coach?",
                options: [
                  "Short clips (5-15 mins)",
                  "30-60 minutes (full class periods)",
                  "2-3 minutes only",
                  "Over 1 hour"
                ],
                correctAnswer: 1
              },
              {
                id: 'q5',
                question: "A teacher wants to visualize their improvement in specific teaching skills over time. Which Pro Tip suggests a strategy for this?",
                options: [
                  "Delete all past reports weekly",
                  "Export monthly reports to visualize improvement in specific skills",
                  "Never save or track any progress data",
                  "Only use AI feedback once per year"
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
                question: "According to the challenge, what is the primary purpose of Loop AI for educators?",
                options: [
                  "To track student attendance",
                  "To analyze student feedback, discussions, and engagement data in real time to help educators identify knowledge gaps, improve teaching strategies, and personalize learning",
                  "To generate lunch menus for the cafeteria",
                  "To edit student videos"
                ],
                correctAnswer: 2
              },
              {
                id: 'q2',
                question: "A teacher wants to instantly spot recurring misunderstandings during a live lesson. Which Loop AI feature should they use?",
                options: [
                  "Knowledge Gaps",
                  "Sentiment Analysis",
                  "Live Q&A",
                  "Peer Loop"
                ],
                correctAnswer: 3
              },
              {
                id: 'q3',
                question: "A teacher opens the Insights Dashboard after a lesson and sees a 'red' area on the Confusion Heatmap. What does this indicate?",
                options: [
                  "Red = frequent questions (areas where students are confused)",
                  "Students were highly engaged and understood everything",
                  "The internet connection was unstable",
                  "The teacher spoke too quickly during the lesson"
                ],
                correctAnswer: 1
              },
              {
                id: 'q4',
                question: "The Practical Challenge Task asks teachers to run a Live Loop Session and implement one AI-suggested intervention. After hosting a Live Q&A and screenshotting the clustered questions, what is the next step?",
                options: [
                  "Immediately delete the session data without reviewing",
                  "End the challenge without reflecting",
                  "Skip AI suggestions and assign random resources to all students",
                  "Review Insights by noting the top 'Confusion Point' flagged by AI and exporting the Sentiment Analysis report (PDF)"
                ],
                correctAnswer: 4
              },
              {
                id: 'q5',
                question: "A teacher wants to encourage honest responses from students during a sensitive classroom discussion. Which Pro Tip suggests a strategy for this?",
                options: [
                  "Require students to write their names on every comment",
                  "Enable Anonymous Mode during sensitive discussions to boost honesty",
                  "Record all student responses and play them back publicly",
                  "Disable all student feedback features"
                ],
                correctAnswer: 2
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
