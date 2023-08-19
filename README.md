# quiz.bestgourdinshow.com
This is repository that hosts code for the "Find Your Inner Gourd Quiz"

The primary sections in this repository are as follows:
* `index.html`: the main skeleton HTML code - for changing the main titles
* `script.js`: the JavaScript that manages the dynamic (or changing) parts of the quiz and injects new HTML into `index.html` ; use this to change the questions, scoring, and the pictures
* `style.css` : primary "custom" styles - you can change the colors and fonts (see tidbits)
* `pics` directory: upload images there and call by relative URL in `script.js`
    ```
    // Example:
    imageURL = "pics/looser.jpg";
    ```

## Tidbits
To change the font, you will import in `index.html` and then use in `style.css`
