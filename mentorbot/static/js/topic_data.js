/******************
	Task-specific Variables
 ******************/
var topic_html;

if (configs.context == "day_2") {
    topic_html = `<p>Reflect on your recent experience, activity, or situation. What thing most concerns you? How did you analyze this problem (e.g., opinion, cause)? What decisions do you make after analyzing this problem? What are your detailed actionable plans to improve your situation?</p>`
    // topic_html = `<p>Please use 15~20 mins to read these materials on&nbsp;<strong>intentional learning</strong>:</p><ul><li>Read about understanding your learning style from the University of Waterloo:&nbsp;<a href='https://uwaterloo.ca/centre-for-teaching-excellence/teaching-resources/teaching-tips/tips-students/self-knowledge/understanding-your-learning-style#:~:text=Active%20Active%20learners%20learn%20by,and%20understand%20things%20before%20acting.'>https://uwaterloo.ca/centre-for-teaching-excellence/teaching-resources/teaching-tips/tips-students/self-knowledge/understanding-your-learning-style#:~:text=Active%20Active%20learners%20learn%20by,and%20understand%20things%20before%20acting.</a></li><li>Read about how to make the most of your university experience from The World University Rankings:&nbsp;
    // <a href='https://www.timeshighereducation.com/student/advice/student-blog-five-tips-make-most-your-university-experience'>https://www.timeshighereducation.com/student/advice/student-blog-five-tips-make-most-your-university-experience</a></li></ul><p>Reflection time! Think about what parts of this material resonated most with you and reflect on your personal experience: What are some of the strategies you use to make the most of your classes? What works for you to best learn the material? Share some of the mistakes you may have made, or that you try to avoid making(150~200 words). This section will take around 15~30 mins to finish.</p><p><br>&nbsp;</p>`;
} else if (configs.context == "day_3") {
    topic_html = `<p>Please use 15~20 mins to read these materials on&nbsp;<strong>staying motivated</strong>:</p><ul><li>Read this article from AlphaEfficiency&nbsp;on the four types of procrastination and how to beat them:&nbsp;<a href=\"https://alphaefficiency.com/4-types-procrastination-beat/\">https://alphaefficiency.com/4-types-procrastination-beat/</a></li><li>Read this TED Blog&nbsp;by Kelly McGonigal: Why it's so dang hard to stick to a resolution:&nbsp;<a href=\"https://blog.ted.com/the-science-of-willpower-kelly-mcgonigal-on-why-its-so-dang-hard-to-stick-to-a-resolution/\">https://blog.ted.com/the-science-of-willpower-kelly-mcgonigal-on-why-its-so-dang-hard-to-stick-to-a-resolution/</a></li></ul><p>Reflection time! Think about what parts of this material resonated most with you and reflect on your personal experience: Assess where you are this week as compared to the goals you set in week three. If you did not complete your set goals, explain how you will adapt and change plans by setting and naming new realistic goals. Meet with an academic advisor as needed(150~200 words). This section will take around 15~30 mins to finish.</p><p><br>&nbsp;</p>`;
}