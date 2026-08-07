export const CHALLENGE_QUIZZES = {
  'eduaide': [
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
            ],
  'diffit': [
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
            ],
  'gemini': [
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
            ],
  'suno': [
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
            ],
  'scribble': [
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
            ],
  'readalong': [
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

            ],
  'lumen5': [
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
            ],
};
