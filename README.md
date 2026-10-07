Node.js Beginner Setup & Learning Guide

Welcome! This guide helps you install Node.js, set up your coding environment, and write your first Node.js programs.

1. What is Node.js?

Node.js allows you to run JavaScript outside the browser.

Normally:

JavaScript → Browser

With Node.js:

JavaScript → Node.js → Computer / Server

Node.js is commonly used for:

Backend development
REST APIs
Web servers
File handling
Command-line applications
Real-time applications
Full-stack JavaScript development
2. Install Node.js
Step 1 — Download Node.js

Go to the official Node.js website:

https://nodejs.org/

Download the LTS (Long-Term Support) version.

Which version should I choose?

For beginners:

LTS → Recommended

Avoid the experimental/current version unless you specifically need it.

3. Install Node.js on Windows

Run the downloaded installer.

During installation:

Click Next
Accept the license
Keep the default installation location
Keep npm selected
Click Install
Finish the installation

Node.js normally installs to:

C:\Program Files\nodejs\
4. Check Node.js Installation

Open PowerShell or Command Prompt.

Run:

node --version

or:

node -v

You should see something similar to:

v22.x.x

Now check npm:

npm --version

You should see something similar to:

10.x.x

If both commands return a version number, Node.js is installed successfully.

5. If PowerShell Shows "Running Scripts Is Disabled"

You may see an error like:

npm.ps1 cannot be loaded because running scripts
is disabled on this system.

This is a PowerShell execution-policy issue.

You can use:

npm.cmd --version

Or fix it for your Windows user:

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

Then choose:

Y

Close and reopen PowerShell.

Test again:

npm --version
6. Install VS Code

VS Code is a popular editor for Node.js development.

Download it from:

https://code.visualstudio.com/

Install it using the default settings.

Recommended extensions for beginners:

ESLint
Prettier - Code formatter
JavaScript and TypeScript Nightly (optional)

You don't need many extensions when starting.

7. Create Your First Node.js Folder

Open PowerShell.

Go to your Desktop:

cd Desktop

Create a learning folder:

mkdir node-learning

Enter the folder:

cd node-learning

Open it in VS Code:

code .

If code . does not work, open VS Code manually and select:

File → Open Folder → node-learning
8. Create Your First JavaScript File

Create: hello.js

Add: console.log("Hello Node.js!");

Save the file.

Run it from the terminal:
node hello.js

Output:
Hello Node.js!

Congratulations! 🎉
You have successfully executed your first Node.js program.
