# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Answer: Within a Github action that runs whenever code is pushed.

Reasoning: This allows me to see the exact set of changes (conveniently grouped in a commit) that resulted in failing/passing tests. It allows for compartmentalization that is harder to do when only running tests locally. 

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

Answer: No because this only tests the code and would be a unit test rather than an e2e test, which is concerned with UI.