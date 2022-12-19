// Safen User Input Part I - htmlspecialchars

// You are a(n) novice/average/experience/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment of your website with ease. However, with ease omes dange. Every now and then, a hacker visists your website and attempts to compromise it through the use of XSS (cross site scripting). This is done by injecting [script] tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious websit that steals personal information).

// Mission:
// Your mission is to implement a function that converts the following potentially harmful characters:
// 1. < --> &lt;
// 2. > --> &gt;
// 3. " --> &quot;
// 4. & --> &amp;

// Good luck!




// Will we be given strings? Will we be given an empty string? Will we be given special characters? Will we be given array? Will we be given floats? Will we be given integers?




// Return a new string where all < is converted to &lt;
// Return a new string where all > is converted to &gt;
// Return a new string where all " is converted to &quot;
// Return a new string where all & is converted to &amp;




// 1. If we were given "<h2>Hello World</h2>", should return "&lt;h2&gt;Hello World&lt;/h2&gt;"
// 2. If we were given "Hello, how would you & I fare?", should return "Hello, how would you &amp; I fare?"
// 3. If we were given 'How was "The Matrix"?  Did you like it?', should return 'How was &quot;The Matrix&quot;?  Did you like it?'
// 4. If we were given "<script>alert('Website Hacked!');</script>", should return "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"





function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}





const htmlspecialchars = formData => formData.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")





function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
                   .replace(/"/g, "&quot;")
                   .replace(/</g, "&lt;")
                   .replace(/>/g, "&gt;");
}





function htmlspecialchars(formData) {
    return formData.replace(/[<>"&]/g, ch => ({"<":"&lt;",">":"&gt;","\"":"&quot;","&":"&amp;"}[ch]));
}





const htmlspecialchars = formData => formData.replace(/[<>"&]/g, m => ({"<": "&lt;", ">": "&gt;", "\"": "&quot;", "&": "&amp;"})[m])