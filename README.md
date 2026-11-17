🧩 Sequence Insight Toolkit
Intelligent Sequence Planning, Identifier Optimization & Event Monitoring
<p align="center">
<strong>Turning fundamental algorithms into practical software utilities.</strong>
</p>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript" alt="JavaScript">
<img src="https://img.shields.io/badge/SQL-Database-blue?logo=postgresql" alt="SQL">
<img src="https://img.shields.io/badge/Algorithms-Optimization-purple" alt="Algorithms">
<img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License">
</p>

📌 Project Overview
Sequence Insight Toolkit is a lightweight JavaScript and SQL project that demonstrates how fundamental algorithmic techniques can solve practical sequence-management and data-analysis problems.

The toolkit brings together three independent utilities:

Balanced Sequence Planner: Determines whether workload values can be arranged so that every adjacent pair has the same combined value.
Maximum Identifier Composer: Arranges numeric fragments to generate the largest possible concatenated identifier.
Consecutive Event Monitor: Identifies values that appear repeatedly in consecutive database records.
Together, these utilities demonstrate how frequency analysis, greedy sorting, and relational database operations can support real-world software systems.

🌍 Real-World Scenario
Imagine a logistics and operations platform that manages workload distribution, shipment identifiers, and system activity logs.

The platform needs to:

Distribute two types of workloads in a balanced alternating sequence.
Generate the largest possible combined tracking identifier from available numeric fragments.
Monitor activity logs to identify repeated events that may indicate recurring system behavior.
Instead of implementing three unrelated solutions, this project provides a small collection of reusable utilities that address these operational needs.

🧠 Core Concepts

Utility	Algorithm / Technique	Practical Purpose
Balanced Sequence Planner	Frequency counting	Validate balanced workload arrangements
Maximum Identifier Composer	Greedy sorting	Optimize concatenated identifiers
Consecutive Event Monitor	SQL self-joins	Detect repeated consecutive events
⚙️ How the System Works
1. Balanced Sequence Planner
Purpose: Determine whether workload values can be rearranged into a sequence where every neighboring pair has the same total workload.

For example:


text
Input:
[1, 1, 2]

Possible arrangement:
[1, 2, 1]

Adjacent totals:
1 + 2 = 3
2 + 1 = 3

Result:
Valid arrangement
Core idea:

For every adjacent pair to have the same sum:


text
b1 + b2 = b2 + b3
It follows that:


text
b1 = b3
Therefore, values at odd positions must be identical, and values at even positions must be identical.

The system checks:

Whether there is only one distinct value.
Whether there are exactly two distinct values.
Whether the frequencies of those two values differ by at most one.
If these conditions are satisfied, a valid arrangement exists.

Algorithm: Frequency counting using a JavaScript Map.

2. Maximum Identifier Composer
Purpose: Combine numeric fragments into the largest possible identifier.

For example:


text
Input:
[3, 30, 34, 5, 9]

Optimized arrangement:
[9, 5, 34, 3, 30]

Generated identifier:
9534330
Core idea:

Normal numeric sorting does not always produce the largest concatenated result.

Instead, compare two possible concatenations:


text
a + b
b + a
Place a before b if a + b is lexicographically larger.

For example:


text
3 + 30 = 330
30 + 3 = 303
Since 330 is larger, 3 should appear before 30.

This greedy comparison ensures the largest possible concatenated result.

The system also handles the special case where every fragment is zero.

Algorithm: Greedy sorting with a custom comparator.

3. Consecutive Event Monitor
Purpose: Identify event values that occur at least three times in consecutive database records.

Imagine a monitoring system recording activity:


ID	Event Code
1	1
2	1
3	1
4	2
5	1
6	2
7	2
The system identifies 1 because it occurs three times consecutively.

Core idea:

Use three references to the same database table:

First record
Second consecutive record
Third consecutive record
Compare their IDs and event values.

If all three IDs are consecutive and all three event values match, the event qualifies.

Algorithm: SQL self-joins with DISTINCT filtering.

✨ Key Features
Balanced arrangement validation: Checks whether workload values can form a balanced alternating sequence.
Optimal identifier generation: Produces the largest possible concatenated numeric identifier.
Repeated event detection: Finds consecutive repeated values in database records.
Reusable JavaScript functions: Keeps business logic separate from execution and demonstration code.
Database-ready SQL: Provides a straightforward query for consecutive event analysis.
Edge-case handling: Handles identical values, zero-only identifiers, and duplicate event sequences.
Readable architecture: Separates each utility into its own module.
📊 Example Usage
Balanced Sequence Planner

