const QUESTIONS = [{"category": "Python", "question": "What is the output of `print(type([]))`?", "options": ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'dict'>"], "correctAnswer": 0, "explanation": "[] is a list literal, so type() returns <class 'list'>.", "difficulty": "Easy"}, {"category": "Python", "question": "Which keyword defines a function in Python?", "options": ["func", "def", "function", "lambda"], "correctAnswer": 1, "explanation": "`def` introduces a named function. `lambda` makes anonymous ones.", "difficulty": "Easy"}, {"category": "Python", "question": "What does `len('hello')` return?", "options": ["4", "5", "6", "Error"], "correctAnswer": 1, "explanation": "len counts characters; 'hello' has 5.", "difficulty": "Easy"}, {"category": "Python", "question": "Which of these is a mutable type?", "options": ["tuple", "str", "list", "frozenset"], "correctAnswer": 2, "explanation": "Lists can be changed in place; tuples, strings and frozensets cannot.", "difficulty": "Easy"}, {"category": "Python", "question": "How do you start a comment in Python?", "options": ["//", "#", "/*", "--"], "correctAnswer": 1, "explanation": "Python uses # for single-line comments.", "difficulty": "Easy"}, {"category": "Python", "question": "What is the result of `3 // 2`?", "options": ["1.5", "1", "2", "0"], "correctAnswer": 1, "explanation": "// is floor division, so 3//2 is 1.", "difficulty": "Easy"}, {"category": "Python", "question": "Which function converts a string to an integer?", "options": ["str()", "int()", "float()", "chr()"], "correctAnswer": 1, "explanation": "int('5') returns the integer 5.", "difficulty": "Easy"}, {"category": "Python", "question": "What does the `in` operator do with a list?", "options": ["Adds an item", "Tests membership", "Sorts the list", "Deletes an item"], "correctAnswer": 1, "explanation": "`x in lst` returns True if x is present.", "difficulty": "Easy"}, {"category": "Python", "question": "What is printed by `print('a' * 3)`?", "options": ["aaa", "a3", "a a a", "Error"], "correctAnswer": 0, "explanation": "String * int repeats the string, giving 'aaa'.", "difficulty": "Easy"}, {"category": "Python", "question": "Which is the correct boolean value?", "options": ["true", "True", "TRUE", "1.0"], "correctAnswer": 1, "explanation": "Python booleans are capitalised: True / False.", "difficulty": "Easy"}, {"category": "Python", "question": "What data structure uses key-value pairs?", "options": ["list", "set", "dict", "tuple"], "correctAnswer": 2, "explanation": "A dict maps keys to values.", "difficulty": "Easy"}, {"category": "Python", "question": "How do you get user input in Python 3?", "options": ["gets()", "input()", "scan()", "read()"], "correctAnswer": 1, "explanation": "input() reads a line from stdin as a string.", "difficulty": "Easy"}, {"category": "Python", "question": "What does `range(3)` produce?", "options": ["1,2,3", "0,1,2", "0,1,2,3", "3"], "correctAnswer": 1, "explanation": "range(3) yields 0,1,2 — stop is exclusive.", "difficulty": "Easy"}, {"category": "Python", "question": "Which method adds an item to the end of a list?", "options": ["push()", "append()", "add()", "insert()"], "correctAnswer": 1, "explanation": "append() adds to the end. insert() needs an index.", "difficulty": "Easy"}, {"category": "Python", "question": "What is the output of `bool('')`?", "options": ["True", "False", "None", "Error"], "correctAnswer": 1, "explanation": "An empty string is falsy, so bool('') is False.", "difficulty": "Medium"}, {"category": "Python", "question": "What does a list comprehension `[x*x for x in range(3)]` return?", "options": ["[0,1,4]", "[1,4,9]", "[0,1,2]", "[1,2,3]"], "correctAnswer": 0, "explanation": "Squares of 0,1,2 give [0,1,4].", "difficulty": "Medium"}, {"category": "Python", "question": "What is the output of `print(2 ** 3 ** 2)`?", "options": ["64", "512", "256", "36"], "correctAnswer": 1, "explanation": "** is right-associative: 3**2=9, then 2**9=512.", "difficulty": "Medium"}, {"category": "Python", "question": "What does `dict.get('x', 0)` do if 'x' is missing?", "options": ["Raises KeyError", "Returns 0", "Returns None", "Adds x"], "correctAnswer": 1, "explanation": "get returns the default (0) when the key is absent.", "difficulty": "Medium"}, {"category": "Python", "question": "Which statement handles exceptions?", "options": ["catch", "try/except", "try/catch", "rescue"], "correctAnswer": 1, "explanation": "Python uses try/except blocks.", "difficulty": "Medium"}, {"category": "Python", "question": "What is `*args` used for?", "options": ["Keyword args", "Variable positional args", "A pointer", "Multiplication"], "correctAnswer": 1, "explanation": "*args collects extra positional arguments into a tuple.", "difficulty": "Medium"}, {"category": "Python", "question": "What does `set([1,1,2,3])` return?", "options": ["{1,1,2,3}", "{1,2,3}", "[1,2,3]", "(1,2,3)"], "correctAnswer": 1, "explanation": "Sets drop duplicates, giving {1,2,3}.", "difficulty": "Medium"}, {"category": "Python", "question": "What is the output of `print('ab'.upper())`?", "options": ["ab", "AB", "Ab", "aB"], "correctAnswer": 1, "explanation": "upper() returns the uppercased copy 'AB'.", "difficulty": "Medium"}, {"category": "Python", "question": "Which is used to open a file safely?", "options": ["open only", "with open(...) as f", "file()", "load()"], "correctAnswer": 1, "explanation": "A `with` block auto-closes the file.", "difficulty": "Medium"}, {"category": "Python", "question": "What does `enumerate(['a','b'])` yield first?", "options": ["'a'", "(0,'a')", "(1,'a')", "0"], "correctAnswer": 1, "explanation": "enumerate pairs index with value: (0,'a').", "difficulty": "Medium"}, {"category": "Python", "question": "What is a lambda in Python?", "options": ["A loop", "An anonymous function", "A module", "A class"], "correctAnswer": 1, "explanation": "lambda creates a small anonymous function.", "difficulty": "Medium"}, {"category": "Python", "question": "What does `list.sort()` return?", "options": ["The sorted list", "None", "A copy", "Error"], "correctAnswer": 1, "explanation": "sort() sorts in place and returns None.", "difficulty": "Hard"}, {"category": "Python", "question": "What is the output of `print([1,2,3][::-1])`?", "options": ["[1,2,3]", "[3,2,1]", "[1,3]", "Error"], "correctAnswer": 1, "explanation": "[::-1] reverses the list to [3,2,1].", "difficulty": "Hard"}, {"category": "Python", "question": "What does a generator function use to yield values?", "options": ["return", "yield", "give", "emit"], "correctAnswer": 1, "explanation": "`yield` produces values lazily one at a time.", "difficulty": "Hard"}, {"category": "Python", "question": "What is the result of `{**{'a':1}, 'a':2}`?", "options": ["{'a':1}", "{'a':2}", "Error", "{'a':3}"], "correctAnswer": 1, "explanation": "Later keys override earlier: {'a':2}.", "difficulty": "Hard"}, {"category": "Python", "question": "Which decorator makes a method callable on the class itself?", "options": ["@staticmethod", "@classmethod", "@property", "@abstractmethod"], "correctAnswer": 1, "explanation": "@classmethod receives the class (cls) as first arg.", "difficulty": "Hard"}, {"category": "SQL", "question": "Which SQL keyword retrieves data?", "options": ["GET", "SELECT", "FETCH", "PULL"], "correctAnswer": 1, "explanation": "SELECT queries rows from tables.", "difficulty": "Easy"}, {"category": "SQL", "question": "Which clause filters rows?", "options": ["WHERE", "FILTER", "HAVING", "LIMIT"], "correctAnswer": 0, "explanation": "WHERE filters rows before grouping.", "difficulty": "Easy"}, {"category": "SQL", "question": "Which statement adds a new row?", "options": ["ADD", "INSERT INTO", "APPEND", "CREATE ROW"], "correctAnswer": 1, "explanation": "INSERT INTO adds rows to a table.", "difficulty": "Easy"}, {"category": "SQL", "question": "Which keyword removes rows?", "options": ["DROP", "DELETE", "REMOVE", "CLEAR"], "correctAnswer": 1, "explanation": "DELETE removes rows; DROP removes whole objects.", "difficulty": "Easy"}, {"category": "SQL", "question": "What does `SELECT *` mean?", "options": ["All rows", "All columns", "First column", "No columns"], "correctAnswer": 1, "explanation": "* selects every column.", "difficulty": "Easy"}, {"category": "SQL", "question": "Which clause sorts results?", "options": ["SORT", "ORDER BY", "GROUP BY", "ARRANGE"], "correctAnswer": 1, "explanation": "ORDER BY sorts the result set.", "difficulty": "Easy"}, {"category": "SQL", "question": "Which keyword updates existing data?", "options": ["MODIFY", "UPDATE", "CHANGE", "SET"], "correctAnswer": 1, "explanation": "UPDATE ... SET changes column values.", "difficulty": "Easy"}, {"category": "SQL", "question": "What does DISTINCT do?", "options": ["Duplicates rows", "Removes duplicates", "Sorts rows", "Counts rows"], "correctAnswer": 1, "explanation": "DISTINCT returns unique values.", "difficulty": "Easy"}, {"category": "SQL", "question": "Which operator matches a pattern?", "options": ["LIKE", "MATCH", "REGEX", "IS"], "correctAnswer": 0, "explanation": "LIKE with % / _ matches text patterns.", "difficulty": "Easy"}, {"category": "SQL", "question": "Which function counts rows?", "options": ["SUM()", "COUNT()", "TOTAL()", "NUM()"], "correctAnswer": 1, "explanation": "COUNT() returns the number of rows.", "difficulty": "Easy"}, {"category": "SQL", "question": "What does a PRIMARY KEY guarantee?", "options": ["Fast joins", "Uniqueness & not null", "Sorting", "Encryption"], "correctAnswer": 1, "explanation": "A primary key uniquely identifies each row and can't be null.", "difficulty": "Easy"}, {"category": "SQL", "question": "Which clause limits number of rows returned?", "options": ["TOP", "LIMIT", "MAX", "CAP"], "correctAnswer": 1, "explanation": "LIMIT n restricts row count (MySQL/Postgres).", "difficulty": "Easy"}, {"category": "SQL", "question": "Which keyword combines rows from two tables?", "options": ["MERGE", "JOIN", "LINK", "BIND"], "correctAnswer": 1, "explanation": "JOIN combines rows based on a condition.", "difficulty": "Easy"}, {"category": "SQL", "question": "What does NULL represent?", "options": ["Zero", "Empty string", "Unknown/missing", "False"], "correctAnswer": 2, "explanation": "NULL means the value is unknown or absent.", "difficulty": "Easy"}, {"category": "SQL", "question": "Which clause groups rows for aggregation?", "options": ["ORDER BY", "GROUP BY", "CLUSTER", "BUCKET"], "correctAnswer": 1, "explanation": "GROUP BY groups rows sharing values for aggregates.", "difficulty": "Medium"}, {"category": "SQL", "question": "Which filters groups after aggregation?", "options": ["WHERE", "HAVING", "FILTER", "ONLY"], "correctAnswer": 1, "explanation": "HAVING filters after GROUP BY; WHERE filters before.", "difficulty": "Medium"}, {"category": "SQL", "question": "What does INNER JOIN return?", "options": ["All rows both sides", "Only matching rows", "Left rows only", "Right rows only"], "correctAnswer": 1, "explanation": "INNER JOIN keeps only rows matching in both tables.", "difficulty": "Medium"}, {"category": "SQL", "question": "Which JOIN keeps all left rows?", "options": ["RIGHT JOIN", "LEFT JOIN", "INNER JOIN", "CROSS JOIN"], "correctAnswer": 1, "explanation": "LEFT JOIN returns all left rows plus matches.", "difficulty": "Medium"}, {"category": "SQL", "question": "What does COUNT(DISTINCT col) do?", "options": ["Counts all rows", "Counts unique values", "Sums col", "Averages col"], "correctAnswer": 1, "explanation": "It counts the number of unique values in col.", "difficulty": "Medium"}, {"category": "SQL", "question": "Which keyword defines a table?", "options": ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "BUILD"], "correctAnswer": 1, "explanation": "CREATE TABLE defines a new table.", "difficulty": "Medium"}, {"category": "SQL", "question": "What does the AVG() function do?", "options": ["Adds values", "Averages values", "Counts values", "Max value"], "correctAnswer": 1, "explanation": "AVG returns the mean of a numeric column.", "difficulty": "Medium"}, {"category": "SQL", "question": "Which operator tests a range?", "options": ["IN", "BETWEEN", "RANGE", "AMONG"], "correctAnswer": 1, "explanation": "BETWEEN a AND b tests an inclusive range.", "difficulty": "Medium"}, {"category": "SQL", "question": "What is a foreign key?", "options": ["A backup key", "A reference to another table's key", "An index", "A password"], "correctAnswer": 1, "explanation": "A foreign key references a primary key in another table.", "difficulty": "Medium"}, {"category": "SQL", "question": "What does `SELECT COUNT(*)` include?", "options": ["Only non-null", "All rows incl nulls", "Distinct only", "First row"], "correctAnswer": 1, "explanation": "COUNT(*) counts every row regardless of nulls.", "difficulty": "Medium"}, {"category": "SQL", "question": "Which keyword renames a column in output?", "options": ["RENAME", "AS", "ALIAS", "CALL"], "correctAnswer": 1, "explanation": "AS gives a column or table an alias.", "difficulty": "Medium"}, {"category": "SQL", "question": "What does a subquery return to an IN clause?", "options": ["A table", "A set of values", "A join", "An index"], "correctAnswer": 1, "explanation": "IN compares against the list of values a subquery returns.", "difficulty": "Hard"}, {"category": "SQL", "question": "What is the result of `NULL = NULL` in SQL?", "options": ["TRUE", "FALSE", "NULL/unknown", "Error"], "correctAnswer": 2, "explanation": "Comparisons with NULL yield unknown, not true.", "difficulty": "Hard"}, {"category": "SQL", "question": "Which function assigns row numbers within partitions?", "options": ["RANK()", "ROW_NUMBER()", "COUNT()", "SEQ()"], "correctAnswer": 1, "explanation": "ROW_NUMBER() OVER(...) numbers rows per partition.", "difficulty": "Hard"}, {"category": "SQL", "question": "What does a LEFT JOIN produce for unmatched right rows?", "options": ["Zeros", "NULLs", "Skipped", "Errors"], "correctAnswer": 1, "explanation": "Unmatched right-side columns become NULL.", "difficulty": "Hard"}, {"category": "SQL", "question": "Which clause is evaluated last logically?", "options": ["FROM", "WHERE", "GROUP BY", "ORDER BY"], "correctAnswer": 3, "explanation": "ORDER BY runs after selection and grouping.", "difficulty": "Hard"}, {"category": "JavaScript", "question": "Which keyword declares a block-scoped variable?", "options": ["var", "let", "const", "both let and const"], "correctAnswer": 3, "explanation": "Both let and const are block-scoped; var is function-scoped.", "difficulty": "Easy"}, {"category": "JavaScript", "question": "What does `typeof 42` return?", "options": ["'int'", "'number'", "'float'", "'42'"], "correctAnswer": 1, "explanation": "All JS numbers are of type 'number'.", "difficulty": "Easy"}, {"category": "JavaScript", "question": "How do you write a single-line comment?", "options": ["# c", "// c", "<!-- c -->", "/* c"], "correctAnswer": 1, "explanation": "// starts a single-line comment in JS.", "difficulty": "Easy"}, {"category": "JavaScript", "question": "Which method logs to the console?", "options": ["print()", "console.log()", "log()", "echo()"], "correctAnswer": 1, "explanation": "console.log() prints to the developer console.", "difficulty": "Easy"}, {"category": "JavaScript", "question": "What is the result of `'5' + 3`?", "options": ["8", "'53'", "53", "Error"], "correctAnswer": 1, "explanation": "+ with a string concatenates: '53'.", "difficulty": "Easy"}, {"category": "JavaScript", "question": "Which value is falsy?", "options": ["'0'", "0", "[]", "{}"], "correctAnswer": 1, "explanation": "The number 0 is falsy; '0', [] and {} are truthy.", "difficulty": "Easy"}, {"category": "JavaScript", "question": "How do you declare a function?", "options": ["function f(){}", "func f(){}", "def f(){}", "fn f(){}"], "correctAnswer": 0, "explanation": "function name(){} declares a function.", "difficulty": "Easy"}, {"category": "JavaScript", "question": "Which symbol is strict equality?", "options": ["==", "===", "=", "!="], "correctAnswer": 1, "explanation": "=== compares value and type without coercion.", "difficulty": "Easy"}, {"category": "JavaScript", "question": "What does `Array.isArray([])` return?", "options": ["false", "true", "0", "undefined"], "correctAnswer": 1, "explanation": "[] is an array, so it returns true.", "difficulty": "Easy"}, {"category": "JavaScript", "question": "How do you access the first element of arr?", "options": ["arr[1]", "arr[0]", "arr.first", "arr(0)"], "correctAnswer": 1, "explanation": "Arrays are zero-indexed: arr[0].", "difficulty": "Easy"}, {"category": "JavaScript", "question": "What does `let x;` make x equal to?", "options": ["null", "undefined", "0", "''"], "correctAnswer": 1, "explanation": "An uninitialised variable is undefined.", "difficulty": "Easy"}, {"category": "JavaScript", "question": "Which keyword creates a constant?", "options": ["let", "const", "final", "static"], "correctAnswer": 1, "explanation": "const declares a value that can't be reassigned.", "difficulty": "Easy"}, {"category": "JavaScript", "question": "What is the output of `Boolean('')`?", "options": ["true", "false", "''", "undefined"], "correctAnswer": 1, "explanation": "An empty string is falsy → false.", "difficulty": "Easy"}, {"category": "JavaScript", "question": "Which method adds to the end of an array?", "options": ["push()", "pop()", "shift()", "unshift()"], "correctAnswer": 0, "explanation": "push() appends to the end.", "difficulty": "Easy"}, {"category": "JavaScript", "question": "What does `JSON.parse` do?", "options": ["Object → string", "String → object", "Formats JSON", "Validates JSON"], "correctAnswer": 1, "explanation": "JSON.parse turns a JSON string into an object.", "difficulty": "Medium"}, {"category": "JavaScript", "question": "What is the result of `[1,2,3].map(x=>x*2)`?", "options": ["[1,2,3]", "[2,4,6]", "6", "[1,4,9]"], "correctAnswer": 1, "explanation": "map doubles each element → [2,4,6].", "difficulty": "Medium"}, {"category": "JavaScript", "question": "What does `===` differ from `==` by?", "options": ["Nothing", "Type coercion", "Speed", "Syntax"], "correctAnswer": 1, "explanation": "== coerces types; === does not.", "difficulty": "Medium"}, {"category": "JavaScript", "question": "What is a Promise used for?", "options": ["Loops", "Async operations", "Styling", "Storage"], "correctAnswer": 1, "explanation": "Promises represent the result of async work.", "difficulty": "Medium"}, {"category": "JavaScript", "question": "What does `arr.filter(x=>x>2)` return for [1,2,3]?", "options": ["[3]", "[1,2]", "[1,2,3]", "3"], "correctAnswer": 0, "explanation": "filter keeps elements passing the test → [3].", "difficulty": "Medium"}, {"category": "JavaScript", "question": "What is `this` inside an arrow function?", "options": ["The global object", "Lexically inherited", "undefined", "The caller"], "correctAnswer": 1, "explanation": "Arrow functions capture `this` from their enclosing scope.", "difficulty": "Medium"}, {"category": "JavaScript", "question": "What does `let {a}={a:1}` assign to a?", "options": ["undefined", "1", "{a:1}", "null"], "correctAnswer": 1, "explanation": "Object destructuring pulls a → 1.", "difficulty": "Medium"}, {"category": "JavaScript", "question": "Which stores data with no expiry in the browser?", "options": ["sessionStorage", "localStorage", "cookie", "cache"], "correctAnswer": 1, "explanation": "localStorage persists until explicitly cleared.", "difficulty": "Medium"}, {"category": "JavaScript", "question": "What does `[1,2,3].reduce((a,b)=>a+b,0)` give?", "options": ["6", "123", "[6]", "0"], "correctAnswer": 0, "explanation": "reduce sums to 6 starting from 0.", "difficulty": "Medium"}, {"category": "JavaScript", "question": "What is the spread operator?", "options": ["...", "--", "**", "::"], "correctAnswer": 0, "explanation": "... spreads iterable elements or object properties.", "difficulty": "Medium"}, {"category": "JavaScript", "question": "What does `async` before a function guarantee?", "options": ["It's faster", "It returns a Promise", "It loops", "It blocks"], "correctAnswer": 1, "explanation": "An async function always returns a Promise.", "difficulty": "Medium"}, {"category": "JavaScript", "question": "What is the output of `typeof null`?", "options": ["'null'", "'object'", "'undefined'", "'number'"], "correctAnswer": 1, "explanation": "typeof null is 'object' — a long-standing JS quirk.", "difficulty": "Hard"}, {"category": "JavaScript", "question": "What does closures let a function do?", "options": ["Loop forever", "Remember outer scope variables", "Block async", "Delete vars"], "correctAnswer": 1, "explanation": "A closure retains access to its outer scope after it returns.", "difficulty": "Hard"}, {"category": "JavaScript", "question": "What is the result of `0.1 + 0.2 === 0.3`?", "options": ["true", "false", "NaN", "Error"], "correctAnswer": 1, "explanation": "Floating-point rounding makes it false.", "difficulty": "Hard"}, {"category": "JavaScript", "question": "What does `Array.from('ab')` return?", "options": ["'ab'", "['a','b']", "[ab]", "Error"], "correctAnswer": 1, "explanation": "It creates an array from the iterable → ['a','b'].", "difficulty": "Hard"}, {"category": "JavaScript", "question": "What does the event loop handle?", "options": ["CSS", "The call stack & task queue", "Memory only", "Storage"], "correctAnswer": 1, "explanation": "The event loop moves queued callbacks onto the stack when it's empty.", "difficulty": "Hard"}, {"category": "HR", "question": "What is the best way to start a 'Tell me about yourself' answer?", "options": ["List hobbies", "A brief present-role summary", "Your salary", "Your weaknesses"], "correctAnswer": 1, "explanation": "Start with a concise summary of your current role and relevant strengths.", "difficulty": "Easy"}, {"category": "HR", "question": "Which is a good professional greeting in an interview?", "options": ["'Sup", "A warm handshake and hello", "Silence", "A joke about traffic"], "correctAnswer": 1, "explanation": "A confident, polite greeting sets a positive tone.", "difficulty": "Easy"}, {"category": "HR", "question": "What should you research before an interview?", "options": ["The interviewer's salary", "The company and role", "Nothing", "Competitor gossip"], "correctAnswer": 1, "explanation": "Knowing the company and role shows genuine interest.", "difficulty": "Easy"}, {"category": "HR", "question": "How should you dress for most interviews?", "options": ["However", "Appropriately for the company", "In costume", "In pyjamas"], "correctAnswer": 1, "explanation": "Match or slightly exceed the company's dress norm.", "difficulty": "Easy"}, {"category": "HR", "question": "What is a strength best framed with?", "options": ["A vague claim", "A concrete example", "A complaint", "A joke"], "correctAnswer": 1, "explanation": "Back strengths with a specific example or result.", "difficulty": "Easy"}, {"category": "HR", "question": "When asked about a weakness, you should?", "options": ["Deny having any", "Name a real one and how you improve it", "Blame others", "Stay silent"], "correctAnswer": 1, "explanation": "Show self-awareness plus the steps you take to improve.", "difficulty": "Easy"}, {"category": "HR", "question": "Good body language includes?", "options": ["Avoiding eye contact", "Steady eye contact and posture", "Slouching", "Checking your phone"], "correctAnswer": 1, "explanation": "Open posture and eye contact convey confidence.", "difficulty": "Easy"}, {"category": "HR", "question": "What should you bring to an in-person interview?", "options": ["Nothing", "Copies of your resume", "Loud music", "Your pet"], "correctAnswer": 1, "explanation": "Extra resume copies and notes show preparation.", "difficulty": "Easy"}, {"category": "HR", "question": "How should you handle a question you don't know?", "options": ["Make something up", "Acknowledge it honestly and reason aloud", "Panic", "Change the subject"], "correctAnswer": 1, "explanation": "Being honest and walking through your thinking is respected.", "difficulty": "Easy"}, {"category": "HR", "question": "A good question to ask the interviewer is?", "options": ["How much vacation?", "What does success look like in this role?", "When can I leave?", "Do you like me?"], "correctAnswer": 1, "explanation": "Role-focused questions show engagement.", "difficulty": "Easy"}, {"category": "HR", "question": "What does the STAR method structure?", "options": ["Salary talk", "Behavioural answers", "Dress code", "Your resume"], "correctAnswer": 1, "explanation": "STAR = Situation, Task, Action, Result for behavioural questions.", "difficulty": "Medium"}, {"category": "HR", "question": "When negotiating salary, you should first?", "options": ["Demand double", "Know the market range", "Refuse to discuss", "Accept immediately"], "correctAnswer": 1, "explanation": "Research the market range so your ask is grounded.", "difficulty": "Medium"}, {"category": "HR", "question": "Why do interviewers ask about past conflict?", "options": ["To judge you", "To see how you handle it professionally", "For gossip", "To waste time"], "correctAnswer": 1, "explanation": "They want to see resolution skills, not blame.", "difficulty": "Medium"}, {"category": "HR", "question": "What's the goal of a follow-up thank-you note?", "options": ["Flattery", "Reaffirm interest and thank them", "Ask for the job", "Complain"], "correctAnswer": 1, "explanation": "It reinforces your interest and professionalism.", "difficulty": "Medium"}, {"category": "HR", "question": "How do you describe leaving a previous job negatively?", "options": ["Trash the employer", "Frame it around growth", "Overshare drama", "Lie"], "correctAnswer": 1, "explanation": "Keep it positive and focused on what you seek next.", "difficulty": "Medium"}, {"category": "HR", "question": "What does 'culture fit' assess?", "options": ["Your fashion", "Alignment with team values & ways of working", "Your commute", "Your age"], "correctAnswer": 1, "explanation": "It's about how you work with the team and its values.", "difficulty": "Medium"}, {"category": "HR", "question": "A behavioural question usually begins with?", "options": ["'Would you...'", "'Tell me about a time...'", "'Do you like...'", "'Can you code...'"], "correctAnswer": 1, "explanation": "'Tell me about a time' signals a behavioural, example-based answer.", "difficulty": "Medium"}, {"category": "HR", "question": "How should you handle salary questions early?", "options": ["Give an exact figure instantly", "Give a researched range or defer politely", "Refuse rudely", "Ask theirs first only"], "correctAnswer": 1, "explanation": "A researched range, or a polite deferral, keeps options open.", "difficulty": "Medium"}, {"category": "HR", "question": "What shows you're a team player?", "options": ["Taking all credit", "Crediting collaborators & examples", "Working alone always", "Avoiding meetings"], "correctAnswer": 1, "explanation": "Concrete examples of collaboration demonstrate it.", "difficulty": "Medium"}, {"category": "HR", "question": "The best response to 'Why should we hire you?' is?", "options": ["'I need money'", "Match your strengths to their needs", "'Why not?'", "List demands"], "correctAnswer": 1, "explanation": "Connect your strengths directly to the role's requirements.", "difficulty": "Medium"}, {"category": "HR", "question": "When discussing failure, emphasise?", "options": ["It never happens", "What you learned and changed", "Blame", "Denial"], "correctAnswer": 1, "explanation": "Interviewers value learning and growth from failure.", "difficulty": "Hard"}, {"category": "HR", "question": "How do you handle an illegal or inappropriate question?", "options": ["Answer fully", "Redirect politely to the role", "Get angry", "Walk out silently"], "correctAnswer": 1, "explanation": "Steer back to job-relevant topics calmly.", "difficulty": "Hard"}, {"category": "HR", "question": "What signals genuine interest at the close?", "options": ["No questions", "Thoughtful questions and next-steps", "Leaving early", "Checking phone"], "correctAnswer": 1, "explanation": "Asking about next steps and the role shows engagement.", "difficulty": "Hard"}, {"category": "HR", "question": "For a stress question, the interviewer wants to see?", "options": ["You crack", "Your composure and reasoning", "Anger", "Avoidance"], "correctAnswer": 1, "explanation": "They test how you stay composed under pressure.", "difficulty": "Hard"}, {"category": "HR", "question": "A strong salary negotiation anchors on?", "options": ["Your feelings", "Market data and your value", "Their guess", "A random number"], "correctAnswer": 1, "explanation": "Anchor on researched market rates and demonstrated value.", "difficulty": "Hard"}, {"category": "HR", "question": "When you lack a required skill, the best move is?", "options": ["Lie about it", "Show related skills and fast learning", "Hide it", "Give up"], "correctAnswer": 1, "explanation": "Acknowledge the gap and show adjacent skills and learning ability.", "difficulty": "Hard"}, {"category": "HR", "question": "What's the purpose of a panel interview?", "options": ["Intimidation", "Multiple perspectives on fit", "Save time only", "Confuse you"], "correctAnswer": 1, "explanation": "Panels gather several viewpoints on your fit.", "difficulty": "Hard"}, {"category": "HR", "question": "A good 'where do you see yourself in 5 years' answer?", "options": ["'Your job'", "Growth aligned with the role & company", "'No idea'", "'Retired'"], "correctAnswer": 1, "explanation": "Tie your ambitions to plausible growth in the role.", "difficulty": "Hard"}, {"category": "HR", "question": "How should you follow up if you hear nothing after a week?", "options": ["Spam them", "One polite check-in email", "Give up", "Call repeatedly"], "correctAnswer": 1, "explanation": "A single courteous follow-up is professional.", "difficulty": "Hard"}, {"category": "HR", "question": "The strongest interview close leaves the interviewer with?", "options": ["Doubt", "A clear sense of your value & interest", "Confusion", "Silence"], "correctAnswer": 1, "explanation": "Summarise your fit and enthusiasm briefly at the end.", "difficulty": "Hard"}];

/* ============================================================
   Interview Simulator Pro — script.js (app logic)
   Vanilla ES6. State + LocalStorage. No frameworks.
   ============================================================ */

/* ---------- Config ---------- */
const CATEGORIES = [
  { id:"Python",     emoji:"🐍", blurb:"Syntax, data types, functions, comprehensions" },
  { id:"SQL",        emoji:"🗄️", blurb:"Queries, joins, aggregation, keys" },
  { id:"JavaScript", emoji:"🟨", blurb:"ES6, types, async, the event loop" },
  { id:"HR",         emoji:"🤝", blurb:"Behavioural, culture fit, negotiation" },
];
const QUESTIONS_PER_INTERVIEW = 10;
const SECONDS_PER_QUESTION = 30;
const POINTS_CORRECT = 10;
const AUTO_ADVANCE_MS = 3000;
const LS_KEY = "isp_data_v1";

const BADGES = [
  { id:"first",     ico:"🎯", name:"First Interview", desc:"Complete one interview" },
  { id:"perfect",   ico:"💯", name:"Flawless",        desc:"Score 100% in an interview" },
  { id:"five",      ico:"🔥", name:"Regular",         desc:"Complete 5 interviews" },
  { id:"ten",       ico:"⚡", name:"Dedicated",       desc:"Complete 10 interviews" },
  { id:"Python",    ico:"🐍", name:"Python Master",   desc:"Score 80%+ in Python" },
  { id:"SQL",       ico:"🗄️", name:"SQL Expert",      desc:"Score 80%+ in SQL" },
  { id:"JavaScript",ico:"🟨", name:"JavaScript Pro",  desc:"Score 80%+ in JavaScript" },
  { id:"HR",        ico:"🤝", name:"HR Champion",     desc:"Score 80%+ in HR" },
];

/* ---------- Persistent store ---------- */
const defaultData = () => ({
  bestScore:0, completed:0, theme:"dark", sound:true,
  lastCategory:null, history:[], reports:[], badges:[]
});
let data = load();
function load(){
  try{ const d=JSON.parse(localStorage.getItem(LS_KEY)); return d?{...defaultData(),...d}:defaultData(); }
  catch{ return defaultData(); }
}
function save(){ try{ localStorage.setItem(LS_KEY, JSON.stringify(data)); }catch{} }

/* ---------- Session state ---------- */
let session = null; // {category,difficulty,questions,answers,index,score,startTime,timer,timeLeft,locked}

/* ---------- Tiny helpers ---------- */
const $  = (s,el=document)=>el.querySelector(s);
const $$ = (s,el=document)=>[...el.querySelectorAll(s)];
const shuffle = a => { const x=[...a]; for(let i=x.length-1;i>0;i--){const j=(Math.random()*(i+1))|0;[x[i],x[j]]=[x[j],x[i]];} return x; };
const clamp = (n,a,b)=>Math.max(a,Math.min(b,n));
const fmtTime = s => `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`;

function toast(msg){
  const t=$("#toast"); t.textContent=msg; t.classList.add("show");
  clearTimeout(toast._t); toast._t=setTimeout(()=>t.classList.remove("show"),2600);
}

/* ---------- Sound (WebAudio, no libraries) ---------- */
let audioCtx=null;
function beep(freq=600, dur=0.12, type="sine"){
  if(!data.sound) return;
  try{
    audioCtx = audioCtx || new (window.AudioContext||window.webkitAudioContext)();
    const o=audioCtx.createOscillator(), g=audioCtx.createGain();
    o.type=type; o.frequency.value=freq; o.connect(g); g.connect(audioCtx.destination);
    g.gain.setValueAtTime(0.001,audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.25,audioCtx.currentTime+0.02);
    g.gain.exponentialRampToValueAtTime(0.001,audioCtx.currentTime+dur);
    o.start(); o.stop(audioCtx.currentTime+dur);
  }catch{}
}
const soundCorrect = ()=>{ beep(660,0.1); setTimeout(()=>beep(990,0.14),90); };
const soundWrong   = ()=> beep(180,0.28,"square");
const soundTimeUp  = ()=> beep(120,0.35,"sawtooth");

/* ---------- Navigation ---------- */
function navigate(screen){
  $$(".screen").forEach(s=>s.classList.toggle("active", s.dataset.screen===screen));
  $$(".nav-link").forEach(b=>b.classList.toggle("active", b.dataset.nav===screen));
  window.scrollTo({top:0,behavior:"smooth"});
  if(screen==="home") renderHome();
  if(screen==="category") renderCategory();
  if(screen==="dashboard") renderDashboard();
  if(screen==="achievements") renderAchievements();
  if(screen==="settings") renderSettings();
}

/* ---------- Theme ---------- */
function applyTheme(t){
  document.documentElement.setAttribute("data-theme",t);
  $(".theme-icon").textContent = t==="dark" ? "🌙" : "☀️";
  data.theme=t; save();
}

/* ---------- HOME ---------- */
function renderHome(){
  $("#statQuestions").textContent = QUESTIONS.length;
  $("#statCategories").textContent = CATEGORIES.length;
  $("#statBest").innerHTML = `${data.bestScore}<small>%</small>`;
  $("#statCompleted").textContent = data.completed;
}

/* ---------- CATEGORY ---------- */
let pickCat = null, pickDiff = "Mixed";
function renderCategory(){
  pickCat = data.lastCategory; pickDiff="Mixed";
  const grid=$("#categoryGrid");
  grid.innerHTML = CATEGORIES.map(c=>`
    <button class="cat-card ${pickCat===c.id?"selected":""}" data-cat="${c.id}">
      <span class="cat-emoji">${c.emoji}</span>
      <span class="cat-info"><b>${c.id}</b><span>${c.blurb}</span></span>
    </button>`).join("");
  $$(".cat-card",grid).forEach(b=>b.onclick=()=>{
    pickCat=b.dataset.cat;
    $$(".cat-card",grid).forEach(x=>x.classList.toggle("selected",x===b));
    refreshBegin();
  });
  $$("#difficultyRow .diff-chip").forEach(chip=>{
    chip.classList.toggle("selected", chip.dataset.diff===pickDiff);
    chip.onclick=()=>{ pickDiff=chip.dataset.diff;
      $$("#difficultyRow .diff-chip").forEach(x=>x.classList.toggle("selected",x===chip)); };
  });
  refreshBegin();
}
function refreshBegin(){
  const btn=$("#beginBtn");
  btn.disabled=!pickCat;
  btn.textContent = pickCat ? `Begin ${pickCat} interview` : "Pick a track to begin";
}

/* ---------- START INTERVIEW ---------- */
function startInterview(){
  let pool = QUESTIONS.filter(q=>q.category===pickCat);
  if(pickDiff!=="Mixed") pool = pool.filter(q=>q.difficulty===pickDiff);
  if(pool.length < QUESTIONS_PER_INTERVIEW) pool = QUESTIONS.filter(q=>q.category===pickCat); // fallback
  const chosen = shuffle(pool).slice(0,QUESTIONS_PER_INTERVIEW);

  data.lastCategory=pickCat; save();
  session = {
    category:pickCat, difficulty:pickDiff, questions:chosen,
    answers:new Array(chosen.length).fill(null), // {choice, correct, timeSpent}
    index:0, score:0, startTime:Date.now(), timer:null,
    timeLeft:SECONDS_PER_QUESTION, locked:false
  };
  navigate("quiz");
  renderQuestion();
}

/* ---------- RENDER QUESTION ---------- */
function renderQuestion(){
  const s=session, q=s.questions[s.index];
  s.locked = s.answers[s.index]!==null;
  $("#qCategory").textContent = s.category;
  $("#qDifficulty").textContent = q.difficulty;
  $("#qCount").textContent = `Q${s.index+1} / ${s.questions.length}`;
  $("#qIndexLabel").textContent = `Question ${s.index+1}`;
  $("#qScore").textContent = s.score;
  $("#qText").textContent = q.question;
  $("#progressBar").style.width = `${((s.index)/s.questions.length)*100}%`;

  const keys=["A","B","C","D"];
  $("#options").innerHTML = q.options.map((o,i)=>`
    <button class="option" data-i="${i}">
      <span class="key">${keys[i]}</span><span>${escapeHtml(o)}</span>
    </button>`).join("");

  const prev = s.answers[s.index];
  $$("#options .option").forEach(btn=>{
    btn.onclick=()=>selectAnswer(parseInt(btn.dataset.i,10));
  });

  $("#feedback").hidden=true;
  updateControls();

  if(s.locked){
    // already answered — show its state, no timer
    revealAnswer(prev.choice, false);
  } else {
    startTimer();
  }
}

/* ---------- TIMER ---------- */
function startTimer(){
  const s=session;
  s.timeLeft = SECONDS_PER_QUESTION;
  updateTimerUI();
  clearInterval(s.timer);
  s.timer=setInterval(()=>{
    s.timeLeft--;
    updateTimerUI();
    if(s.timeLeft<=0){
      clearInterval(s.timer);
      soundTimeUp();
      selectAnswer(-1, true); // timed out
    }
  },1000);
}
function updateTimerUI(){
  const s=session, C=2*Math.PI*19; // ~119.4
  const frac = clamp(s.timeLeft/SECONDS_PER_QUESTION,0,1);
  $("#timerFill").style.strokeDashoffset = String(C*(1-frac));
  $("#timerNum").textContent = Math.max(0,s.timeLeft);
  $("#timerWrap").classList.toggle("low", s.timeLeft<=10);
}

/* ---------- SELECT / REVEAL ---------- */
function selectAnswer(choice, timedOut=false){
  const s=session;
  if(s.locked) return;
  clearInterval(s.timer);
  s.locked=true;
  const q=s.questions[s.index];
  const correct = choice===q.correctAnswer;
  const timeSpent = SECONDS_PER_QUESTION - s.timeLeft;
  s.answers[s.index]={ choice, correct, timeSpent, timedOut };
  if(correct){ s.score+=POINTS_CORRECT; soundCorrect(); }
  else{ if(!timedOut) soundWrong(); }
  $("#qScore").textContent=s.score;

  revealAnswer(choice, true);
  updateControls();

  // auto-advance
  clearTimeout(s._advance);
  s._advance=setTimeout(()=>{ if(session===s) goNext(); }, AUTO_ADVANCE_MS);
}

function revealAnswer(choice, animate){
  const s=session, q=s.questions[s.index];
  $$("#options .option").forEach(btn=>{
    const i=parseInt(btn.dataset.i,10);
    btn.disabled=true;
    if(i===q.correctAnswer) btn.classList.add("correct");
    else if(i===choice) btn.classList.add("wrong");
  });
  const ans = s.answers[s.index];
  const fb=$("#feedback"); fb.hidden=false;
  const v=$("#feedbackVerdict");
  if(ans.timedOut){ v.textContent="⏱ Time's up"; v.className="feedback-verdict no"; }
  else if(ans.correct){ v.textContent=`✓ Correct  ·  +${POINTS_CORRECT} points`; v.className="feedback-verdict ok"; }
  else { v.textContent="✗ Not quite  ·  +0 points"; v.className="feedback-verdict no"; }
  $("#feedbackAnswer").innerHTML = `Correct answer: <b>${escapeHtml(q.options[q.correctAnswer])}</b>`;
  $("#feedbackExplain").textContent = q.explanation;
}

/* ---------- CONTROLS ---------- */
function updateControls(){
  const s=session, last = s.index===s.questions.length-1;
  $("#prevBtn").disabled = s.index===0;
  $("#nextBtn").hidden = last;
  $("#submitBtn").hidden = !last;
}
function goPrev(){ const s=session; if(s.index>0){ clearTimeout(s._advance); clearInterval(s.timer); s.index--; renderQuestion(); } }
function goNext(){
  const s=session; clearTimeout(s._advance); clearInterval(s.timer);
  if(s.index < s.questions.length-1){ s.index++; renderQuestion(); }
  else finishInterview();
}

/* ---------- FINISH ---------- */
function finishInterview(){
  const s=session; clearTimeout(s._advance); clearInterval(s.timer);
  const total=s.questions.length;
  const correct=s.answers.filter(a=>a&&a.correct).length;
  const wrong=total-correct;
  const scorePts=s.score;
  const pct=Math.round((correct/total)*100);
  const timeTaken=Math.round((Date.now()-s.startTime)/1000);

  const report = {
    id:Date.now(), category:s.category, difficulty:s.difficulty,
    date:new Date().toISOString(), correct, wrong, pct, scorePts, timeTaken,
    items:s.questions.map((q,i)=>{
      const a=s.answers[i];
      return {
        question:q.question,
        options:q.options,
        yourChoice:a?a.choice:-1,
        correctIndex:q.correctAnswer,
        explanation:q.explanation,
        difficulty:q.difficulty,
        timeSpent:a?a.timeSpent:0,
        status: !a||a.choice===-1 ? "skip" : (a.correct?"ok":"no")
      };
    })
  };

  // persist
  data.completed += 1;
  data.bestScore = Math.max(data.bestScore, pct);
  data.history.unshift({ id:report.id, category:s.category, pct, scorePts, date:report.date });
  data.history = data.history.slice(0,50);
  data.reports.unshift(report);
  data.reports = data.reports.slice(0,50);
  awardBadges({ pct, category:s.category });
  save();

  renderResult(report);
  navigate("result");
}

/* ---------- BADGES ---------- */
function awardBadges({pct, category}){
  const add=id=>{ if(!data.badges.includes(id)){ data.badges.push(id); const b=BADGES.find(x=>x.id===id); if(b) setTimeout(()=>toast(`🏅 Badge unlocked — ${b.name}`),400); } };
  add("first");
  if(pct===100) add("perfect");
  if(data.completed>=5) add("five");
  if(data.completed>=10) add("ten");
  if(pct>=80) add(category);
}

/* ---------- RESULT ---------- */
let lastReportId=null;
function renderResult(r){
  lastReportId=r.id;
  const ratings=[[90,"Excellent"],[70,"Good"],[50,"Average"],[0,"Needs Improvement"]];
  const rating=ratings.find(([t])=>r.pct>=t)[1];
  const C=2*Math.PI*52; // 326.7
  $("#dialFill").style.strokeDashoffset = String(C*(1-r.pct/100));
  $("#resPct").textContent = `${r.pct}%`;
  $("#resRating").textContent = rating;
  $("#resHeadline").textContent = `${r.category} interview — ${rating.toLowerCase()}`;
  $("#resScore").textContent = r.scorePts;
  $("#resCorrect").textContent = r.correct;
  $("#resWrong").textContent = r.wrong;
  $("#resAccuracy").textContent = `${r.pct}%`;
  $("#resTime").textContent = fmtTime(r.timeTaken);
}

/* ---------- REPORT ---------- */
function renderReport(id){
  const r = data.reports.find(x=>x.id===id) || data.reports[0];
  if(!r){ $("#reportList").innerHTML=`<div class="empty">No report available.</div>`; return; }
  $("#reportMeta").textContent =
    `${r.category} · ${r.difficulty} · ${new Date(r.date).toLocaleString()} · ${r.correct}/${r.items.length} correct · ${fmtTime(r.timeTaken)}`;
  const keys=["A","B","C","D"];
  $("#reportList").innerHTML = r.items.map((it,i)=>{
    const your = it.yourChoice>=0 ? `${keys[it.yourChoice]}. ${escapeHtml(it.options[it.yourChoice])}` : "— skipped / timed out";
    const corr = `${keys[it.correctIndex]}. ${escapeHtml(it.options[it.correctIndex])}`;
    const statusLabel = it.status==="ok"?"Correct":it.status==="no"?"Wrong":"Skipped";
    return `
    <div class="report-item ${it.status}">
      <div class="ri-top">
        <p class="ri-q">${i+1}. ${escapeHtml(it.question)}</p>
        <span class="ri-status ${it.status}">${statusLabel}</span>
      </div>
      <p class="ri-row"><span class="lbl">Your answer</span><span class="ri-your ${it.status==='ok'?'match':''}">${your}</span></p>
      <p class="ri-row"><span class="lbl">Correct answer</span><span class="ri-correct">${corr}</span></p>
      <p class="ri-row"><span class="lbl">Difficulty</span>${it.difficulty} · <span class="lbl" style="min-width:auto"> time</span> ${it.timeSpent}s</p>
      <p class="ri-explain">${escapeHtml(it.explanation)}</p>
    </div>`;
  }).join("");
  navigate("report");
}

/* ---------- DASHBOARD ---------- */
function renderDashboard(){
  const h=data.history;
  const high = h.length ? Math.max(...h.map(x=>x.pct)) : 0;
  const avg  = h.length ? Math.round(h.reduce((a,x)=>a+x.pct,0)/h.length) : 0;
  $("#dashHigh").innerHTML=`${high}<small>%</small>`;
  $("#dashTotal").textContent=data.completed;
  $("#dashAvg").innerHTML=`${avg}<small>%</small>`;

  $("#catPerf").innerHTML = CATEGORIES.map(c=>{
    const items=h.filter(x=>x.category===c.id);
    const cAvg=items.length?Math.round(items.reduce((a,x)=>a+x.pct,0)/items.length):0;
    return `<div class="cp-card">
      <div class="cp-top"><b>${c.emoji} ${c.id}</b><span>${items.length} attempt${items.length===1?"":"s"} · ${cAvg}%</span></div>
      <div class="cp-bar"><i style="width:${cAvg}%"></i></div>
    </div>`;
  }).join("");

  const recent=h.slice(0,8);
  $("#recentList").innerHTML = recent.length ? recent.map(x=>`
    <div class="recent-item">
      <div class="r-left"><span class="r-score">${x.pct}%</span>
        <span class="r-meta">${x.category} · ${new Date(x.date).toLocaleDateString()}</span></div>
      <button class="btn btn-ghost" data-report="${x.id}">View report</button>
    </div>`).join("")
    : `<div class="empty">No attempts yet — start your first interview.</div>`;
  $$("#recentList [data-report]").forEach(b=>b.onclick=()=>renderReport(parseInt(b.dataset.report,10)));
}

/* ---------- ACHIEVEMENTS ---------- */
function renderAchievements(){
  $("#badgeGrid").innerHTML = BADGES.map(b=>{
    const on=data.badges.includes(b.id);
    return `<div class="badge ${on?"unlocked":"locked"}">
      <span class="lock">${on?"":"🔒"}</span>
      <span class="badge-ico">${b.ico}</span>
      <b>${b.name}</b><span>${b.desc}</span>
    </div>`;
  }).join("");
}

/* ---------- SETTINGS ---------- */
function renderSettings(){
  $$("#themeSeg button").forEach(b=>b.classList.toggle("on", b.dataset.themeSet===data.theme));
  $$("#soundSeg button").forEach(b=>b.classList.toggle("on", b.dataset.soundSet===(data.sound?"on":"off")));
}

/* ---------- Utils ---------- */
function escapeHtml(str){ return String(str).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

/* ---------- Ripple effect ---------- */
function attachRipple(e){
  const btn=e.currentTarget, r=btn.getBoundingClientRect();
  const span=document.createElement("span");
  span.className="ripple";
  const size=Math.max(r.width,r.height);
  span.style.width=span.style.height=size+"px";
  span.style.left=(e.clientX-r.left-size/2)+"px";
  span.style.top=(e.clientY-r.top-size/2)+"px";
  btn.appendChild(span); setTimeout(()=>span.remove(),600);
}

/* ---------- Wire up ---------- */
function init(){
  applyTheme(data.theme);

  // nav (delegated)
  document.body.addEventListener("click",e=>{
    const nav=e.target.closest("[data-nav]");
    if(nav){ navigate(nav.dataset.nav); }
    const btn=e.target.closest(".btn");
    if(btn) attachRipple(e);
  });

  $("#themeToggle").onclick=()=>applyTheme(data.theme==="dark"?"light":"dark");
  $("#beginBtn").onclick=startInterview;

  $("#prevBtn").onclick=goPrev;
  $("#nextBtn").onclick=goNext;
  $("#submitBtn").onclick=finishInterview;
  $("#quitBtn").onclick=()=>{ if(confirm("Quit this interview? Progress won't be saved.")){ clearInterval(session?.timer); clearTimeout(session?._advance); session=null; navigate("home"); } };
  $("#viewReportBtn").onclick=()=>{ if(lastReportId) renderReport(lastReportId); };

  // settings segments
  $$("#themeSeg button").forEach(b=>b.onclick=()=>{ applyTheme(b.dataset.themeSet); renderSettings(); });
  $$("#soundSeg button").forEach(b=>b.onclick=()=>{ data.sound=b.dataset.soundSet==="on"; save(); renderSettings(); if(data.sound) soundCorrect(); });
  $("#clearHistoryBtn").onclick=()=>{ if(confirm("Clear all history and reports?")){ data.history=[]; data.reports=[]; save(); renderDashboard(); toast("History cleared"); } };
  $("#resetAllBtn").onclick=()=>{ if(confirm("Reset ALL progress? This can't be undone.")){ const theme=data.theme; data=defaultData(); data.theme=theme; save(); applyTheme(theme); toast("Progress reset"); navigate("home"); } };

  // keyboard: 1-4 to answer during quiz
  document.addEventListener("keydown",e=>{
    const quizOpen = $('.screen[data-screen="quiz"]').classList.contains("active");
    if(!quizOpen || !session || session.locked) return;
    if(["1","2","3","4"].includes(e.key)){ const i=+e.key-1; const btn=$(`#options .option[data-i="${i}"]`); if(btn) btn.click(); }
  });

  renderHome();
  navigate("home");
}

document.addEventListener("DOMContentLoaded",init);
