Steps to reproduce:

- Run `npm i`
- Run `npm start`
- Run "intercept.js" test
- When both tests done, check an "uploads" folder.

You'll see one 36kb file which is normal image (created after first test run), and second 66kb file which created after intercepting. Second file actually is not an image because of "broken bytes" and cannot be opened in any image viewer. Also, any programmatially manupulations with its buffer will fail because of "incorrect image type".