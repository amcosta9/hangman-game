# hangman-game

psuedo code:
1. page loads
2. computer chooses random word from word bank (array of words)
3. user presses keys on keyboard to "guess" letters in word, and their guess is added to guesses so far on screen
4. check if user has already pressed this key. if yes, alert already guessed that one. start over.
5. compare users guesses to the letters in current word
6. if guess is in the word, that letter is revealed on the page.
7. if guess is not in the word, alert that it is not in the word.
8. user only has # of tries. change tries left, reduces by 1.

update dom?

9. check if user has tries left.  if yes, wait for key up.
10. if no, losses increases by 1. game reload.

11. check if guess completes the word. if yes, wins increases by 1. game reload.

11. game reload = new random word chosen, # tries left resets, user guesses resets.