javascript
const { canCreateBalancedSequence } =
  require('./src/balanced-sequence');

console.log(canCreateBalancedSequence([1, 1, 2]));
// true

console.log(canCreateBalancedSequence([1, 1, 4, 5]));
// false

console.log(canCreateBalancedSequence([5, 5, 5, 5]));
// true
Maximum Identifier Composer

javascript
const { createLargestIdentifier } =
  require('./src/largest-identifier');

console.log(createLargestIdentifier([10, 2]));
// "210"

console.log(createLargestIdentifier([3, 30, 34, 5, 9]));
// "9534330"

console.log(createLargestIdentifier([0, 0]));
// "0"
Consecutive Event Monitor
Example SQL result:


text
ConsecutiveNums
---------------
1
The query identifies values appearing at least three times in consecutive records.

📈 Complexity Analysis
Let:

n = number of input values.
k = maximum number of digits in a numeric fragment.

Utility	Time Complexity	Space Complexity
Balanced Sequence Planner	O(n)	O(n)
Maximum Identifier Composer	O(n log n × k)	O(n × k)
Consecutive Event Monitor	Database-dependent	Database-dependent
Explanation:

Balanced Sequence Planner traverses the input once to calculate frequencies.
Maximum Identifier Composer sorts the fragments using a custom comparison. String concatenation and comparison take O(k) time.
Consecutive Event Monitor uses three self-joins. Its actual execution cost depends on database indexes, query optimization, and table size.
🛠️ Technologies Used

Technology	Purpose
JavaScript (ES6+)	Core algorithm implementations
Node.js	Running JavaScript utilities
SQL	Consecutive event detection
Git	Version control
GitHub	Source code hosting and documentation
No external JavaScript dependencies are required.

📁 Project Structure

text
Sequence-Insight-Toolkit/
│
├── src/
│   ├── balanced-sequence.js
│   └── largest-identifier.js
│
├── sql/
│   └── consecutive-events.sql
│
├── examples/
│   └── demo.js
│
├── package.json
├── .gitignore
├── LICENSE
└── README.md
🚀 How to Run the Project
Prerequisites
Node.js 18 or later
npm
A SQL database such as MySQL or PostgreSQL (for the SQL module)
1. Clone the repository

bash
git clone https://github.com/mirhamzarahman/Sequence-Insight-Toolkit.git
2. Enter the project directory

bash
cd Sequence-Insight-Toolkit
3. Install dependencies
There are no external dependencies. You can run the project directly using Node.js.


bash
npm install
4. Run the demonstration

bash
npm start
5. Execute the SQL query
Open your preferred SQL database client, select the database containing the Logs table, and execute:


sql
SELECT DISTINCT
    first_log.num AS ConsecutiveNums
FROM Logs AS first_log
JOIN Logs AS second_log
    ON second_log.id = first_log.id + 1
JOIN Logs AS third_log
    ON third_log.id = first_log.id + 2
WHERE first_log.num = second_log.num
  AND second_log.num = third_log.num;
🎓 Learning Outcomes
Working with this project demonstrates practical understanding of:

Frequency maps and counting techniques.
Mathematical properties of alternating sequences.
Greedy algorithms and custom sorting.
Lexicographical string comparison.
String manipulation and concatenation.
SQL self-joins and relational data analysis.
Modular JavaScript development.
Edge-case handling and reusable function design.
Organizing algorithmic concepts into a maintainable software project.
🔮 Future Improvements
Potential enhancements include:

Interactive dashboard: Build a web interface for testing sequence arrangements and identifier generation.
Workload visualization: Display alternating workload patterns graphically.
Configurable event thresholds: Allow monitoring of events repeated more than three consecutive times.
Longer event streaks: Detect configurable consecutive event sequences using SQL window functions.
REST API: Expose each utility through reusable API endpoints.
Automated testing: Introduce Jest or Node.js's built-in test runner.
Performance benchmarking: Compare algorithm performance with larger datasets.
Database integration: Connect the event monitor to a real-time activity logging system.
📜 License
This project is licensed under the MIT License.

You are free to use, modify, distribute, and extend the project according to the terms of the license.

See the LICENSE file for details.

👨‍💻 Author
Mir Hamza Rahman

GitHub: @mirhamzarahman

Repository: Sequence-Insight-Toolkit
