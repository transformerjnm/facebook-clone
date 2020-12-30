# Branch Organization

Create pull requests of branches to the master branch. Code that is pushed to master must be working and not cause any breaking changes. 


# Bugs and Feature Request

Use the project section of github to find out what our current focus is on and which task we have already started. Use Github issue section to create a new bug report or feature addition request. 


# Sending a pull request

1. Find a Github issue that is in the Projects Todos.
2. Create a new branch from master branch.
3. Run npm.
4. Fix the Github issue
5. Make sure all code follows our code guidelines
6. Commit to your branch with the issue ID
7. Push your changes to your branch
8. Create a pull request
9. Request code review from other members (from two other developers)
10. Once you have had your code review and fixed any errors you can then merge.


# Git Commit Subject Line

A properly formed git commit subject line should always be able to complete the following.

- If applied, this commit will…
- What issue is the commit addressing 
- Is the issue fixed or still in progress


# Git Commit Message

A properly formed git commit message should always be able to complete the following.

- Explain what and why you have done something
- Describe any limitations of the current code.
- How does it address the issue?
- Do not assume the reviewer understands what the original problem was
- Separate the summary from the following details with a blank line.

Example
```
Fixed infinite re-render bug #893

Removed setState call out of the render and put it into Component Did Mount. 

Deep details of the problem and issue. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
```
